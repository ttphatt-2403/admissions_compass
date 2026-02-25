import { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Globe, 
  Briefcase, 
  UserCheck, 
  Award, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  Instagram,
  Check,
  Star,
  Users
} from 'lucide-react';

export default function HSULandingPage() {
  const [activeTab, setActiveTab] = useState('media');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const programs = {
    media: {
      title: 'Truyền Thông Đa Phương Tiện',
      desc: 'Làm chủ công nghệ và sáng tạo nội dung số trong kỷ nguyên 4.0. Học kỳ thực tập tại các đài truyền hình, agency lớn.',
      roadmap: [
        'Năm 1: Nền tảng tư duy sáng tạo & Công cụ thiết kế cơ bản',
        'Năm 2: Kỹ thuật quay dựng, nhiếp ảnh & Sản xuất nội dung số',
        'Năm 3: Quản trị dự án truyền thông & Thực tập doanh nghiệp',
        'Năm 4: Đồ án tốt nghiệp & Chuyên sâu (Marketing/Báo chí)'
      ],
      careers: ['Content Creator', 'Video Editor', 'Producer', 'Digital Marketer'],
      image: 'https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aW1lZGlhJTIwcHJvZHVjdGlvbiUyMGNhbWVyYSUyMHN0dWRpbyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTQ5ODM5OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    design: {
      title: 'Thiết Kế Đồ Họa',
      desc: 'Thỏa sức sáng tạo với hệ thống studio chuẩn quốc tế. Chương trình đào tạo cập nhật xu hướng thiết kế mới nhất.',
      roadmap: [
        'Năm 1: Nguyên lý thị giác & Vẽ tay',
        'Năm 2: Typography, Branding & Layout Design',
        'Năm 3: UI/UX Design, 3D Modeling & Motion Graphics',
        'Năm 4: Portfolio & Đồ án tốt nghiệp',
      ],
      careers: ['Graphic Designer', 'Art Director', 'UI/UX Designer', 'Illustrator'],
      image: 'https://images.unsplash.com/photo-1548057407-b022b3f5b6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwc3R1ZGVudCUyMHdvcmtpbmclMjBvbiUyMG1hY2Jvb2t8ZW58MXx8fHwxNzcxNDk4Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    business: {
      title: 'Quản Trị Kinh Doanh',
      desc: 'Đào tạo nhà lãnh đạo tương lai với tư duy chiến lược và kỹ năng quản lý thực chiến. Cơ hội trao đổi sinh viên quốc tế.',
      roadmap: [
        'Năm 1: Kinh tế vi mô/vĩ mô & Quản trị học',
        'Năm 2: Marketing căn bản, Kế toán & Tài chính',
        'Năm 3: Quản trị chiến lược, Nhân sự & Khởi nghiệp',
        'Năm 4: Thực tập quản lý & Khóa luận tốt nghiệp'
      ],
      careers: ['CEO/Founder', 'Giám đốc kinh doanh', 'Chuyên viên tư vấn', 'Quản lý dự án'],
      image: 'https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzcxNDk4Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    hotel: {
      title: 'Du Lịch - Nhà Hàng - Khách Sạn',
      desc: 'Chương trình chuẩn Vatel (Pháp). Thực hành tại khách sạn 5 sao ngay từ năm nhất. Cơ hội làm việc toàn cầu.',
      roadmap: [
        'Năm 1: Tổng quan du lịch & Nghiệp vụ buồng phòng/bàn',
        'Năm 2: Quản trị tiền sảnh & Ẩm thực (F&B)',
        'Năm 3: Quản trị doanh thu & Marketing du lịch',
        'Năm 4: Quản lý điều hành & Thực tập quản lý tại KS 5 sao'
      ],
      careers: ['Quản lý khách sạn', 'Điều hành tour', 'Event Manager', 'F&B Manager'],
      image: 'https://images.unsplash.com/photo-1579853804837-769364c0500e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBzZXJ2aWNlJTIwd2FpdGVyJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzE0OTgzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  };

  const faqs = [
    { q: 'Trường Đại học Hoa Sen xét tuyển những phương thức nào?', a: 'HSU xét tuyển theo 4 phương thức: 1. Kết quả thi THPT Quốc gia; 2. Kết quả học bạ THPT; 3. Kết quả kỳ thi Đánh giá năng lực ĐHQG TP.HCM/Hà Nội; 4. Xét tuyển thẳng theo quy định của Bộ GD&ĐT và trường.' },
    { q: 'Học phí tại Hoa Sen là bao nhiêu một năm?', a: 'Học phí dao động từ 25 - 40 triệu VNĐ/học kỳ tùy theo ngành và chương trình đào tạo. Trường cam kết không tăng học phí trong suốt khóa học.' },
    { q: 'Sinh viên có cơ hội đi thực tập nước ngoài không?', a: 'Có. HSU có mạng lưới đối tác tại Nhật Bản, Hàn Quốc, Pháp, Mỹ... Sinh viên năm 3-4 có thể đăng ký chương trình thực tập quốc tế hưởng lương.' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. Hero Section with Video Background Concept */}
      <div className="relative h-[650px] flex items-center justify-center overflow-hidden">
        {/* Simulating Video Background with a dynamic image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1695712551704-685891ef2c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjcmVhdGl2ZSUyMHN0dWRpbyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxNDk4Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full font-bold text-sm mb-6 uppercase tracking-wider animate-bounce">
            <Star size={16} fill="currentColor" />
            Tuyển sinh 2026
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            SÁNG TẠO ĐỂ DẪN ĐẦU <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              HỌC ĐỂ KHÁC BIỆT
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            Trải nghiệm môi trường giáo dục đẳng cấp quốc tế, tôn trọng sự khác biệt và phát huy tối đa tiềm năng cá nhân.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 transform hover:-translate-y-1">
              Đăng Ký Xét Tuyển
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              <Download size={20} />
              Tải Cẩm Nang 2026
            </button>
          </div>
        </div>
      </div>

      {/* 2. Philosophy Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Triết Lý Giáo Dục Khai Phóng</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-yellow-400 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Thực Học - Thực Làm</h3>
              <p className="text-gray-600 leading-relaxed">
                Chương trình đào tạo gắn liền với thực tiễn doanh nghiệp. Sinh viên được thực tập ngay từ năm nhất và tham gia các dự án thật (Real Project).
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hội Nhập Quốc Tế</h3>
              <p className="text-gray-600 leading-relaxed">
                Giáo trình chuẩn quốc tế, giảng dạy bằng tiếng Anh. Cơ hội chuyển tiếp du học và nhận bằng cấp từ các trường đại học danh tiếng thế giới.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-yellow-400 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <UserCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tôn Trọng Khác Biệt</h3>
              <p className="text-gray-600 leading-relaxed">
                Môi trường cởi mở, khuyến khích tư duy phản biện và sáng tạo. Sinh viên được tự do thể hiện cá tính và phát triển toàn diện bản thân.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Academic Programs */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Chương Trình Đào Tạo</h2>
              <p className="text-gray-500 mt-2">Lộ trình học tập rõ ràng, hướng nghiệp ngay từ giảng đường</p>
            </div>
            
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto">
              {Object.keys(programs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${activeTab === key ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                  {programs[key as keyof typeof programs].title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-blue-50 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-full opacity-20"></div>
                
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  {programs[activeTab as keyof typeof programs].title}
                </h3>
                <p className="text-gray-700 mb-8 text-lg">
                  {programs[activeTab as keyof typeof programs].desc}
                </p>

                <div className="mb-8">
                  <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <Award size={20} /> Lộ Trình 4 Năm
                  </h4>
                  <ul className="space-y-3">
                    {programs[activeTab as keyof typeof programs].roadmap.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <Briefcase size={20} /> Cơ Hội Nghề Nghiệp
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {programs[activeTab as keyof typeof programs].careers.map((job, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white border border-blue-100 text-blue-600 rounded-lg text-sm font-medium">
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={programs[activeTab as keyof typeof programs].image} 
                alt={programs[activeTab as keyof typeof programs].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Play className="w-10 h-10 bg-yellow-400 rounded-full text-blue-900 p-2.5 pl-3 hover:scale-110 transition-transform cursor-pointer shadow-lg" />
                  <span className="font-bold text-sm uppercase tracking-wide">Xem Video Giới Thiệu Ngành</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Corporate Partners */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Mạng Lưới Đối Tác Doanh Nghiệp</h2>
          <p className="text-blue-200 mb-12 max-w-2xl mx-auto">
            Hợp tác với hơn 500 doanh nghiệp hàng đầu trong và ngoài nước, mang đến cơ hội thực tập và việc làm chất lượng cao cho sinh viên.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-70">
            {/* Logos placeholders */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-20 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
                <span className="font-bold text-xl text-white/50">PARTNER {i}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-bold">
            95% Sinh viên có việc làm ngay khi tốt nghiệp
          </div>
        </div>
      </div>

      {/* 5. Scholarships */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Học Bổng & Hỗ Trợ Tài Chính</h2>
            <p className="text-gray-600">Quỹ học bổng lên đến 50 tỷ đồng dành cho tân sinh viên tài năng</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 px-4 py-1 rounded-bl-xl text-sm font-bold">Cơ Bản</div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Học Bổng Khuyến Học</h3>
              <div className="text-3xl font-black text-blue-600 mb-4">25% - 50%</div>
              <p className="text-sm text-gray-500 mb-6">Học phí năm nhất</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> ĐTB Lớp 10, 11, 12 ≥ 8.0</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> Chứng chỉ IELTS 5.5+</li>
              </ul>
              <button className="w-full py-3 border border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">Đăng Ký</button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-400 relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 px-4 py-1 rounded-bl-xl text-sm font-bold">Phổ Biến Nhất</div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Học Bổng Tài Năng</h3>
              <div className="text-3xl font-black text-yellow-500 mb-4">50% - 100%</div>
              <p className="text-sm text-gray-500 mb-6">Toàn khóa học</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> Giải HSG Quốc gia/Tỉnh</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> Có dự án khởi nghiệp/nghệ thuật</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> IELTS 6.5+</li>
              </ul>
              <button className="w-full py-3 bg-yellow-400 text-blue-900 rounded-xl font-bold hover:bg-yellow-500 transition-colors shadow-lg">Nộp Hồ Sơ Ngay</button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-900 text-white px-4 py-1 rounded-bl-xl text-sm font-bold">Tinh Hoa</div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">Học Bổng Doanh Nghiệp</h3>
              <div className="text-3xl font-black text-blue-900 mb-4">Toàn phần +</div>
              <p className="text-sm text-gray-500 mb-6">Học phí & Sinh hoạt phí</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> Cam kết làm việc sau TN</li>
                <li className="flex gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> Phỏng vấn trực tiếp</li>
              </ul>
              <button className="w-full py-3 border border-blue-900 text-blue-900 rounded-xl font-bold hover:bg-blue-50 transition-colors">Tìm Hiểu Thêm</button>
            </div>
          </div>
        </div>
      </div>

      {/* 6. FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="p-5 bg-gray-50 border-t border-gray-100 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Footer */}
      <footer className="bg-blue-950 text-white py-12 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="text-blue-900 fill-blue-900" size={24} />
                </div>
                <span className="text-2xl font-black">HOA SEN UNIVERSITY</span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-sm">
                Trường Đại học Hoa Sen - Đẳng cấp quốc tế của người Việt. Nơi đào tạo những công dân toàn cầu với tư duy khác biệt và tinh thần doanh chủ.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors"><Youtube size={18} /></a>
                <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors"><Instagram size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-yellow-400 mb-4 uppercase text-sm tracking-wider">Thông Tin</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Giới thiệu chung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuyển sinh 2026</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đội ngũ giảng viên</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cơ sở vật chất</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-yellow-400 mb-4 uppercase text-sm tracking-wider">Liên Hệ</h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-yellow-400" />
                  <span>08 Nguyễn Văn Tráng, P. Bến Thành, Q.1, TP.HCM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-yellow-400" />
                  <span>028 7300 7272</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-yellow-400" />
                  <span>tuyensinh@hoasen.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900 mt-12 pt-8 text-center text-xs text-blue-400">
            © 2026 Hoa Sen University. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}