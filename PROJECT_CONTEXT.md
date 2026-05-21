# PROJECT CONTEXT – Admissions Compass

> File này tổng hợp toàn bộ ngữ cảnh dự án để tiếp tục làm việc trong các session sau với Claude Code.

---

## 1. Tổng quan dự án

| Mục | Nội dung |
|-----|----------|
| **Tên dự án** | Admissions Compass (College Admission Information Page) |
| **GitHub** | https://github.com/ttphatt-2403/admissions_compass |
| **Tech stack** | React + TypeScript + Vite, Tailwind CSS, Radix UI, Firebase (Auth + Firestore + Analytics), Recharts |
| **AI tích hợp** | Google Genai (`@google/genai`) – dùng cho chatbot |
| **Deploy** | Vercel (có rewrite rule cho SPA ở `vercel.json`) |
| **Version** | 0.1.0 |

### Mục đích
Web app hỗ trợ học sinh tra cứu thông tin tuyển sinh đại học Việt Nam: điểm chuẩn, phương thức xét tuyển, lộ trình học tập, kiểm tra RIASEC, cộng đồng chat, v.v.

---

## 2. Cấu trúc thư mục quan trọng

```
src/
├── components/
│   ├── UniversitySearch.tsx       ← FILE CHÍNH: toàn bộ dữ liệu điểm chuẩn (~3500+ dòng)
│   ├── ScoreCalculator.tsx        ← Tính điểm xét tuyển
│   ├── B2BLanding.tsx             ← Trang B2B cho trường ĐH
│   ├── Chatbot.tsx                ← Chatbot AI (Google Genai)
│   ├── RIASECTest.tsx             ← Kiểm tra hướng nghiệp
│   ├── Community.tsx              ← Chat cộng đồng (Firebase)
│   ├── StudyPath.tsx              ← Lộ trình học tập
│   ├── LandingPages/
│   │   ├── HaNoi/                 ← Landing page từng trường ĐH Hà Nội
│   │   └── HoChiMinh/            ← Landing page từng trường ĐH HCM
│   └── ui/                        ← shadcn/ui components
├── types/
│   ├── admissions.ts              ← Interface AdmissionMethod (mới thêm)
│   └── index.ts                   ← Các type chung (TabType, v.v.)
├── utils/
│   └── scoreFormulas.ts           ← Công thức tính điểm ĐGNL
├── context/
│   └── AuthContext.tsx            ← Firebase Auth context
└── data/
    └── universityLogos.ts         ← Map logo từng trường
```

---

## 3. File trọng tâm: `UniversitySearch.tsx`

### Interfaces

```typescript
interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;           // 'Hà Nội' | 'TP. Hồ Chí Minh' | 'Miền Trung' | 'Miền Nam'
  type: string;               // 'Công lập' | 'Tư thục'
  ranking: number;
  majors: Major[];
  combinations?: string[];
}

interface Major {
  code: string;
  name: string;
  benchmarkScore: number;     // điểm THPT (0–30), backward-compat
  subjects: string;           // tổ hợp, VD: "A00, A01, D01"
  quota: number;
  trend: 'up' | 'down' | 'stable';
  admissionMethods?: AdmissionMethod[];  // đa phương thức (mới)
}
```

### Interface `AdmissionMethod` (trong `src/types/admissions.ts`)

```typescript
interface AdmissionMethod {
  id: string;           // 'thpt-a00' | 'dgnl-vnu-hcm' | 'dgnl-vnu-hn' | 'thpt_weighted'
  type: string;         // 'thpt' | 'dgnl_vnu_hcm' | 'dgnl_vnu_hn' | 'thpt_weighted'
  name: string;
  combinationId?: string;       // 'A00', 'B00', 'D01', v.v.
  subjects?: { name: string; weight: number }[];
  examLabel?: string;           // cho ĐGNL: 'Điểm ĐGNL (0–1200)'
  examMaxScore?: number;        // 1200 (ĐGNL HCM) | 150 (ĐGNL HN)
  benchmarkScore: number;
  quota: number;
  trend: 'up' | 'down' | 'stable';
}
```

