import { useState } from 'react';
import { Search, Download, Eye, Filter, BookOpen } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  subject: string;
  grade: string;
  type: string;
  downloads: number;
  views: number;
  link: string;
}

const mockDocuments: Document[] = [
  { id: '1', title: 'Tổng hợp công thức Toán 12 - Đầy đủ', subject: 'Toán', grade: '12', type: 'Lý thuyết', downloads: 15420, views: 28900, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
  { id: '2', title: 'Đề thi thử THPT QG 2026 - Toán (Có đáp án)', subject: 'Toán', grade: '12', type: 'Đề thi', downloads: 12350, views: 24100, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
  { id: '3', title: 'Ngữ pháp Tiếng Anh tổng hợp THPT', subject: 'Tiếng Anh', grade: '12', type: 'Lý thuyết', downloads: 18200, views: 32400, link: "https://drive.google.com/drive/u/0/folders/11O_q1lcKORiInDURrGvJKBpo0ok8H2sh" },
  { id: '4', title: '1500 câu trắc nghiệm Vật Lý có giải chi tiết', subject: 'Vật Lý', grade: '12', type: 'Bài tập', downloads: 9800, views: 19200, link: "https://drive.google.com/drive/u/0/folders/1ro0TTs0JBhTpPU8elJuo1iUPmJ-FeNX-" },
  { id: '5', title: 'Lịch sử Việt Nam - Tóm tắt sự kiện quan trọng', subject: 'Lịch Sử', grade: '12', type: 'Lý thuyết', downloads: 7600, views: 15800, link: "https://drive.google.com/drive/u/0/folders/1TuRHSaeJWXTtG2mVx4pvpFh3hCQEV0x_" },
  { id: '6', title: 'Hóa học hữu cơ - Chuyên đề phản ứng', subject: 'Hóa Học', grade: '12', type: 'Chuyên đề', downloads: 10200, views: 21300, link: "https://drive.google.com/drive/u/0/folders/1PocYKHUA5YtA0Nw4B5vEHfW7G5D45W1B" },
  { id: '7', title: 'Sinh học di truyền - Bài tập nâng cao', subject: 'Sinh Học', grade: '12', type: 'Bài tập', downloads: 8900, views: 17500, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
  { id: '8', title: 'Địa lý Việt Nam - Bản đồ tư duy', subject: 'Địa Lý', grade: '12', type: 'Tài liệu tham khảo', downloads: 6500, views: 13200, link: "https://drive.google.com/drive/u/0/folders/1VI7pRktlrMtAoBSGeEeQFXAUdu9JK0Ir" },
  { id: '9', title: 'Đề thi thử THPT QG 2026 - Tiếng Anh', subject: 'Tiếng Anh', grade: '12', type: 'Đề thi', downloads: 14100, views: 26800, link: "https://drive.google.com/drive/folders/1W7Vtkxw7tQg4VIwbL4ow6HNQEuRsL6qW" },
  { id: '10', title: 'Văn học Việt Nam - Phân tích tác phẩm', subject: 'Văn', grade: '12', type: 'Lý thuyết', downloads: 11200, views: 22400, link: "https://drive.google.com/drive/folders/1tvq1JIU1pHe4RXSkdjR2WGjtfA93J5ED" },
  { id: '11', title: 'Toán 11 - Các dạng bài hàm số', subject: 'Toán', grade: '11', type: 'Bài tập', downloads: 5400, views: 11200, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
  { id: '12', title: 'GDCD - Tóm tắt kiến thức cơ bản', subject: 'GDCD', grade: '12', type: 'Lý thuyết', downloads: 4800, views: 9600, link: "https://drive.google.com/drive/folders/1sSB3tPt4rkUS-vHzQhCmwJ4cwNsEPgfJ" },
];

const subjects = ['Tất cả', 'Toán', 'Văn', 'Tiếng Anh', 'Vật Lý', 'Hóa Học', 'Sinh Học', 'Lịch Sử', 'Địa Lý', 'GDCD'];
const grades = ['Tất cả', '10', '11', '12'];
const types = ['Tất cả', 'Lý thuyết', 'Bài tập', 'Đề thi', 'Chuyên đề', 'Tài liệu tham khảo'];

export function DocumentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Tất cả');
  const [selectedGrade, setSelectedGrade] = useState('Tất cả');
  const [selectedType, setSelectedType] = useState('Tất cả');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'Tất cả' || doc.subject === selectedSubject;
    const matchesGrade = selectedGrade === 'Tất cả' || doc.grade === selectedGrade;
    const matchesType = selectedType === 'Tất cả' || doc.type === selectedType;

    return matchesSearch && matchesSubject && matchesGrade && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <BookOpen size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold">Kho Tài Liệu Ôn Luyện</h2>
              <p className="text-blue-100 mt-1">Hơn 10,000+ tài liệu ôn thi THPT Quốc gia hoàn toàn miễn phí</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Tìm kiếm tài liệu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Filter size={20} />
              Bộ lọc
            </button>
          </div>

          {showFilters && (
            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Môn học</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lớp</label>
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loại tài liệu</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Tìm thấy <span className="font-semibold text-blue-600">{filteredDocuments.length}</span> tài liệu
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map(doc => (
            <div key={doc.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-sm">
                  {doc.subject}
                </span>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">Lớp {doc.grade}</span>
              </div>

              <h3 className="font-bold text-lg mb-3 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">{doc.title}</h3>

              <div className="text-xs text-gray-500 mb-4">
                <span className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">{doc.type}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-5 pb-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Download size={16} className="text-green-600" />
                  <span className="font-semibold">{(doc.downloads / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} className="text-blue-600" />
                  <span className="font-semibold">{(doc.views / 1000).toFixed(1)}K</span>
                </div>
              </div>

              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl transition-all font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform group-hover:scale-105"
              >
                <Download size={18} />
                Tải xuống miễn phí
              </a>
            </div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Không tìm thấy tài liệu phù hợp</p>
          </div>
        )}
      </div>
    </div>
  );
}