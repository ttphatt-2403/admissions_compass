# Báo Cáo: Tính Năng Thanh Toán Thần Số Học

**Ngày triển khai:** 2026-06-02  
**Trạng thái:** Demo hoàn chỉnh — sẵn sàng tích hợp payment thật

---

## Tổng Quan Luồng

```
Người dùng xem Thần Số Học
        ↓
Nhập tên + ngày sinh → Tính 6 chỉ số
        ↓
HERO PAGE (số đường đời lớn) → FREE ✅
        ↓
Nhấn "Xem phân tích chi tiết"
        ↓ NumerologyGate
┌─────────────────────────────┐
│ Chưa đăng nhập?             │
│   → AuthModal (login/reg)   │
│                             │
│ Đã đăng nhập, 0 credits?   │
│   → PaywallModal (mua gói)  │
│     → Demo payment          │
│     → +credits Firestore    │
│                             │
│ Có credits ≥ 1?             │
│   → Trừ 1 credit            │
│   → Hiện DETAIL PAGE ✅     │
└─────────────────────────────┘
```

---

## Các File Đã Tạo / Sửa

| File | Mô tả |
|------|-------|
| `src/context/AuthContext.tsx` | **Sửa** — thêm `signUpWithEmail`, `signInWithEmail`, `isAdmin`, auto-tạo Firestore user doc |
| `src/lib/numerologyCredits.ts` | **Mới** — CRUD credits, packages, transactions |
| `src/components/NumerologyGate.tsx` | **Mới** — Auth modal + Paywall modal + inline trigger button |
| `src/components/NumerologyTest.tsx` | **Sửa** — thay nút CTA bằng `<NumerologyGate inline>` |
| `src/pages/NumerologyAdmin.tsx` | **Mới** — Dashboard admin: users, credits, transactions |
| `src/App.tsx` | **Sửa** — thêm route `numerology-admin` |

---

## Firestore Schema

```
users/{uid}
  ├── uid: string
  ├── email: string
  ├── displayName: string
  ├── credits: number          ← số lượt xem còn lại
  ├── totalPurchased: number   ← tổng đã mua (không giảm)
  └── createdAt: Timestamp

users/{uid}/transactions/{txId}
  ├── credits: number          ← số credits được thêm
  ├── method: 'demo' | 'vnpay' | 'momo' | 'stripe'
  ├── priceVnd: number         ← giá tiền (0 nếu demo)
  └── createdAt: Timestamp
```

---

## Gói Credits (CREDIT_PACKAGES)

| Gói | Credits | Giá | Ghi chú |
|-----|---------|-----|---------|
| Khởi đầu | 3 lượt | 29,000₫ | Mặc định |
| Phổ biến | 10 lượt | 79,000₫ | Badge "Hot" |
| Cao cấp | 30 lượt | 199,000₫ | Best value |

---

## Admin Dashboard

- **URL (tab):** `?tab=numerology-admin`
- **Quyền truy cập:** Chỉ email trong `ADMIN_EMAILS` (`src/context/AuthContext.tsx`)
- **Mặc định admin:** `hoanglong27404@gmail.com`
- **Thêm admin:** Sửa array `ADMIN_EMAILS` trong `AuthContext.tsx`

### Tính năng admin:
- Xem tổng users, credits còn lại, credits đã mua
- Danh sách users với credits badge
- Expand từng user → xem lịch sử transactions
- Nút **+3 credits** tặng thủ công cho user bất kỳ
- Nút Refresh để cập nhật dữ liệu

---

## Cách Demo Thanh Toán

1. Vào tính năng Thần Số Học, nhập thông tin
2. Xem Hero page (miễn phí)
3. Nhấn **"Đăng nhập để xem chi tiết"**
4. Đăng ký / đăng nhập (email hoặc Google)
5. Chọn gói → nhấn **"Thanh Toán Demo"**
6. Chờ ~2 giây (giả lập network) → credits được cộng tự động
7. Detail page mở ra, credits giảm 1

---

## Tích Hợp Payment Thật (Roadmap)

### VNPay (Việt Nam)
```
1. Tạo tài khoản merchant VNPay Sandbox
2. Thay hàm handleDemoPay() trong NumerologyGate.tsx:
   - Gọi backend tạo VNPay payment URL
   - Redirect user sang trang thanh toán VNPay
   - VNPay callback (IPN) → Firebase Function
   - Firebase Function xác thực → gọi addCredits()
```

### MoMo
```
Tương tự VNPay — MoMo cung cấp Sandbox API
Endpoint: POST /v2/gateway/api/create
```

### Stripe (Quốc tế)
```
1. npm install @stripe/stripe-js
2. Tạo Stripe Checkout Session từ Firebase Function
3. Stripe webhook → addCredits() sau payment_intent.succeeded
```

### Firebase Function template (webhook handler)
```typescript
// functions/src/index.ts
export const vnpayWebhook = functions.https.onRequest(async (req, res) => {
  // 1. Xác thực chữ ký VNPay
  // 2. Lấy uid từ metadata
  // 3. await addCredits(uid, 3, 'vnpay', 29000)
  res.json({ RspCode: '00', Message: 'Confirm success' });
});
```

---

## Bảo Mật

| Rủi ro | Giải pháp |
|--------|-----------|
| Client tự cộng credits | Credits chỉ được cộng qua `addCredits()` — khi dùng payment thật, hàm này chỉ chạy từ Firebase Function sau khi xác thực webhook |
| Admin giả mạo | `isAdmin` check dựa trên email đã verify qua Firebase Auth |
| Replay attack (VNPay) | Lưu `vnp_TxnRef` vào Firestore để prevent double-spend |

---

## Checklist Trước Khi Go Live

- [ ] Bật **Email/Password** auth trong Firebase Console → Authentication → Sign-in method
- [ ] Thêm Firestore rules bảo vệ collection `users`
- [ ] Xóa `console.log("Firebase configuration:", firebaseConfig)` trong `firebase.ts`
- [ ] Thay `ADMIN_EMAILS` thành email thật của team
- [ ] Tích hợp payment gateway thật (VNPay / MoMo)
- [ ] Deploy Firebase Functions cho webhook
- [ ] Test toàn bộ luồng trên Staging trước khi production