### Pattern thêm ĐGNL vào ngành

```typescript
{ code: 'CNTT', name: 'Công nghệ thông tin', benchmarkScore: 24.50, subjects: 'A00, A01', quota: 100, trend: 'up',
  admissionMethods: [
    { id: 'thpt-a00', type: 'thpt', name: 'Xét thi THPT (A00)', combinationId: 'A00',
      subjects: [{name:'Toán',weight:1},{name:'Vật lý',weight:1},{name:'Hóa học',weight:1}],
      benchmarkScore: 24.50, quota: 70, trend: 'up' },
    { id: 'dgnl-vnu-hcm', type: 'dgnl_vnu_hcm', name: 'Xét ĐGNL ĐHQG TP.HCM',
      examLabel: 'Điểm ĐGNL (0–1200)', examMaxScore: 1200,
      benchmarkScore: 785, quota: 30, trend: 'up' },
  ],
},
```

---

## 4. Quy tắc dữ liệu tuyển sinh

### Thang điểm
| Phương thức | Thang |
|------------|-------|
| THPT Quốc gia | 0 – 30 |
| ĐGNL VNU HCM | 0 – 1200 |
| ĐGNL VNU HN | 0 – 150 |

### Công thức ước tính ĐGNL VNU HCM từ điểm THPT
```
ĐGNL ≈ 900 − (28 − điểm_THPT) × 33
```
Làm tròn đến bội số 5 gần nhất. Ví dụ: THPT 24.50 → ĐGNL ≈ 900 − (28−24.5)×33 = 900 − 115.5 ≈ 785.

### Tổ hợp phổ biến
| Mã | Môn |
|----|-----|
| A00 | Toán, Lý, Hóa |
| A01 | Toán, Lý, Anh |
| B00 | Toán, Hóa, Sinh |
| C00 | Văn, Sử, Địa |
| D01 | Toán, Văn, Anh |
| V00 | Toán, Văn, Năng khiếu vẽ |

### Quy tắc áp dụng ĐGNL
- **Chỉ trường Công lập** mới xét ĐGNL VNU HCM
- **Trường có thi năng khiếu** (mỹ thuật, âm nhạc, TDTT) **không** dùng ĐGNL
- Trường **Tư thục** không dùng ĐGNL
- Khối Y/Dược dùng B00: `{name:'Toán'},{name:'Hóa học'},{name:'Sinh học'}`

---

## 5. Danh sách trường đã có trong database

### Hà Nội & Miền Bắc

| ID | Tên | Loại |
|----|-----|------|
| `vnu-hn` | ĐH Quốc gia HN | Công lập |
| `hust` | Bách Khoa HN | Công lập |
| `neu` | Kinh tế Quốc dân | Công lập |
| `hmu` | Y HN | Công lập |
| `hpu2` | Học viện Cảnh sát | Công lập |
| `ptit` | Học viện Bưu chính Viễn thông | Công lập |
| `haui` | Công nghiệp HN | Công lập |
| `hue` | ĐH Huế | Công lập |
| `nuce` | Xây dựng | Công lập |
| `ftu` | Ngoại thương | Công lập |
| `ulis` | Ngoại ngữ (VNU-HN) | Công lập |
| `hlu` | Luật HN | Công lập |
| `vnua` | Nông nghiệp VN | Công lập |
| `buh` | Ngân hàng HN | Công lập |
| `hvnh` | Học viện Ngân hàng | Công lập |
| `hau-hn` | Kiến trúc HN | Công lập |
| `wru` | Tài nguyên Môi trường HN | Công lập |
| `vimaru` | Hàng hải VN | Công lập |
| `vinh-uni` | Vinh | Công lập |

