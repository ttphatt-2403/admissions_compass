import { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  Instagram, 
  CheckCircle2, 
  Palette, 
  Briefcase, 
  Cpu, 
  Globe, 
  Star,
  Users,
  Award,
  Zap,
  BookOpen
} from 'lucide-react';

export default function VLULandingPage() {
  const [activeMajorTab, setActiveMajorTab] = useState<'design' | 'economics' | 'tech' | 'language'>('design');

  const facilities = [
    { title: 'Campus Hiện Đại', desc: 'Không gian học tập chuẩn quốc tế, kiến trúc độc đáo khơi nguồn sáng tạo.', icon: <MapPin className="text-red-600" size={32} /> },
    { title: 'Studio Thực Hành', desc: 'Hệ thống phòng Lab, Studio chuyên dụng cho từng nhóm ngành.', icon: <Palette className="text-red-600" size={32} /> },
    { title: 'Thư Viện Thông Minh', desc: 'Nguồn tài liệu khổng lồ, không gian tự học tiện nghi 24/7.', icon: <BookOpen className="text-red-600" size={32} /> },
  ];

  const majors = {
    design: {
      title: 'Thiết Kế & Nghệ Thuật',
      desc: 'Cái nôi của những nhà thiết kế hàng đầu, nơi ý tưởng thăng hoa thành tác phẩm.',
      items: [
        { name: 'Thiết kế Đồ họa', score: '24.0', subjects: 'H00, V00, V01' },
        { name: 'Thiết kế Thời trang', score: '23.5', subjects: 'H00, V00, V01' },
        { name: 'Thiết kế Nội thất', score: '23.0', subjects: 'H00, V00, V01' },
        { name: 'Kiến trúc', score: '24.5', subjects: 'V00, V01' },
      ],
      image: "https://images.unsplash.com/photo-1624878021713-ad6f040e121f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGVudCUyMHN0dWRpb3xlbnwxfHx8fDE3NzE0OTc4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    economics: {
      title: 'Kinh Tế & Quản Trị',
      desc: 'Đào tạo tư duy lãnh đạo, kỹ năng quản lý và khởi nghiệp trong kỷ nguyên số.',
      items: [
        { name: 'Quản trị Kinh doanh', score: '25.0', subjects: 'A00, A01, D01' },
        { name: 'Marketing', score: '25.5', subjects: 'A00, A01, D01' },
        { name: 'Tài chính Ngân hàng', score: '24.5', subjects: 'A00, A01, D01' },
        { name: 'Kinh doanh Quốc tế', score: '25.0', subjects: 'A00, D01' },
      ],
      image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE0OTc4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    tech: {
      title: 'Công Nghệ & Kỹ Thuật',
      desc: 'Nắm bắt xu hướng công nghệ 4.0, thực hành trên nền tảng thiết bị tiên tiến.',
      items: [
        { name: 'Công nghệ Thông tin', score: '26.0', subjects: 'A00, A01' },
        { name: 'Khoa học Dữ liệu & AI', score: '25.5', subjects: 'A00, A01' },
        { name: 'Kỹ thuật Phần mềm', score: '25.0', subjects: 'A00, A01' },
      ],
      image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwY29kaW5nfGVufDF8fHx8MTc3MTQ3NTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    language: {
      title: 'Ngôn Ngữ & Xã Hội',
      desc: 'Kết nối văn hóa toàn cầu, mở rộng cơ hội việc làm tại các tập đoàn đa quốc gia.',
      items: [
        { name: 'Ngôn ngữ Anh', score: '24.0', subjects: 'D01, A01' },
        { name: 'Ngôn ngữ Hàn Quốc', score: '23.5', subjects: 'D01, C00' },
        { name: 'Quan hệ Công chúng', score: '25.0', subjects: 'C00, D01' },
      ],
      image: "https://images.unsplash.com/photo-1758270703081-3e1595e2b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMGdyb3VwJTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3NzE0OTc4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxMzk0NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-black/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center sm:text-left w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Tuyển sinh đại học chính quy 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Kiến Tạo Tương Lai <br/>
              <span className="text-red-400">Bứt Phá Bản Thân</span> <br/>
              Cùng Văn Lang
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Môi trường học tập sáng tạo, đa ngành, định hướng thực tiễn. Nơi ươm mầm tài năng và khẳng định bản lĩnh của thế hệ công dân toàn cầu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2">
                Khám phá ngành học
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center">
                Đăng ký tư vấn ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overview Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại Sao Chọn Văn Lang?</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Với hơn 25 năm hình thành và phát triển, Đại học Văn Lang tự hào là điểm đến uy tín của hàng ngàn sinh viên mỗi năm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Majors Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Ngành Đào Tạo Nổi Bật</h2>
              <p className="text-gray-600">Đa dạng lĩnh vực, chương trình đào tạo bám sát thực tiễn doanh nghiệp.</p>
            </div>
            
            {/* Custom Tabs */}
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {[
                { id: 'design', label: 'Thiết Kế', icon: Palette },
                { id: 'economics', label: 'Kinh Tế', icon: Briefcase },
                { id: 'tech', label: 'Công Nghệ', icon: Cpu },
                { id: 'language', label: 'Ngôn Ngữ', icon: Globe },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMajorTab(tab.id as any)}
                    className={`
                      flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all
                      ${activeMajorTab === tab.id 
                        ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                    `}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{majors[activeMajorTab].title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {majors[activeMajorTab].desc}
                  </p>
                </div>

                <div className="space-y-4">
                  {majors[activeMajorTab].items.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:border-red-200 hover:shadow-md transition-all">
                      <div>
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">Tổ hợp: {item.subjects}</p>
                      </div>
                      <div className="text-right">
                        <span className="block text-xs text-gray-400 font-semibold uppercase">Điểm chuẩn</span>
                        <span className="block text-xl font-bold text-red-600">{item.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 text-red-600 font-bold hover:text-red-700 flex items-center gap-2 group w-fit">
                  Xem chi tiết chương trình học 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={majors[activeMajorTab].image} 
                  alt={majors[activeMajorTab].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-l"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Student Experience & Stats */}
      <div className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trải Nghiệm Sinh Viên<br/><span className="text-red-500">Đẳng Cấp Quốc Tế</span></h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Tại Văn Lang, việc học không chỉ giới hạn trong giảng đường. Bạn sẽ được hòa mình vào môi trường năng động với hơn 50 câu lạc bộ, các cuộc thi sáng tạo và chương trình trao đổi sinh viên quốc tế.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-red-400 mb-1">95%</div>
                  <div className="text-sm text-gray-300">Sinh viên có việc làm sau 6 tháng</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-blue-400 mb-1">50+</div>
                  <div className="text-sm text-gray-300">CLB & Đội nhóm năng động</div>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  'Giao lưu văn hóa quốc tế thường niên',
                  'Hệ thống đối tác doanh nghiệp rộng khắp',
                  'Cơ sở vật chất Complex 5 sao',
                  'Hỗ trợ khởi nghiệp từ năm nhất'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-red-500 flex-shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600" className="rounded-2xl w-full h-48 object-cover transform translate-y-8 shadow-lg" alt="Student Life 1" />
               <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" className="rounded-2xl w-full h-48 object-cover shadow-lg" alt="Student Life 2" />
               <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" className="rounded-2xl w-full h-48 object-cover shadow-lg" alt="Student Life 3" />
               <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600" className="rounded-2xl w-full h-48 object-cover transform -translate-y-8 shadow-lg" alt="Student Life 4" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Scholarship & CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-6">
            <Award className="text-yellow-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Học Bổng & Hỗ Trợ Tài Chính</h2>
          <p className="text-gray-600">
            Văn Lang cam kết không để học phí trở thành rào cản trên con đường chinh phục tri thức của bạn.
            Hàng trăm suất học bổng giá trị đang chờ đón tân sinh viên 2026.
          </p>
        </div>

        <div className="bg-red-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl transform md:-translate-y-12 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Đăng Ký Nhận Tư Vấn & Brochure</h3>
                  <p className="text-gray-600 mb-8">
                    Để lại thông tin để nhận tư vấn chi tiết về ngành học, học phí và cơ hội học bổng.
                    Bộ phận tuyển sinh sẽ liên hệ với bạn trong vòng 24h.
                  </p>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Họ và tên" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                      <input type="text" placeholder="Số điện thoại" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>
                    <input type="email" placeholder="Email của bạn" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500">
                      <option>Chọn nhóm ngành quan tâm</option>
                      <option>Thiết kế & Nghệ thuật</option>
                      <option>Kinh tế & Quản trị</option>
                      <option>Công nghệ thông tin</option>
                      <option>Ngôn ngữ & Xã hội</option>
                    </select>
                    <button className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                      Đăng Ký Ngay
                    </button>
                  </form>
                </div>
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-100 rounded-full filter blur-3xl opacity-50"></div>
                    <img src="https://images.unsplash.com/photo-1655720348616-184ae7fad7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGhhcHB5JTIwY29uc3VsdGF0aW9uJTIwbGFwdG9wfGVufDF8fHx8MTc3MTQ5ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Consultation" className="relative rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                <span className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white">VL</span>
                VĂN LANG
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Trường Đại học Văn Lang - Cơ sở chính<br/>
                69/68 Đặng Thùy Trâm, P. 13, Q. Bình Thạnh, TP. HCM
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Youtube size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Instagram size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Thông Tin</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Giới thiệu chung</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Tuyển sinh 2026</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Chương trình đào tạo</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Hợp tác quốc tế</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Liên Hệ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-red-500" />
                  <span>028.7109.9221</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-red-500" />
                  <span>tuyensinh@vlu.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-600">
            © 2026 Van Lang University. All rights reserved. Designed for Figma Make.
          </div>
        </div>
      </footer>
    </div>
  );
}