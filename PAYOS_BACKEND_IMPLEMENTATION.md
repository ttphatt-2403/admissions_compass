# Tài liệu backend: tích hợp thanh toán PayOS

Ngày cập nhật: 2026-06-14  
Phạm vi: backend/API routes, Firestore schema/rules, webhook PayOS, luồng cộng credits thần số học.

## Mục tiêu

Tích hợp PayOS theo hướng backend là nguồn sự thật duy nhất cho tiền và credits:

- Client chỉ yêu cầu tạo thanh toán và hiển thị QR/checkout URL.
- Backend tự xác thực người dùng, tự tính gói tiền/credits, tự ghi order.
- Webhook PayOS xác minh chữ ký, đối chiếu order, cộng credits đúng một lần.
- Firestore rules không cho client tự sửa `credits`, `totalPurchased`, `transactions`, hoặc trạng thái payment.

## Nguồn tham khảo PayOS

- API tạo link thanh toán: https://payos.vn/docs/api/
- Webhook thanh toán: https://payos.vn/docs/du-lieu-tra-ve/webhook/
- Kiểm tra signature: https://payos.vn/docs/tich-hop-webhook/kiem-tra-du-lieu-voi-signature/

Các điểm cần bám theo docs:

- Endpoint tạo link: `POST https://api-merchant.payos.vn/v2/payment-requests`
- Header bắt buộc: `x-client-id`, `x-api-key`
- Payload tạo link có `orderCode`, `amount`, `description`, `cancelUrl`, `returnUrl`, `signature`
- Signature tạo link dùng HMAC SHA-256 với checksum key, data sort alphabet:

```text
amount=$amount&cancelUrl=$cancelUrl&description=$description&orderCode=$orderCode&returnUrl=$returnUrl
```

- Webhook gửi body dạng:

```json
{
  "code": "00",
  "desc": "success",
  "success": true,
  "data": {
    "orderCode": 123,
    "amount": 3000,
    "description": "VQRIO123",
    "reference": "TF230204212323",
    "transactionDateTime": "2023-02-04 18:25:00",
    "currency": "VND",
    "paymentLinkId": "124c33293c43417ab7879e14c8d9eb18",
    "code": "00",
    "desc": "Thành công"
  },
  "signature": "..."
}
```

- Webhook nên trả HTTP `2xx` khi đã nhận request. Nếu lỗi tạm thời cần PayOS retry, cân nhắc trả non-2xx có kiểm soát.

## Kiến trúc đề xuất

```text
Client
  |
  | POST /api/payments/payos/create
  | Authorization: Bearer Firebase ID token
  | body: { packageId }
  v
Backend
  - verify Firebase ID token
  - lấy uid từ token, không tin uid từ body
  - lấy package từ allowlist backend
  - tạo orderCode unique
  - ghi payment_orders/{orderCode} status=PENDING
  - gọi PayOS tạo payment request
  - cập nhật paymentLinkId, checkoutUrl, qrCode
  v
Client hiển thị QR/checkoutUrl

PayOS
  |
  | POST /api/payments/payos/webhook
  v
Backend webhook
  - verify signature
  - check code/success/data.code
  - đọc payment_orders/{orderCode}
  - đối chiếu amount/currency/status
  - transaction: nếu chưa credited thì cộng credits và mark PAID
  v
Client listen order status -> unlock UI
```

## Endpoint backend cần có

### 1. `POST /api/payments/payos/create`

Tạo link thanh toán PayOS.

Request:

```http
POST /api/payments/payos/create
Authorization: Bearer <firebase_id_token>
Content-Type: application/json
```

```json
{
  "packageId": "starter"
}
```

Backend không nhận `uid`, `amount`, `credits` từ client.

Response thành công:

```json
{
  "orderCode": 2606140001,
  "amount": 15000,
  "credits": 3,
  "status": "PENDING",
  "checkoutUrl": "https://pay.payos.vn/web/...",
  "qrCode": "000201..."
}
```

Xử lý bắt buộc:

- Verify Firebase ID token bằng `firebase-admin`.
- `uid = decodedToken.uid`.
- `email = decodedToken.email`.
- Validate `packageId` bằng allowlist trên server.
- Sinh `orderCode` dạng integer, unique, không dùng `Date.now().slice(-10)` đơn thuần vì có thể collision. Xem mục **generateOrderCode** bên dưới.
- Ghi order server-side trước hoặc trong cùng flow tạo PayOS.
- Nếu PayOS trả lỗi, mark order `FAILED_CREATE` hoặc xóa order tùy policy.