### TP. Hồ Chí Minh – Công lập

| ID | Tên viết tắt | Có ĐGNL |
|----|-------------|---------|
| `vnu-hcm` | VNU HCM (tổng hợp) | ✅ |
| `hcmut` | Bách Khoa HCM | ✅ |
| `hcmus` | Khoa học Tự nhiên | ✅ |
| `hcmussh` | Khoa học Xã hội & Nhân văn | ✅ |
| `hcmulaw` | Luật HCM | ✅ |
| `hcmue` | Sư phạm HCM | ✅ |
| `uel` | Kinh tế – Luật | ✅ |
| `uit` | Công nghệ thông tin | ✅ |
| `ump` | Y Dược HCM | ✅ |
| `pnt` | Phạm Ngọc Thạch | ✅ |
| `huit` | Công nghiệp HCM | ✅ |
| `hcmute` | Sư phạm Kỹ thuật | ✅ |
| `uah` | Kiến trúc HCM | ✅ |
| `sgu` | Sài Gòn | ✅ |
| `uth` | Giao thông Vận tải HCM | ✅ |
| `ou` | Mở HCM | ✅ |
| `iuh` | Công nghiệp HCM (IUH) | ✅ |
| `hcmunre` | Tài nguyên Môi trường HCM | ✅ |
| `vgu` | Việt – Đức | ✅ |
| `hufi` | Công nghiệp Thực phẩm HCM | ✅ |
| `hcmupes` | TDTT HCM (UPES) | ❌ (năng khiếu) |
| `nhacvien-hcm` | Nhạc viện HCM | ❌ (năng khiếu) |
| `fuv` | Fulbright Vietnam | ❌ (phỏng vấn riêng) |

### TP. Hồ Chí Minh – Tư thục

| ID | Tên viết tắt |
|----|-------------|
| `rmit` | RMIT |
| `hiu` | Quốc tế Hồng Bàng |
| `uef` | Kinh tế – Tài chính |
| `hutech` | Công nghệ HCM |
| `vlu` | Văn Lang |
| `hcmueh` | Kinh tế HCM (UEH) |
| `tdtu` | Tôn Đức Thắng |
| `dtu` | Duy Tân |
| `hcm-hoasen` | Hoa Sen |
| `hcm-ufm` | Tài chính Marketing |
| `hvhk` | Hàng không VN |
| `hcmculture` | Văn hóa HCM |
| `ftu-hcm` | Ngoại thương HCM |
| `hvca-hcm` | Cảnh sát Nhân dân HCM |
| `skda-hcm` | Sân khấu Điện ảnh HCM |
| `hcmfinearts` | Mỹ thuật HCM |
| `tdtt-hcm` | TDTT HCM (tư thục) |
| `nttu` | Nguyễn Tất Thành |
| `siu` | Quốc tế Sài Gòn |
| `vhu` | Văn Hiến |
| `hvu-hcm` | Hùng Vương HCM |
| `sgt` | Sài Gòn Technology |
| `dvsg` | Đại Việt Sài Gòn |
| `vau` | Việt Úc |
| `eiu` | Quốc tế EIU |

### Miền Trung

| ID | Tên |
|----|-----|
| `qnu` | Quy Nhơn |
| `vku` | Việt – Hàn (Đà Nẵng) |
| `ntu` | Nha Trang |

### Miền Nam (tỉnh)

| ID | Tên |
|----|-----|
| `dlu` | Đà Lạt |
| `tdmu` | Thủ Dầu Một |
| `uag` | An Giang |
| `lhu` | Lạc Hồng |
| `bdu` | Bình Dương |
| `mde` | Công nghệ Miền Đông |
| `lau` | Long An |
| `tvu` | Trà Vinh |

---

## 6. Những việc đã làm trong các session

