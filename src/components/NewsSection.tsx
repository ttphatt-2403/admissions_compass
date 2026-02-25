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
}

const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Bộ GD&ĐT công bố lịch thi THPT Quốc gia 2026',
    summary: 'Kỳ thi THPT Quốc gia năm 2026 dự kiến diễn ra vào đầu tháng 6, với nhiều thay đổi quan trọng về cấu trúc đề thi...',
    category: 'Chính sách',
    date: '2 ngày trước',
    image: 'education policy',
    isHot: true,
  },
  {
    id: '2',
    title: 'Top 10 ngành học hot nhất năm 2026',
    summary: 'Công nghệ thông tin, Trí tuệ nhân tạo và An ninh mạng tiếp tục dẫn đầu danh sách ngành học được quan tâm nhiều nhất...',
    category: 'Xu hướng',
    date: '3 ngày trước',
    image: 'computer technology',
    isHot: true,
  },
  {
    id: '3',
    title: 'ĐH Bách Khoa HN tăng chỉ tiêu tuyển sinh ngành CNTT',
    summary: 'Trường ĐH Bách Khoa Hà Nội thông báo tăng 200 chỉ tiêu cho ngành Công nghệ thông tin do nhu cầu nhân lực cao...',
    category: 'Tuyển sinh',
    date: '5 ngày trước',
    image: 'university campus',
  },
  {
    id: '4',
    title: 'Hướng dẫn đăng ký xét tuyển đại học 2026',
    summary: 'Các bước đăng ký nguyện vọng xét tuyển đại học, cao đẳng năm 2026 chi tiết từ A đến Z cho thí sinh và phụ huynh...',
    category: 'Hướng dẫn',
    date: '1 tuần trước',
    image: 'student studying',
  },
  {
    id: '5',
    title: 'Điểm chuẩn dự đoán các trường top năm 2026',
    summary: 'Phân tích xu hướng và dự đoán mức điểm chuẩn của các trường đại học hàng đầu dựa trên số liệu những năm gần đây...',
    category: 'Phân tích',
    date: '1 tuần trước',
    image: 'data analysis',
  },
  {
    id: '6',
    title: 'Học bổng toàn phần cho sinh viên xuất sắc',
    summary: 'Nhiều trường đại học công bố chương trình học bổng toàn phần, bán phần dành cho tân sinh viên có thành tích cao...',
    category: 'Học bổng',
    date: '2 tuần trước',
    image: 'scholarship graduation',
  },
  {
    id: '7',
    title: 'Kinh nghiệm ôn thi từ thủ khoa các trường top',
    summary: 'Chia sẻ phương pháp học tập, kỹ thuật ôn thi hiệu quả từ những học sinh đạt điểm cao nhất kỳ thi THPT Quốc gia...',
    category: 'Kinh nghiệm',
    date: '2 tuần trước',
    image: 'student success',
  },
  {
    id: '8',
    title: 'Cập nhật điểm chuẩn các trường năm 2025',
    summary: 'Tổng hợp đầy đủ điểm chuẩn trúng tuyển của tất cả các trường đại học, cao đẳng trên cả nước năm 2025...',
    category: 'Điểm chuẩn',
    date: '3 tuần trước',
    image: 'university building',
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
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
                    <button className="mt-4 text-orange-600 font-semibold text-sm hover:text-orange-700">
                      Đọc thêm →
                    </button>
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
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                    Xem chi tiết →
                  </button>
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
