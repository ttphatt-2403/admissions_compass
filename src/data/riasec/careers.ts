import { RIASECType } from './questions';

export interface CareerMapping {
  majors: string[];
  description: string;
}

// Mapping cho từng nhóm đơn lẻ
export const SINGLE_TYPE_CAREERS: Record<RIASECType, CareerMapping> = {
  R: {
    majors: [
      'Kỹ thuật cơ khí',
      'Xây dựng',
      'Điện – Điện tử',
      'Công nghệ ô tô',
      'Hàng hải',
      'Công nghệ sản xuất',
      'Kỹ thuật môi trường',
      'Nông nghiệp'
    ],
    description: 'Bạn phù hợp với các ngành kỹ thuật, cần sự khéo léo và làm việc thực tế'
  },
  I: {
    majors: [
      'Công nghệ thông tin',
      'Y khoa',
      'Dược học',
      'Sinh học',
      'Khoa học dữ liệu',
      'Kỹ thuật phần mềm',
      'Hóa học',
      'Vật lý'
    ],
    description: 'Bạn phù hợp với các ngành nghiên cứu, cần tư duy logic và phân tích'
  },
  A: {
    majors: [
      'Thiết kế đồ họa',
      'Truyền thông đa phương tiện',
      'Báo chí',
      'Kiến trúc',
      'Marketing sáng tạo',
      'Nghệ thuật',
      'Điện ảnh',
      'Thiết kế thời trang'
    ],
    description: 'Bạn phù hợp với các ngành sáng tạo, cần sự tự do và thẩm mỹ'
  },
  S: {
    majors: [
      'Sư phạm',
      'Tâm lý học',
      'Điều dưỡng',
      'Công tác xã hội',
      'Quản trị nhân sự',
      'Giáo dục mầm non',
      'Y tế công cộng',
      'Xã hội học'
    ],
    description: 'Bạn phù hợp với các ngành xã hội, cần kỹ năng giao tiếp và sự đồng cảm'
  },
  E: {
    majors: [
      'Quản trị kinh doanh',
      'Marketing',
      'Thương mại điện tử',
      'Kinh tế quốc tế',
      'Luật kinh doanh',
      'Khởi nghiệp (Startup)',
      'Quan hệ công chúng',
      'Quản lý dự án'
    ],
    description: 'Bạn phù hợp với các ngành kinh doanh, cần kỹ năng lãnh đạo và thuyết phục'
  },
  C: {
    majors: [
      'Kế toán',
      'Kiểm toán',
      'Tài chính – Ngân hàng',
      'Logistics',
      'Hành chính văn phòng',
      'Quản lý dữ liệu',
      'Thống kê',
      'Quản trị văn phòng'
    ],
    description: 'Bạn phù hợp với các ngành nghiệp vụ, cần sự tỉ mỉ và có tổ chức'
  }
};