### Session 1 – Xây dựng nền tảng dữ liệu
- Thêm 8 trường: HLU, VNUA, BUH, HUFI, QNU, VKU, DLU, TDMU

### Session 2 – Mở rộng miền Bắc & Nam
- Thêm 10 trường: HVNH, HAU-HN, WRU, VIMARU, HCMUSSH, HIU, VinhUni, NTU, UAG, LHU

### Session 3 – Bổ sung 20 trường HCM
- Thêm: UFM, HVHK, HCMCULTURE, FTU-HCM, HVCA-HCM, SKDA-HCM, HCMFINEARTS, TDTT-HCM, NTTU, SIU, VHU, HVU-HCM, SGT, DVSG, VAU, EIU + BDU, MDE, LAU, TVU

### Session 4 – Bổ sung ĐGNL cho trường công lập HCM
- Thêm ĐGNL VNU HCM vào: UMP, PNT, HUIT, HCMUTE, UAH, SGU, UTH, OU
- Thêm: HCMUPES, Nhạc Viện HCM, FUV
- Thêm ĐGNL vào: IUH, HCMUNRE

### Session 5 – Hoàn thiện & sửa lỗi (session gần nhất)
- **Xóa 3 entry trùng lặp**: `hutech` (giữ bản ranking 3), `vlu` (giữ bản có ngôn ngữ), `uef` (giữ bản ranking 2)
- **Xóa entry lỗi** `hcm-hoasen2` (trùng UEL)
- **Thêm ĐGNL vào VGU**: CNTT(785), KTOT(752), KIEN(735), QTKD(718)
- **Thêm ĐGNL vào HUFI**: CNTP(685), CNSH(669), CNTT(652), QTKD(636)

---

## 7. Trường còn thiếu / TODO tiếp theo

### HCM – Công lập chưa có ĐGNL đầy đủ
- Tất cả trường đặc thù (HCMUPES, Nhạc Viện, SKDA-HCM, TDTT-HCM) **không cần** ĐGNL vì tuyển bằng thi năng khiếu riêng
- FUV tuyển bằng phỏng vấn/SAT riêng

### Có thể bổ sung thêm
- ĐGNL VNU HN cho các trường ở Hà Nội (thang 0–150) — chưa làm
- Thêm phương thức xét học bạ (GPA) cho một số trường
- Landing page cho các trường HCM (hiện chỉ có HN)
- Thêm trường Miền Trung: ĐH Đà Nẵng, ĐH Huế (các trường thành viên)

---

## 8. Lưu ý kỹ thuật quan trọng

### Build warning (đã có sẵn, không phải lỗi mới)
```
chunk index.js > 500KB — pre-existing issue, không ảnh hưởng chức năng
```

### Tránh ID trùng lặp
Mỗi `id` trong `mockUniversities` phải **duy nhất**. Lỗi duplicate gây render sai. Luôn kiểm tra bằng:
```bash
grep "id: '" src/components/UniversitySearch.tsx | sort | uniq -d
```

### Thêm trường mới – template
```typescript
{
  id: 'ten-truong',
  name: 'Tên đầy đủ',
  shortName: 'VIET_TAT',
  location: 'TP. Hồ Chí Minh',   // hoặc 'Hà Nội' | 'Miền Trung' | 'Miền Nam'
  type: 'Công lập',               // hoặc 'Tư thục'
  ranking: N,
  majors: [
    { code: 'CNTT', name: 'Công nghệ thông tin', benchmarkScore: 22.00,
      subjects: 'A00, A01', quota: 200, trend: 'up' },
    // ... thêm ngành
  ]
},
```

### Sau mỗi thay đổi lớn, chạy build
```bash
npm run build
```

---

## 9. Quy ước commit

Dự án dùng conventional commits:
```
feat: mô tả tính năng mới
fix: mô tả bug fix
chore: thay đổi không ảnh hưởng logic
```

---

*Cập nhật lần cuối: 2026-05-19 (session 5)*
