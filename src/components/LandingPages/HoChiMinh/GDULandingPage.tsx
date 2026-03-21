import { useState } from 'react';
import { usePageAnalytics } from '../../../hooks/usePageAnalytics';
import { 
  Users, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  Instagram,
  Star,
  DollarSign
} from 'lucide-react';

export default function GDULandingPage() {
  usePageAnalytics('GDU', 'Đại học Gia Định');
  const [activeMajor, setActiveMajor] = useState<string>('business');

  const majors = {
    business: {
      title: 'Quản Trị Kinh Doanh',
      desc: 'Chương trình đào tạo thực tiễn, tập trung vào kỹ năng quản lý, khởi nghiệp và vận hành doanh nghiệp. Sinh viên được trải nghiệm các học kỳ doanh nghiệp ngay từ năm nhất.',
      salary: '10 - 15 triệu/tháng',
      jobs: ['Chuyên viên kinh doanh', 'Quản lý dự án', 'Chuyên viên nhân sự', 'Giám đốc điều hành (CEO)'],
      subjects: ['A00 (Toán, Lý, Hóa)', 'A01 (Toán, Lý, Anh)', 'D01 (Toán, Văn, Anh)', 'C00 (Văn, Sử, Địa)'],
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0dWRlbnQlMjBwcmVzZW50YXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc3MTUwMjU4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <TrendingUp />
    },
    marketing: {
      title: 'Marketing',
      desc: 'Đón đầu xu hướng Digital Marketing. Sinh viên được thực hành trên các nền tảng quảng cáo thực tế (Facebook, Google, TikTok) và tham gia các chiến dịch truyền thông của doanh nghiệp đối tác.',
      salary: '12 - 18 triệu/tháng',
      jobs: ['Chuyên viên Digital Marketing', 'Content Creator', 'Brand Manager', 'Chuyên viên tổ chức sự kiện'],
      subjects: ['A00 (Toán, Lý, Hóa)', 'A01 (Toán, Lý, Anh)', 'D01 (Toán, Văn, Anh)', 'C00 (Văn, Sử, Địa)'],
      image: 'https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMGNyZWF0aXZlJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE0OTY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Target />
    },
    it: {
      title: 'Công Nghệ Thông Tin',
      desc: 'Đào tạo kỹ sư phần mềm "thực chiến". Chương trình học rút ngắn 3 năm, tập trung vào lập trình ứng dụng, thiết kế web và quản trị mạng. Cam kết việc làm sau khi tốt nghiệp.',
      salary: '15 - 25 triệu/tháng',
      jobs: ['Lập trình viên (Web/Mobile)', 'Chuyên viên kiểm thử (Tester)', 'Quản trị mạng', 'Phân tích dữ liệu'],
      subjects: ['A00 (Toán, Lý, Hóa)', 'A01 (Toán, Lý, Anh)', 'D01 (Toán, Văn, Anh)', 'D07 (Toán, Hóa, Anh)'],
      image: 'https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZvcm1hdGlvbiUyMHRlY2hub2xvZ3klMjBzdHVkZW50JTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3MTUwMjUxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Briefcase />
    },
    law: {
      title: 'Luật',
      desc: 'Trang bị kiến thức pháp lý vững chắc và kỹ năng tranh tụng. Sinh viên tham gia các phiên tòa giả định (Moot Court) và thực tập tại các văn phòng luật sư uy tín.',
      salary: '10 - 20 triệu/tháng',
      jobs: ['Luật sư', 'Thẩm phán', 'Kiểm sát viên', 'Pháp chế doanh nghiệp'],
      subjects: ['A00 (Toán, Lý, Hóa)', 'A01 (Toán, Lý, Anh)', 'C00 (Văn, Sử, Địa)', 'D01 (Toán, Văn, Anh)'],
      image: 'https://images.unsplash.com/photo-1724315069759-3bac28f679f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBzdHVkZW50JTIwbW9vdCUyMGNvdXJ0JTIwanVzdGljZXxlbnwxfHx8fDE3NzE1MDI1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <BookOpen />
    },
    english: {
      title: 'Ngôn Ngữ Anh',
      desc: 'Đào tạo cử nhân tiếng Anh thương mại, biên phiên dịch. Môi trường giao tiếp 100% tiếng Anh với giảng viên bản ngữ. Cơ hội thực tập tại các tập đoàn đa quốc gia.',
      salary: '12 - 20 triệu/tháng',
      jobs: ['Biên/Phiên dịch viên', 'Giáo viên tiếng Anh', 'Hướng dẫn viên du lịch quốc tế', 'Thư ký/Trợ lý giám đốc'],
      subjects: ['D01 (Toán, Văn, Anh)', 'A01 (Toán, Lý, Anh)', 'D14 (Văn, Sử, Anh)', 'D15 (Văn, Địa, Anh)'],
      image: 'https://images.unsplash.com/photo-1565598494553-5685d762031c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGFuZ3VhZ2UlMjBzdHVkZW50JTIwdGFsa2luZyUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzcxNTAyNTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <MessageCircle />
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* 1. Hero Section */}
      <div className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1758270705696-ec9caffc73dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBncm91cCUyMGRpc2N1c3Npb24lMjBjbGFzc3Jvb20lMjBpbnRlcmFjdGl2ZXxlbnwxfHx8fDE3NzE1MDI1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 bg-yellow-400 text-green-900 font-bold uppercase tracking-wider text-sm mb-6 rounded-md shadow-md animate-bounce">
              Tuyển sinh Đại học Chính quy 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Thực Học - Thực Hành <br/>
              <span className="text-yellow-400">Thực Nghiệp</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-lg leading-relaxed font-light">
              Đại học Gia Định (GDU) - Môi trường học tập thân thiện, hiện đại. Nơi chắp cánh ước mơ với mức học phí thấp nhất trong các trường đại học tư thục.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold text-lg rounded-full shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Đăng Ký Xét Tuyển
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white text-white font-bold text-lg rounded-full hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                <Youtube size={20} className="text-red-500" />
                Xem Video Giới Thiệu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Selling Points */}
      <div className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-green-50 border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <DollarSign size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Học Phí Tốt Nhất</h3>
              <p className="text-gray-600">Cam kết học phí thấp nhất trong hệ thống các trường đại học tư thục, không tăng trong suốt khóa học.</p>
            </div>
            <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-yellow-50 border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rút Ngắn Thời Gian</h3>
              <p className="text-gray-600">Chương trình đào tạo tinh gọn chỉ 3 năm (8 học kỳ), giúp sinh viên ra trường sớm, đi làm sớm.</p>
            </div>
            <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kết Nối Doanh Nghiệp</h3>
              <p className="text-gray-600">Mạng lưới hơn 500 doanh nghiệp đối tác, đảm bảo cơ hội thực tập và việc làm cho 100% sinh viên.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Majors Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Đa Dạng Ngành Nghề - Vững Chắc Tương Lai</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              GDU đào tạo những ngành nghề đang "khát" nhân lực nhất hiện nay. Chương trình học chú trọng thực hành, "cầm tay chỉ việc".
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-3">
              {Object.keys(majors).map((key) => {
                const major = majors[key as keyof typeof majors];
                const isActive = activeMajor === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveMajor(key)}
                    className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-4 ${
                      isActive 
                        ? 'bg-green-700 text-white shadow-lg transform translate-x-2' 
                        : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-100'
                    }`}
                  >
                    <div className={`${isActive ? 'text-yellow-400' : 'text-green-600'}`}>
                      {major.icon}
                    </div>
                    {major.title}
                    {isActive && <ArrowRight size={16} className="ml-auto" />}
                  </button>
                );
              })}
            </div>

            {/* Content Display */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="relative h-64 shrink-0">
                  <img 
                    src={majors[activeMajor as keyof typeof majors].image} 
                    alt="Major Banner" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <h3 className="text-3xl font-bold text-white">
                      {majors[activeMajor as keyof typeof majors].title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {majors[activeMajor as keyof typeof majors].desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                      <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                        <DollarSign size={18} /> Mức Lương Tham Khảo
                      </h4>
                      <p className="text-2xl font-black text-green-600">
                        {majors[activeMajor as keyof typeof majors].salary}
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
                      <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                        <BookOpen size={18} /> Tổ Hợp Xét Tuyển
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {majors[activeMajor as keyof typeof majors].subjects.map((subj, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white text-gray-700 rounded text-xs border border-yellow-200 font-medium">
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Briefcase size={18} className="text-green-600" /> Cơ Hội Nghề Nghiệp
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {majors[activeMajor as keyof typeof majors].jobs.map((job, idx) => (
                        <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-green-100 hover:text-green-700 transition-colors cursor-default">
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Student Stories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">GDU Trong Mắt Sinh Viên</h2>
            <p className="text-gray-600">Những chia sẻ chân thực nhất từ chính các bạn sinh viên đang theo học tại trường.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all relative mt-8">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1721441933143-643398bed6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGFzaWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0JTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzE1MDI1MTF8MA&ixlib=rb-4.1.0&q=80&w=150&h=150" 
                  alt="Student 1" 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Điều mình thích nhất ở GDU là sự gần gũi của thầy cô. Không có khoảng cách giữa giảng viên và sinh viên. Mình được hỗ trợ rất nhiệt tình trong cả việc học lẫn đời sống."
                </p>
                <h4 className="font-bold text-green-900">Nguyễn Thùy Linh</h4>
                <p className="text-xs text-gray-500 uppercase font-bold">Sinh viên K15 - Ngành Marketing</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all relative mt-8">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?auto=format&fit=crop&q=80&w=150&h=150" 
                  alt="Student 2" 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Chương trình học 3 năm thực sự là một lợi thế lớn. Mình ra trường sớm hơn bạn bè đồng trang lứa 1 năm, có thêm thời gian tích lũy kinh nghiệm làm việc và thăng tiến."
                </p>
                <h4 className="font-bold text-green-900">Trần Văn Hùng</h4>
                <p className="text-xs text-gray-500 uppercase font-bold">Cựu SV K12 - Ngành CNTT</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all relative mt-8">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=150&h=150" 
                  alt="Student 3" 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Học phí tại GDU rất phù hợp với điều kiện gia đình mình. Mặc dù học phí thấp nhưng cơ sở vật chất vẫn rất khang trang, phòng học máy lạnh mát mẻ."
                </p>
                <h4 className="font-bold text-green-900">Lê Thị Mai</h4>
                <p className="text-xs text-gray-500 uppercase font-bold">Sinh viên K16 - Ngành Luật</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Admission Roadmap & Form */}
      <div className="py-20 bg-green-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Roadmap */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Lộ Trình Tuyển Sinh 2026</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-yellow-400 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-yellow-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-green-900 font-bold">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                    <div className="font-bold text-yellow-400 text-sm mb-1">01/03/2026 - 30/05/2026</div>
                    <h4 className="font-bold text-lg mb-1">Nhận hồ sơ xét tuyển sớm</h4>
                    <p className="text-sm text-gray-300">Xét tuyển bằng học bạ THPT (HK1 lớp 12 hoặc cả năm lớp 11)</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-green-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                    <div className="font-bold text-yellow-400 text-sm mb-1">Tháng 07/2026</div>
                    <h4 className="font-bold text-lg mb-1">Xét điểm thi THPT</h4>
                    <p className="text-sm text-gray-300">Công bố điểm chuẩn theo phương thức xét điểm thi THPT Quốc gia</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-green-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                    <div className="font-bold text-yellow-400 text-sm mb-1">Tháng 08/2026</div>
                    <h4 className="font-bold text-lg mb-1">Nhập học chính thức</h4>
                    <p className="text-sm text-gray-300">Sinh viên làm thủ tục nhập học và tham gia tuần lễ định hướng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900 border-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-green-900 mb-2 text-center">Đăng Ký Tư Vấn Ngay</h3>
              <p className="text-center text-gray-500 mb-8 text-sm">Để lại thông tin để được tư vấn chọn ngành phù hợp với điểm số</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Họ và tên</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none" placeholder="Nguyễn Văn A" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Số điện thoại</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none" placeholder="0909 xxx xxx" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Điểm thi thử (Dự kiến)</label>
                    <input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none" placeholder="20.0" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Ngành quan tâm</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-gray-700">
                    <option>Quản trị kinh doanh</option>
                    <option>Marketing</option>
                    <option>Công nghệ thông tin</option>
                    <option>Luật</option>
                    <option>Ngôn ngữ Anh</option>
                  </select>
                </div>
                <button className="w-full bg-green-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-600/30 mt-4 flex items-center justify-center gap-2">
                  <Mail size={20} />
                  NHẬN TƯ VẤN MIỄN PHÍ
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  *GDU cam kết bảo mật thông tin cá nhân của bạn.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Footer
      <footer className="bg-gray-100 text-gray-600 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <img src="https://giadinh.edu.vn/upload/photo/logo-gdu-1-04-1647486898.png" alt="GDU Logo" className="h-12 w-auto object-contain" onError={(e) => {
                   // Fallback if logo fails
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
                 }}/>
                 <span className="text-2xl font-black text-green-700 hidden">GDU</span>
              </div>
              <h3 className="font-bold text-xl text-green-800 mb-4 uppercase">Trường Đại học Gia Định</h3>
              <p className="text-sm leading-relaxed mb-6 max-w-sm">
                Đại học Gia Định (GDU) - Nơi đào tạo công dân toàn cầu với triết lý giáo dục "Chọn lọc - Ứng dụng - Đại chúng".
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm hover:shadow-md transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-sm hover:shadow-md transition-all"><Youtube size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 shadow-sm hover:shadow-md transition-all"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-wider text-green-800 border-b-2 border-yellow-400 inline-block pb-1">Thông Tin</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-green-600 transition-colors">Giới thiệu về GDU</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Thông tin tuyển sinh</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Chương trình đào tạo</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Đời sống sinh viên</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-wider text-green-800 border-b-2 border-yellow-400 inline-block pb-1">Liên Hệ</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-green-600 shrink-0" />
                  <span>
                    <strong>Cơ sở chính:</strong> 371 Nguyễn Kiệm, Phường 3, Quận Gò Vấp, TP.HCM
                  </span>
                </li>
                 <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-green-600 shrink-0" />
                  <span>
                    <strong>Cơ sở Tân Sơn Nhất:</strong> 185 - 187 Hoàng Văn Thụ, Phường 8, Quận Phú Nhuận, TP.HCM
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-green-600 shrink-0" />
                  <span className="font-bold text-red-600">(028) 7301 3456</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-green-600 shrink-0" />
                  <span>tuyensinh@giadinh.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-xs text-gray-500">
            © 2026 Gia Dinh University. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}