### 2. `POST /api/payments/payos/webhook`

Nhận webhook thanh toán PayOS.

Request body do PayOS gửi:

```json
{
  "code": "00",
  "desc": "success",
  "success": true,
  "data": {
    "orderCode": 2606140001,
    "amount": 15000,
    "currency": "VND",
    "reference": "TF...",
    "paymentLinkId": "...",
    "code": "00",
    "desc": "Thành công"
  },
  "signature": "..."
}
```

Xử lý bắt buộc:

- Verify signature từ `data` và `signature`.
- Chỉ xử lý paid khi:
  - top-level `code === "00"`
  - top-level `success === true`
  - `data.code === "00"`
  - order tồn tại
  - `data.amount === order.amount`
  - `order.status` chưa phải `PAID`
  - `order.credited !== true`
- Dùng Firestore transaction để:
  - mark order `PAID`
  - set `paidAt`, `payosReference`, `paymentLinkId`
  - increment `users/{uid}.credits`
  - increment `users/{uid}.totalPurchased`
  - tạo transaction log idempotent
- Không để client cộng credits.

Response:

```json
{ "message": "success" }
```

Nên trả `200` cho các case đã xử lý xong hoặc request không hợp lệ không thể retry như bad signature. Với lỗi hạ tầng tạm thời, có thể trả `500` để PayOS retry nếu PayOS hỗ trợ retry trong cấu hình hiện tại.

### 3. `POST /api/payments/payos/confirm-webhook`

Gọi **một lần duy nhất** khi setup hoặc đổi domain để PayOS xác nhận webhook URL hợp lệ. Không cần auth từ client vì đây là admin operation.

```js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const webhookUrl = `${process.env.APP_URL}/api/payments/payos/webhook`;

  const r = await fetch('https://api-merchant.payos.vn/confirm-webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-client-id': process.env.PAYOS_CLIENT_ID,
      'x-api-key':   process.env.PAYOS_API_KEY,
    },
    body: JSON.stringify({ webhookUrl }),
  });

  const json = await r.json();
  if (json.code !== '00') {
    return res.status(502).json({ error: json.desc, detail: json });
  }
  return res.status(200).json({ ok: true, webhookUrl, detail: json });
}
```

Gọi một lần sau deploy:

```bash
curl -X POST https://your-app.com/api/payments/payos/confirm-webhook
```

### 4. `GET /api/payments/payos/order/:orderCode`

Tùy chọn, dùng cho client manual refresh nếu realtime Firestore không đủ.

Yêu cầu:

- Verify Firebase ID token.
- Chỉ trả order nếu `order.uid === decodedToken.uid` hoặc user là admin.
- Không trả secret, không trả raw webhook full nếu không cần.

Response:

```json
{
  "orderCode": 2606140001,
  "status": "PAID",
  "amount": 15000,
  "credits": 3,
  "credited": true
}
```

## Firestore schema

### `payment_orders/{orderCode}`

```ts
{
  orderCode: number;
  uid: string;
  email: string | null;
  packageId: "starter" | "popular" | "premium";
  amount: number;
  credits: number;
  currency: "VND";
  description: string;
  status: "PENDING" | "PAID" | "CANCELLED" | "EXPIRED" | "FAILED_CREATE";
  credited: boolean;
  checkoutUrl?: string;
  qrCode?: string;
  paymentLinkId?: string;
  payosReference?: string;
  payosTransactionDateTime?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  paidAt?: Timestamp;
  expiredAt?: Timestamp;
  rawWebhookLast?: object; // optional, sanitize if needed
}
```

### `users/{uid}`

```ts
{
  uid: string;
  email: string | null;
  displayName: string;
  credits: number;
  totalPurchased: number;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
```

### `users/{uid}/transactions/{transactionId}`

Nên dùng transaction id cố định theo order để idempotent:

```text
payos_${orderCode}
```

```ts
{
  type: "credit_purchase";
  method: "payos";
  orderCode: number;
  paymentLinkId?: string;
  payosReference?: string;
  credits: number;
  priceVnd: number;
  createdAt: Timestamp;
}
```

## Package config backend

Đặt gói ở backend, không import từ client.

```js
const CREDIT_PACKAGES = {
  starter: {
    id: "starter",
    name: "Bản đồ linh hồn",
    credits: 3,
    priceVnd: 15000,
  },
};
```

