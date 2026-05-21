# PROJECT STATUS — La Bàn Tuyển Sinh

> Cập nhật lần cuối: 2026-05-21

---

## TỔNG QUAN DỰ ÁN

Web app hướng nghiệp & tuyển sinh cho học sinh THPT Việt Nam.  
**Stack:** React + TypeScript + Vite + Tailwind CSS + Firebase  
**Deploy:** Vercel — branch `main`

---

## ĐÃ HOÀN THÀNH ✅

### 1. Kiến trúc & Navigation
- [x] Hệ thống `TabType` định tuyến toàn bộ trang qua `App.tsx`
- [x] `Header.tsx` — nav responsive (desktop + mobile), đăng nhập Google, logo
- [x] Firebase Auth tích hợp (Google Sign-In)
- [x] Firebase Analytics

### 2. Trang chính
- [x] **Trang Chủ** — HeroSection, StatsSection, TestimonialsSection, FAQSection, NewsSection
- [x] **Tài Liệu** — DocumentLibrary với tìm kiếm và lọc
- [x] **Điểm Chuẩn** — UniversitySearch tra cứu điểm chuẩn ~50+ trường

### 3. Lộ trình học (Study Path)
- [x] Lộ trình môn Toán, Lý, Hóa, Sinh, Văn, Sử, Địa, GDCD, Tin, Tiếng Anh
- [x] Giao diện roadmap dạng timeline với các cột mốc

### 4. Cộng đồng & Landing Pages
- [x] **Community tab** — giao diện cộng đồng
- [x] **B2B Landing** (`b2b-landing`) — trang hợp tác tuyển sinh với pricing table
- [x] **Landing pages ~40+ trường** — FPT, VNU, HUST, NEU, FTU, RMIT, UIT... (Hà Nội + HCM + các tỉnh)
- [x] Landing pages theo ngành: CNTT-AI, Marketing, Logistics, Design, Kinh tế, Ngoại ngữ

### 5. Trắc Nghiệm RIASEC ✅
- [x] 42 câu hỏi trắc nghiệm đầy đủ
- [x] Tính điểm 6 nhóm RIASEC (R-I-A-S-E-C)
- [x] Kết quả gợi ý ngành học và nghề nghiệp
- [x] Giao diện đẹp, có progress bar

### 6. Thần Số Học (Numerology) ✅ — *Feature mới nhất*
- [x] Tích hợp tab `numerology` vào navigation (Header + App.tsx + types.ts)
- [x] `NumerologyTest.tsx` — UI hoàn chỉnh với 3 phase: intro → nhập liệu → kết quả
- [x] Tính 6 chỉ số: Đường Đời, Ngày Sinh, Thái Độ, Sứ Mệnh, Linh Hồn, Nhân Cách
- [x] `NumberCard` component — 5 tab: Tổng quan / Tâm lý / Nghề & Ngành / Tình cảm / Tâm linh
- [x] Gradient header dùng inline style (fix Tailwind purge issue)
- [x] `profiles.ts` — 887 dòng, dữ liệu đầy đủ cho **12 con số** (1–9, 11, 22, 33)
- [x] Mỗi số có **~25 trường** chi tiết:
  - Essence, lightSide, darkSide
  - 7 phân tích tâm lý sâu (`deepAnalysis`)
  - Strengths, weaknesses, workEnv, careers, majors
  - moneyStyle, loveStyle, healthFocus
  - spiritualPath, karmicLesson, lesson, advice
  - planet, element, compatible, challenging, famousPeople
  - childhood, communicationStyle, relationshipDynamics, shadowWork
  - lifeThemes (5 chủ đề), affirmations (4 câu), mindset, stressResponse, giftToWorld
- [x] Helper functions: `reduceToSingle`, `calcLifePath`, `calcBirthdayNumber`, `calcAttitudeNumber`

---

## CHƯA HOÀN THÀNH / CÓ THỂ CẢI THIỆN ⏳

### Thần Số Học — Còn thiếu
- [ ] **UI chưa hiển thị các trường mới** trong tab tâm lý / tâm linh:
  - `childhood` (tuổi thơ)
  - `communicationStyle` (phong cách giao tiếp)
  - `relationshipDynamics` (động lực trong quan hệ)
  - `shadowWork` (công việc bóng tối)
  - `lifeThemes[]` (5 chủ đề cuộc đời)
  - `affirmations[]` (4 câu khẳng định)
  - `mindset` (tư duy)
  - `stressResponse` (phản ứng khi stress)
  - `giftToWorld` (món quà cho thế giới)
