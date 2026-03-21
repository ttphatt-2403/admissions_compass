import { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import { 
  Briefcase, 
  Globe, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  PieChart, 
  DollarSign, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Calendar,
  BookOpen,
  Send,
  Plane,
  Star,
  Mic,
  Smile
} from 'lucide-react';

export default function UEFLandingPage() {
  usePageAnalytics('UEF', 'Đại học Kinh tế Tài chính TP.HCM');
  const [activeMajor, setActiveMajor] = useState<string>('finance');
  const [activeMethod, setActiveMethod] = useState<number>(0);

  const majors = {
    finance: {
      title: 'Tài Chính - Ngân Hàng',
      desc: 'Đào tạo chuyên sâu về thị trường tài chính, ngân hàng số và đầu tư quốc tế. Phòng mô phỏng thị trường chứng khoán hiện đại.',
      roadmap: [
        'Năm 1: Kinh tế vi mô/vĩ mô, Nguyên lý kế toán',
        'Năm 2: Tài chính doanh nghiệp, Thị trường chứng khoán',
        'Năm 3: Quản trị ngân hàng, Thanh toán quốc tế, Fintech',
        'Năm 4: Thực tập tại ngân hàng lớn (Vietcombank, ACB...) & Khóa luận'
      ],
      skills: ['Phân tích tài chính', 'Giao dịch chứng khoán', 'Quản trị rủi ro'],
      image: 'data:image/jpeg;base64,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' // Stock market concept
    },
    marketing: {
      title: 'Marketing',
      desc: 'Làm chủ các công cụ Digital Marketing, xây dựng thương hiệu và nghiên cứu thị trường trong kỷ nguyên số.',
      roadmap: [
        'Năm 1: Tổng quan Marketing, Hành vi khách hàng',
        'Năm 2: Digital Marketing, Content Marketing, SEO/SEM',
        'Năm 3: Quản trị thương hiệu, Marketing quốc tế',
        'Năm 4: Dự án Marketing thực tế & Thực tập doanh nghiệp'
      ],
      skills: ['Digital Marketing', 'Sáng tạo nội dung', 'Phân tích dữ liệu'],
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHByZXNlbnRhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTQ5ODY1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    business: {
      title: 'Kinh Doanh Quốc Tế',
      desc: 'Chương trình song ngữ Anh - Việt. Trang bị kiến thức về xuất nhập khẩu, logistics và đàm phán thương mại quốc tế.',
      roadmap: [
        'Năm 1: Tiếng Anh thương mại, Kinh tế quốc tế',
        'Năm 2: Logistics & Chuỗi cung ứng, Luật thương mại QT',
        'Năm 3: Thanh toán quốc tế, Quản trị đa văn hóa',
        'Năm 4: Thực tập tại tập đoàn đa quốc gia & Đồ án'
      ],
      skills: ['Tiếng Anh thương mại', 'Nghiệp vụ XNK', 'Đàm phán quốc tế'],
      image: 'https://images.unsplash.com/photo-1610322258696-99a76246b767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjBzdHVkZW50cyUyMHNoYWtpbmclMjBoYW5kc3xlbnwxfHx8fDE3NzE0OTg2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    ecommerce: {
      title: 'Thương Mại Điện Tử',
      desc: 'Đón đầu xu hướng kinh doanh trực tuyến. Kết hợp công nghệ và kinh doanh để xây dựng hệ thống E-commerce hiệu quả.',
      roadmap: [
        'Năm 1: Cơ sở dữ liệu, Nhập môn TMĐT',
        'Năm 2: Thiết kế Web, Thanh toán điện tử',
        'Năm 3: Sàn giao dịch TMĐT, Marketing online',
        'Năm 4: Khởi nghiệp E-commerce & Thực tập'
      ],
      skills: ['Quản trị sàn TMĐT', 'Phân tích dữ liệu kinh doanh', 'Web Development'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowaJrfW01mfAAlnJZocpxqAUNkBQWz5BhNg&s' // E-commerce concept
    }
  };

  const methods = [
    {
      id: 1,
      title: 'Kết quả thi THPT 2026',
      desc: 'Xét tuyển theo tổ hợp môn dựa trên điểm thi tốt nghiệp THPT Quốc gia.',
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
      detail: 'Điểm trúng tuyển theo quy định của Bộ GD&ĐT.'
    },
    {
      id: 2,
      title: 'Học bạ lớp 12',
      desc: 'Xét tuyển dựa trên tổng điểm trung bình năm lớp 12 của tổ hợp 3 môn xét tuyển.',
      icon: <BookOpen className="w-8 h-8 text-red-600" />,
      detail: 'Tổng điểm 3 môn ≥ 18.0 điểm.'
    },
    {
      id: 3,
      title: 'Học bạ 3 học kỳ',
      desc: 'Tổng điểm trung bình 3 học kỳ (HK1, HK2 lớp 11 và HK1 lớp 12).',
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      detail: 'Tổng điểm trung bình 3 học kỳ ≥ 18.0 điểm.'
    },
    {
      id: 4,
      title: 'Đánh giá năng lực',
      desc: 'Kết quả kỳ thi Đánh giá năng lực của ĐHQG TP.HCM năm 2026.',
      icon: <Star className="w-8 h-8 text-green-600" />,
      detail: 'Điểm xét tuyển từ 600 điểm (thang điểm 1200).'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. Hero Section */}
      <div className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1754531976838-436a70636c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBzdWl0fGVufDF8fHx8MTc3MTQ5ODY1MXww&ixlib=rb-4.1.0&q=80&w=1080')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-blue-900/80 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-16">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-wider text-xs mb-6 rounded-full">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              Tuyển sinh Đại học Chính quy 2026
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              HỌC CHUẨN QUỐC TẾ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                SẴN SÀNG HỘI NHẬP
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-red-500 pl-6">
              Tại UEF, sinh viên được trải nghiệm môi trường học tập song ngữ, năng động. Đào tạo gắn liền với thực tiễn doanh nghiệp, mở ra cánh cửa sự nghiệp không biên giới.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
                Đăng Ký Xét Tuyển
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded hover:bg-white/20 transition-colors flex items-center justify-center gap-3">
                <Globe size={20} />
                Tìm Hiểu Thêm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Stats Section */}
      <div className="bg-white relative z-30 -mt-10 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-2xl p-8 border-b-4 border-red-600">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
            <div className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wide mt-2">Sinh viên có việc làm</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">50%</div>
            <div className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wide mt-2">Thời lượng thực hành</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
            <div className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wide mt-2">Đối tác quốc tế</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wide mt-2">Song ngữ Anh - Việt</div>
          </div>
        </div>
      </div>

      {/* 3. International Pathway Section (New) */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">International Pathway</div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Chương Trình Cử Nhân Quốc Tế <br/>
                <span className="text-red-600">Nhận Bằng Cấp Từ Anh - Mỹ</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Sinh viên UEF có cơ hội chuyển tiếp du học hoặc học toàn phần tại Việt Nam để nhận bằng Cử nhân giá trị toàn cầu từ các trường đại học đối tác danh tiếng.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-800 font-bold text-xl">UK</div>
                  <div>
                    <h4 className="font-bold text-gray-900">University of Gloucestershire</h4>
                    <p className="text-sm text-gray-500">Top 5 ĐH Anh Quốc về hỗ trợ sinh viên. Ngành: Marketing, Kinh doanh.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-800 font-bold text-xl">UK</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Leeds Trinity University</h4>
                    <p className="text-sm text-gray-500">Đào tạo báo chí và truyền thông hàng đầu tại Anh. Ngành: Kinh doanh quốc tế.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-800 font-bold text-xl">US</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Keuka College (New York)</h4>
                    <p className="text-sm text-gray-500">Chương trình Quản trị kinh doanh chuẩn Mỹ. Kiểm định bởi IACBE.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?auto=format&fit=crop&q=80&w=1080" 
                alt="International Students" 
                className="relative rounded-2xl shadow-2xl z-10 border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border-l-4 border-red-600">
                <div className="flex items-center gap-2 mb-2">
                  <Plane className="text-blue-600" />
                  <span className="font-bold text-blue-900">Du học tại chỗ</span>
                </div>
                <p className="text-sm text-gray-600">Tiết kiệm đến 70% chi phí so với du học nước ngoài.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Training Programs (Tabs) */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Chương Trình Đào Tạo Tiên Tiến</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Chương trình học được thiết kế theo chuẩn quốc tế, cập nhật liên tục theo nhu cầu thực tế của doanh nghiệp và thị trường lao động.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3 space-y-2">
              {Object.keys(majors).map((key) => {
                const major = majors[key as keyof typeof majors];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveMajor(key)}
                    className={`w-full text-left px-6 py-4 rounded-lg font-bold transition-all flex items-center justify-between group ${
                      activeMajor === key 
                        ? 'bg-blue-900 text-white shadow-lg border-l-4 border-yellow-400' 
                        : 'bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-800'
                    }`}
                  >
                    {major.title}
                    <ArrowRight size={16} className={`transition-opacity ${activeMajor === key ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={majors[activeMajor as keyof typeof majors].image} 
                    alt="Major Banner" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8">
                    <div>
                      <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2 rounded">Major</div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {majors[activeMajor as keyof typeof majors].title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-10">
                  <p className="text-xl text-gray-700 mb-10 leading-relaxed border-l-4 border-blue-500 pl-4 font-light italic">
                    "{majors[activeMajor as keyof typeof majors].desc}"
                  </p>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-6 flex items-center gap-3 text-lg border-b pb-2 border-gray-100">
                        <TrendingUp size={24} className="text-red-600" />
                        Lộ Trình Đào Tạo
                      </h4>
                      <ul className="space-y-4">
                        {majors[activeMajor as keyof typeof majors].roadmap.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-gray-600 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                              {idx + 1}
                            </div>
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-900 mb-6 flex items-center gap-3 text-lg border-b pb-2 border-gray-100">
                        <Award size={24} className="text-red-600" />
                        Kỹ Năng & Cơ Hội
                      </h4>
                      <div className="mb-6">
                        <p className="text-sm font-bold text-gray-400 uppercase mb-3">Kỹ năng chuyên môn</p>
                        <div className="flex flex-wrap gap-2">
                          {majors[activeMajor as keyof typeof majors].skills.map((skill, idx) => (
                            <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-5 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-100">
                        <p className="text-sm text-yellow-800 font-bold flex items-center gap-2 mb-2">
                          <Building2 size={18} />
                          Đối tác thực tập chiến lược
                        </p>
                        <p className="text-sm text-gray-600 pl-6 leading-relaxed">
                          Sinh viên được cam kết giới thiệu thực tập tại: <span className="font-semibold text-gray-800">Vietcombank, Techcombank, Shopee, Lazada, Unilever, KPMG...</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Admission Methods (New) */}
      <div className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Phương Thức Xét Tuyển 2026</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              UEF áp dụng đa dạng phương thức xét tuyển, mở rộng cơ hội trúng tuyển đại học cho thí sinh cả nước.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {methods.map((method, index) => (
              <div 
                key={method.id}
                onMouseEnter={() => setActiveMethod(index)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeMethod === index 
                    ? 'bg-white text-gray-900 border-white transform -translate-y-2 shadow-2xl' 
                    : 'bg-blue-800/50 border-blue-700 text-blue-100 hover:bg-blue-800'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl ${
                  activeMethod === index ? 'bg-blue-50' : 'bg-blue-900 border border-blue-600'
                }`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className={`text-sm mb-4 leading-relaxed ${activeMethod === index ? 'text-gray-600' : 'text-blue-200'}`}>
                  {method.desc}
                </p>
                <div className={`mt-auto pt-4 border-t text-sm font-semibold flex items-center gap-2 ${
                  activeMethod === index ? 'border-gray-100 text-red-600' : 'border-blue-700 text-yellow-400'
                }`}>
                  <CheckCircle2 size={16} />
                  {method.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Learning Environment */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
               <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1544002176-eacb96b939c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcxNDk4NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Library" className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-8" />
                 <img src="https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlbWluYXIlMjBndWVzdCUyMHNwZWFrZXIlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MTUwMDE1M3ww&ixlib=rb-4.1.0&q=80&w=1080" alt="Seminar" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
               </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Môi Trường Học Tập Đẳng Cấp</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Trụ sở chính tại trung tâm TP.HCM với diện tích sàn hơn 24.000m2. UEF mang đến không gian học tập tiện nghi, truyền cảm hứng sáng tạo cho sinh viên.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                    <Building2 />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Cơ Sở Vật Chất 5 Sao</h4>
                    <p className="text-gray-600 text-sm">Phòng học máy lạnh, wifi phủ sóng, thư viện kết nối dữ liệu quốc tế, phòng Gym, khu tự học sang trọng.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <Users />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Giảng Viên Doanh Nhân</h4>
                    <p className="text-gray-600 text-sm">50% giảng viên là CEO, quản lý cấp cao tại các doanh nghiệp lớn, mang kiến thức thực tiễn vào giảng đường.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Life (New) */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Đời Sống Sinh Viên Sôi Động</h2>
              <p className="text-gray-600">Hơn 60 câu lạc bộ từ học thuật đến năng khiếu</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1545886082-e66c6b9e011a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGNsdWIlMjBhY3Rpdml0aWVzJTIwZ3JvdXB8ZW58MXx8fHwxNzcxNTAwMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Club" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-bold text-xl mb-1">CLB Kỹ Năng</h3>
                  <p className="text-sm opacity-90">Rèn luyện kỹ năng mềm thiết yếu</p>
                </div>
              </div>
              <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5JTIwaGFwcHklMjBzdHVkZW50fGVufDF8fHx8MTc3MTUwMDE1M3ww&ixlib=rb-4.1.0&q=80&w=1080" alt="Graduation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-bold text-xl mb-1">Sự Kiện Quốc Tế</h3>
                  <p className="text-sm opacity-90">Giao lưu văn hóa đa quốc gia</p>
                </div>
              </div>
              <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1080" alt="Music" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-bold text-xl mb-1">Nghệ Thuật & Thể Thao</h3>
                  <p className="text-sm opacity-90">Tự do thể hiện cá tính</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Alumni Testimonials (New) */}
      <div className="py-20 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Người Trong Cuộc Nói Gì Về UEF?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" className="w-16 h-16 rounded-full object-cover border-2 border-red-500" alt="Alumni" />
                <div>
                  <h4 className="font-bold text-gray-900">Trần Minh Tuấn</h4>
                  <p className="text-xs text-gray-500 uppercase">Cựu SV QTKD - Khóa 2018</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-sm">
                "Môi trường tiếng Anh tại UEF đã giúp mình tự tin apply vào tập đoàn đa quốc gia ngay khi mới ra trường. Các dự án thực tế giúp mình không bị bỡ ngỡ khi đi làm."
              </p>
              <div className="mt-6 flex text-yellow-400 text-xs">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 transform md:-translate-y-4">
               <div className="flex items-center gap-4 mb-6">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFRUXGRgXFxcXFRcXFxUXFhcXFxcVFRcYHSggGB0lHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS4tLS0tLf/AABEIAMoA+gMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIFBAYHAwj/xAA8EAABAwEGBAIIBAUEAwAAAAABAAIRAwQSITFBcQVRYYEGkQcTIjKhwdHwI1JysUJigrLhMzSSwhQk8f/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAArEQEAAgIBBAECBAcAAAAAAAAAAQIDESEEEjFBBSJhE1FxsTJCgZGh0fH/2gAMAwEAAhEDEQA/AOdx0TaE+WaGjpqt7QO+qUZ7qQ2TJzyzQRLUDZM7oByUAB0QRmmO6R1wQIIjLFSaMsPuEaaIiJ1S1UnE45JTsikAmdlh2m3huAxKwjaXnEmBom1iu1w44BIZKqovgi9O6swMImdQfvVSJJrpMqJ0RqlI6qogRmnCcZpDRBFIpnJI6oCEoUkIIQghPmmUVAhQK9CoJpEQER1U/JJRUCFE9lMpEdEVYkfug7qRHTVRI6BZsRzQdcOSZ3CDqoDXLRLkmPkkAEEsVGc8UwMMkDYIFOWKc4JjTJLTNAjGKruJWuBDVYVDnjnh5qtttjJOGpj781J2yrEbV1M6nPT6rIstnqVXAMaXHoCf/i9bHYb9VtEZuIvfRdt8MeHGUmC60dTqVotbXDopTfLm1n8GWms2DTuDf6KlNgrWaoadUGJwPVfSVls7QqHxp4VZaaRcwfiAGP5um8wRslbT5llaka04rqlOC86DsXNIxa4g9DqCOhkdl6dlviduSY0Nc0hpinrkgDLBEQ0zQ4ZqR2UXa4IoShOMcko6IEUFB1SKBFQKmkgiAgphOOqivNRK9VElBZO1USM8OSZP7JT10WbGAdkx8kp6pA5bKCTeyXJJpyTO2qofdIp88EKBDRI7Jk5KDnYIGSAZOQxPbRYlO0HBxxgE+f2EWusBIWBaKkMPXDYKTLOIX/o+pCpa3VHmABJJ6/4XZbP4ks2DWPPISxzQdiRC5Z4GsJpNLwxlSq4m631gcwaS+4SIGcZrfOGU7UaZZVe1xLjg1oDAzQAXRB7lc8xuZdVeIhslt4ndYXsgn4Km4Xx9tRzzUtZlsAhtOWMkwJIGHed1nWSxPrUHtZDbri0A4h4aZjphgvDhfDqNnktIE4GQL2xJxkJWdMpjbnHjrgTaFrqVm1GhtU3iwyCXEjGnAgiCSZIjHHGFrk54rqPpc4cDZaNpAILHtZjmWvkHDe7n1XLQt1dS5cldWT76Jck/olGWCyawdUjvomdUR+yCJ0xSU4USOiCJ1Qd1KM8Ejsgid0ipEdFFABEICSBKKkUk0rPB6JA7ckruHdMfNZMT5I7pdtU+e6AlM6580j2UvooCByOSCOnxKAcsdFGVQdtVBzVI67pP1QU1tMv6a7BYdsqyYGQXtb8O/wBVhOEFaZluh2P0R0abqJP8YiMdMVuvEjUbTJBaDkIJd+4ELknow4ldqGnMTkumW5lR7IYRezAcSGk9SMYXPM64dlOY2zbBbalINZTovLfeL3luJOJgA85VhbbMXs9aHMZU00B/ldJx3VU31gDXWiXkD3GuLKYMD8gvHXM8lbWCyMtDQKtKlDXNdApRLmmWkySTBxx1Cyj7tkxqNw1f0k2hz+Ge2IPrKXne+krkjV0j0wW8AUbK043vWuHIAFrAd5ef6Vzhb8cfS4M07sm1EYIGmKemazaSIQUOPVK9liopBEovZYonqiTBOSKk4pHdURJSlMpKBXkryYQqECoypJT1RWc49VEHqnCZ7ZLJCJzxTJGOaJ6oB66IglMbKM5YqIOWag9OSg6VGUyM0XRknFKo7DTJGHJeTmShCqthF6eX+VhVW6r1ts3oKxy5apluZvBrX6qq10kCYJGnIrsXCOIkgXzsdHBcbsdgc/EYciuv+BqJqUQHiCMHNI1Go6HNc2afEw7MNLVruY4luFk4hScMSFbWC3MAN0ThOCpW+Gmn2mHcK9oWVrGOj8p/ZSlpLTWI4fPPFOKPtVZ9oqTeqOmMw1v8LB0AgLG7LyszvYGOgXreXc8+fL0GmCR2UQcki5ESceigTlgkSoqKlOSV4qKRUHpfzTvLy5oJVTT2KQXleUryCXZKMkSlP7KghJNCDLAywQNuaRG+aQCqJDZGOGSIHIpH5oHyyzUZ/dB2QRngig/NHdBGeH3CXZAA5YpThmicsAkTsgxbdZA/3QS7AAASXEmABzkrcvDno4a1oqWyS44+rBwb0JGZ+H7r38A2Jpe6u8A3TdZvHtO+IHcrfa9WVhMRt7PQdJuIvePPhV0eDUWtuspNaBlgsrhtMUn+yN28xzGyy2Pj+Gfn0B57qsttrFKq050n+0ObYzLdcDgR9nG1YmOXs6747JjhvVge1wlhB59OhGiyXU/I4ea1HUOaSJxDmmDjpIWfQ4nWAgkPH82B8xn5LXOLXh5OTobRzWf7uJcV8OPs3vAhgJaTEmmWm6Q78wnUdDqsK2WB9MBxEsOTxkfou226yNqteKgBvkkjfktSoeHn0zUs/v0ng3Z0JyGPZbdTDfPQYctPHbZzWf3QdVlcSsXqnAQbrhebOcEkEHqCCOyxZzwVeBkpOO01nzAKXJM7aIbpgjADdRJzxUjoon5oE454pE9UGcckHsgRKUpu7KJKCYPVOVGU7yqJSmoSgvQZ5KFGeoQT1CzSD7pO1xUZ6ovZY6KKZR9Ep6qIPVBLzySjLNIHLEpE9Sopx0SOuCTjnnmg90G/+FxdpUwOV7/kSfmtqzAWucOs9wNH5QG+QAV/SdgsH2NKdmOsflEM+xuw6a6+YWD4h4depuLTDgfWN1g5OcOYiCRzaDv72OpBWfbrOX0zcMPHtMOl4fI5HoSso54a7fTbam8OG9RGPskAgH+CReudphWDFqx4h/4zXUmYew98H3g6o/2W7iSP6VtLKV2mycw0T5KVn02ZKzHM+3oKaTmoFTCV5CpJWTVqWm+kWwNcz8MAGj+Medys93rPJ4B2lc7BXdLfZ2lpc4Ay0sfP8TDp5n4lcW43w91mr1KLj7p9knVhxafL4gqaeR8jh1MZI98T+rF+iQ+qV7qnPXRR5ZIQEvNEBHRDgokJn5oB2qRSKRCCXkmoQhBOUT1+KiElU0sXHbNRnqglBKzQT1SB6oKHfNRRe66pT1QUjqimT1USc8UzqkgROeK9bLWu1GPnBrmux/lcDj5LyGmyUfRRYnUup0KoLnR+Y/FWNIql9ZLaVdsQ9jL2BBJuj2iMunkrOzvWEvs4mLUi0e4ZjDBVzZXSFStKt7E7BWrTmjho/F7CGcRLqh9ghtQDmRIA2BBPdbFZ7WamoA5QcdyV4eOKd1tOs3MG6T0d/kDzVVwq2SQsZ+m36t9I78cS2loXoyivKk+VmUBgtjmtOjDBBBxHIrS/SL4f9bR9ewTUpAnL3mZubuM+x5rd4hYttrgXW/mMfM/AFVptj/ErNZ9vn+eoQT10V74t4CbLVvN/0akuYY92cbh206bKiPyWOnzuTHOO01t6MaYpT1TCQUayHzQmEkCjdI7JlIoADohASVBKkAoqSDM8k/JNJZsS8keWXPkhEIpRt5pAbeal26KI2UBHQeaQG3mnHRBGyKge3mlOyZ21SI6IN88MWwPslzWmXNI/ldLm57kdlY8Pr6HT9lpHhe2ClaBfMU3gsfyx90x0dGO63apYSwl4ql0fwkadIGCwmH1HxmeMmHtnzHC5pPwVlYKioLNV1VlZ6sEFSHVevGmd4isnrrPUYMy2W7jEfELnfDbVkQun03gjl+y5f4kshs1oc3JjiXsOhBMkdjI8lMvqV6W2t0lsll4i8nAw0eZ81d0rfAkrntDiMDNeruLvdDGAudyEk+QUreHTbBFm42zjQbqAtb4nx8Oe2mHRekTPu3/w73ZrnHssDiHC69Ok6tXc2kACQ1xl7jyAGq0jhtR9euZnr0A0S95iPDmy5MWKa0rzazrHF7LTt1NzS+60XRTjEgi97UazMRy+HKbTQdTe6m8Q5sgicj8x1XXfCNEBgBMjKJMLUfSlwoUrQ2q3Ko0h0/mZAGPVpA/pWzzDyflMFdd0eY/ZpoKQdsgICjwjvdUpPNNJAr26QO6aQCoEFMhEIF5JSnKJ2QWHkou7JykSs2I8kFIHZE7IocEiOiZ7JHYZKAjok4dEz2yS7BBFwzwSI6KQhLDkipUjDmkjIg+RXT+J2C8b9KoWh2N26XDHUXZgLlo2XQ/DlvNWzMjF1P2HSXGI90wGaiNdFjaHr/EZe3JNfze9icW+yTJGt1wn/kAVZMqlU9qtTg4EkEDkwjpmcVnU36rB9FMNj4daJwKpfSDY/WWf1gbedTMiM7pwduMj2WRYa2Ks7XaBdiAbxDYgGbxiIPc7ArONTGnNavbfcOS8N4XWrwWUqrmTBLWTuJyC6DwnhzqLCKVEg63ReeT1ecOwCwKPFLTSp/hera285jGNp4uLXFoAE5mPgt94RZHtbNQ4nEjkueN0aep6rLh8xGp+7m/HOA2+1+yLO9jf1Uw53RxLpI6LN8HejKrTvPtJDSdGkF0Dm4YDXKV1BtMDFezagCd8vKydXe9++I1Me2jV7PRsD2NJN2s/1V6DDakBzGvJJAmRBnsFpfpXtQJp0+RJ2gR/2C2b0xsJs1cNdBDaFYNBgksquYXRrAcD/SFyzxDxV9oqXngAgAZz7RAvfEfBbaX3C5Oqm2G0XnmdaVoR5ZIGuSCs3kiUFBKTigHIAScUAoJAJwkCpAqiCkN0yEeaiMolRJTPdI91mD7yQTshBPyUADskDsn3SO6AHZI9kEpE7Io+80h80E7JTsgYWyeB3/iVWaFodmc2uA/7LW+eS2bwbYaxcatMAyCwT7rcQS9/QXcBqfjJ8OzoItOeva2h/Dr5DQTeeWtAknFxwkeZ2BURTNMupuMuYYOXyWy+EeBufXvXw71Ul7jm+rUEThlDcBuVieOLCbPaRUd7tVmgJ9puB+F1avb6GvVxbqPwvt/n/ispWi7iVs1isN5jKrnhgeAQBBMESDyBjfNaXVrAbLIsdsaYBJgaEmB2Unfp0Zcd7x9E6bnQbZbLBEZxePtOl7sp0lx2xVibTfxGWa06z37S9rWMIogguqHAOcDLQ2c4MGcsAttquDGhrcgMStVnhdVTtvru3Ptk+vK1/wAS+JhZmOIcy8B/G4hs/lF0EudnAAULVaKlU+rpv9WNXAS44ZNJwbvj2XFLbXe9x9Y4uIMYnXXBbKYpnmWrLSMNO6/mfEf7WHF/EdSs+pUJcalW61znuabtNpvNpUwGgNaDjzJGec0JUndlE9s1uiIh59rzYIlCSMAgphRQEICSGoJhMlRRKokiFEFS8kRlEJEKSTuyzCj7lJE7IPZQOPuUvNH3mj7zRQkSgfeKTvvFAiUSkkgl95Lqngmylljp5kvl4bzLj7IG4u+a5dZqDqj202g3nENG5wXffClhHrqdMD2KTRGzAGt+JB7LGXodD9Pdk/KG18C4YLPSDM3H2nn8zzie2g2Wv+kqyX7Ox+rHx2cI/cBbgVR+L6V+y1G/pI7PaVrrzLX0+WY6itp87/dySrZQcMe2C97JYrPTa1z79R2ZacGg/Pus2uAwcysE0nOMu8ktES+ttj741MzEfZb2jj73gMY26MFYscXCSc1UWejlAhWdF8DHJWtIhyz0+Kn8MPWjIdA38/muOcbp3bRWHKrU/uK7PRMbk49OflkuOeJ3A2uvdMj1jsvj8Vsh5fyvNKz91U4fuokfupH58koyR4iMKMKaioEAkApfeSIUEChMhIqhEpSnCioJXk75USFGVRZgpEoIwUCs2JoC85UgosGT9wklKQKCTlBycpPUVE9kDsg6pnVFbj6OuGS99ocMKfss/W4Yns3+5dl8E0cKr+rW+QvH+4eS5z4JH/pU/wBVQ975ErqXg/8A2zf1P/uKxs9S0dnRxr+bS6K1fxtxRtOl6sY1HxDeQBkuPIYLZ3ZLktseXWisXEk3yJJkwMhKxhj8Z08Zs258V5YbaersSvRglwAStP1+S9rFmVYfUWnh7FwYCfygk9hKKTyADPIAfmP0HyXlax+HV/Q79ivSy/6mzRHRWGHpbWWl7rB7ziGz1JifiSuIcSd+NVz/ANSpr/MV3ng/+4pfq+bf8rgNq/1H/qd/cVm+c+VtPdWv9XigfVSAUXKS8oBJBSHyUAhwUjqk5E2iVEqSiUUklIIQRTA+4UCUwUH/2Q==" className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" alt="Alumni" />
                <div>
                  <h4 className="font-bold text-gray-900">Lê Thanh Hương</h4>
                  <p className="text-xs text-gray-500 uppercase">Marketing Manager @ Unilever</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-sm">
                "UEF không chỉ dạy kiến thức mà còn dạy phong thái doanh nhân. Mình học được cách tư duy chiến lược và kỹ năng lãnh đạo từ chính các thầy cô doanh nhân."
              </p>
               <div className="mt-6 flex text-yellow-400 text-xs">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
               <div className="flex items-center gap-4 mb-6">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" alt="Alumni" />
                <div>
                  <h4 className="font-bold text-gray-900">Nguyễn Quốc Anh</h4>
                  <p className="text-xs text-gray-500 uppercase">Founder TechStart</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-sm">
                "Sự hỗ trợ từ Trung tâm Khởi nghiệp UEF là bệ phóng tuyệt vời cho dự án của mình. Nhà trường luôn tạo điều kiện tốt nhất cho những ý tưởng táo bạo."
              </p>
               <div className="mt-6 flex text-yellow-400 text-xs">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Scholarship & CTA Form */}
      <div className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-3 py-1 border border-yellow-400 text-yellow-400 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">Scholarship 2026</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Học Bổng Tài Năng <br/>
                <span className="text-yellow-400">Chắp Cánh Ước Mơ</span>
              </h2>
              <p className="text-blue-100 mb-8 text-lg font-light">
                UEF dành tặng hàng trăm suất học bổng giá trị cho các thí sinh có thành tích xuất sắc trong học tập và hoạt động ngoại khóa.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-5 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                  <div className="text-4xl font-black text-yellow-400 group-hover:scale-110 transition-transform">100%</div>
                  <div>
                    <h4 className="font-bold text-lg">Học Bổng Toàn Phần</h4>
                    <p className="text-sm text-blue-200">Cho thí sinh đạt giải HSG Quốc gia hoặc IELTS 7.5+</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                  <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform">50%</div>
                  <div>
                    <h4 className="font-bold text-lg">Học Bổng Bán Phần</h4>
                    <p className="text-sm text-blue-200">Xét tuyển học bạ 3 năm THPT đạt loại Giỏi</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                  <div className="text-4xl font-black text-red-400 group-hover:scale-110 transition-transform">25%</div>
                  <div>
                    <h4 className="font-bold text-lg">Học Bổng Khuyến Học</h4>
                    <p className="text-sm text-blue-200">Dành cho thí sinh nhập học sớm trước 30/7</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-blue-300 font-medium">
                <CheckCircle2 size={18} className="text-green-400" />
                <span>Cam kết không tăng học phí trong suốt khóa học</span>
              </div>
            </div>

            <div className="bg-white text-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-center text-xs shadow-lg rotate-12">
                Đăng Ký<br/>Sớm
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Đăng Ký Tư Vấn</h3>
              <p className="text-center text-gray-500 text-sm mb-8">Điền thông tin để nhận brochure và tư vấn lộ trình học</p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase">Họ và tên</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 uppercase">Số điện thoại</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="0909 xxx xxx" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700 uppercase">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="example@gmail.com" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700 uppercase">Ngành quan tâm</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-gray-700 appearance-none cursor-pointer">
                      <option>Tài chính - Ngân hàng</option>
                      <option>Quản trị kinh doanh</option>
                      <option>Marketing</option>
                      <option>Kinh doanh quốc tế</option>
                      <option>Thương mại điện tử</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 mt-4 flex items-center justify-center gap-2 group">
                  <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  GỬI ĐĂNG KÝ NGAY
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  *Bộ phận tuyển sinh sẽ liên hệ lại trong vòng 24h làm việc.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Footer
      <footer className="bg-gray-950 text-white py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6 text-3xl font-black tracking-tighter">
                <span className="text-red-600">UEF</span> 
                <span className="text-white">UNIVERSITY</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                Trường Đại học Kinh tế - Tài chính TP.HCM (UEF) theo đuổi mục tiêu là đại học hàng đầu Việt Nam và hướng tới chuẩn mực đào tạo quốc tế gắn liền triết lý Chất lượng - Hiệu quả - Hội nhập.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white text-gray-400 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white text-gray-400 transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white text-gray-400 transition-colors"><Youtube size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-wider text-white border-b border-gray-800 pb-2 inline-block">Thông Tin</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2"><ArrowRight size={12} /> Về UEF</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2"><ArrowRight size={12} /> Thông báo tuyển sinh</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2"><ArrowRight size={12} /> Chương trình quốc tế</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2"><ArrowRight size={12} /> Tin tức & Sự kiện</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2"><ArrowRight size={12} /> Tuyển dụng</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-wider text-white border-b border-gray-800 pb-2 inline-block">Liên Hệ</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span>141 - 145 Điện Biên Phủ, P. 15, Q. Bình Thạnh, TP.HCM</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                    <Phone size={16} />
                  </div>
                  <span>(028) 5422 6666</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                    <Mail size={16} />
                  </div>
                  <span>tuyensinh@uef.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-16 pt-8 text-center text-xs text-gray-600">
            © 2026 UEF - University of Economics and Finance. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}