Nếu cần nhiều gói:

```js
const CREDIT_PACKAGES = {
  starter: { credits: 3, priceVnd: 15000 },
  popular: { credits: 10, priceVnd: 49000 },
  premium: { credits: 30, priceVnd: 129000 },
};
```

## Biến môi trường

Trên Vercel:

```text
APP_URL=https://labantuyensinh.vercel.app
PAYOS_CLIENT_ID=...
PAYOS_API_KEY=...
PAYOS_CHECKSUM_KEY=...
FIREBASE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
```

Không dùng `VITE_` cho secret. Các biến `VITE_` sẽ được expose cho frontend khi build.

Firebase client config vẫn có thể là `VITE_FIREBASE_*`, vì đó không phải secret tuyệt đối. Nhưng service account, PayOS API key, checksum key phải chỉ nằm server-side.

## generateOrderCode

PayOS yêu cầu `orderCode` là **số nguyên dương**, không trùng lặp giữa các order.

Dùng timestamp + random suffix để tránh collision mà không cần query database:

```js
function generateOrderCode() {
  // timestamp 9 chữ số (ms mod 1 tỷ) + random 4 chữ số = 13 chữ số
  // Vẫn an toàn với Number.MAX_SAFE_INTEGER (16 chữ số)
  const ts   = Date.now() % 1_000_000_000;      // 0 – 999,999,999
  const rand = Math.floor(Math.random() * 9000) + 1000; // 1000 – 9999
  return parseInt(`${ts}${rand}`);
}
```

Nếu dự án dùng **database riêng** có hỗ trợ sequence/auto-increment, ưu tiên dùng sequence để đảm bảo uniqueness tuyệt đối:

```sql
-- PostgreSQL
CREATE SEQUENCE payment_order_code_seq START 1000000;
SELECT nextval('payment_order_code_seq'); -- dùng giá trị này làm orderCode
```

```js
// MongoDB — dùng counter collection
async function nextOrderCode(db) {
  const counter = await db.collection('counters').findOneAndUpdate(
    { _id: 'payment_order_code' },
    { $inc: { seq: 1 } },
    { upsert: true, returnDocument: 'after' }
  );
  return counter.seq;
}
```

```js
// Firestore — dùng transaction trên counter doc
async function nextOrderCode(db) {
  const counterRef = db.collection('counters').doc('payment_order_code');
  return db.runTransaction(async (tx) => {
    const snap = await tx.get(counterRef);
    const next = (snap.exists ? snap.data().seq : 1000000) + 1;
    tx.set(counterRef, { seq: next }, { merge: true });
    return next;
  });
}
```

## Signature helpers

### Tạo signature cho payment request

```js
import crypto from "node:crypto";

function signPaymentRequest({ amount, cancelUrl, description, orderCode, returnUrl }) {
  const raw = [
    `amount=${amount}`,
    `cancelUrl=${cancelUrl}`,
    `description=${description}`,
    `orderCode=${orderCode}`,
    `returnUrl=${returnUrl}`,
  ].join("&");

  return crypto
    .createHmac("sha256", process.env.PAYOS_CHECKSUM_KEY)
    .update(raw)
    .digest("hex");
}
```

### Verify signature webhook

```js
import crypto from "node:crypto";

function sortObjDataByKey(object) {
  return Object.keys(object)
    .sort()
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {});
}

function convertObjToQueryStr(object) {
  return Object.keys(object)
    .filter((key) => object[key] !== undefined)
    .map((key) => {
      let value = object[key];
      if (value && Array.isArray(value)) {
        value = JSON.stringify(value.map((item) => sortObjDataByKey(item)));
      }
      if ([null, undefined, "undefined", "null"].includes(value)) {
        value = "";
      }
      return `${key}=${value}`;
    })
    .join("&");
}

function verifyPayosWebhookSignature(data, currentSignature) {
  if (!data || !currentSignature || !process.env.PAYOS_CHECKSUM_KEY) return false;

  const sortedData = sortObjDataByKey(data);
  const queryString = convertObjToQueryStr(sortedData);
  const expected = crypto
    .createHmac("sha256", process.env.PAYOS_CHECKSUM_KEY)
    .update(queryString)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected, "hex"),
      Buffer.from(currentSignature, "hex")
    );
  } catch {
    return false;
  }
}
```

## Firebase Admin setup cho Vercel API