// Mapping cho tổ hợp 2 nhóm cao nhất
export const COMBO_TYPE_CAREERS: Record<string, CareerMapping> = {
  'RI': {
    majors: ['Công nghệ thông tin', 'Kỹ thuật phần mềm', 'Kỹ thuật điện tử', 'Cơ điện tử', 'Tự động hóa'],
    description: 'Kết hợp giữa thực hành và nghiên cứu - phù hợp ngành công nghệ'
  },
  'IR': {
    majors: ['Công nghệ thông tin', 'Kỹ thuật phần mềm', 'Kỹ thuật điện tử', 'Cơ điện tử', 'Tự động hóa'],
    description: 'Kết hợp giữa nghiên cứu và thực hành - phù hợp ngành công nghệ'
  },
  'RA': {
    majors: ['Kiến trúc', 'Thiết kế nội thất', 'Thiết kế công nghiệp', 'Mỹ thuật ứng dụng'],
    description: 'Kết hợp giữa kỹ thuật và sáng tạo - phù hợp ngành thiết kế'
  },
  'AR': {
    majors: ['Kiến trúc', 'Thiết kế nội thất', 'Thiết kế công nghiệp', 'Mỹ thuật ứng dụng'],
    description: 'Kết hợp giữa sáng tạo và kỹ thuật - phù hợp ngành thiết kế'
  },
  'IS': {
    majors: ['Y khoa', 'Tâm lý học', 'Điều dưỡng', 'Dinh dưỡng', 'Vật lý trị liệu'],
    description: 'Kết hợp giữa nghiên cứu và xã hội - phù hợp ngành y tế, sức khỏe'
  },
  'SI': {
    majors: ['Y khoa', 'Tâm lý học', 'Điều dưỡng', 'Dinh dưỡng', 'Vật lý trị liệu'],
    description: 'Kết hợp giữa xã hội và nghiên cứu - phù hợp ngành y tế, sức khỏe'
  },
  'EA': {
    majors: ['Marketing', 'Truyền thông', 'Quan hệ công chúng', 'Quảng cáo', 'Event'],
    description: 'Kết hợp giữa kinh doanh và sáng tạo - phù hợp ngành truyền thông'
  },
  'AE': {
    majors: ['Marketing', 'Truyền thông', 'Quan hệ công chúng', 'Quảng cáo', 'Event'],
    description: 'Kết hợp giữa sáng tạo và kinh doanh - phù hợp ngành truyền thông'
  },
  'CE': {
    majors: ['Tài chính – Ngân hàng', 'Kinh doanh quốc tế', 'Quản trị tài chính', 'Đầu tư'],
    description: 'Kết hợp giữa tổ chức và kinh doanh - phù hợp ngành tài chính'
  },
  'EC': {
    majors: ['Tài chính – Ngân hàng', 'Kinh doanh quốc tế', 'Quản trị tài chính', 'Đầu tư'],
    description: 'Kết hợp giữa kinh doanh và tổ chức - phù hợp ngành tài chính'
  },
  'AS': {
    majors: ['Sư phạm nghệ thuật', 'Giáo dục âm nhạc', 'Giáo dục mỹ thuật', 'Thiết kế giáo dục'],
    description: 'Kết hợp giữa sáng tạo và xã hội - phù hợp ngành giáo dục nghệ thuật'
  },
  'SA': {
    majors: ['Sư phạm nghệ thuật', 'Giáo dục âm nhạc', 'Giáo dục mỹ thuật', 'Thiết kế giáo dục'],
    description: 'Kết hợp giữa xã hội và sáng tạo - phù hợp ngành giáo dục nghệ thuật'
  },
  'SE': {
    majors: ['Quản trị nhân sự', 'Đào tạo doanh nghiệp', 'Tư vấn kinh doanh', 'Sales'],
    description: 'Kết hợp giữa xã hội và kinh doanh - phù hợp ngành nhân sự, tư vấn'
  },
  'ES': {
    majors: ['Quản trị nhân sự', 'Đào tạo doanh nghiệp', 'Tư vấn kinh doanh', 'Sales'],
    description: 'Kết hợp giữa kinh doanh và xã hội - phù hợp ngành nhân sự, tư vấn'
  },
  'RC': {
    majors: ['Quản lý sản xuất', 'Quản lý chất lượng', 'Kỹ thuật công nghiệp', 'An toàn lao động'],
    description: 'Kết hợp giữa thực hành và tổ chức - phù hợp ngành quản lý sản xuất'
  },
  'CR': {
    majors: ['Quản lý sản xuất', 'Quản lý chất lượng', 'Kỹ thuật công nghiệp', 'An toàn lao động'],
    description: 'Kết hợp giữa tổ chức và thực hành - phù hợp ngành quản lý sản xuất'
  },
  'IC': {
    majors: ['Khoa học dữ liệu', 'Phân tích kinh doanh', 'Thống kê', 'Nghiên cứu thị trường'],
    description: 'Kết hợp giữa nghiên cứu và tổ chức - phù hợp ngành phân tích dữ liệu'
  },
  'CI': {
    majors: ['Khoa học dữ liệu', 'Phân tích kinh doanh', 'Thống kê', 'Nghiên cứu thị trường'],
    description: 'Kết hợp giữa tổ chức và nghiên cứu - phù hợp ngành phân tích dữ liệu'
  },
  'IA': {
    majors: ['Khoa học máy tính', 'Game Development', 'UX Research', 'Thiết kế sản phẩm số'],
    description: 'Kết hợp giữa nghiên cứu và sáng tạo - phù hợp ngành công nghệ sáng tạo'
  },
  'AI': {
    majors: ['Khoa học máy tính', 'Game Development', 'UX Research', 'Thiết kế sản phẩm số'],
    description: 'Kết hợp giữa sáng tạo và nghiên cứu - phù hợp ngành công nghệ sáng tạo'
  },
  'RE': {
    majors: ['Quản lý xây dựng', 'Kinh doanh bất động sản', 'Quản lý dự án xây dựng'],
    description: 'Kết hợp giữa thực hành và kinh doanh - phù hợp ngành xây dựng, bất động sản'
  },
  'ER': {
    majors: ['Quản lý xây dựng', 'Kinh doanh bất động sản', 'Quản lý dự án xây dựng'],
    description: 'Kết hợp giữa kinh doanh và thực hành - phù hợp ngành xây dựng, bất động sản'
  },
  'RS': {
    majors: ['Giáo dục thể chất', 'Huấn luyện viên', 'Vật lý trị liệu', 'Kỹ thuật y sinh'],
    description: 'Kết hợp giữa thực hành và xã hội - phù hợp ngành thể thao, y tế'
  },
  'SR': {
    majors: ['Giáo dục thể chất', 'Huấn luyện viên', 'Vật lý trị liệu', 'Kỹ thuật y sinh'],
    description: 'Kết hợp giữa xã hội và thực hành - phù hợp ngành thể thao, y tế'
  },
  'IE': {
    majors: ['Quản lý công nghệ', 'Startup công nghệ', 'Product Manager', 'Tư vấn CNTT'],
    description: 'Kết hợp giữa nghiên cứu và kinh doanh - phù hợp ngành quản lý công nghệ'
  },
  'EI': {
    majors: ['Quản lý công nghệ', 'Startup công nghệ', 'Product Manager', 'Tư vấn CNTT'],
    description: 'Kết hợp giữa kinh doanh và nghiên cứu - phù hợp ngành quản lý công nghệ'
  },
  'AC': {
    majors: ['Thiết kế đồ họa', 'Biên tập viên', 'Content Creator', 'Social Media'],
    description: 'Kết hợp giữa sáng tạo và tổ chức - phù hợp ngành nội dung số'
  },
  'CA': {
    majors: ['Thiết kế đồ họa', 'Biên tập viên', 'Content Creator', 'Social Media'],
    description: 'Kết hợp giữa tổ chức và sáng tạo - phù hợp ngành nội dung số'
  },
  'SC': {
    majors: ['Quản lý giáo dục', 'Hành chính y tế', 'Thư ký y khoa', 'Quản lý bệnh viện'],
    description: 'Kết hợp giữa xã hội và tổ chức - phù hợp ngành quản lý xã hội'
  },
  'CS': {
    majors: ['Quản lý giáo dục', 'Hành chính y tế', 'Thư ký y khoa', 'Quản lý bệnh viện'],
    description: 'Kết hợp giữa tổ chức và xã hội - phù hợp ngành quản lý xã hội'
  }
};

