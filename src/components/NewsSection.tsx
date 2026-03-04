import { useState } from 'react';
import { Clock, Tag, TrendingUp, Bell } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
  isHot?: boolean;
  link?: string;
}

const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Bộ GD&ĐT công bố lịch thi THPT Quốc gia 2026',
    summary: 'Kỳ thi THPT Quốc gia năm 2026 dự kiến diễn ra vào đầu tháng 6, với nhiều thay đổi quan trọng về cấu trúc đề thi...',
    category: 'Chính sách',
    date: '2 ngày trước',
    image: 'image.png',
    isHot: true,
    link: 'https://thuvienphapluat.vn/hoi-dap-phap-luat/lich-thi-thpt-quoc-gia-2026-dien-ra-vao-ngay-1161262026-du-kien-dung-khong-138059892.html'
  },
  {
    id: '2',
    title: 'Top 10 ngành học hot nhất năm 2026',
    summary: 'Sau khi quan sát, tổng kết sự phát triển của nền kinh tế Việt Nam và dự đoán nhu cầu nhân lực của thế giới trong giai đoạn 2025 – 2035, Zila Education đưa ra 10 gợi ý về những ngành nghề hot trong tương lai và cần thiết hiện nay....',
    category: 'Xu hướng',
    date: '5 tháng trước',
    image: 'computer technology',
    isHot: true,
    link: 'https://www.zila.com.vn/nhung-nganh-nghe-co-trien-vong-trong-tuong-lai.html'
  },
  {
    id: '3',
    title: 'ĐH Bách Khoa HN tăng chỉ tiêu tuyển sinh ngành CNTT',
    summary: 'Đại học Bách khoa Hà Nội dự kiến tuyển 9.680 sinh viên dựa trên 3 phương thức, tăng khả năng trúng tuyển ...',
    category: 'Tuyển sinh',
    date: '5 ngày trước',
    image: 'university campus',
    link: 'https://xaydungchinhsach.chinhphu.vn/tuyen-sinh-2025-chi-tieu-phuong-thuc-tuyen-sinh-cua-dai-hoc-bach-khoa-ha-noi-119250115115824712.htm'
  },
  {
    id: '4',
    title: 'Hướng dẫn đăng ký xét tuyển đại học 2026',
    summary: 'Bộ GD&ĐT đã mở lại hệ thống đăng ký nguyện vọng đến hết 17h00 ngày 30/7 để tạo thêm điều kiện ...',
    category: 'Hướng dẫn',
    date: '1 tuần trước',
    image: 'student studying',
    link: 'https://quantrimang.com/cong-nghe/cach-dang-ky-nguyen-vong-dai-hoc-truc-tuyen-191440'
  },
  {
    id: '5',
    title: 'Điểm chuẩn dự đoán các trường top năm 2026',
    summary: 'Phân tích xu hướng và dự đoán mức điểm chuẩn của các trường đại học hàng đầu dựa trên số liệu những năm gần đây...',
    category: 'Phân tích',
    date: '1 tuần trước',
    image: 'data analysis',
    link: 'https://vietnamnet.vn/giao-duc/diem-thi/tra-cuu-diem-chuan-cd-dh-2026/diem'
  },
  {
    id: '6',
    title: 'Học bổng toàn phần cho sinh viên xuất sắc',
    summary: 'Mùa tuyển sinh năm 2026, nhiều cơ sở giáo dục đại học đã công bố các chương trình học bổng “khủng” nhằm thu hút thí sinh. Các chính sách này ...',
    category: 'Học bổng',
    date: '2 tuần trước',
    image: 'scholarship graduation',
    link: 'https://giaoducthudo.giaoducthoidai.vn/nhieu-co-so-giao-duc-dai-hoc-tung-chinh-sach-hoc-bong-cho-tan-sinh-vien-co-noi-hang-tram-trieu-204080.html'
  },
  {
    id: '7',
    title: 'Kinh nghiệm ôn thi từ thủ khoa các trường top',
    summary: 'Chia sẻ phương pháp học tập, kỹ thuật ôn thi hiệu quả từ những học sinh đạt điểm cao nhất kỳ thi THPT Quốc gia...',
    category: 'Kinh nghiệm',
    date: '2 tuần trước',
    image: 'student success',
    link: 'https://vietnamnet.vn/bi-quyet-hoc-tap-cua-nu-thu-khoa-khoi-a00-tot-nghiep-thpt-2025-voi-3-diem-10-2422317.html'
  },
  {
    id: '8',
    title: 'Cập nhật điểm chuẩn các trường năm 2025',
    summary: 'Hơn 200 đại học công bố điểm chuẩn 2025, 6 ngành lấy 30 điểm, ở Đại học Ngoại ngữ, Đại học Huế, Học viện Khoa học quân sự và Học viện Quân y.Phổ điểm thi tốt nghiệp các môn...',
    category: 'Điểm chuẩn',
    date: '3 tuần trước',
    image: 'university building',
    link: 'https://vnexpress.net/diem-chuan-hon-200-dai-hoc-nam-2025-cap-nhat-nhanh-chi-tiet-chinh-xac-nhat-4929038.html'
  },
];

const categories = ['Tất cả', 'Chính sách', 'Tuyển sinh', 'Học bổng', 'Xu hướng', 'Hướng dẫn', 'Kinh nghiệm', 'Phân tích'];

export function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const filteredNews = selectedCategory === 'Tất cả'
    ? mockNews
    : mockNews.filter(news => news.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={32} />
            <h2 className="text-3xl font-bold">Tin Tức Tuyển Sinh</h2>
          </div>
          <p className="text-orange-100">Cập nhật thông tin tuyển sinh mới nhất từ các trường đại học</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {selectedCategory === 'Tất cả' && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-red-500" size={24} />
              <h3 className="font-semibold text-lg">Tin Nổi Bật</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {mockNews.filter(news => news.isHot).map(news => (
                <div key={news.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-red-200">
                  <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <span className="text-6xl">🔥</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2 py-1 bg-red-100 text-red-700 rounded">
                        <Tag className="inline mr-1" size={12} />
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        <Clock className="inline mr-1" size={12} />
                        {news.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{news.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{news.summary}</p>
                    {news.link ? (
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-orange-600 font-semibold text-sm hover:text-orange-700"
                      >
                        Đọc thêm →
                      </a>
                    ) : (
                      <button className="mt-4 text-orange-600 font-semibold text-sm hover:text-orange-700">
                        Đọc thêm →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All News */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            {selectedCategory === 'Tất cả' ? 'Tất Cả Tin Tức' : `Tin Tức: ${selectedCategory}`}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map(news => (
              <div key={news.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-5xl">📰</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={12} />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{news.summary}</p>
                  {news.link ? (
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                    >
                      Xem chi tiết →
                    </a>
                  ) : (
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                      Xem chi tiết →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Chưa có tin tức trong danh mục này</p>
          </div>
        )}
      </div>
    </div>
  );
}