Tạo helper dùng chung, ví dụ `api/_lib/firebaseAdmin.js`:

```js
import admin from "firebase-admin";

function getServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON");
  return JSON.parse(raw);
}

export function getAdminApp() {
  if (admin.apps.length > 0) return admin.app();

  return admin.initializeApp({
    credential: admin.credential.cert(getServiceAccount()),
  });
}

export function getAdminAuth() {
  return getAdminApp().auth();
}

export function getAdminDb() {
  return getAdminApp().firestore();
}
```

Helper auth:

```js
export async function requireFirebaseUser(req) {
  const authHeader = req.headers.authorization || "";
  const match = authHeader.match(/^Bearer (.+)$/);
  if (!match) {
    const err = new Error("Missing bearer token");
    err.statusCode = 401;
    throw err;
  }

  return getAdminAuth().verifyIdToken(match[1]);
}
```

## Pseudocode: create payment endpoint

```js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const user = await requireFirebaseUser(req);
  const { packageId } = req.body || {};
  const pkg = CREDIT_PACKAGES[packageId];
  if (!pkg) return res.status(400).json({ error: "Invalid packageId" });

  const db = getAdminDb();
  const orderCode = await nextOrderCode(db);
  const amount = pkg.priceVnd;
  const credits = pkg.credits;
  const baseUrl = process.env.APP_URL;
  const returnUrl = `${baseUrl}/?tab=numerology&orderCode=${orderCode}`;
  const cancelUrl = `${baseUrl}/?tab=numerology&orderCode=${orderCode}&cancelled=1`;
  const description = `TSHL ${orderCode}`.slice(0, 25);

  // PayOS link mặc định hết hạn sau 30 phút
  const expiredAt = new Date(Date.now() + 30 * 60 * 1000);

  await db.collection("payment_orders").doc(String(orderCode)).set({
    orderCode,
    uid: user.uid,
    email: user.email || null,
    packageId,
    amount,
    credits,
    currency: "VND",
    description,
    status: "PENDING",
    credited: false,
    expiredAt,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  const signature = signPaymentRequest({ amount, cancelUrl, description, orderCode, returnUrl });

  const payosRes = await fetch("https://api-merchant.payos.vn/v2/payment-requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client-id": process.env.PAYOS_CLIENT_ID,
      "x-api-key": process.env.PAYOS_API_KEY,
    },
    body: JSON.stringify({ orderCode, amount, description, cancelUrl, returnUrl, signature }),
  });

  const result = await payosRes.json();
  if (result.code !== "00") {
    await db.collection("payment_orders").doc(String(orderCode)).set({
      status: "FAILED_CREATE",
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      payosCreateError: result,
    }, { merge: true });

    return res.status(502).json({ error: result.desc || "PayOS create failed" });
  }

  await db.collection("payment_orders").doc(String(orderCode)).set({
    checkoutUrl: result.data.checkoutUrl,
    qrCode: result.data.qrCode,
    paymentLinkId: result.data.paymentLinkId,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  return res.status(200).json({
    orderCode,
    amount,
    credits,
    status: "PENDING",
    checkoutUrl: result.data.checkoutUrl,
    qrCode: result.data.qrCode,
  });
}
```

## Pseudocode: webhook endpoint