- [ ] **Số 1, 2, 3 chưa có đủ các trường mới** ở cùng mức chi tiết như số 4–9 (có thể check lại)
- [ ] Chưa có tính năng **lưu kết quả** (Firebase Firestore)
- [ ] Chưa có tính năng **chia sẻ kết quả** (share card / screenshot)
- [ ] Chưa có **trang giải thích phương pháp** Pythagoras Numerology
- [ ] Chưa có **so sánh hai người** (compatibility test)
- [ ] `calcDestinyNumber` và `calcSoulUrgeNumber` đang được import từ profiles.ts nhưng **chưa được export** từ file đó → cần kiểm tra

### Tính năng còn ẩn (có code nhưng bị comment off)
- [ ] **AI Chatbot** (`chatbot` tab) — code có nhưng `ENABLE_CHATBOT = false`
- [ ] **Tính Điểm** (`calculator` tab) — ScoreCalculator.tsx tồn tại nhưng bị comment
- [ ] **Lộ trình học** (`studypath` tab) — StudyPath.tsx tồn tại nhưng bị comment
- [ ] **Tin Tức** (`news` tab) — NewsSection.tsx tồn tại nhưng bị comment

### Cải thiện UX/Performance
- [ ] **Chunk size warning** — bundle `index.js` hiện ~1.7MB (vượt 500KB khuyến nghị), cần code splitting
- [ ] **Mobile UX** — header quá nhiều nav item trên mobile, cần review layout
- [ ] **SEO** — chưa có meta tags, og:image, structured data
- [ ] **Accessibility** — chưa có aria-labels đầy đủ
- [ ] **Loading states** — một số trang chưa có skeleton loading

### Dữ liệu
- [ ] Dữ liệu điểm chuẩn cần cập nhật thêm nhiều năm và nhiều trường
- [ ] Chưa có dữ liệu học bổng, điều kiện xét tuyển chi tiết
- [ ] RIASEC — chưa có gợi ý trường đại học cụ thể dựa trên kết quả

---

## KIẾN TRÚC FILE QUAN TRỌNG

```
src/
├── App.tsx                          # Router chính, render theo tab
├── types.ts                         # TabType union (tất cả routes)
├── components/
│   ├── Header.tsx                   # Nav + Auth
│   ├── NumerologyTest.tsx           # UI Thần Số Học (499 dòng)
│   ├── RIASECTest.tsx               # UI Trắc nghiệm RIASEC
│   ├── UniversitySearch.tsx         # Tra cứu điểm chuẩn
│   └── LandingPages/                # ~40 file landing page trường
├── data/
│   ├── numerology/
│   │   └── profiles.ts              # Data + helper functions (887 dòng)
│   ├── riasec/                      # Câu hỏi và kết quả RIASEC
│   └── universityScores/            # Dữ liệu điểm chuẩn
└── context/
    └── AuthContext.tsx              # Firebase Auth context
```

---

## BUG BIẾT TRƯỚC

| # | Mô tả | Mức độ | Vị trí |
|---|-------|--------|--------|
| 1 | `calcDestinyNumber`, `calcSoulUrgeNumber`, `calcPersonalityNumber` được import trong NumerologyTest.tsx nhưng cần xác nhận đã export từ profiles.ts | 🔴 Critical | profiles.ts, NumerologyTest.tsx |
| 2 | Số 1, 2, 3 trong profiles.ts có thể thiếu một số trường mới (childhood, communicationStyle...) so với interface đầy đủ | 🟡 Medium | profiles.ts dòng ~43–258 |
| 3 | Bundle size ~1.7MB gây load chậm trên mobile | 🟡 Medium | Vite config |
| 4 | Tailwind dynamic class purge — bất kỳ class nào dùng string interpolation sẽ bị purge | 🟢 Known/Fixed | Đã fix bằng inline style |

---

## GỢI Ý TASK TIẾP THEO (ưu tiên)

### 🔴 Khẩn cấp
1. Kiểm tra và thêm `calcDestinyNumber`, `calcSoulUrgeNumber`, `calcPersonalityNumber` vào `profiles.ts`
2. Cập nhật UI `NumerologyTest.tsx` hiển thị các trường mới (childhood, affirmations, mindset...)

### 🟡 Quan trọng
3. Thêm section "Affirmations" và "Chủ đề cuộc đời" vào tab Tâm linh của NumerologyTest
4. Thêm section "Tuổi thơ & Giao tiếp" vào tab Tâm lý của NumerologyTest
5. Tính năng lưu / chia sẻ kết quả Numerology
6. Code splitting để giảm bundle size

### 🟢 Tính năng mới
7. Bật lại AI Chatbot khi có API key
8. Compatibility test — so sánh hai người theo Thần Số Học
9. Gợi ý trường đại học cụ thể từ kết quả RIASEC
10. Cập nhật điểm chuẩn 2024–2025
