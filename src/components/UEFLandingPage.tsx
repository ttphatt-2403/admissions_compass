import { useState } from 'react';
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
      image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1080' // Stock market concept
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
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1080' // E-commerce concept
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
                <img src="https://images.unsplash.com/photo-1573496359-136d47552640?auto=format&fit=crop&q=80&w=100&h=100" className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" alt="Alumni" />
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

      {/* 9. Footer */}
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
      </footer>
    </div>
  );
}