```js
// Map data.code PayOS -> order status cho event không thành công
const PAYOS_CANCEL_CODES = new Set(["01", "02"]); // 01=cancelled, 02=expired (tuỳ PayOS version)

export default async function handler(req, res) {
  if (req.method === "GET") return res.status(200).json({ ok: true });
  if (req.method !== "POST") return res.status(405).end();

  const { code, success, data, signature } = req.body || {};

  // 1. Verify signature trước mọi thứ khác
  if (!verifyPayosWebhookSignature(data, signature)) {
    console.warn("[webhook] invalid signature, orderCode:", data?.orderCode);
    return res.status(200).json({ message: "invalid signature" });
  }

  // 2. Xử lý event không thành công (cancelled / expired)
  if (code !== "00" || success !== true || data?.code !== "00") {
    if (data?.orderCode) {
      const db = getAdminDb();
      const orderRef = db.collection("payment_orders").doc(String(data.orderCode));
      const newStatus = PAYOS_CANCEL_CODES.has(data?.code) ? "CANCELLED" : "EXPIRED";
      try {
        await orderRef.set({
          status: newStatus,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          rawWebhookLast: data,
        }, { merge: true });
      } catch (e) {
        console.error("[webhook] failed to update cancelled/expired order:", e.message);
      }
    }
    return res.status(200).json({ message: "not successful payment event" });
  }

  // 3. Xử lý thanh toán thành công
  const orderCode = String(data.orderCode);
  const db = getAdminDb();
  const orderRef = db.collection("payment_orders").doc(orderCode);

  try {
    await db.runTransaction(async (tx) => {
      const orderSnap = await tx.get(orderRef);
      if (!orderSnap.exists) throw new Error(`ORDER_NOT_FOUND:${orderCode}`);

      const order = orderSnap.data();

      // Idempotency guard — đã xử lý rồi thì bỏ qua
      if (order.credited === true || order.status === "PAID") return;

      // Đối chiếu amount
      if (Number(data.amount) !== Number(order.amount)) {
        throw new Error(`AMOUNT_MISMATCH:order=${order.amount},payos=${data.amount}`);
      }

      const userRef = db.collection("users").doc(order.uid);
      const txRef  = userRef.collection("transactions").doc(`payos_${orderCode}`);

      tx.set(userRef, {
        credits:        admin.firestore.FieldValue.increment(order.credits),
        totalPurchased: admin.firestore.FieldValue.increment(order.credits),
        updatedAt:      admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });

      tx.set(txRef, {
        type:           "credit_purchase",
        method:         "payos",
        orderCode:      order.orderCode,
        paymentLinkId:  data.paymentLinkId || order.paymentLinkId || null,
        payosReference: data.reference || null,
        credits:        order.credits,
        priceVnd:       order.amount,
        createdAt:      admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: false }); // merge: false đảm bảo không ghi đè nếu đã tồn tại

      tx.set(orderRef, {
        status:                    "PAID",
        credited:                  true,
        paidAt:                    admin.firestore.FieldValue.serverTimestamp(),
        updatedAt:                 admin.firestore.FieldValue.serverTimestamp(),
        payosReference:            data.reference || null,
        payosTransactionDateTime:  data.transactionDateTime || null,
        paymentLinkId:             data.paymentLinkId || order.paymentLinkId || null,
        rawWebhookLast:            data,
      }, { merge: true });
    });

    console.log(`[webhook] credited orderCode=${orderCode}`);
    return res.status(200).json({ message: "success" });

  } catch (err) {
    const msg = err.message || "";

    // Lỗi không thể retry — trả 200 để PayOS không gửi lại vô hạn
    if (msg.startsWith("ORDER_NOT_FOUND") || msg.startsWith("AMOUNT_MISMATCH")) {
      console.error(`[webhook] non-retryable: ${msg}`);
      // Ghi trạng thái lỗi vào order nếu có thể
      if (msg.startsWith("AMOUNT_MISMATCH")) {
        await orderRef.set({
          status:    "WEBHOOK_AMOUNT_MISMATCH",
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        }, { merge: true }).catch(() => {});
      }
      return res.status(200).json({ message: "error", detail: msg });
    }

    // Lỗi hạ tầng tạm thời — trả 500 để PayOS retry
    console.error("[webhook] retryable error:", err);
    return res.status(500).json({ message: "internal error" });
  }
}
```

## Firestore rules đề xuất

