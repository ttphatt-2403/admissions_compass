---
name: Coding Standards
description: Quy chuẩn viết code cho dự án React + TypeScript + TailwindCSS
---

# Coding Standards

## Quy tắc chung
- Sử dụng **TypeScript strict mode**
- Sử dụng **functional components** với hooks
- Đặt tên component theo **PascalCase** (ví dụ: `HeroSection`, `CourseCard`)
- Đặt tên file component theo **PascalCase** hoặc **kebab-case** tùy thuộc vào convention hiện tại trong `src/components/`
- Export mặc định cho components chính

## React Component Pattern

```tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ComponentNameProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const ComponentName: React.FC<ComponentNameProps> = ({ title, className, children }) => {
  return (
    <div className={cn("base-classes", className)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default ComponentName;
```

## Styling Guidelines
1. **Ưu tiên TailwindCSS utility classes**
2. Sử dụng `cn()` helper để merge classes có điều kiện:
   ```tsx
   import { cn } from "@/lib/utils";
   
   <div className={cn("px-4 py-2", isActive && "bg-primary text-white")} />
   ```
3. Tránh inline styles, chỉ dùng khi thực sự cần thiết
4. Sử dụng CSS variables cho theming khi cần

## Shadcn/UI Usage
- Import components từ `@/components/ui/`
- Không chỉnh sửa trực tiếp file trong `ui/`, tạo wrapper component nếu cần customize
- Ví dụ:
  ```tsx
  import { Button } from "@/components/ui/button";
  import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
  ```

## TypeScript
- Luôn định nghĩa interface/type cho props
- Tránh sử dụng `any`, ưu tiên `unknown` hoặc generic types
- Đặt shared types trong `src/types.ts`

## Performance
- Sử dụng `React.memo()` cho components render nhiều lần
- Sử dụng `useMemo` và `useCallback` khi cần thiết
- Lazy load components nặng với `React.lazy()` + `Suspense`
