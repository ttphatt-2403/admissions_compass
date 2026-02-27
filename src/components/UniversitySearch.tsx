import { useState } from "react";
import {
  Search,
  MapPin,
  TrendingUp,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;
  majors: Major[];
  type: string;
  ranking: number;
}

export interface Major {
  code: string;
  name: string;
  benchmarkScore: number;
  subjects: string;
  quota: number;
  trend: "up" | "down" | "stable";
}

// ============================================================
// DỮ LIỆU ĐIỂM CHUẨN CÁC TRƯỜNG ĐẠI HỌC VIỆT NAM 2025
// Nguồn: Điểm chuẩn kỳ tuyển sinh 2025 (thi THPT Quốc gia)
// ============================================================

export const mockUniversities: University[] = [

  // ╔══════════════════════════════════════════╗
  // ║            HÀ NỘI & MIỀN BẮC            ║
  // ╚══════════════════════════════════════════╝

  {
    id: 'vnu-hn',
    name: 'Đại học Quốc gia Hà Nội',
    shortName: 'VNU-HN',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 1,
    majors: [
      { code: 'CNTT',     name: 'Công nghệ thông tin',         benchmarkScore: 28.0,  subjects: 'A00, A01',      quota: 400, trend: 'up' },
      { code: 'KHMT',     name: 'Khoa học máy tính',           benchmarkScore: 27.8,  subjects: 'A00, A01',      quota: 350, trend: 'up' },
      { code: 'KHDL',     name: 'Khoa học dữ liệu',            benchmarkScore: 27.5,  subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'AI',       name: 'Trí tuệ nhân tạo',            benchmarkScore: 27.3,  subjects: 'A00, A01',      quota: 100, trend: 'up' },
      { code: 'ATTT',     name: 'An toàn thông tin',            benchmarkScore: 27.0,  subjects: 'A00, A01',      quota: 120, trend: 'up' },
      { code: 'HTTT',     name: 'Hệ thống thông tin',           benchmarkScore: 26.8,  subjects: 'A00, A01',      quota: 200, trend: 'stable' },
      { code: 'TMDT',     name: 'Thương mại điện tử',           benchmarkScore: 26.5,  subjects: 'A00, A01',      quota: 100, trend: 'up' },
      { code: 'QHQT',     name: 'Quan hệ quốc tế',             benchmarkScore: 27.8,  subjects: 'C00, D01',      quota: 150, trend: 'up' },
      { code: 'LUAT',     name: 'Luật',                         benchmarkScore: 27.5,  subjects: 'C00, D01',      quota: 200, trend: 'up' },
      { code: 'KTQT',     name: 'Kinh tế quốc tế',             benchmarkScore: 27.2,  subjects: 'A00, D01',      quota: 200, trend: 'up' },
      { code: 'QTKD',     name: 'Quản trị kinh doanh',         benchmarkScore: 27.0,  subjects: 'A00, D01',      quota: 300, trend: 'up' },
      { code: 'TTBC',     name: 'Báo chí',                      benchmarkScore: 26.5,  subjects: 'C00, D01',      quota: 100, trend: 'stable' },
      { code: 'NNA',      name: 'Ngôn ngữ Anh',                benchmarkScore: 26.5,  subjects: 'D01',           quota: 250, trend: 'stable' },
      { code: 'TOAN',     name: 'Toán',                         benchmarkScore: 26.2,  subjects: 'A00',           quota: 150, trend: 'down' },
      { code: 'VATLY',    name: 'Vật lý',                      benchmarkScore: 25.5,  subjects: 'A00',           quota: 100, trend: 'stable' },
      { code: 'HOAHOC',   name: 'Hóa học',                     benchmarkScore: 25.0,  subjects: 'A00, B00',      quota: 100, trend: 'down' },
      { code: 'SINHOC',   name: 'Sinh học',                    benchmarkScore: 24.5,  subjects: 'B00',           quota: 80,  trend: 'stable' },
      { code: 'DLULICH',  name: 'Du lịch học',                 benchmarkScore: 25.5,  subjects: 'C00, D01',      quota: 100, trend: 'stable' },
    ]
  },

  {
    id: 'uet',
    name: 'Đại học Công nghệ - ĐHQGHN',
    shortName: 'UET',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 2,
    majors: [
      { code: 'CNTT',    name: 'Công nghệ thông tin',                    benchmarkScore: 28.19, subjects: 'A00, A01', quota: 300, trend: 'up' },
      { code: 'KHMT',    name: 'Khoa học máy tính',                      benchmarkScore: 27.86, subjects: 'A00, A01', quota: 200, trend: 'up' },
      { code: 'AI',      name: 'Trí tuệ nhân tạo',                       benchmarkScore: 27.75, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'TDH',     name: 'Kỹ thuật điều khiển và Tự động hoá',    benchmarkScore: 27.90, subjects: 'A00',      quota: 200, trend: 'up' },
      { code: 'KHDL',    name: 'Khoa học dữ liệu',                       benchmarkScore: 27.38, subjects: 'A00, A01', quota: 120, trend: 'up' },
      { code: 'KTMT',    name: 'Kỹ thuật máy tính',                      benchmarkScore: 27.00, subjects: 'A00, A01', quota: 150, trend: 'up' },
      { code: 'MMT',     name: 'Mạng máy tính và Truyền thông',          benchmarkScore: 26.73, subjects: 'A00, A01', quota: 150, trend: 'stable' },
      { code: 'ROBOT',   name: 'Kỹ thuật Robot',                         benchmarkScore: 26.00, subjects: 'A00',      quota: 100, trend: 'stable' },
      { code: 'CKDT',    name: 'Công nghệ kỹ thuật cơ điện tử',          benchmarkScore: 26.73, subjects: 'A00',      quota: 150, trend: 'stable' },
      { code: 'KTDT',    name: 'Kỹ thuật điện tử – Viễn thông',         benchmarkScore: 26.63, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'HTTT',    name: 'Hệ thống thông tin',                     benchmarkScore: 26.38, subjects: 'A00, A01', quota: 120, trend: 'stable' },
      { code: 'VATLYKT', name: 'Vật lý kỹ thuật',                       benchmarkScore: 25.20, subjects: 'A00',      quota: 100, trend: 'stable' },
      { code: 'COKT',    name: 'Cơ kỹ thuật',                           benchmarkScore: 26.15, subjects: 'A00',      quota: 100, trend: 'stable' },
      { code: 'CNVL',    name: 'Công nghệ vật liệu',                    benchmarkScore: 25.60, subjects: 'A00',      quota: 80,  trend: 'stable' },
      { code: 'KTNL',    name: 'Kỹ thuật năng lượng',                   benchmarkScore: 24.87, subjects: 'A00',      quota: 80,  trend: 'stable' },
      { code: 'CNHKVT',  name: 'Công nghệ hàng không vũ trụ',           benchmarkScore: 23.96, subjects: 'A00',      quota: 60,  trend: 'up' },
      { code: 'TKTN',    name: 'Thiết kế công nghiệp & Đồ họa',         benchmarkScore: 24.20, subjects: 'A00',      quota: 60,  trend: 'stable' },
    ]
  },

  {
    id: 'ussh-hn',
    name: 'Đại học Khoa học Xã hội và Nhân văn - ĐHQGHN',
    shortName: 'USSH',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 3,
    majors: [
      { code: 'TAMLY',   name: 'Tâm lý học',                   benchmarkScore: 29.00, subjects: 'C00',           quota: 100, trend: 'up' },
      { code: 'QHCC',    name: 'Quan hệ công chúng',           benchmarkScore: 28.90, subjects: 'C00, D01',      quota: 100, trend: 'up' },
      { code: 'BAOCHI',  name: 'Báo chí',                      benchmarkScore: 28.20, subjects: 'C00, D01',      quota: 150, trend: 'up' },
      { code: 'DLKH',    name: 'Quản trị dịch vụ du lịch',    benchmarkScore: 28.30, subjects: 'C00, D01',      quota: 100, trend: 'up' },
      { code: 'DINHANH', name: 'Điện ảnh nghệ thuật',          benchmarkScore: 27.30, subjects: 'C00',           quota: 60,  trend: 'up' },
      { code: 'DPHHOC',  name: 'Đông phương học',              benchmarkScore: 28.00, subjects: 'C00, D01',      quota: 100, trend: 'up' },
      { code: 'HANKQ',   name: 'Hàn Quốc học',                 benchmarkScore: 27.83, subjects: 'D78',           quota: 80,  trend: 'up' },
      { code: 'QHQT',    name: 'Quốc tế học',                  benchmarkScore: 26.20, subjects: 'C00, D01',      quota: 100, trend: 'stable' },
      { code: 'CTXH',    name: 'Công tác xã hội',              benchmarkScore: 26.99, subjects: 'C00, D01',      quota: 100, trend: 'stable' },
      { code: 'CHINHTRIH',name: 'Chính trị học',               benchmarkScore: 26.86, subjects: 'C00, D01',      quota: 80,  trend: 'stable' },
      { code: 'KHOAHOCQL',name: 'Khoa học quản lý',            benchmarkScore: 26.68, subjects: 'C00, D01',      quota: 100, trend: 'stable' },
      { code: 'KHAOTRU', name: 'Khảo cổ học',                  benchmarkScore: 24.50, subjects: 'C00',           quota: 60,  trend: 'stable' },
      { code: 'LICHSU',  name: 'Lịch sử',                      benchmarkScore: 25.80, subjects: 'C00',           quota: 100, trend: 'stable' },
      { code: 'VANHOA',  name: 'Văn hóa học',                  benchmarkScore: 25.50, subjects: 'C00, D01',      quota: 80,  trend: 'stable' },
      { code: 'NHATBAN', name: 'Nhật Bản học',                 benchmarkScore: 21.75, subjects: 'D78',           quota: 80,  trend: 'down' },
      { code: 'VNHOC',   name: 'Việt Nam học',                 benchmarkScore: 24.80, subjects: 'C00, D01',      quota: 80,  trend: 'stable' },
      { code: 'XHH',     name: 'Xã hội học',                   benchmarkScore: 23.99, subjects: 'C00, D01',      quota: 100, trend: 'stable' },
    ]
  },

  {
    id: 'ulis',
    name: 'Đại học Ngoại ngữ - ĐHQGHN',
    shortName: 'ULIS',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 4,
    majors: [
      { code: 'NNA',     name: 'Ngôn ngữ Anh',         benchmarkScore: 27.45, subjects: 'D01',      quota: 400, trend: 'up' },
      { code: 'NNT',     name: 'Ngôn ngữ Trung Quốc',  benchmarkScore: 27.25, subjects: 'D04',      quota: 200, trend: 'up' },
      { code: 'NNHQ',    name: 'Ngôn ngữ Hàn Quốc',   benchmarkScore: 27.50, subjects: 'D78',      quota: 150, trend: 'up' },
      { code: 'NNN',     name: 'Ngôn ngữ Nhật',        benchmarkScore: 26.80, subjects: 'D06',      quota: 200, trend: 'up' },
      { code: 'NNPHAP',  name: 'Ngôn ngữ Pháp',       benchmarkScore: 26.50, subjects: 'D03',      quota: 100, trend: 'stable' },
      { code: 'NNDUC',   name: 'Ngôn ngữ Đức',        benchmarkScore: 25.80, subjects: 'D01',      quota: 80,  trend: 'stable' },
      { code: 'NNNAGA',  name: 'Ngôn ngữ Nga',         benchmarkScore: 24.50, subjects: 'D01',      quota: 60,  trend: 'down' },
      { code: 'NNBD',    name: 'Ngôn ngữ Bồ Đào Nha', benchmarkScore: 24.00, subjects: 'D01',      quota: 50,  trend: 'stable' },
      { code: 'SPANH',   name: 'Sư phạm Tiếng Anh',   benchmarkScore: 28.00, subjects: 'D01',      quota: 200, trend: 'up' },
      { code: 'SPTRUNG', name: 'Sư phạm Tiếng Trung',  benchmarkScore: 26.50, subjects: 'D04',      quota: 80,  trend: 'stable' },
    ]
  },

  {
    id: 'hust',
    name: 'Đại học Bách khoa Hà Nội',
    shortName: 'HUST',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 5,
    majors: [
      { code: 'KHDL-AI', name: 'Khoa học dữ liệu & Trí tuệ nhân tạo',  benchmarkScore: 29.39, subjects: 'A00, A01', quota: 120, trend: 'up' },
      { code: 'KHMT',    name: 'Khoa học máy tính',                      benchmarkScore: 29.19, subjects: 'A00, A01', quota: 200, trend: 'up' },
      { code: 'KTMT',    name: 'Kỹ thuật máy tính',                      benchmarkScore: 28.55, subjects: 'A00, A01', quota: 150, trend: 'up' },
      { code: 'TDH',     name: 'Kỹ thuật điều khiển & Tự động hoá',     benchmarkScore: 28.48, subjects: 'A00',      quota: 250, trend: 'up' },
      { code: 'CNPM',    name: 'Công nghệ phần mềm',                     benchmarkScore: 28.20, subjects: 'A00, A01', quota: 300, trend: 'up' },
      { code: 'KTDT',    name: 'Kỹ thuật điện tử – Viễn thông',         benchmarkScore: 28.07, subjects: 'A00',      quota: 300, trend: 'up' },
      { code: 'CKDT',    name: 'Kỹ thuật cơ điện tử',                   benchmarkScore: 27.95, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'LOG',     name: 'Logistics & Quản lý chuỗi cung ứng',    benchmarkScore: 27.55, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'KTYSH',   name: 'Kỹ thuật Y sinh',                       benchmarkScore: 27.15, subjects: 'A00',      quota: 80,  trend: 'stable' },
      { code: 'DIEN',    name: 'Kỹ thuật điện',                         benchmarkScore: 27.00, subjects: 'A00',      quota: 300, trend: 'stable' },
      { code: 'QLYNNL',  name: 'Quản lý năng lượng',                    benchmarkScore: 26.50, subjects: 'A00',      quota: 80,  trend: 'stable' },
      { code: 'KTHH',    name: 'Kỹ thuật hóa học',                      benchmarkScore: 25.50, subjects: 'A00, B00', quota: 300, trend: 'down' },
      { code: 'COKHI',   name: 'Cơ khí',                                benchmarkScore: 25.80, subjects: 'A00',      quota: 600, trend: 'down' },
      { code: 'CNOTO',   name: 'Công nghệ kỹ thuật ô tô',               benchmarkScore: 25.50, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'CNVL',    name: 'Công nghệ vật liệu',                    benchmarkScore: 24.80, subjects: 'A00',      quota: 150, trend: 'stable' },
      { code: 'ROBOT',   name: 'Hệ thống robot',                        benchmarkScore: 26.20, subjects: 'A00',      quota: 120, trend: 'stable' },
      { code: 'KTNL',    name: 'Kỹ thuật nhiệt',                        benchmarkScore: 24.50, subjects: 'A00',      quota: 100, trend: 'stable' },
    ]
  },

  {
    id: 'neu',
    name: 'Đại học Kinh tế Quốc dân',
    shortName: 'NEU',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 6,
    majors: [
      { code: 'KTQT',      name: 'Kinh tế quốc tế',            benchmarkScore: 28.13, subjects: 'A00, D01',      quota: 300, trend: 'up' },
      { code: 'QTKD',      name: 'Quản trị kinh doanh',        benchmarkScore: 27.80, subjects: 'A00, D01',      quota: 800, trend: 'up' },
      { code: 'MKT',       name: 'Marketing',                   benchmarkScore: 27.60, subjects: 'A00, D01',      quota: 400, trend: 'up' },
      { code: 'TCNH',      name: 'Tài chính – Ngân hàng',      benchmarkScore: 27.50, subjects: 'A00, A01, D01', quota: 600, trend: 'stable' },
      { code: 'KTDT',      name: 'Kinh tế đầu tư',             benchmarkScore: 27.50, subjects: 'A00, A01',      quota: 250, trend: 'up' },
      { code: 'KETOAN',    name: 'Kế toán',                    benchmarkScore: 27.20, subjects: 'A00, A01, D01', quota: 500, trend: 'down' },
      { code: 'KINHTE-PT', name: 'Kinh tế phát triển',         benchmarkScore: 26.77, subjects: 'A00, A01',      quota: 200, trend: 'stable' },
      { code: 'KINHTE-NN', name: 'Kinh tế nguồn nhân lực',    benchmarkScore: 26.79, subjects: 'A00, A01',      quota: 150, trend: 'stable' },
      { code: 'TINHTE',    name: 'Thống kê kinh tế',           benchmarkScore: 26.80, subjects: 'A00, A01',      quota: 200, trend: 'stable' },
      { code: 'TOANKT',    name: 'Toán kinh tế',               benchmarkScore: 26.70, subjects: 'A00',           quota: 150, trend: 'stable' },
      { code: 'KINHTE',    name: 'Kinh tế học',                benchmarkScore: 26.52, subjects: 'A00, A01',      quota: 250, trend: 'down' },
      { code: 'KHDL',      name: 'Khoa học dữ liệu',           benchmarkScore: 26.50, subjects: 'A00, A01',      quota: 100, trend: 'up' },
      { code: 'TMDT',      name: 'Thương mại điện tử',         benchmarkScore: 26.80, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'LUATKT',    name: 'Luật kinh tế',               benchmarkScore: 25.80, subjects: 'C00, D01',      quota: 200, trend: 'stable' },
      { code: 'QTNL',      name: 'Quản trị nhân lực',          benchmarkScore: 25.00, subjects: 'A00, D01',      quota: 150, trend: 'down' },
      { code: 'KINHTE-TN', name: 'Kinh tế tài nguyên',        benchmarkScore: 23.50, subjects: 'A00',           quota: 100, trend: 'down' },
    ]
  },

  {
    id: 'hmu',
    name: 'Đại học Y Dược Hà Nội',
    shortName: 'HMU',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 7,
    majors: [
      { code: 'YKHOA',     name: 'Y khoa',                    benchmarkScore: 28.70, subjects: 'B00',      quota: 400, trend: 'up' },
      { code: 'RHM',       name: 'Răng – Hàm – Mặt',         benchmarkScore: 28.50, subjects: 'B00',      quota: 100, trend: 'stable' },
      { code: 'DUOC',      name: 'Dược học',                  benchmarkScore: 27.50, subjects: 'B00',      quota: 300, trend: 'up' },
      { code: 'YHDT',      name: 'Y học dự phòng',            benchmarkScore: 25.80, subjects: 'B00',      quota: 100, trend: 'stable' },
      { code: 'XNYH',      name: 'Kỹ thuật xét nghiệm y học', benchmarkScore: 26.00, subjects: 'B00',      quota: 150, trend: 'stable' },
      { code: 'DIEUDUONG', name: 'Điều dưỡng',               benchmarkScore: 25.50, subjects: 'B00',      quota: 200, trend: 'down' },
      { code: 'KTHA',      name: 'Kỹ thuật hình ảnh y học',  benchmarkScore: 25.00, subjects: 'B00',      quota: 80,  trend: 'stable' },
      { code: 'PHCN',      name: 'Phục hồi chức năng',       benchmarkScore: 24.50, subjects: 'B00',      quota: 80,  trend: 'up' },
      { code: 'HOSINH',    name: 'Hộ sinh',                  benchmarkScore: 24.00, subjects: 'B00',      quota: 50,  trend: 'down' },
      { code: 'YHCT',      name: 'Y học cổ truyền',          benchmarkScore: 23.80, subjects: 'B00',      quota: 150, trend: 'stable' },
      { code: 'YTCC',      name: 'Y tế công cộng',           benchmarkScore: 23.50, subjects: 'B00',      quota: 100, trend: 'down' },
      { code: 'DINHDUONG', name: 'Dinh dưỡng',               benchmarkScore: 22.50, subjects: 'B00',      quota: 50,  trend: 'stable' },
    ]
  },

  {
    id: 'hup',
    name: 'Đại học Dược Hà Nội',
    shortName: 'HUP',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 8,
    majors: [
      { code: 'DUOC',   name: 'Dược học',                  benchmarkScore: 27.20, subjects: 'B00',      quota: 500, trend: 'up' },
      { code: 'KYDH',   name: 'Kỹ thuật dược',             benchmarkScore: 24.50, subjects: 'B00',      quota: 150, trend: 'stable' },
      { code: 'KYDLS',  name: 'Dược lý lâm sàng',          benchmarkScore: 25.80, subjects: 'B00',      quota: 100, trend: 'up' },
      { code: 'CNSH',   name: 'Công nghệ sinh học dược',   benchmarkScore: 24.00, subjects: 'B00',      quota: 100, trend: 'stable' },
    ]
  },

  {
    id: 'ftu',
    name: 'Đại học Ngoại thương',
    shortName: 'FTU',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 9,
    majors: [
      { code: 'KINH-TE-DN-CLC', name: 'Kinh tế đối ngoại (CLC)',             benchmarkScore: 28.50, subjects: 'A00, D01',      quota: 200, trend: 'up' },
      { code: 'KDQT',           name: 'Kinh doanh quốc tế',                   benchmarkScore: 28.00, subjects: 'A00, D01',      quota: 300, trend: 'up' },
      { code: 'LOG',            name: 'Logistics & Quản lý chuỗi cung ứng',  benchmarkScore: 27.80, subjects: 'A00, A01',      quota: 200, trend: 'up' },
      { code: 'KTQT',           name: 'Kinh tế quốc tế',                      benchmarkScore: 27.50, subjects: 'A00, D01',      quota: 250, trend: 'up' },
      { code: 'MKT-SO',         name: 'Marketing số',                          benchmarkScore: 27.20, subjects: 'A00, A01, D01', quota: 150, trend: 'up' },
      { code: 'TCNH-QT',        name: 'Tài chính quốc tế',                    benchmarkScore: 27.30, subjects: 'A00, A01, D01', quota: 200, trend: 'stable' },
      { code: 'QTKD',           name: 'Quản trị kinh doanh',                  benchmarkScore: 27.00, subjects: 'A00, D01',      quota: 300, trend: 'stable' },
      { code: 'KHMT',           name: 'Khoa học máy tính',                    benchmarkScore: 27.50, subjects: 'A00, A01',      quota: 100, trend: 'up' },
      { code: 'KHDL',           name: 'Khoa học dữ liệu',                     benchmarkScore: 27.20, subjects: 'A00, A01',      quota: 80,  trend: 'up' },
      { code: 'LUATTMQT',       name: 'Luật thương mại quốc tế',              benchmarkScore: 25.50, subjects: 'C00, D01',      quota: 150, trend: 'up' },
      { code: 'NNA-TM',         name: 'Tiếng Anh thương mại',                 benchmarkScore: 26.50, subjects: 'D01',           quota: 200, trend: 'stable' },
      { code: 'NNT-TM',         name: 'Tiếng Trung thương mại',               benchmarkScore: 25.50, subjects: 'D04',           quota: 100, trend: 'stable' },
      { code: 'TMDT',           name: 'Thương mại điện tử',                   benchmarkScore: 26.80, subjects: 'A00, A01',      quota: 120, trend: 'up' },
    ]
  },

  {
    id: 'dav',
    name: 'Học viện Ngoại giao',
    shortName: 'DAV',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 10,
    majors: [
      { code: 'NNTRUNG',  name: 'Trung Quốc học',              benchmarkScore: 26.09, subjects: 'D04',           quota: 80,  trend: 'up' },
      { code: 'QHQT',     name: 'Quan hệ quốc tế',             benchmarkScore: 25.95, subjects: 'C00, D01',      quota: 200, trend: 'up' },
      { code: 'TTQT',     name: 'Truy���n thông quốc tế',        benchmarkScore: 25.90, subjects: 'C00, D01',      quota: 100, trend: 'up' },
      { code: 'NNA',      name: 'Ngôn ngữ Anh',               benchmarkScore: 25.28, subjects: 'D01',           quota: 150, trend: 'stable' },
      { code: 'HANKQ',    name: 'Hàn Quốc học',               benchmarkScore: 25.10, subjects: 'D78',           quota: 60,  trend: 'stable' },
      { code: 'LUATQT',   name: 'Luật quốc tế',               benchmarkScore: 24.95, subjects: 'C00, D01',      quota: 100, trend: 'stable' },
      { code: 'KTQT',     name: 'Kinh tế quốc tế',            benchmarkScore: 24.45, subjects: 'A00, D01',      quota: 150, trend: 'stable' },
      { code: 'KDQT',     name: 'Kinh doanh quốc tế',         benchmarkScore: 24.75, subjects: 'A00, D01',      quota: 100, trend: 'stable' },
      { code: 'LUATTMQT', name: 'Luật thương mại quốc tế',   benchmarkScore: 24.70, subjects: 'C00, D01',      quota: 80,  trend: 'stable' },
      { code: 'NHATBAN',  name: 'Nhật Bản học',               benchmarkScore: 24.43, subjects: 'D78',           quota: 60,  trend: 'stable' },
      { code: 'HOAKYHOC', name: 'Hoa Kỳ học',                 benchmarkScore: 24.17, subjects: 'D01',           quota: 50,  trend: 'stable' },
    ]
  },

  {
    id: 'aof',
    name: 'Học viện Tài chính',
    shortName: 'AOF',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 11,
    majors: [
      { code: 'KIEMTOAN',  name: 'Kiểm toán',                        benchmarkScore: 26.60, subjects: 'A00, A01, D01', quota: 300, trend: 'up' },
      { code: 'TCNH',      name: 'Tài chính – Ngân hàng',            benchmarkScore: 26.31, subjects: 'A00, A01, D01', quota: 1000, trend: 'up' },
      { code: 'MKT',       name: 'Marketing',                         benchmarkScore: 26.23, subjects: 'A00, A01, D01', quota: 300, trend: 'up' },
      { code: 'NHQT',      name: 'Ngân hàng quốc tế',                benchmarkScore: 26.00, subjects: 'A00, A01, D01', quota: 200, trend: 'up' },
      { code: 'TCDN',      name: 'Tài chính doanh nghiệp',           benchmarkScore: 25.70, subjects: 'A00, A01',      quota: 400, trend: 'stable' },
      { code: 'KHDL-TC',   name: 'Khoa học dữ liệu trong tài chính', benchmarkScore: 25.52, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'LUATKT',    name: 'Luật kinh doanh',                  benchmarkScore: 25.12, subjects: 'A00, A01, D01', quota: 200, trend: 'stable' },
      { code: 'TINHH-TC',  name: 'Tin học tài chính kế toán',        benchmarkScore: 25.07, subjects: 'A00, A01',      quota: 150, trend: 'stable' },
      { code: 'KETOAN',    name: 'Kế toán',                          benchmarkScore: 25.01, subjects: 'A00, A01, D01', quota: 800, trend: 'up' },
      { code: 'QTKD',      name: 'Quản trị doanh nghiệp',            benchmarkScore: 24.98, subjects: 'A00, A01',      quota: 400, trend: 'down' },
      { code: 'THUEHQ',    name: 'Thuế & Hải quan',                  benchmarkScore: 25.50, subjects: 'A00, A01',      quota: 300, trend: 'down' },
      { code: 'PTTC',      name: 'Phân tích tài chính',              benchmarkScore: 25.20, subjects: 'A00, A01',      quota: 150, trend: 'stable' },
      { code: 'BHTC',      name: 'Bảo hiểm tài chính',              benchmarkScore: 24.50, subjects: 'A00, A01',      quota: 100, trend: 'stable' },
    ]
  },

  {
    id: 'hnue',
    name: 'Đại học Sư phạm Hà Nội',
    shortName: 'HNUE',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 12,
    majors: [
      { code: 'SPSU',     name: 'Sư phạm Lịch sử',        benchmarkScore: 29.06, subjects: 'C00, D01', quota: 200, trend: 'up' },
      { code: 'SPDIA',    name: 'Sư phạm Địa lý',         benchmarkScore: 28.79, subjects: 'C00',      quota: 150, trend: 'up' },
      { code: 'SPVAN',    name: 'Sư phạm Ngữ văn',        benchmarkScore: 28.48, subjects: 'C00, D01', quota: 250, trend: 'up' },
      { code: 'SPHOA',    name: 'Sư phạm Hóa học',        benchmarkScore: 28.37, subjects: 'A00, B00', quota: 150, trend: 'stable' },
      { code: 'SPVATLY',  name: 'Sư phạm Vật lý',         benchmarkScore: 28.31, subjects: 'A00',      quota: 150, trend: 'stable' },
      { code: 'SPTOAN',   name: 'Sư phạm Toán',           benchmarkScore: 28.27, subjects: 'A00',      quota: 300, trend: 'up' },
      { code: 'SPGDCT',   name: 'Sư phạm Giáo dục CT',   benchmarkScore: 27.67, subjects: 'C00, D01', quota: 100, trend: 'stable' },
      { code: 'SPQPAN',   name: 'Giáo dục QP & AN',       benchmarkScore: 27.27, subjects: 'A00',      quota: 80,  trend: 'stable' },
      { code: 'SPANH',    name: 'Sư phạm Tiếng Anh',     benchmarkScore: 26.29, subjects: 'D01',      quota: 350, trend: 'stable' },
      { code: 'SPPHAP',   name: 'Sư phạm Tiếng Pháp',   benchmarkScore: 27.15, subjects: 'D03',      quota: 80,  trend: 'stable' },
      { code: 'SPSINH',   name: 'Sư phạm Sinh học',      benchmarkScore: 26.27, subjects: 'B00',      quota: 100, trend: 'stable' },
      { code: 'NNTRUNG',  name: 'Ngôn ngữ Trung Quốc',  benchmarkScore: 26.76, subjects: 'D04',      quota: 100, trend: 'up' },
      { code: 'NNA',      name: 'Ngôn ngữ Anh',           benchmarkScore: 24.52, subjects: 'D01',      quota: 200, trend: 'stable' },
      { code: 'GDTH',     name: 'Giáo dục Tiểu học',     benchmarkScore: 25.10, subjects: 'C00, D01', quota: 400, trend: 'up' },
      { code: 'TAMLY',    name: 'Tâm lý học',             benchmarkScore: 23.75, subjects: 'C00, D01', quota: 200, trend: 'up' },
      { code: 'GDMN',     name: 'Giáo dục Mầm non',      benchmarkScore: 22.13, subjects: 'C00',      quota: 350, trend: 'down' },
      { code: 'GDDB',     name: 'Giáo dục đặc biệt',     benchmarkScore: 25.50, subjects: 'C00',      quota: 100, trend: 'up' },
      { code: 'SPTIN',    name: 'Sư phạm Tin học',        benchmarkScore: 24.85, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'GDAN',     name: 'Sư phạm Âm nhạc',       benchmarkScore: 23.75, subjects: 'C00',      quota: 50,  trend: 'stable' },
    ]
  },

  {
    id: 'tmu',
    name: 'Đại học Thương mại',
    shortName: 'TMU',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 13,
    majors: [
      { code: 'MKT',     name: 'Marketing',                     benchmarkScore: 27.80, subjects: 'A00, D01',      quota: 600, trend: 'up' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',           benchmarkScore: 27.50, subjects: 'A00, D01',      quota: 700, trend: 'up' },
      { code: 'TMDT',    name: 'Thương mại điện tử',            benchmarkScore: 27.20, subjects: 'A00, A01',      quota: 200, trend: 'up' },
      { code: 'KTQT',    name: 'Kinh tế quốc tế',               benchmarkScore: 26.80, subjects: 'A00, D01',      quota: 300, trend: 'stable' },
      { code: 'TCNH',    name: 'Tài chính – Ngân hàng',         benchmarkScore: 26.80, subjects: 'A00, D01',      quota: 500, trend: 'stable' },
      { code: 'KETOAN',  name: 'Kế toán',                        benchmarkScore: 26.50, subjects: 'A00, D01',      quota: 400, trend: 'down' },
      { code: 'LUATKT',  name: 'Luật kinh tế',                  benchmarkScore: 26.00, subjects: 'C00, D01',      quota: 250, trend: 'up' },
      { code: 'PTDLKT',  name: 'Phân tích dữ liệu kinh tế',    benchmarkScore: 25.50, subjects: 'A00, A01',      quota: 100, trend: 'up' },
      { code: 'LOG',     name: 'Logistics & Supply Chain',       benchmarkScore: 25.20, subjects: 'A00',           quota: 200, trend: 'stable' },
      { code: 'QTNL',    name: 'Quản trị nhân lực',             benchmarkScore: 24.80, subjects: 'A00, D01',      quota: 150, trend: 'down' },
      { code: 'HTTTQL',  name: 'Hệ thống thông tin quản lý',   benchmarkScore: 24.50, subjects: 'A00, A01',      quota: 120, trend: 'stable' },
      { code: 'DULICH',  name: 'Du lịch',                        benchmarkScore: 24.50, subjects: 'C00, D01',      quota: 150, trend: 'stable' },
    ]
  },

  {
    id: 'hua',
    name: 'Đại học Luật Hà Nội',
    shortName: 'HUA',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 14,
    majors: [
      { code: 'LUATKT',   name: 'Luật kinh tế',               benchmarkScore: 28.79, subjects: 'C00',           quota: 200, trend: 'up' },
      { code: 'LUAT',     name: 'Luật',                        benchmarkScore: 27.50, subjects: 'C00, D01',      quota: 600, trend: 'up' },
      { code: 'LUATQT',   name: 'Luật quốc tế',               benchmarkScore: 26.50, subjects: 'C00, D01',      quota: 150, trend: 'up' },
      { code: 'LUATTMQT', name: 'Luật thương mại quốc tế',   benchmarkScore: 26.00, subjects: 'D01',           quota: 100, trend: 'up' },
      { code: 'LUATHC',   name: 'Luật hành chính',            benchmarkScore: 25.55, subjects: 'C00, D01',      quota: 200, trend: 'stable' },
      { code: 'KSOSAT',   name: 'Kiểm sát',                   benchmarkScore: 25.00, subjects: 'C00, D01',      quota: 100, trend: 'stable' },
      { code: 'QHCC',     name: 'Quan hệ công chúng',         benchmarkScore: 24.50, subjects: 'C00, D01',      quota: 80,  trend: 'stable' },
    ]
  },

  {
    id: 'ptit',
    name: 'Học viện Công nghệ Bưu chính Viễn thông',
    shortName: 'PTIT',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 15,
    majors: [
      { code: 'KHMT',    name: 'Khoa học máy tính',             benchmarkScore: 26.21, subjects: 'A00, A01', quota: 200, trend: 'up' },
      { code: 'TDH',     name: 'Kỹ thuật điều khiển & TĐH',    benchmarkScore: 26.19, subjects: 'A00',      quota: 150, trend: 'up' },
      { code: 'CNTT',    name: 'Công nghệ thông tin',           benchmarkScore: 25.80, subjects: 'A00, A01', quota: 400, trend: 'up' },
      { code: 'AI',      name: 'Trí tuệ nhân tạo',             benchmarkScore: 25.67, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'VIMADC',  name: 'Công nghệ vi mạch bán dẫn',   benchmarkScore: 25.50, subjects: 'A00',      quota: 80,  trend: 'up' },
      { code: 'TTDPT',   name: 'Truyền thông đa phương tiện',  benchmarkScore: 25.25, subjects: 'A00, A01', quota: 150, trend: 'stable' },
      { code: 'ATTT',    name: 'An toàn thông tin',            benchmarkScore: 25.21, subjects: 'A00, A01', quota: 150, trend: 'up' },
      { code: 'KTDT',    name: 'Kỹ thuật điện tử viễn thông',  benchmarkScore: 25.10, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'TMDT',    name: 'Thương mại điện tử',           benchmarkScore: 25.10, subjects: 'A00, A01', quota: 120, trend: 'stable' },
      { code: 'FINTECH', name: 'Công nghệ tài chính',          benchmarkScore: 23.63, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'LOG',     name: 'Logistics & Chuỗi cung ứng',  benchmarkScore: 24.20, subjects: 'A00',      quota: 100, trend: 'stable' },
      { code: 'MKT',     name: 'Marketing',                    benchmarkScore: 24.00, subjects: 'A00, D01', quota: 150, trend: 'stable' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',          benchmarkScore: 22.75, subjects: 'A00, D01', quota: 200, trend: 'stable' },
      { code: 'KETOAN',  name: 'Kế toán',                      benchmarkScore: 22.50, subjects: 'A00, D01', quota: 200, trend: 'stable' },
      { code: 'BAOCHI',  name: 'Báo chí',                      benchmarkScore: 22.67, subjects: 'C00, D01', quota: 100, trend: 'stable' },
    ]
  },

  {
    id: 'hvbc',
    name: 'Học viện Báo chí và Tuyên truyền',
    shortName: 'HVBC',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 16,
    majors: [
      { code: 'QHCC',    name: 'Quan hệ công chúng',            benchmarkScore: 29.25, subjects: 'C00',      quota: 100, trend: 'up' },
      { code: 'BAOMDT',  name: 'Báo mạng điện tử',             benchmarkScore: 28.65, subjects: 'C00, D01', quota: 100, trend: 'up' },
      { code: 'BAOTRUYEN', name: 'Báo truyền hình',             benchmarkScore: 28.50, subjects: 'C00, D01', quota: 100, trend: 'up' },
      { code: 'TTDPT',   name: 'Truyền thông đa phương tiện',  benchmarkScore: 28.00, subjects: 'C00, D01', quota: 120, trend: 'up' },
      { code: 'BAOCHI',  name: 'Báo chí',                       benchmarkScore: 27.75, subjects: 'C00, D01', quota: 200, trend: 'up' },
      { code: 'XHXH',    name: 'Xuất bản',                      benchmarkScore: 27.50, subjects: 'C00, D01', quota: 80,  trend: 'stable' },
      { code: 'CHINHTRIH', name: 'Chính trị học',               benchmarkScore: 26.50, subjects: 'C00, D01', quota: 100, trend: 'stable' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',           benchmarkScore: 25.80, subjects: 'A00, D01', quota: 150, trend: 'stable' },
      { code: 'XHHXB',   name: 'Xã hội học',                   benchmarkScore: 25.00, subjects: 'C00, D01', quota: 80,  trend: 'stable' },
    ]
  },

  {
    id: 'haui',
    name: 'Đại học Công nghiệp Hà Nội',
    shortName: 'HaUI',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 17,
    majors: [
      { code: 'CNTT',    name: 'Công nghệ thông tin',           benchmarkScore: 26.27, subjects: 'A00, A01',      quota: 400, trend: 'up' },
      { code: 'KHDL',    name: 'Khoa học dữ liệu',              benchmarkScore: 25.80, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'NNA',     name: 'Ngôn ngữ Anh',                 benchmarkScore: 26.00, subjects: 'D01',           quota: 200, trend: 'up' },
      { code: 'NNHQ',    name: 'Ngôn ngữ Hàn Quốc',           benchmarkScore: 25.50, subjects: 'D78',           quota: 150, trend: 'up' },
      { code: 'NNT',     name: 'Ngôn ngữ Trung Quốc',         benchmarkScore: 25.00, subjects: 'D04',           quota: 150, trend: 'stable' },
      { code: 'NNN',     name: 'Ngôn ngữ Nhật',               benchmarkScore: 24.80, subjects: 'D06',           quota: 150, trend: 'stable' },
      { code: 'KETOAN',  name: 'Kế toán',                       benchmarkScore: 25.50, subjects: 'A00, A01, D01', quota: 400, trend: 'stable' },
      { code: 'MKT',     name: 'Marketing',                     benchmarkScore: 25.30, subjects: 'A00, D01',      quota: 250, trend: 'up' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',           benchmarkScore: 25.20, subjects: 'A00, D01',      quota: 300, trend: 'stable' },
      { code: 'KTDT',    name: 'Kỹ thuật điện tử',             benchmarkScore: 23.50, subjects: 'A00',           quota: 300, trend: 'stable' },
      { code: 'TDH',     name: 'Tự động hoá',                  benchmarkScore: 22.80, subjects: 'A00',           quota: 400, trend: 'stable' },
      { code: 'DIEN',    name: 'Kỹ thuật điện',                benchmarkScore: 22.30, subjects: 'A00',           quota: 300, trend: 'stable' },
      { code: 'COKHI',   name: 'Cơ khí',                       benchmarkScore: 22.00, subjects: 'A00',           quota: 500, trend: 'down' },
      { code: 'CNOTO',   name: 'Công nghệ kỹ thuật ô tô',     benchmarkScore: 22.50, subjects: 'A00',           quota: 200, trend: 'stable' },
      { code: 'TMDT',    name: 'Thương mại điện tử',           benchmarkScore: 24.50, subjects: 'A00, A01',      quota: 120, trend: 'up' },
      { code: 'TCNH',    name: 'Tài chính – Ngân hàng',        benchmarkScore: 24.80, subjects: 'A00, D01',      quota: 250, trend: 'stable' },
    ]
  },

  {
    id: 'utc',
    name: 'Đại học Giao thông Vận tải',
    shortName: 'UTC',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 18,
    majors: [
      { code: 'CNTT',    name: 'Công nghệ thông tin',             benchmarkScore: 26.50, subjects: 'A00, A01', quota: 250, trend: 'up' },
      { code: 'LOG',     name: 'Logistics & Quản lý chuỗi cung ứng', benchmarkScore: 26.30, subjects: 'A00, A01', quota: 150, trend: 'up' },
      { code: 'KTOTO',   name: 'Kỹ thuật ô tô',                  benchmarkScore: 25.80, subjects: 'A00',      quota: 300, trend: 'stable' },
      { code: 'KTHH',    name: 'Kỹ thuật hàng hải',             benchmarkScore: 25.00, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'KTCGTL',  name: 'Kỹ thuật công trình giao thông', benchmarkScore: 24.50, subjects: 'A00',      quota: 400, trend: 'down' },
      { code: 'TDH',     name: 'Kỹ thuật điều khiển TĐH',       benchmarkScore: 24.20, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'DIEN',    name: 'Kỹ thuật điện – điện tử',       benchmarkScore: 23.80, subjects: 'A00',      quota: 300, trend: 'stable' },
      { code: 'KTXD',    name: 'Kỹ thuật xây dựng',             benchmarkScore: 23.50, subjects: 'A00',      quota: 350, trend: 'down' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',            benchmarkScore: 24.80, subjects: 'A00, D01', quota: 200, trend: 'stable' },
      { code: 'KETOAN',  name: 'Kế toán',                        benchmarkScore: 24.50, subjects: 'A00, D01', quota: 200, trend: 'stable' },
    ]
  },

  {
    id: 'huce',
    name: 'Đại học Xây dựng Hà Nội',
    shortName: 'HUCE',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 19,
    majors: [
      { code: 'CNTT',   name: 'Công nghệ thông tin',            benchmarkScore: 27.00, subjects: 'A00, A01', quota: 200, trend: 'up' },
      { code: 'KIEN',   name: 'Kiến trúc',                      benchmarkScore: 26.50, subjects: 'A00, V00', quota: 150, trend: 'stable' },
      { code: 'QHDT',   name: 'Quy hoạch đô thị và nông thôn', benchmarkScore: 25.00, subjects: 'A00',      quota: 100, trend: 'stable' },
      { code: 'KTXD',   name: 'Kỹ thuật xây dựng',             benchmarkScore: 23.50, subjects: 'A00',      quota: 600, trend: 'down' },
      { code: 'KTXDGT', name: 'Xây dựng công trình giao thông', benchmarkScore: 24.50, subjects: 'A00',      quota: 300, trend: 'stable' },
      { code: 'NOIDUNG', name: 'Thiết kế nội thất',             benchmarkScore: 24.00, subjects: 'A00, V00', quota: 100, trend: 'stable' },
      { code: 'MT',     name: 'Kỹ thuật môi trường',            benchmarkScore: 22.50, subjects: 'A00, B00', quota: 150, trend: 'stable' },
      { code: 'CAPNUOC',name: 'Cấp thoát nước',                benchmarkScore: 21.50, subjects: 'A00',      quota: 100, trend: 'down' },
      { code: 'KETOAN', name: 'Kế toán xây dựng',              benchmarkScore: 23.00, subjects: 'A00, D01', quota: 150, trend: 'stable' },
      { code: 'QLDA',   name: 'Quản lý dự án',                 benchmarkScore: 24.00, subjects: 'A00',      quota: 150, trend: 'up' },
    ]
  },

  {
    id: 'humg',
    name: 'Đại học Mỏ – Địa chất',
    shortName: 'HUMG',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 20,
    majors: [
      { code: 'NNT',     name: 'Ngôn ngữ Trung Quốc',           benchmarkScore: 25.50, subjects: 'D04',      quota: 100, trend: 'up' },
      { code: 'TDH',     name: 'Kỹ thuật điều khiển & TĐH',    benchmarkScore: 25.25, subjects: 'A00',      quota: 150, trend: 'up' },
      { code: 'CKDT',    name: 'Kỹ thuật cơ điện tử',           benchmarkScore: 23.50, subjects: 'A00',      quota: 150, trend: 'stable' },
      { code: 'KTOTO',   name: 'Kỹ thuật ô tô',                 benchmarkScore: 23.00, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'KTDDT',   name: 'Kỹ thuật điện, điện tử',       benchmarkScore: 24.00, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',            benchmarkScore: 23.75, subjects: 'A00, D01', quota: 200, trend: 'stable' },
      { code: 'TCNH',    name: 'Tài chính – Ngân hàng',          benchmarkScore: 23.50, subjects: 'A00, D01', quota: 150, trend: 'stable' },
      { code: 'KETOAN',  name: 'Kế toán',                        benchmarkScore: 23.00, subjects: 'A00, D01', quota: 200, trend: 'stable' },
      { code: 'CNTT',    name: 'Công nghệ thông tin',            benchmarkScore: 21.50, subjects: 'A00, A01', quota: 200, trend: 'up' },
      { code: 'KHDL',    name: 'Khoa học dữ liệu',               benchmarkScore: 20.00, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'DIACHAT', name: 'Kỹ thuật địa chất',              benchmarkScore: 16.00, subjects: 'A00',      quota: 100, trend: 'down' },
      { code: 'MOIDIA',  name: 'Kỹ thuật mỏ',                   benchmarkScore: 16.00, subjects: 'A00',      quota: 150, trend: 'down' },
    ]
  },

  {
    id: 'hou',
    name: 'Đại học Mở Hà Nội',
    shortName: 'HOU',
    location: 'Hà Nội',
    type: 'Công lập',
    ranking: 21,
    majors: [
      { code: 'NNA',     name: 'Ngôn ngữ Anh',               benchmarkScore: 25.20, subjects: 'D01',      quota: 400, trend: 'up' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',         benchmarkScore: 24.80, subjects: 'A00, D01', quota: 350, trend: 'stable' },
      { code: 'TCNH',    name: 'Tài chính – Ngân hàng',       benchmarkScore: 24.70, subjects: 'A00, D01', quota: 300, trend: 'up' },
      { code: 'MKT',     name: 'Marketing',                   benchmarkScore: 24.50, subjects: 'A00, D01', quota: 200, trend: 'up' },
      { code: 'KETOAN',  name: 'Kế toán',                     benchmarkScore: 24.30, subjects: 'A00, D01', quota: 250, trend: 'stable' },
      { code: 'CNTT',    name: 'Công nghệ thông tin',         benchmarkScore: 24.00, subjects: 'A00, A01', quota: 300, trend: 'up' },
      { code: 'LUAT',    name: 'Luật',                        benchmarkScore: 23.80, subjects: 'C00, D01', quota: 200, trend: 'stable' },
      { code: 'LOG',     name: 'Logistics',                   benchmarkScore: 23.50, subjects: 'A00',      quota: 150, trend: 'up' },
      { code: 'TMDT',    name: 'Thương mại điện tử',         benchmarkScore: 24.00, subjects: 'A00, A01', quota: 150, trend: 'up' },
      { code: 'CNTP',    name: 'Công nghệ thực phẩm',        benchmarkScore: 23.20, subjects: 'A00, B00', quota: 100, trend: 'down' },
      { code: 'DULICH',  name: 'Du lịch',                     benchmarkScore: 23.00, subjects: 'C00',      quota: 150, trend: 'stable' },
    ]
  },

  // ╔══════════════════════════════════════════╗
  // ║         TP. HỒ CHÍ MINH & MIỀN NAM      ║
  // ╚══════════════════════════════════════════╝

  {
    id: 'hcmut',
    name: 'Đại học Bách khoa - ĐHQG TP.HCM',
    shortName: 'HCMUT',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 1,
    majors: [
      { code: 'KHDL',   name: 'Khoa học dữ liệu & AI',                 benchmarkScore: 28.00, subjects: 'A00, A01', quota: 80,  trend: 'up' },
      { code: 'CNTT',   name: 'Công nghệ thông tin',                   benchmarkScore: 28.20, subjects: 'A00, A01', quota: 180, trend: 'up' },
      { code: 'KHMT',   name: 'Khoa học máy tính',                     benchmarkScore: 28.00, subjects: 'A00, A01', quota: 150, trend: 'up' },
      { code: 'TDH',    name: 'Kỹ thuật điều khiển & Tự động hoá',   benchmarkScore: 27.50, subjects: 'A00, A01', quota: 200, trend: 'stable' },
      { code: 'CKDT',   name: 'Kỹ thuật cơ điện tử',                  benchmarkScore: 27.20, subjects: 'A00',      quota: 120, trend: 'stable' },
      { code: 'LOG',    name: 'Logistics & Quản lý chuỗi cung ứng',  benchmarkScore: 26.70, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'DIEN',   name: 'Kỹ thuật điện',                        benchmarkScore: 26.80, subjects: 'A00, A01', quota: 150, trend: 'down' },
      { code: 'KTHH',   name: 'Kỹ thuật hóa học',                     benchmarkScore: 26.50, subjects: 'A00, B00', quota: 150, trend: 'stable' },
      { code: 'KTYSH',  name: 'Kỹ thuật y sinh',                      benchmarkScore: 26.00, subjects: 'A00, B00', quota: 60,  trend: 'up' },
      { code: 'KTXD',   name: 'Kỹ thuật xây dựng',                    benchmarkScore: 25.80, subjects: 'A00',      quota: 100, trend: 'down' },
      { code: 'KIENTRUC', name: 'Kiến trúc',                          benchmarkScore: 25.50, subjects: 'A00, V00', quota: 60,  trend: 'stable' },
      { code: 'MT',     name: 'Kỹ thuật môi trường',                   benchmarkScore: 25.20, subjects: 'A00, B00', quota: 80,  trend: 'stable' },
      { code: 'VL',     name: 'Kỹ thuật vật liệu',                    benchmarkScore: 24.80, subjects: 'A00',      quota: 60,  trend: 'stable' },
      { code: 'DAUKHI', name: 'Kỹ thuật dầu khí',                    benchmarkScore: 25.00, subjects: 'A00',      quota: 80,  trend: 'stable' },
    ]
  },

  {
    id: 'ueh',
    name: 'Đại học Kinh tế TP.HCM',
    shortName: 'UEH',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 2,
    majors: [
      { code: 'KDQT',    name: 'Kinh doanh quốc tế',          benchmarkScore: 27.20, subjects: 'A00, A01, D01', quota: 300, trend: 'up' },
      { code: 'LOG',     name: 'Logistics',                    benchmarkScore: 27.50, subjects: 'A00, A01',      quota: 250, trend: 'up' },
      { code: 'MKT',     name: 'Marketing',                   benchmarkScore: 27.00, subjects: 'A00, A01, D01', quota: 400, trend: 'up' },
      { code: 'KTQT',    name: 'Kinh tế quốc tế',             benchmarkScore: 26.90, subjects: 'A00, A01, D01', quota: 200, trend: 'up' },
      { code: 'TMDT',    name: 'Thương mại điện tử',          benchmarkScore: 26.70, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',         benchmarkScore: 26.80, subjects: 'A00, A01, D01', quota: 550, trend: 'stable' },
      { code: 'TCNH',    name: 'Tài chính – Ngân hàng',       benchmarkScore: 26.50, subjects: 'A00, A01, D01', quota: 500, trend: 'stable' },
      { code: 'LUATKT',  name: 'Luật kinh tế',                benchmarkScore: 26.30, subjects: 'C00, D01',      quota: 200, trend: 'stable' },
      { code: 'KETOAN',  name: 'Kế toán',                     benchmarkScore: 26.20, subjects: 'A00, A01, D01', quota: 400, trend: 'down' },
      { code: 'KHDL',    name: 'Khoa học dữ liệu kinh doanh', benchmarkScore: 26.50, subjects: 'A00, A01',      quota: 100, trend: 'up' },
      { code: 'QTNL',    name: 'Quản trị nhân lực',           benchmarkScore: 25.80, subjects: 'A00, D01',      quota: 150, trend: 'down' },
      { code: 'KINHTE',  name: 'Kinh tế học',                 benchmarkScore: 25.50, subjects: 'A00',           quota: 150, trend: 'stable' },
      { code: 'BHXH',    name: 'Bảo hiểm – An sinh xã hội',  benchmarkScore: 24.50, subjects: 'A00, D01',      quota: 80,  trend: 'stable' },
    ]
  },

  {
    id: 'uel',
    name: 'Đại học Kinh tế – Luật - ĐHQG TP.HCM',
    shortName: 'UEL',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 3,
    majors: [
      { code: 'LOG',    name: 'Kinh doanh QT & Logistics',    benchmarkScore: 28.08, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'MKT',    name: 'Marketing',                    benchmarkScore: 27.32, subjects: 'A00, A01, D01', quota: 200, trend: 'up' },
      { code: 'KTQT',   name: 'Kinh tế quốc tế',             benchmarkScore: 27.28, subjects: 'A00, A01, D01', quota: 200, trend: 'up' },
      { code: 'QTKD',   name: 'Quản trị kinh doanh',         benchmarkScore: 26.59, subjects: 'A00, A01, D01', quota: 350, trend: 'stable' },
      { code: 'LUATKT', name: 'Luật kinh tế – TM quốc tế',  benchmarkScore: 26.59, subjects: 'C00, D01',      quota: 200, trend: 'up' },
      { code: 'KINHTE', name: 'Kinh tế học',                  benchmarkScore: 25.42, subjects: 'A00, A01',      quota: 200, trend: 'stable' },
      { code: 'LUAT',   name: 'Luật dân sự',                 benchmarkScore: 24.75, subjects: 'C00, D01',      quota: 150, trend: 'stable' },
      { code: 'TCNH',   name: 'Tài chính – Ngân hàng',       benchmarkScore: 25.80, subjects: 'A00, A01, D01', quota: 250, trend: 'stable' },
      { code: 'KETOAN', name: 'Kế toán – Kiểm toán',        benchmarkScore: 25.50, subjects: 'A00, A01, D01', quota: 200, trend: 'stable' },
      { code: 'KHDL',   name: 'Khoa học dữ liệu',            benchmarkScore: 26.00, subjects: 'A00, A01',      quota: 80,  trend: 'up' },
    ]
  },

  {
    id: 'hcmus',
    name: 'Đại học Khoa học Tự nhiên - ĐHQG TP.HCM',
    shortName: 'HCMUS',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 4,
    majors: [
      { code: 'KHMT',    name: 'Khoa học máy tính',          benchmarkScore: 27.50, subjects: 'A00, A01', quota: 400, trend: 'up' },
      { code: 'CNTT',    name: 'Công nghệ thông tin',        benchmarkScore: 27.00, subjects: 'A00, A01', quota: 450, trend: 'stable' },
      { code: 'KHDL',    name: 'Khoa học dữ li��u',           benchmarkScore: 26.80, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'AI',      name: 'Trí tuệ nhân tạo',           benchmarkScore: 26.50, subjects: 'A00, A01', quota: 80,  trend: 'up' },
      { code: 'TOANTIN', name: 'Toán tin',                   benchmarkScore: 25.20, subjects: 'A00, A01', quota: 250, trend: 'up' },
      { code: 'ATTT',    name: 'An toàn thông tin',          benchmarkScore: 26.50, subjects: 'A00, A01', quota: 80,  trend: 'up' },
      { code: 'CNSH',    name: 'Công nghệ sinh học',         benchmarkScore: 25.50, subjects: 'B00',      quota: 300, trend: 'stable' },
      { code: 'HOA',     name: 'Hóa học',                    benchmarkScore: 24.80, subjects: 'A00, B00', quota: 350, trend: 'down' },
      { code: 'VATLY',   name: 'Vật lý học',                 benchmarkScore: 24.50, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'TOAN',    name: 'Toán học',                   benchmarkScore: 24.00, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'DIACHAT', name: 'Địa chất học',               benchmarkScore: 22.80, subjects: 'A00',      quota: 100, trend: 'stable' },
      { code: 'KHMT-MT', name: 'Khoa học môi trường',        benchmarkScore: 23.50, subjects: 'B00',      quota: 150, trend: 'down' },
    ]
  },

  {
    id: 'uit',
    name: 'Đại học Công nghệ Thông tin - ĐHQG TP.HCM',
    shortName: 'UIT',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 5,
    majors: [
      { code: 'AI',     name: 'Trí tuệ nhân tạo',             benchmarkScore: 27.00, subjects: 'A00, A01',      quota: 80,  trend: 'up' },
      { code: 'KHMT',   name: 'Khoa học máy tính',            benchmarkScore: 27.20, subjects: 'A00, A01',      quota: 250, trend: 'up' },
      { code: 'KHDL',   name: 'Khoa học dữ liệu',             benchmarkScore: 26.70, subjects: 'A00, A01',      quota: 100, trend: 'up' },
      { code: 'ATTT',   name: 'An toàn thông tin',            benchmarkScore: 26.80, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'KTPM',   name: 'Kỹ thuật phần mềm',           benchmarkScore: 26.90, subjects: 'A00, A01',      quota: 200, trend: 'stable' },
      { code: 'HTTT',   name: 'Hệ thống thông tin',           benchmarkScore: 26.50, subjects: 'A00, A01',      quota: 200, trend: 'stable' },
      { code: 'MMT',    name: 'Mạng máy tính',               benchmarkScore: 25.80, subjects: 'A00, A01',      quota: 150, trend: 'down' },
      { code: 'TMDT',   name: 'Thương mại điện tử',          benchmarkScore: 25.50, subjects: 'A00, A01, D01', quota: 120, trend: 'stable' },
      { code: 'IOT',    name: 'Internet of Things',           benchmarkScore: 25.00, subjects: 'A00',           quota: 100, trend: 'stable' },
      { code: 'GAME',   name: 'Công nghệ game',               benchmarkScore: 24.50, subjects: 'A00, A01',      quota: 80, trend: 'new' },
      { code: 'ROBOT',  name: 'Kỹ thuật robot',              benchmarkScore: 25.50, subjects: 'A00',           quota: 60,  trend: 'up' },
    ]
  },

  {
    id: 'ump',
    name: 'Đại học Y Dược TP.HCM',
    shortName: 'UMP',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 6,
    majors: [
      { code: 'YKHOA',     name: 'Y khoa',                   benchmarkScore: 27.30, subjects: 'B00', quota: 400, trend: 'stable' },
      { code: 'RHM',       name: 'Răng – Hàm – Mặt',        benchmarkScore: 27.10, subjects: 'B00', quota: 120, trend: 'up' },
      { code: 'DUOC',      name: 'Dược học',                 benchmarkScore: 26.50, subjects: 'B00', quota: 450, trend: 'down' },
      { code: 'XNYH',      name: 'Xét nghiệm y học',        benchmarkScore: 25.20, subjects: 'B00', quota: 150, trend: 'up' },
      { code: 'DIEUDUONG', name: 'Điều dưỡng',              benchmarkScore: 24.80, subjects: 'B00', quota: 300, trend: 'stable' },
      { code: 'KTHA',      name: 'Kỹ thuật hình ảnh',       benchmarkScore: 24.00, subjects: 'B00', quota: 80,  trend: 'stable' },
      { code: 'PHCN',      name: 'Phục hồi chức năng',      benchmarkScore: 23.20, subjects: 'B00', quota: 80,  trend: 'up' },
      { code: 'HOSINH',    name: 'Hộ sinh',                 benchmarkScore: 23.50, subjects: 'B00', quota: 100, trend: 'down' },
      { code: 'YTCC',      name: 'Y tế công cộng',          benchmarkScore: 22.80, subjects: 'B00', quota: 80,  trend: 'stable' },
      { code: 'YHCT',      name: 'Y học cổ truyền',         benchmarkScore: 23.00, subjects: 'B00', quota: 100, trend: 'stable' },
      { code: 'DINHDUONG', name: 'Dinh dưỡng',              benchmarkScore: 21.50, subjects: 'B00', quota: 60,  trend: 'down' },
    ]
  },

  {
    id: 'pnt',
    name: 'Đại học Y khoa Phạm Ngọc Thạch',
    shortName: 'PNT',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 7,
    majors: [
      { code: 'YKHOA',     name: 'Y khoa',                        benchmarkScore: 25.55, subjects: 'B00', quota: 400, trend: 'stable' },
      { code: 'RHM',       name: 'Răng – Hàm – Mặt',             benchmarkScore: 25.26, subjects: 'B00', quota: 100, trend: 'stable' },
      { code: 'DUOC',      name: 'Dược học',                      benchmarkScore: 22.00, subjects: 'B00', quota: 300, trend: 'stable' },
      { code: 'YHCT',      name: 'Y học cổ truyền',               benchmarkScore: 21.10, subjects: 'B00', quota: 150, trend: 'stable' },
      { code: 'XNYH',      name: 'Kỹ thuật xét nghiệm y học',    benchmarkScore: 21.50, subjects: 'B00', quota: 150, trend: 'stable' },
      { code: 'KTHA',      name: 'Kỹ thuật hình ảnh y học',      benchmarkScore: 20.55, subjects: 'B00', quota: 80,  trend: 'stable' },
      { code: 'PHCN',      name: 'Kỹ thuật phục hồi chức năng',  benchmarkScore: 21.25, subjects: 'B00', quota: 80,  trend: 'up' },
      { code: 'DIEUDUONG', name: 'Điều dưỡng',                   benchmarkScore: 19.60, subjects: 'B00', quota: 200, trend: 'down' },
      { code: 'HOSINH',    name: 'Hộ sinh',                      benchmarkScore: 19.60, subjects: 'B00', quota: 50,  trend: 'down' },
      { code: 'YTCC',      name: 'Y tế công cộng',               benchmarkScore: 18.00, subjects: 'B00', quota: 100, trend: 'down' },
      { code: 'DINHDUONG', name: 'Dinh dưỡng',                   benchmarkScore: 18.00, subjects: 'B00', quota: 50,  trend: 'down' },
    ]
  },

  {
    id: 'hcmul',
    name: 'Đại học Luật TP.HCM',
    shortName: 'HCMUL',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 8,
    majors: [
      { code: 'LUATTMQT', name: 'Luật thương mại quốc tế',  benchmarkScore: 25.65, subjects: 'D01',      quota: 150, trend: 'up' },
      { code: 'LUAT',     name: 'Luật',                      benchmarkScore: 24.44, subjects: 'C00',      quota: 500, trend: 'stable' },
      { code: 'LUATDS',   name: 'Luật Dân sự',               benchmarkScore: 24.50, subjects: 'C00, D01', quota: 200, trend: 'stable' },
      { code: 'QUANLUAT', name: 'Quản trị – Luật',           benchmarkScore: 23.76, subjects: 'A00, D01', quota: 200, trend: 'stable' },
      { code: 'KTQT',     name: 'Kinh tế quốc tế',           benchmarkScore: 22.50, subjects: 'A00, D01', quota: 100, trend: 'stable' },
      { code: 'QTKD',     name: 'Quản trị kinh doanh',       benchmarkScore: 21.50, subjects: 'A00, D01', quota: 200, trend: 'stable' },
      { code: 'NNA',      name: 'Ngôn ngữ Anh',              benchmarkScore: 22.00, subjects: 'D01',      quota: 150, trend: 'stable' },
      { code: 'KSOSAT',   name: 'Luật kinh doanh quốc tế',  benchmarkScore: 24.00, subjects: 'C00, D01', quota: 100, trend: 'up' },
    ]
  },

  {
    id: 'hcmue',
    name: 'Đại học Sư phạm TP.HCM',
    shortName: 'HCMUE',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 9,
    majors: [
      { code: 'SPTOAN',   name: 'Sư phạm Toán',             benchmarkScore: 28.00, subjects: 'A00',      quota: 250, trend: 'up' },
      { code: 'SPVAN',    name: 'Sư phạm Ngữ văn',          benchmarkScore: 28.00, subjects: 'C00, D01', quota: 200, trend: 'up' },
      { code: 'SPANH',    name: 'Sư phạm Tiếng Anh',        benchmarkScore: 27.50, subjects: 'D01',      quota: 300, trend: 'stable' },
      { code: 'SPVATLY',  name: 'Sư phạm Vật lý',           benchmarkScore: 27.00, subjects: 'A00',      quota: 150, trend: 'stable' },
      { code: 'SPHOA',    name: 'Sư phạm Hóa học',          benchmarkScore: 26.80, subjects: 'A00, B00', quota: 150, trend: 'stable' },
      { code: 'SPSINH',   name: 'Sư phạm Sinh học',         benchmarkScore: 26.50, subjects: 'B00',      quota: 120, trend: 'stable' },
      { code: 'GDTH',     name: 'Giáo dục Tiểu học',        benchmarkScore: 26.50, subjects: 'C00, D01', quota: 350, trend: 'up' },
      { code: 'TAMLY',    name: 'Tâm lý học giáo dục',      benchmarkScore: 26.00, subjects: 'C00, D01', quota: 200, trend: 'up' },
      { code: 'GDMN',     name: 'Giáo dục Mầm non',         benchmarkScore: 25.80, subjects: 'C00',      quota: 300, trend: 'down' },
      { code: 'GDDB',     name: 'Giáo dục đặc biệt',        benchmarkScore: 25.50, subjects: 'C00',      quota: 100, trend: 'up' },
      { code: 'SPTIN',    name: 'Sư phạm Tin học',           benchmarkScore: 25.00, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'SPSU',     name: 'Sư phạm Lịch sử',          benchmarkScore: 26.50, subjects: 'C00',      quota: 100, trend: 'stable' },
    ]
  },

  {
    id: 'hub',
    name: 'Đại học Ngân hàng TP.HCM',
    shortName: 'HUB',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 10,
    majors: [
      { code: 'TCNH',    name: 'Tài chính – Ngân hàng',     benchmarkScore: 25.50, subjects: 'A00, A01, D01', quota: 400, trend: 'stable' },
      { code: 'MKT',     name: 'Marketing',                  benchmarkScore: 25.20, subjects: 'A00, A01, D01', quota: 200, trend: 'up' },
      { code: 'KETOAN',  name: 'Kế toán',                    benchmarkScore: 24.80, subjects: 'A00, A01, D01', quota: 300, trend: 'down' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',        benchmarkScore: 24.70, subjects: 'A00, A01, D01', quota: 350, trend: 'up' },
      { code: 'KIEMTOAN',name: 'Kiểm toán',                 benchmarkScore: 24.50, subjects: 'A00, A01, D01', quota: 150, trend: 'stable' },
      { code: 'KTQT',    name: 'Kinh tế quốc tế',           benchmarkScore: 24.60, subjects: 'A00, A01, D01', quota: 150, trend: 'stable' },
      { code: 'TMDT',    name: 'Thương mại điện tử',         benchmarkScore: 24.00, subjects: 'A00, A01',      quota: 150, trend: 'stable' },
      { code: 'LOG',     name: 'Logistics',                  benchmarkScore: 24.30, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'LUATKT',  name: 'Luật kinh tế',              benchmarkScore: 23.80, subjects: 'C00, D01',      quota: 200, trend: 'down' },
      { code: 'FINTECH', name: 'Công nghệ tài chính',        benchmarkScore: 24.50, subjects: 'A00, A01',      quota: 100, trend: 'up' },
      { code: 'HTTTQL',  name: 'Hệ thống thông tin quản lý',benchmarkScore: 23.50, subjects: 'A00, A01',      quota: 100, trend: 'down' },
    ]
  },

  {
    id: 'nlu',
    name: 'Đại học Nông Lâm TP.HCM',
    shortName: 'NLU',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 11,
    majors: [
      { code: 'THUY',    name: 'Thú y',                     benchmarkScore: 27.00, subjects: 'B00',      quota: 250, trend: 'up' },
      { code: 'CNSH',    name: 'Công nghệ sinh học',        benchmarkScore: 24.80, subjects: 'B00',      quota: 200, trend: 'stable' },
      { code: 'CNTT',    name: 'Công nghệ thông tin',       benchmarkScore: 23.00, subjects: 'A00, A01', quota: 180, trend: 'up' },
      { code: 'CNTP',    name: 'Công nghệ thực phẩm',      benchmarkScore: 23.50, subjects: 'A00, B00', quota: 300, trend: 'down' },
      { code: 'KHMT-MT', name: 'Khoa học môi trường',      benchmarkScore: 22.80, subjects: 'A00, B00', quota: 150, trend: 'down' },
      { code: 'QLDD',    name: 'Quản lý đất đai',          benchmarkScore: 22.50, subjects: 'A00',      quota: 150, trend: 'stable' },
      { code: 'NONGHOC', name: 'Nông học',                  benchmarkScore: 21.80, subjects: 'B00',      quota: 100, trend: 'stable' },
      { code: 'CHANNUOI',name: 'Chăn nuôi',                benchmarkScore: 21.50, subjects: 'B00',      quota: 100, trend: 'down' },
      { code: 'KTNN',    name: 'Kinh tế nông nghiệp',      benchmarkScore: 22.00, subjects: 'A00, D01', quota: 120, trend: 'stable' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',      benchmarkScore: 22.30, subjects: 'A00, D01', quota: 150, trend: 'up' },
      { code: 'LAMGHEP', name: 'Lâm nghiệp',               benchmarkScore: 20.50, subjects: 'A00, B00', quota: 100, trend: 'down' },
      { code: 'NTTS',    name: 'Nuôi trồng thuỷ sản',      benchmarkScore: 20.00, subjects: 'B00',      quota: 100, trend: 'stable' },
    ]
  },

  {
    id: 'tdtu',
    name: 'Đại học Tôn Đức Thắng',
    shortName: 'TDTU',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 12,
    majors: [
      { code: 'KHMT',   name: 'Khoa học máy tính',          benchmarkScore: 26.80, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'CNTT',   name: 'Công nghệ thông tin',        benchmarkScore: 26.50, subjects: 'A00, A01',      quota: 300, trend: 'up' },
      { code: 'KTPM',   name: 'Kỹ thuật phần mềm',         benchmarkScore: 26.20, subjects: 'A00, A01',      quota: 150, trend: 'stable' },
      { code: 'LOG',    name: 'Logistics',                  benchmarkScore: 26.00, subjects: 'A00, A01',      quota: 200, trend: 'up' },
      { code: 'MKT',    name: 'Marketing',                  benchmarkScore: 25.80, subjects: 'A00, A01, D01', quota: 250, trend: 'up' },
      { code: 'QTKD',   name: 'Quản trị kinh doanh',        benchmarkScore: 25.50, subjects: 'A00, A01, D01', quota: 400, trend: 'stable' },
      { code: 'TCNH',   name: 'Tài chính – Ngân hàng',     benchmarkScore: 25.20, subjects: 'A00, A01, D01', quota: 300, trend: 'down' },
      { code: 'KETOAN', name: 'Kế toán',                    benchmarkScore: 25.00, subjects: 'A00, A01, D01', quota: 250, trend: 'stable' },
      { code: 'NNA',    name: 'Ngôn ngữ Anh',              benchmarkScore: 24.50, subjects: 'D01',           quota: 200, trend: 'stable' },
      { code: 'LUAT',   name: 'Luật',                       benchmarkScore: 24.80, subjects: 'C00, D01',     quota: 200, trend: 'up' },
      { code: 'KIEN',   name: 'Kiến trúc',                  benchmarkScore: 23.50, subjects: 'A00, V00',     quota: 80,  trend: 'stable' },
      { code: 'XDDD',   name: 'Xây dựng dân dụng',         benchmarkScore: 23.00, subjects: 'A00',          quota: 150, trend: 'stable' },
    ]
  },

  {
    id: 'huit',
    name: 'Đại học Công Thương TP.HCM',
    shortName: 'HUIT',
    location: 'TP. Hồ Chí Minh',
    type: 'Công lập',
    ranking: 13,
    majors: [
      { code: 'LOG',    name: 'Logistics & Chuỗi cung ứng', benchmarkScore: 24.50, subjects: 'A00, A01',      quota: 200, trend: 'up' },
      { code: 'MKT',   name: 'Marketing',                   benchmarkScore: 24.20, subjects: 'A00, A01, D01', quota: 250, trend: 'stable' },
      { code: 'CNTT',  name: 'Công nghệ thông tin',        benchmarkScore: 23.00, subjects: 'A00, A01',      quota: 250, trend: 'up' },
      { code: 'LUATKT',name: 'Luật kinh tế',               benchmarkScore: 23.70, subjects: 'C00, D01',      quota: 150, trend: 'up' },
      { code: 'QTKD',  name: 'Quản trị kinh doanh',         benchmarkScore: 23.80, subjects: 'A00, A01, D01', quota: 300, trend: 'down' },
      { code: 'KETOAN',name: 'Kế toán',                     benchmarkScore: 23.50, subjects: 'A00, A01, D01', quota: 200, trend: 'stable' },
      { code: 'TCNH',  name: 'Tài chính – Ngân hàng',      benchmarkScore: 23.20, subjects: 'A00, A01, D01', quota: 250, trend: 'down' },
      { code: 'CNTP',  name: 'Công nghệ thực phẩm',        benchmarkScore: 22.80, subjects: 'A00, B00',      quota: 300, trend: 'stable' },
      { code: 'NNA',   name: 'Ngôn ngữ Anh',               benchmarkScore: 23.30, subjects: 'D01',           quota: 150, trend: 'stable' },
      { code: 'DLLH',  name: 'Du lịch & Lữ hành',          benchmarkScore: 22.50, subjects: 'C00, D01',      quota: 150, trend: 'stable' },
      { code: 'TMDT',  name: 'Thương mại điện tử',         benchmarkScore: 23.50, subjects: 'A00, A01',      quota: 150, trend: 'up' },
    ]
  },

  // ╔══════════════════════════════════════════╗
  // ║              MIỀN TRUNG                  ║
  // ╚══════════════════════════════════════════╝

  {
    id: 'hue-uni',
    name: 'Đại học Huế',
    shortName: 'HueUni',
    location: 'Miền Trung',
    type: 'Công lập',
    ranking: 1,
    majors: [
      { code: 'YKHOA',     name: 'Y khoa',                   benchmarkScore: 26.90, subjects: 'B00',      quota: 400, trend: 'up' },
      { code: 'DUOC',      name: 'Dược học',                 benchmarkScore: 25.80, subjects: 'B00',      quota: 200, trend: 'stable' },
      { code: 'RHM',       name: 'Răng – Hàm – Mặt',        benchmarkScore: 25.50, subjects: 'B00',      quota: 80,  trend: 'up' },
      { code: 'CNTT',      name: 'Công nghệ thông tin',      benchmarkScore: 24.80, subjects: 'A00, A01', quota: 250, trend: 'up' },
      { code: 'DIEUDUONG', name: 'Điều dưỡng',              benchmarkScore: 24.50, subjects: 'B00',      quota: 150, trend: 'down' },
      { code: 'QTKD',      name: 'Quản trị kinh doanh',      benchmarkScore: 24.50, subjects: 'A00, D01', quota: 300, trend: 'stable' },
      { code: 'KINHTE',    name: 'Kinh tế',                  benchmarkScore: 24.20, subjects: 'A00, D01', quota: 200, trend: 'down' },
      { code: 'LUAT',      name: 'Luật',                     benchmarkScore: 23.80, subjects: 'C00, D01', quota: 200, trend: 'up' },
      { code: 'NNA',       name: 'Ngôn ngữ Anh',            benchmarkScore: 23.50, subjects: 'D01',      quota: 150, trend: 'stable' },
      { code: 'TAMLY',     name: 'Tâm lý học',              benchmarkScore: 23.00, subjects: 'C00, D01', quota: 100, trend: 'up' },
      { code: 'XHH',       name: 'Xã hội học',              benchmarkScore: 23.20, subjects: 'C00',      quota: 100, trend: 'stable' },
      { code: 'LICHSU',    name: 'Lịch sử',                 benchmarkScore: 22.50, subjects: 'C00',      quota: 80,  trend: 'stable' },
    ]
  },

  {
    id: 'dut',
    name: 'Đại học Bách khoa Đà Nẵng - ĐHĐ',
    shortName: 'DUT',
    location: 'Miền Trung',
    type: 'Công lập',
    ranking: 2,
    majors: [
      { code: 'CNTT',   name: 'Công nghệ thông tin',         benchmarkScore: 26.50, subjects: 'A00, A01', quota: 300, trend: 'up' },
      { code: 'KHDL',   name: 'Khoa học dữ liệu',           benchmarkScore: 26.00, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'AI',     name: 'Trí tuệ nhân tạo',           benchmarkScore: 25.80, subjects: 'A00, A01', quota: 80,  trend: 'up' },
      { code: 'TDH',    name: 'Tự động hoá',                benchmarkScore: 25.80, subjects: 'A00',      quota: 200, trend: 'stable' },
      { code: 'KTDT',   name: 'Kỹ thuật điện tử',           benchmarkScore: 25.50, subjects: 'A00',      quota: 250, trend: 'stable' },
      { code: 'LOG',    name: 'Logistics',                   benchmarkScore: 25.00, subjects: 'A00, A01', quota: 100, trend: 'up' },
      { code: 'DIEN',   name: 'Kỹ thuật điện',              benchmarkScore: 25.20, subjects: 'A00',      quota: 300, trend: 'stable' },
      { code: 'COKHI',  name: 'Cơ khí',                     benchmarkScore: 24.50, subjects: 'A00',      quota: 400, trend: 'down' },
      { code: 'KTHH',   name: 'Kỹ thuật hóa học',           benchmarkScore: 24.00, subjects: 'A00, B00', quota: 200, trend: 'down' },
      { code: 'KTXD',   name: 'Kỹ thuật xây dựng',          benchmarkScore: 24.20, subjects: 'A00',      quota: 250, trend: 'stable' },
      { code: 'KIEN',   name: 'Kiến trúc',                  benchmarkScore: 24.50, subjects: 'A00, V00', quota: 80,  trend: 'stable' },
      { code: 'MT',     name: 'Kỹ thuật môi trường',        benchmarkScore: 23.50, subjects: 'A00, B00', quota: 150, trend: 'stable' },
    ]
  },

  {
    id: 'due',
    name: 'Đại học Kinh tế Đà Nẵng - ĐHĐ',
    shortName: 'DUE',
    location: 'Miền Trung',
    type: 'Công lập',
    ranking: 3,
    majors: [
      { code: 'MKT',    name: 'Marketing',                   benchmarkScore: 25.80, subjects: 'A00, D01',      quota: 250, trend: 'up' },
      { code: 'QTKD',   name: 'Quản trị kinh doanh',        benchmarkScore: 25.50, subjects: 'A00, D01',      quota: 400, trend: 'up' },
      { code: 'LOG',    name: 'Logistics',                   benchmarkScore: 25.20, subjects: 'A00, A01',      quota: 150, trend: 'up' },
      { code: 'TMDT',   name: 'Thương mại điện tử',         benchmarkScore: 25.00, subjects: 'A00, A01',      quota: 120, trend: 'up' },
      { code: 'KTQT',   name: 'Kinh tế quốc tế',            benchmarkScore: 25.00, subjects: 'A00, D01',      quota: 200, trend: 'stable' },
      { code: 'TCNH',   name: 'Tài chính – Ngân hàng',      benchmarkScore: 25.30, subjects: 'A00, A01, D01', quota: 350, trend: 'stable' },
      { code: 'KETOAN', name: 'Kế toán',                     benchmarkScore: 24.80, subjects: 'A00, A01, D01', quota: 300, trend: 'down' },
      { code: 'KINHTE', name: 'Kinh tế học',                 benchmarkScore: 24.50, subjects: 'A00',           quota: 150, trend: 'down' },
      { code: 'LUATKT', name: 'Luật kinh tế',               benchmarkScore: 24.20, subjects: 'C00, D01',      quota: 100, trend: 'stable' },
      { code: 'DULICH',  name: 'Du lịch',                    benchmarkScore: 24.00, subjects: 'C00, D01',      quota: 150, trend: 'stable' },
    ]
  },

  {
    id: 'duy-tan',
    name: 'Đại học Duy Tân',
    shortName: 'DTU',
    location: 'Miền Trung',
    type: 'Tư thục',
    ranking: 4,
    majors: [
      { code: 'YKHOA',     name: 'Y khoa',                   benchmarkScore: 20.50, subjects: 'B00',      quota: 250, trend: 'stable' },
      { code: 'RHM',       name: 'Răng – Hàm – Mặt',        benchmarkScore: 20.50, subjects: 'B00',      quota: 80,  trend: 'stable' },
      { code: 'DUOC',      name: 'Dược học',                 benchmarkScore: 19.00, subjects: 'B00',      quota: 200, trend: 'stable' },
      { code: 'CNTT',      name: 'Công nghệ thông tin',      benchmarkScore: 18.00, subjects: 'A00, A01', quota: 300, trend: 'up' },
      { code: 'KTPM',      name: 'Kỹ thuật phần mềm',       benchmarkScore: 18.00, subjects: 'A00, A01', quota: 200, trend: 'up' },
      { code: 'KIEN',      name: 'Kiến trúc',                benchmarkScore: 20.00, subjects: 'A00, V00', quota: 100, trend: 'stable' },
      { code: 'QTKD',      name: 'Quản trị kinh doanh',      benchmarkScore: 17.00, subjects: 'A00, D01', quota: 300, trend: 'stable' },
      { code: 'MKT',       name: 'Marketing',                benchmarkScore: 17.00, subjects: 'A00, D01', quota: 200, trend: 'stable' },
      { code: 'NNA',       name: 'Ngôn ngữ Anh',            benchmarkScore: 17.00, subjects: 'D01',      quota: 200, trend: 'stable' },
      { code: 'DIEUDUONG', name: 'Điều dưỡng',              benchmarkScore: 17.00, subjects: 'B00',      quota: 150, trend: 'down' },
    ]
  },

  // ╔══════════════════════════════════════════╗
  // ║              MIỀN NAM                    ║
  // ╚══════════════════════════════════════════╝

  {
    id: 'ctu',
    name: 'Đại học Cần Thơ',
    shortName: 'CTU',
    location: 'Miền Nam',
    type: 'Công lập',
    ranking: 1,
    majors: [
      { code: 'YKHOA',   name: 'Y khoa',                           benchmarkScore: 25.50, subjects: 'B00',      quota: 100, trend: 'up' },
      { code: 'DUOC',    name: 'Dược học',                         benchmarkScore: 24.80, subjects: 'B00',      quota: 100, trend: 'stable' },
      { code: 'KHMT',    name: 'Khoa học máy tính',                benchmarkScore: 25.20, subjects: 'A00, A01', quota: 200, trend: 'up' },
      { code: 'CNTT',    name: 'Công nghệ thông tin',              benchmarkScore: 24.80, subjects: 'A00, A01', quota: 200, trend: 'up' },
      { code: 'QTKD',    name: 'Quản trị kinh doanh',              benchmarkScore: 24.80, subjects: 'A00, D01', quota: 400, trend: 'stable' },
      { code: 'LOG',     name: 'Logistic & Quản lý chuỗi cung ứng',benchmarkScore: 24.50, subjects: 'A00, A01', quota: 150, trend: 'up' },
      { code: 'TCNH',    name: 'Tài chính – Ngân hàng',            benchmarkScore: 24.50, subjects: 'A00, D01', quota: 300, trend: 'down' },
      { code: 'KETOAN',  name: 'Kế toán',                          benchmarkScore: 24.20, subjects: 'A00, D01', quota: 250, trend: 'stable' },
      { code: 'CNTP',    name: 'Công nghệ thực phẩm',              benchmarkScore: 24.00, subjects: 'A00, B00', quota: 200, trend: 'stable' },
      { code: 'NONGHOC', name: 'Nông học',                          benchmarkScore: 23.80, subjects: 'B00',      quota: 150, trend: 'up' },
      { code: 'DLLH',    name: 'Du lịch & Lữ hành',               benchmarkScore: 23.80, subjects: 'C00',      quota: 150, trend: 'stable' },
      { code: 'NNA',     name: 'Ngôn ngữ Anh',                    benchmarkScore: 23.50, subjects: 'D01',      quota: 200, trend: 'down' },
      { code: 'LUAT',    name: 'Luật',                             benchmarkScore: 23.00, subjects: 'C00, D01', quota: 150, trend: 'stable' },
      { code: 'THUY',    name: 'Thú y',                            benchmarkScore: 24.00, subjects: 'B00',      quota: 100, trend: 'stable' },
      { code: 'CHANNUOI',name: 'Chăn nuôi',                       benchmarkScore: 23.20, subjects: 'B00',      quota: 100, trend: 'stable' },
    ]
  },

];
const regions = [
  "Tất cả",
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Miền Bắc",
  "Miền Nam",
  "Miền Trung",
];
const types = ["Tất cả", "Công lập", "Tư thục"];

export function UniversitySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] =
    useState("Tất cả");
  const [selectedType, setSelectedType] = useState("Tất cả");
  const [expandedUniversity, setExpandedUniversity] = useState<
    string | null
  >(null);

  const filteredUniversities = mockUniversities.filter(
    (uni) => {
      const matchesSearch =
        uni.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        uni.shortName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      const matchesRegion =
        selectedRegion === "Tất cả" ||
        uni.location === selectedRegion;
      const matchesType =
        selectedType === "Tất cả" || uni.type === selectedType;

      return matchesSearch && matchesRegion && matchesType;
    },
  );

  const toggleUniversity = (id: string) => {
    setExpandedUniversity(
      expandedUniversity === id ? null : id,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Award size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold">
                Điểm Chuẩn & Thông Tin Trường
              </h2>
              <p className="text-purple-100 mt-1">
                Tra cứu điểm chuẩn của 200+ trường đại học trên
                toàn quốc
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Tìm trường..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <select
                value={selectedRegion}
                onChange={(e) =>
                  setSelectedRegion(e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedType}
                onChange={(e) =>
                  setSelectedType(e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Tìm thấy{" "}
            <span className="font-semibold text-blue-600">
              {filteredUniversities.length}
            </span>{" "}
            trường
          </p>
        </div>

        {/* Universities List */}
        <div className="space-y-4">
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className="p-6 cursor-pointer hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all"
                onClick={() => toggleUniversity(university.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {university.shortName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">
                          {university.name}
                        </h3>
                        <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                          {university.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <MapPin
                          size={16}
                          className="text-red-500"
                        />
                        <span className="font-medium">
                          {university.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 px-3 py-1.5 rounded-lg">
                        <Award
                          size={16}
                          className="text-yellow-600"
                        />
                        <span className="font-medium">
                          Top {university.ranking}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-lg">
                        <Users
                          size={16}
                          className="text-purple-600"
                        />
                        <span className="font-medium">
                          {university.majors.length} ngành tuyển
                          sinh
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="ml-4 p-2 hover:bg-white rounded-lg transition-colors">
                    {expandedUniversity === university.id ? (
                      <ChevronUp
                        className="text-gray-400"
                        size={24}
                      />
                    ) : (
                      <ChevronDown
                        className="text-gray-400"
                        size={24}
                      />
                    )}
                  </button>
                </div>
              </div>

              {expandedUniversity === university.id && (
                <div className="px-6 pb-6 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
                  <h4 className="font-bold text-lg mb-4 mt-6 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                    Điểm chuẩn các ngành
                  </h4>
                  <div className="space-y-3">
                    {university.majors.map((major, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-purple-300 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-bold text-lg text-gray-900">
                                {major.name}
                              </span>
                              <span className="text-xs font-semibold px-2.5 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-200">
                                {major.code}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <span className="font-semibold">
                                Tổ hợp:
                              </span>{" "}
                              {major.subjects}
                            </p>
                          </div>
                          <div className="text-right ml-4">
                            <div className="flex items-center gap-2 justify-end mb-1">
                              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                {major.benchmarkScore}
                              </span>
                              {major.trend === "up" && (
                                <TrendingUp
                                  size={24}
                                  className="text-green-500"
                                />
                              )}
                              {major.trend === "down" && (
                                <TrendingUp
                                  size={24}
                                  className="text-red-500 rotate-180"
                                />
                              )}
                              {major.trend === "stable" && (
                                <div className="w-6 h-1 bg-gray-400 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              Chỉ tiêu: {major.quota} SV
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Không tìm thấy trường phù hợp
            </p>
          </div>
        )}
      </div>
    </div>
  );
}