Client được đọc order của chính mình, nhưng không được tự tạo/update trạng thái thanh toán. Backend dùng Admin SDK nên bỏ qua rules.

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function signedIn() {
      return request.auth != null;
    }

    function isOwner(uid) {
      return signedIn() && request.auth.uid == uid;
    }

    function isAdmin() {
      return signedIn() && request.auth.token.email in [
        'admin@dashboard.com',
        'adminlabantuyensinh12345@gmail.com'
      ];
    }

    match /payment_orders/{orderId} {
      allow read: if signedIn() && resource.data.uid == request.auth.uid || isAdmin();
      allow create, update, delete: if false;
    }

    match /users/{uid} {
      allow read: if isOwner(uid) || isAdmin();

      // User chỉ được tạo profile ban đầu với credits = 0.
      allow create: if isOwner(uid)
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.credits == 0
        && request.resource.data.totalPurchased == 0;

      // Không cho client sửa credits/totalPurchased.
      allow update: if isOwner(uid)
        && request.resource.data.diff(resource.data).affectedKeys()
          .hasOnly(['displayName']);

      allow delete: if false;

      match /transactions/{txId} {
        allow read: if isOwner(uid) || isAdmin();
        allow create, update, delete: if false;
      }
    }
  }
}
```

Nếu client cần tạo user doc với email/displayName, thêm validate field cụ thể. Tuyệt đối không cho client ghi `credits` khác `0`.

## Thay đổi frontend cần phối hợp

Trong `NumerologyGate.tsx`:

- Gọi endpoint mới `/api/payments/payos/create`.
- Lấy Firebase ID token:

```ts
const token = await user.getIdToken();
const res = await fetch('/api/payments/payos/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ packageId: 'starter' }),
});
```

- Xóa đoạn client tự `setDoc(payment_orders)`.
- Xóa đoạn client gọi `addCredits()` sau khi thấy `PAID`.
- Client chỉ listen `payment_orders/{orderCode}`:
  - Nếu `status === "PAID"` và `credited === true` thì hiển thị thành công.
  - Sau đó gọi `onUnlock()`.
- Cân nhắc lần xem ngay sau thanh toán:
  - Option A: mua 3 credits rồi xem lần đầu vẫn trừ 1 credit.
  - Option B: mua 3 credits và unlock lần đầu miễn phí. Nếu chọn B, ghi rõ trong product và không dùng credits làm số lượt đã mua thuần túy.

## Adapter cho database riêng (không phải Firestore)

Tài liệu này dùng Firestore làm ví dụ, nhưng nếu dự án dùng database khác, cần thay thế các pattern sau:

### Mapping Firestore → SQL (PostgreSQL / MySQL)

| Firestore | SQL tương đương |
|---|---|
| `db.runTransaction(async tx => { ... })` | `BEGIN; ... COMMIT;` hoặc `sequelize.transaction()` |
| `FieldValue.serverTimestamp()` | `NOW()` hoặc `new Date()` |
| `FieldValue.increment(n)` | `UPDATE SET credits = credits + n WHERE uid = $1` |
| `doc.set({ ... }, { merge: true })` | `INSERT ... ON CONFLICT DO UPDATE SET ...` (upsert) |
| `doc.set({ ... }, { merge: false })` | `INSERT INTO ... (nếu đã tồn tại thì bỏ qua)` |

**Idempotency trong SQL** — thay vì dùng `credited` flag + Firestore transaction, dùng unique constraint:

```sql
-- transactions table có unique constraint trên order_code
CREATE TABLE transactions (
  id          SERIAL PRIMARY KEY,
  order_code  BIGINT UNIQUE NOT NULL,  -- đảm bảo chỉ credit 1 lần
  uid         TEXT NOT NULL,
  credits     INT NOT NULL,
  price_vnd   INT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Webhook handler dùng INSERT ... ON CONFLICT DO NOTHING
INSERT INTO transactions (order_code, uid, credits, price_vnd)
VALUES ($1, $2, $3, $4)
ON CONFLICT (order_code) DO NOTHING;

-- Nếu affected rows = 0 -> đã credited rồi, bỏ qua
```

### Mapping Firestore → MongoDB

```js
// Thay db.runTransaction
const session = await mongoose.startSession();
session.startTransaction();
try {
  // increment credits
  await User.findOneAndUpdate(
    { uid: order.uid },
    { $inc: { credits: order.credits, totalPurchased: order.credits } },
    { session }
  );

  // idempotent insert transaction log
  await Transaction.create([{
    orderCode: order.orderCode,
    uid: order.uid,
    credits: order.credits,
    priceVnd: order.amount,
  }], { session }); // unique index trên orderCode đảm bảo không trùng

  // update order status
  await PaymentOrder.findOneAndUpdate(
    { orderCode: order.orderCode, credited: false }, // guard
    { status: 'PAID', credited: true, paidAt: new Date() },
    { session }
  );

  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
  throw err;
} finally {
  session.endSession();
}
```

### Lưu ý quan trọng với database riêng

- Luôn có **unique index / constraint** trên `transactions.order_code` để đảm bảo idempotency kể cả khi webhook đến 2 lần đồng thời.
- Luôn dùng **database transaction** khi update cả `orders`, `users.credits`, và `transactions` cùng lúc.
- Không dùng `SELECT` rồi `UPDATE` tách biệt — dùng `SELECT FOR UPDATE` (SQL) hoặc optimistic lock để tránh race condition.

## Migration khỏi code hiện tại

Hiện repo đang có nhiều endpoint trùng nhau:

- `api/pc.js`
- `api/payos-create.js`
- `api/payos-pay.js`
- `api/ph.js`
- `api/payos-webhook.js`
- `api/payos-hook.js`

Khi implement backend mới:

1. Chọn một route create chính thức, ví dụ `api/payments/payos/create.js`.
2. Chọn một route webhook chính thức, ví dụ `api/payments/payos/webhook.js`.
3. Redirect hoặc xóa các route cũ sau khi frontend đã đổi.
4. Không dùng Firestore REST với anonymous token cho webhook. Dùng Firebase Admin SDK.
5. Không để rules `allow write: if true` cho bất kỳ collection payment/credit nào.

## Checklist test

### Local/staging

- Tạo payment khi chưa login → `401`.
- Tạo payment với `packageId` sai → `400`.
- Tạo payment hợp lệ → order `PENDING`, amount/credits đúng package, có `expiredAt`.
- PayOS trả lỗi → order `FAILED_CREATE`, không bị xem là payable.
- Webhook signature sai → trả `200`, không cộng credits, có log warn.
- Webhook `code !== "00"` hoặc `data.code !== "00"` → order được update `CANCELLED`/`EXPIRED`, không cộng credits.
- Webhook đúng amount → cộng credits đúng một lần, order `PAID`, `credited: true`.
- Gửi lại cùng webhook 2–3 lần liên tiếp → credits chỉ tăng một lần (idempotency).
- Webhook amount khác order → order `WEBHOOK_AMOUNT_MISMATCH`, trả `200`, có log error.
- Webhook lỗi hạ tầng (DB down) → trả `500` để PayOS retry.
- Client không thể tự update `payment_orders.status`.
- Client không thể tự update `users/{uid}.credits`.
- Confirm webhook endpoint hoạt động → PayOS gửi test event thành công.

### Production readiness

- Đã set `APP_URL` production đúng domain.
- Đã set webhook URL trong PayOS dashboard hoặc qua API confirm webhook.
- Đã kiểm tra PayOS channel production active.
- Đã bật logging cho webhook nhưng không log secrets.
- Đã có alert khi webhook lỗi liên tiếp.
- Đã deploy Firestore rules trước khi mở thanh toán thật.

## Logging và observability

Log nên có:

- `orderCode`
- `uid`
- `amount`
- `credits`
- `paymentLinkId`
- `payosReference`
- webhook processing result

Không log:

- `PAYOS_API_KEY`
- `PAYOS_CHECKSUM_KEY`
- service account JSON
- raw Firebase ID token

Các trạng thái order nên đủ để debug:

```text
PENDING
PAID
CANCELLED
EXPIRED
FAILED_CREATE
WEBHOOK_AMOUNT_MISMATCH
WEBHOOK_SIGNATURE_INVALID
```

Tùy policy, mismatch/bad signature có thể log vào collection riêng `payment_events` thay vì ghi vào order chính.

## Quyết định cần chốt với product

- Người dùng sau khi thanh toán có bị trừ 1 credit ngay khi mở detail không?
- QR hết hạn sau bao lâu? Nên set `expiredAt` khi tạo PayOS link.
- Có cần nhiều gói credits ngoài `starter` không?
- Có cần hoàn tiền/hủy order trong admin không?
- Có cần đối soát thủ công theo `payosReference` không?

## Thứ tự implement khuyến nghị

1. Tạo helper database (Firebase Admin hoặc DB adapter tùy stack).
2. Tạo `generateOrderCode()` + unique constraint/index trên `order_code`.
3. Tạo helper PayOS signature (`signPaymentRequest`, `verifyPayosWebhookSignature`).
4. Implement `POST /api/payments/payos/create` (có `expiredAt`).
5. Implement `POST /api/payments/payos/webhook` (có try/catch, xử lý CANCELLED/EXPIRED).
6. Implement `POST /api/payments/payos/confirm-webhook` và gọi sau deploy staging.
7. Sửa database rules/permissions khóa ghi credits/payment từ client.
8. Sửa frontend: bỏ ghi order, bỏ cộng credits client-side, chỉ listen status.
9. Test toàn bộ checklist local/staging ở trên.
10. Deploy production, set `APP_URL` đúng domain, gọi confirm-webhook lại.
11. Test thanh toán thật số tiền nhỏ nhất (15.000đ).
12. Gỡ route PayOS cũ sau khi xác nhận traffic đã chuyển sang route mới.
