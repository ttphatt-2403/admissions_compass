---
name: Project Context
description: Thông tin tổng quan về dự án "Tuyển Sinh 2026" - Website thông tin tuyển sinh đại học
---

# Project Context - Tuyển Sinh 2026

## Tổng quan dự án
- **Tên dự án**: College Admission Information Page (Tuyển Sinh 2026 - Định Hướng Tương Lai)
- **Mục đích**: Website cung cấp thông tin tuyển sinh đại học năm 2026
- **Môn học**: EXE - Semester 7, FPT University

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS (sử dụng `tailwind-merge`, `clsx`, `class-variance-authority`)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Carousel**: Embla Carousel
- **Notifications**: Sonner (Toast)

## Cấu trúc thư mục
```
src/
├── App.tsx              # Component chính, chứa toàn bộ layout
├── main.tsx             # Entry point
├── index.css            # Global styles + Tailwind
├── types.ts             # TypeScript type definitions
├── components/          # Shadcn/UI components (~90 files)
├── data/                # Dữ liệu tĩnh
├── guidelines/          # Design guidelines
├── roadmap/             # Roadmap phát triển
└── styles/              # Additional styles
```

## Scripts
- `npm run dev` — Chạy dev server
- `npm run build` — Build production

## Quy tắc khi làm việc
1. **Luôn sử dụng TypeScript** (`.tsx` cho components, `.ts` cho logic)
2. **Sử dụng shadcn/ui components** khi có thể, không tạo custom UI từ đầu
3. **Styling bằng TailwindCSS classes**, kết hợp `cn()` helper từ `clsx` + `tailwind-merge`
4. **Nội dung bằng tiếng Việt** — Đây là website hướng đến học sinh Việt Nam
5. **Responsive design** — Hỗ trợ mobile, tablet, desktop
