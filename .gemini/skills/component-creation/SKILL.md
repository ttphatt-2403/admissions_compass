---
name: Component Creation
description: Hướng dẫn tạo component mới cho dự án Tuyển Sinh 2026
---

# Tạo Component Mới

## Quy trình tạo component

### Bước 1: Xác định loại component
- **UI Component** (shadcn/ui): Đặt trong `src/components/ui/`
- **Feature Component**: Đặt trong `src/components/` (ví dụ: `HeroSection.tsx`, `CourseList.tsx`)
- **Layout Component**: Đặt trong `src/components/` (ví dụ: `Header.tsx`, `Footer.tsx`)

### Bước 2: Tạo file component

```tsx
// src/components/TenComponent.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface TenComponentProps {
  // Định nghĩa props ở đây
  className?: string;
}

const TenComponent: React.FC<TenComponentProps> = ({ className }) => {
  return (
    <section className={cn("py-12 px-4", className)}>
      {/* Nội dung component */}
    </section>
  );
};

export default TenComponent;
```

### Bước 3: Import vào App.tsx hoặc component cha

```tsx
import TenComponent from "./components/TenComponent";
```

### Bước 4: Thêm responsive design
- Mobile first: bắt đầu từ mobile styles
- Sử dụng breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Test trên các kích thước màn hình khác nhau

## Checklist khi tạo component
- [ ] TypeScript interface cho props
- [ ] Hỗ trợ `className` prop để cho phép custom styling
- [ ] Responsive trên mobile/tablet/desktop
- [ ] Nội dung tiếng Việt (nếu có text hiển thị)
- [ ] Sử dụng shadcn/ui components khi có thể
- [ ] Accessibility (aria labels, semantic HTML)
