# TÍNH NĂNG: THẦN SỐ HỌC (NUMEROLOGY)

## Tổng quan

Tính năng **Thần Số Học** cho phép học sinh nhập ngày sinh và nhận phân tích tính cách, định hướng nghề nghiệp dựa trên hệ thống Numerology (Thần số học Pythagoras). Tính năng được đặt cùng cấp với trắc nghiệm RIASEC trong ứng dụng Admissions Compass.

---

## Mục đích

Bổ sung thêm một góc nhìn về tự nhận thức bản thân thông qua Thần số học – một hướng tiếp cận "mềm" hơn so với RIASEC, phù hợp với học sinh quan tâm đến tâm linh, bản sắc cá nhân, và nghề nghiệp theo năng lượng sống.

---

## Luồng người dùng

```
[Intro] → Nhập ngày sinh → [Kết quả] → Xem chi tiết từng chỉ số → Nghề nghiệp gợi ý
```

### Giai đoạn 1 – Intro
- Giới thiệu ngắn về Thần số học
- Nút "Bắt đầu khám phá"

### Giai đoạn 2 – Nhập ngày sinh
- Input: Ngày / Tháng / Năm sinh (dạng DD/MM/YYYY)
- Validate: ngày hợp lệ, không trong tương lai
- Nút "Xem kết quả"

### Giai đoạn 3 – Kết quả
- Hiển thị các chỉ số đã tính (xem bên dưới)
- Mỗi chỉ số có card riêng với: tên, giải thích ngắn, ưu/nhược điểm, gợi ý nghề nghiệp
- Nút "Tính lại"

---

## Các chỉ số được tính

### 1. Con số Đường đời (Life Path Number)
**Cách tính:** Cộng tất cả chữ số của ngày/tháng/năm sinh, rút gọn về 1–9 hoặc giữ nguyên nếu là số Master (11, 22, 33).

**Ví dụ:** 15/06/2005 → 1+5+0+6+2+0+0+5 = 19 → 1+9 = 10 → 1+0 = **1**

**Ý nghĩa:** Chỉ số quan trọng nhất, đại diện cho mục đích sống, sứ mệnh và con đường tổng thể.

### 2. Con số Ngày sinh (Birthday Number)
**Cách tính:** Chỉ lấy ngày sinh, rút gọn về 1–9 hoặc Master.

**Ví dụ:** Ngày 15 → 1+5 = **6**

**Ý nghĩa:** Tài năng bẩm sinh, thế mạnh tự nhiên mà người đó mang theo.

### 3. Con số Thái độ (Attitude Number)
**Cách tính:** Cộng ngày + tháng sinh, rút gọn.

**Ví dụ:** 15 + 06 → 1+5+0+6 = **12** → 1+2 = **3**

**Ý nghĩa:** Cách người đó thể hiện mình với thế giới bên ngoài, ấn tượng đầu tiên.

---

## Thuật toán rút gọn số

```typescript
function reduce(n: number): number {
  // Giữ nguyên Master numbers
  if (n === 11 || n === 22 || n === 33) return n;
  // Nếu > 9, tiếp tục cộng chữ số
  if (n > 9) {
    const sum = String(n).split('').reduce((a, d) => a + Number(d), 0);
    return reduce(sum);
  }
  return n;
}

function calcLifePath(day: number, month: number, year: number): number {
  const digits = `${day}${month}${year}`.split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  return reduce(sum);
}
```

---

## Dữ liệu profile theo số (1–9, 11, 22, 33)

Mỗi số có object chứa:

| Field | Kiểu | Mô tả |
|-------|------|--------|
| `number` | `number` | 1–9, 11, 22, 33 |
| `name` | `string` | Tên gọi (VD: "Người Tiên Phong") |
| `keyword` | `string` | Từ khóa tóm tắt |
| `essence` | `string` | Bản chất cốt lõi |
| `strengths` | `string[]` | Danh sách ưu điểm |
| `weaknesses` | `string[]` | Danh sách nhược điểm |
| `workEnv` | `string` | Môi trường làm việc lý tưởng |
| `careers` | `string[]` | Gợi ý nghề nghiệp |
| `lesson` | `string` | Bài học cuộc đời |
| `lightSide` | `string` | Phân tích góc sáng (tâm lý) |
| `darkSide` | `string` | Phân tích góc tối (tâm lý) |
| `color` | `string` | Màu gradient Tailwind cho card UI |

---

## Thiết kế UI

- **Màu chủ đạo:** Gradient tím–vàng–cam (gợi linh thiêng, huyền bí)
- **Card chỉ số:** Mỗi card có icon sao/tinh tú, badge số nổi bật
- **Animation:** Fade-in khi kết quả xuất hiện
- **Responsive:** Mobile-first

### Màu theo số
| Số | Gradient |
|----|----------|
| 1 | `from-amber-500 to-orange-600` |
| 2 | `from-blue-400 to-indigo-600` |
| 3 | `from-yellow-400 to-orange-500` |
| 4 | `from-green-500 to-emerald-700` |
| 5 | `from-cyan-400 to-blue-600` |
| 6 | `from-pink-400 to-rose-600` |
| 7 | `from-violet-500 to-purple-700` |
| 8 | `from-gray-600 to-slate-800` |
| 9 | `from-red-400 to-pink-600` |
| 11 | `from-indigo-400 to-violet-600` |
| 22 | `from-amber-400 to-yellow-600` |
| 33 | `from-rose-400 to-pink-700` |

---

## Cấu trúc file

```
src/
├── components/
│   └── NumerologyTest.tsx        ← Component chính
└── data/
    └── numerology/
        └── profiles.ts           ← Dữ liệu profile 12 số
```

---

## Tích hợp vào App

1. Thêm `'numerology'` vào `TabType` trong `src/types.ts`
2. Import `NumerologyTest` trong `App.tsx`
3. Thêm `{activeTab === 'numerology' && <NumerologyTest />}` vào render
4. Thêm nút điều hướng (tùy vị trí phù hợp trên trang chủ)

---

*Tài liệu tham khảo nội dung: Mô tả tính năng gốc từ team product (session 2026-05-19)*
