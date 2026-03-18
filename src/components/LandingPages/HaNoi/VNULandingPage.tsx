import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Globe, 
  Microscope, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  GraduationCap,
  Building2,
  Newspaper,
  ChevronRight,
  TrendingUp,
  Youtube
} from 'lucide-react';

const VNULandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    school: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('VNU Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl border-2 border-white shadow-md">
                VNU
              </div>
              <div>
                <span className="block font-bold text-lg text-blue-900 leading-none">ĐẠI HỌC QUỐC GIA</span>
                <span className="block text-sm font-medium text-slate-500 tracking-wider">HÀ NỘI</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-blue-900 font-medium transition-colors text-sm uppercase tracking-wide">Giới thiệu</a>
              <a href="#faculties" className="text-slate-700 hover:text-blue-900 font-medium transition-colors text-sm uppercase tracking-wide">Đơn vị đào tạo</a>
              <a href="#research" className="text-slate-700 hover:text-blue-900 font-medium transition-colors text-sm uppercase tracking-wide">Nghiên cứu</a>
              <a href="#admissions" className="text-slate-700 hover:text-blue-900 font-medium transition-colors text-sm uppercase tracking-wide">Tuyển sinh</a>
            </div>

            <button 
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-sm font-semibold transition-all shadow-md transform hover:-translate-y-0.5"
            >
              Cổng thông tin
              <ArrowRight className="w-4 h-4" />
            </button>
            
            {/* Mobile menu button placeholder */}
            <div className="lg:hidden">
              <button className="text-blue-900 p-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1758413149178-95efe71954fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjB2aWV0bmFtJTIwaGFub2l8ZW58MXx8fHwxNzcxNDMxMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="VNU Campus" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 rounded-full">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Đại học số 1 Việt Nam - Top 1000 Thế giới</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Vị thế Tiên phong <br/>
              <span className="text-yellow-400">Kiến tạo Tương lai</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light">
              Nơi hội tụ tinh hoa tri thức, đào tạo nhân tài và thúc đẩy đổi mới sáng tạo, góp phần vào sự phát triển thịnh vượng của đất nước.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 rounded-sm font-bold text-lg shadow-lg transition-all hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
              >
                Đăng ký xét tuyển
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-sm font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Tìm hiểu chương trình
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats Strip */}
        <div className="absolute bottom-0 w-full bg-blue-900/80 backdrop-blur-md border-t border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 divide-x divide-white/10 py-6">
              {[
                { label: "Trường đại học thành viên", value: "12+" },
                { label: "Giáo sư & Phó Giáo sư", value: "450+" },
                { label: "Công bố quốc tế/năm", value: "1,500+" },
                { label: "Đối tác quốc tế", value: "300+" }
              ].map((stat, idx) => (
                <div key={idx} className="px-6 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-blue-200 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-100 rounded-br-3xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1758270704262-ecc82b23dc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwbGVjdHVyZSUyMGhhbGwlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE0MzEyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Academic Excellence" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute bottom-8 left-8 bg-white p-4 rounded shadow-lg max-w-xs border-l-4 border-blue-900 hidden lg:block">
                  <p className="text-sm italic text-slate-600">"Chất lượng đào tạo là giá trị cốt lõi, là cam kết cao nhất với xã hội."</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-blue-900 font-bold uppercase tracking-widest text-sm mb-2">Về chúng tôi</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Bề dày truyền thống - Vươn tầm quốc tế</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Đại học Quốc gia Hà Nội là trung tâm đào tạo, nghiên cứu khoa học và chuyển giao tri thức đa ngành, đa lĩnh vực chất lượng cao; nòng cột trong hệ thống giáo dục đại học Việt Nam.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Đội ngũ giảng viên là các nhà khoa học đầu ngành.",
                  "Môi trường học thuật tự do, khai phóng và sáng tạo.",
                  "Cơ sở vật chất hiện đại tại khu đô thị Hòa Lạc.",
                  "Mạng lưới hợp tác với hơn 300 đại học danh tiếng thế giới."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-900 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="text-blue-900 font-bold border-b-2 border-blue-900 hover:text-blue-700 hover:border-blue-700 transition-colors pb-1 inline-flex items-center gap-1">
                Xem thêm về lịch sử phát triển <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Faculties/Schools */}
      <section id="faculties" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Các trường đại học thành viên</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hệ thống đào tạo đa ngành từ Khoa học tự nhiên, Công nghệ, Kinh tế đến Khoa học xã hội và nhân văn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Trường ĐH Khoa học Tự nhiên", 
                code: "HUS", 
                desc: "Cái nôi đào tạo các nhà khoa học cơ bản hàng đầu.",
                icon: Microscope,
                img: "https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5JTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzE0MzEyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              { 
                name: "Trường ĐH Công nghệ", 
                code: "UET", 
                desc: "Đào tạo nhân lực công nghệ cao, kỹ thuật tiên tiến.",
                icon: Building2,
                img: "https://images.unsplash.com/photo-1758413149178-95efe71954fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjB2aWV0bmFtJTIwaGFub2l8ZW58MXx8fHwxNzcxNDMxMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              { 
                name: "Trường ĐH Kinh tế", 
                code: "UEB", 
                desc: "Tư duy kinh tế mới, hội nhập và phát triển bền vững.",
                icon: TrendingUp,
                img: "https://images.unsplash.com/photo-1769284062487-f15ae67a3d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcxNDMxMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              { 
                name: "Trường ĐH KHXH & Nhân văn", 
                code: "USSH", 
                desc: "Giữ gìn và phát huy bản sắc văn hóa, lịch sử dân tộc.",
                icon: BookOpen,
                img: "https://images.unsplash.com/photo-1743327584769-d5d13093b624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMHZpZXRuYW0lMjBzdHVkZW50cyUyMGhhcHB5fGVufDF8fHx8MTc3MTQzMTIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
              },
              { 
                name: "Trường ĐH Ngoại ngữ", 
                code: "ULIS", 
                desc: "Cầu nối ngôn ngữ và văn hóa quốc tế.",
                icon: Globe,
                img: "https://images.unsplash.com/photo-1766226083712-be8e02074247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBleGNoYW5nZSUyMHByb2dyYW0lMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MTQzMTIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
              },
              { 
                name: "Khoa Luật", 
                code: "VNU-LS", 
                desc: "Đào tạo chuyên gia pháp lý chất lượng cao.",
                icon: Award,
                img: "https://images.unsplash.com/photo-1758270704262-ecc82b23dc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwbGVjdHVyZSUyMGhhbGwlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE0MzEyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((school, idx) => (
              <div key={idx} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10"></div>
                   <img src={school.img} alt={school.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                     {school.code}
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <school.icon className="w-8 h-8 text-blue-900 mb-3" />
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{school.name}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 flex-1">{school.desc}</p>
                  <a href="#" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:translate-x-1 transition-transform">
                    Chi tiết đào tạo <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Achievements */}
      <section id="research" className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 skew-x-12 translate-x-1/4 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Tiên phong trong Nghiên cứu & Đổi mới sáng tạo</h2>
                 <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                   Với sứ mệnh kiến tạo tri thức mới, VNU luôn dẫn đầu cả nước về số lượng công bố quốc tế ISI/Scopus và các bằng sáng chế, giải pháp hữu ích.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur p-4 rounded border border-white/10">
                       <div className="text-3xl font-bold text-yellow-400 mb-1">Top 1</div>
                       <div className="text-sm text-blue-200">Bảng xếp hạng đại học Việt Nam</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded border border-white/10">
                       <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
                       <div className="text-sm text-blue-200">Đề tài cấp Nhà nước/năm</div>
                    </div>
                 </div>
                 <button className="mt-10 px-6 py-3 border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors rounded-sm">
                   Xem các dự án tiêu biểu
                 </button>
              </div>
              <div className="lg:w-1/2 flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5JTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzE0MzEyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080" className="rounded-lg shadow-lg translate-y-8" alt="Lab" />
                    <img src="https://images.unsplash.com/photo-1766226083712-be8e02074247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBleGNoYW5nZSUyMHByb2dyYW0lMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MTQzMTIyNHww&ixlib=rb-4.1.0&q=80&w=1080" className="rounded-lg shadow-lg" alt="Discussion" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Opportunities: Scholarships & Jobs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600">
                       <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Học bổng & Hỗ trợ</h3>
                 </div>
                 <p className="text-slate-600 mb-6">
                    Quỹ học bổng VNU và các doanh nghiệp đối tác lên tới hàng chục tỷ đồng mỗi năm dành cho sinh viên xuất sắc và vượt khó.
                 </p>
                 <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-slate-700 font-medium">
                       <Star className="w-4 h-4 text-yellow-500" /> Học bổng Tài năng khoa học cơ bản
                    </li>
                    <li className="flex items-center gap-2 text-slate-700 font-medium">
                       <Star className="w-4 h-4 text-yellow-500" /> Học bổng ADF, Toshiba, Mitsubishi...
                    </li>
                    <li className="flex items-center gap-2 text-slate-700 font-medium">
                       <Star className="w-4 h-4 text-yellow-500" /> Hỗ trợ chi phí ký túc xá
                    </li>
                 </ul>
                 <a href="#" className="text-blue-700 font-bold text-sm hover:underline">Xem danh sách học bổng &rarr;</a>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                       <Briefcase className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Cơ hội việc làm</h3>
                 </div>
                 <p className="text-slate-600 mb-6">
                    Sinh viên VNU được đánh giá cao bởi các nhà tuyển dụng hàng đầu nhờ nền tảng kiến thức vững chắc và kỹ năng tư duy độc lập.
                 </p>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                       <span className="text-slate-600">Tỷ lệ có việc làm sau 1 năm</span>
                       <span className="font-bold text-blue-900 text-lg">96.5%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                       <span className="text-slate-600">Mức lương khởi điểm trung bình</span>
                       <span className="font-bold text-blue-900 text-lg">12 - 20 triệu</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-slate-600">Làm việc tại tập đoàn đa quốc gia</span>
                       <span className="font-bold text-blue-900 text-lg">35%</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-blue-900 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Đăng ký tư vấn</h3>
                <p className="text-blue-200 mb-8 text-sm">
                  Để lại thông tin để được đội ngũ tư vấn tuyển sinh của Đại học Quốc gia Hà Nội hỗ trợ giải đáp mọi thắc mắc.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span>144 Xuân Thủy, Cầu Giấy, Hà Nội</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <span>024 3754 7670</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <span>tuyensinh@vnu.edu.vn</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs text-blue-300 uppercase tracking-wider mb-3">Theo dõi chúng tôi</p>
                <div className="flex gap-4">
                  <div className="p-2 bg-blue-800 rounded hover:bg-blue-700 cursor-pointer transition-colors"><Facebook className="w-4 h-4" /></div>
                  <div className="p-2 bg-blue-800 rounded hover:bg-blue-700 cursor-pointer transition-colors"><Linkedin className="w-4 h-4" /></div>
                  <div className="p-2 bg-blue-800 rounded hover:bg-blue-700 cursor-pointer transition-colors"><Youtube className="w-4 h-4" /></div>
                </div>
              </div>
            </div>

            <div className="md:w-7/12 p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Đăng ký thành công!</h4>
                  <p className="text-slate-600 text-sm">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ sớm nhất.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-blue-700 font-semibold text-sm hover:underline">
                    Gửi đăng ký khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Họ và tên</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      className="w-full px-4 py-2.5 rounded border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all"
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Số điện thoại</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        className="w-full px-4 py-2.5 rounded border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all"
                        placeholder="0912..."
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        className="w-full px-4 py-2.5 rounded border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Trường quan tâm</label>
                    <select 
                      name="school" 
                      className="w-full px-4 py-2.5 rounded border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all bg-white"
                      value={formData.school}
                      onChange={handleChange}
                    >
                      <option value="">Chọn trường thành viên...</option>
                      <option value="HUS">ĐH Khoa học Tự nhiên</option>
                      <option value="UET">ĐH Công nghệ</option>
                      <option value="UEB">ĐH Kinh tế</option>
                      <option value="ULIS">ĐH Ngoại ngữ</option>
                      <option value="USSH">ĐH KHXH & Nhân văn</option>
                      <option value="OTHER">Khác</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded shadow-md transition-all hover:shadow-lg mt-2"
                  >
                    Gửi thông tin
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold text-xs">VNU</div>
                  <span className="font-bold text-lg text-white">Đại học Quốc gia Hà Nội</span>
               </div>
               <p className="text-sm leading-relaxed mb-4">
                 Vietnam National University, Hanoi (VNU)
               </p>
               <p className="text-sm">
                 Giấy phép số: 123/GP-BTTTT cấp ngày 01/01/2020
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liên kết nhanh</h4>
               <div className="grid grid-cols-2 gap-2 text-sm">
                  <a href="#" className="hover:text-white transition-colors">Trang chủ</a>
                  <a href="#" className="hover:text-white transition-colors">Tin tức</a>
                  <a href="#" className="hover:text-white transition-colors">Đào tạo</a>
                  <a href="#" className="hover:text-white transition-colors">Nghiên cứu</a>
                  <a href="#" className="hover:text-white transition-colors">Hợp tác</a>
                  <a href="#" className="hover:text-white transition-colors">Sinh viên</a>
               </div>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liên hệ</h4>
               <p className="text-sm mb-2">144 đường Xuân Thủy, Quận Cầu Giấy, Hà Nội</p>
               <p className="text-sm mb-2">Tel: (84) 24 37547 670</p>
               <p className="text-sm">Email: media@vnu.edu.vn</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            &copy; 2026 Đại học Quốc gia Hà Nội. Bảo lưu mọi quyền.
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default VNULandingPage;
