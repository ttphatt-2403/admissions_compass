import React, { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import { 
  Code, Cpu, Shield, Globe, Terminal, Server, 
  Database, Smartphone, ArrowRight, CheckCircle, 
  Menu, X, Laptop, Users, Zap, Award 
} from 'lucide-react';

const UITLandingPage = () => {
  usePageAnalytics('UIT', 'Đại học Công nghệ Thông tin');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const majors = [
    {
      id: 'cs',
      title: 'Khoa học Máy tính',
      score: '28.0+',
      desc: 'Nghiên cứu sâu về thuật toán, học máy và trí tuệ nhân tạo. Đào tạo các chuyên gia AI, Data Scientist hàng đầu.',
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      id: 'se',
      title: 'Kỹ thuật Phần mềm',
      score: '27.5+',
      desc: 'Quy trình phát triển phần mềm chuyên nghiệp. Trở thành Software Engineer, Solution Architect tại các tập đoàn công nghệ.',
      icon: Code,
      color: 'text-blue-400'
    },
    {
      id: 'is',
      title: 'An toàn Thông tin',
      score: '27.2+',
      desc: 'Bảo vệ hệ thống số trước các cuộc tấn công mạng. Đào tạo chuyên gia Pentest, Security Analyst.',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      id: 'it',
      title: 'Công nghệ Thông tin',
      score: '27.0+',
      desc: 'Nền tảng kiến thức rộng về hệ thống, mạng và ứng dụng CNTT. Linh hoạt lựa chọn chuyên ngành hẹp.',
      icon: Terminal,
      color: 'text-cyan-400'
    }
  ];

  const features = [
    {
      title: 'Đối tác Công nghệ Lớn',
      desc: 'Thực tập tại Google, Microsoft, FPT, VNG ngay từ năm 3. Cam kết việc làm 100%.',
      icon: Globe
    },
    {
      title: 'Phòng Lab Hiện đại',
      desc: 'Hệ thống siêu máy tính, phòng Lab AI/IoT chuẩn quốc tế phục vụ nghiên cứu.',
      icon: Server
    },
    {
      title: 'Dự án Thực tế',
      desc: 'Sinh viên tham gia dự án thực tế (Project-based Learning) và các cuộc thi Hackathon thường niên.',
      icon: Laptop
    }
  ];

  return (
    <div className="font-sans bg-[#0f172a] text-slate-200 min-h-screen selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <Terminal size={24} />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">UIT <span className="text-cyan-400">University</span></span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Trang chủ', 'Ngành học', 'Tuyển sinh', 'Nghiên cứu'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors uppercase tracking-wider">
                  {item}
                </a>
              ))}
              <button className="bg-cyan-500 hover:bg-cyan-400 text-[#0f172a] px-6 py-2 rounded font-bold transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                Đăng ký ngay
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0f172a]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          {/* Animated Glows */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              ADMISSIONS 2026 OPEN
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Bứt phá trong <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                Kỷ nguyên Số
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Trở thành công dân toàn cầu với kiến thức công nghệ tiên tiến nhất. UIT - Nơi khởi đầu của những chuyên gia công nghệ hàng đầu Việt Nam.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-white text-[#0f172a] font-bold rounded overflow-hidden transition-all hover:scale-105">
                <div className="absolute inset-0 w-full h-full bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                  Khám phá Ngành học <ArrowRight size={20} />
                </span>
              </button>
              <button className="px-8 py-4 border border-slate-700 hover:border-cyan-500 text-white font-bold rounded transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-slate-800/50 backdrop-blur-sm">
                Tư vấn trực tuyến
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-slate-800">
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Việc làm ngay</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$1000+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Lương khởi điểm</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Top 1</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Đào tạo ANTT</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwY29kaW5nJTIwZGFyayUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzcxNDgwMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Programming"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-transparent p-8">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-2">
                  <Terminal size={16} />
                  <span>System.init(Future);</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -right-8 top-12 bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-2xl animate-bounce delay-700 hidden md:block">
              <Code className="text-cyan-400 mb-2" />
              <div className="text-xs text-slate-400">Lines of Code</div>
              <div className="font-mono font-bold text-white">1,024,567</div>
            </div>
            <div className="absolute -left-8 bottom-12 bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-2xl animate-bounce hidden md:block">
              <Shield className="text-green-400 mb-2" />
              <div className="text-xs text-slate-400">Security Status</div>
              <div className="font-mono font-bold text-white text-green-400">SECURE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Majors Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Các Ngành <span className="text-cyan-400">Mũi Nhọn</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Chương trình đào tạo cập nhật liên tục theo xu hướng công nghệ thế giới (AI, Blockchain, Cyber Security).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majors.map((major) => (
              <div key={major.id} className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-lg bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700 group-hover:border-cyan-500/30 ${major.color}`}>
                  <major.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{major.title}</h3>
                <div className="flex items-center gap-2 mb-4 text-sm font-mono text-slate-400">
                  <span className="text-cyan-500 font-bold">Điểm chuẩn:</span> {major.score}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {major.desc}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                  Chi tiết <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBzdHVkZW50cyUyMGNvZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzcxNDgwMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Hackathon" 
                  className="rounded-2xl border border-slate-700 shadow-2xl translate-y-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxNDgwMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Teamwork" 
                  className="rounded-2xl border border-slate-700 shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white leading-tight">
                Hệ sinh thái Công nghệ <br/>
                <span className="text-cyan-400">Chuẩn Quốc tế</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Môi trường học tập không giới hạn trong giảng đường. Tại UIT, sinh viên được sống và làm việc như những kỹ sư thực thụ ngay từ năm nhất.
              </p>

              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border border-slate-700 text-cyan-400">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn sàng trở thành <br/>
            <span className="text-cyan-400">Tech Leader tương lai?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Đừng bỏ lỡ cơ hội gia nhập cộng đồng công nghệ lớn nhất Việt Nam. Đăng ký tư vấn ngay để nhận lộ trình học tập chi tiết.
          </p>
          
          <form className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-4 text-left">
              <div>
                <label className="text-sm font-bold text-slate-300 mb-2 block">Họ và tên</label>
                <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="Nhập họ tên của bạn" />
              </div>
              <div>
                <label className="text-sm font-bold text-slate-300 mb-2 block">Số điện thoại</label>
                <input type="tel" className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="Nhập số điện thoại" />
              </div>
              <div>
                <label className="text-sm font-bold text-slate-300 mb-2 block">Ngành quan tâm</label>
                <select className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors">
                  <option>Khoa học Máy tính</option>
                  <option>Kỹ thuật Phần mềm</option>
                  <option>An toàn Thông tin</option>
                  <option>Trí tuệ Nhân tạo</option>
                </select>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded shadow-lg transition-all transform hover:scale-[1.02]">
                ĐĂNG KÝ TƯ VẤN NGAY
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer
      <footer className="bg-[#0f172a] border-t border-slate-800 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white font-bold text-lg">
              <Terminal className="text-cyan-400" /> UIT University
            </div>
            <p className="max-w-sm mb-4">
              Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM. <br/>
              Tiên phong trong đào tạo nhân lực CNTT chất lượng cao.
            </p>
            <div className="flex gap-4 text-white">
              <Globe size={20} className="hover:text-cyan-400 cursor-pointer" />
              <Facebook size={20} className="hover:text-blue-500 cursor-pointer" />
              <Linkedin size={20} className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Đào tạo</h4>
            <ul className="space-y-2">
              <li className="hover:text-cyan-400 cursor-pointer">Đại học chính quy</li>
              <li className="hover:text-cyan-400 cursor-pointer">Thạc sĩ & Tiến sĩ</li>
              <li className="hover:text-cyan-400 cursor-pointer">Văn bằng 2</li>
              <li className="hover:text-cyan-400 cursor-pointer">Liên kết Quốc tế</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Liên hệ</h4>
            <ul className="space-y-2">
              <li>Khu phố 6, P.Linh Trung, TP.Thủ Đức, TP.HCM</li>
              <li>(028) 372 52002</li>
              <li>info@uit.edu.vn</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center">
          &copy; 2026 University of Information Technology. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
};

// Missing icon fix
const Brain = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const Facebook = ({ size, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const Linkedin = ({ size, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

export default UITLandingPage;