// Hàm tính điểm và xếp hạng
export function calculateScores(answers: Record<number, number>): Record<RIASECType, number> {
  const scores: Record<RIASECType, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  
  // Import questions để lấy type
  const questionTypes: Record<number, RIASECType> = {};
  for (let i = 1; i <= 10; i++) questionTypes[i] = 'R';
  for (let i = 11; i <= 20; i++) questionTypes[i] = 'I';
  for (let i = 21; i <= 30; i++) questionTypes[i] = 'A';
  for (let i = 31; i <= 40; i++) questionTypes[i] = 'S';
  for (let i = 41; i <= 50; i++) questionTypes[i] = 'E';
  for (let i = 51; i <= 60; i++) questionTypes[i] = 'C';

  Object.entries(answers).forEach(([questionId, score]) => {
    const type = questionTypes[parseInt(questionId)];
    if (type) {
      scores[type] += score;
    }
  });

  return scores;
}

// Hàm lấy top N nhóm cao nhất
export function getTopTypes(scores: Record<RIASECType, number>, n: number = 3): RIASECType[] {
  return (Object.entries(scores) as [RIASECType, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([type]) => type);
}

// Hàm lấy gợi ý ngành dựa trên kết quả
export function getCareerSuggestions(topTypes: RIASECType[]): {
  primary: CareerMapping;
  combo: CareerMapping | null;
  code: string;
} {
  const primary = SINGLE_TYPE_CAREERS[topTypes[0]];
  const comboKey = topTypes[0] + topTypes[1];
  const combo = COMBO_TYPE_CAREERS[comboKey] || null;
  const code = topTypes.join('');

  return { primary, combo, code };
}
