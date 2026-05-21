import { useState } from 'react';
import {
  Sparkles, Star, RotateCcw, Calendar, ArrowRight,
  Heart, Briefcase, Brain, Zap, BookOpen, Shield, ChevronRight, User, Speech, Baby, Infinity
} from 'lucide-react';
import {
  NUMEROLOGY_PROFILES,
  calcLifePath,
  calcBirthdayNumber,
  calcAttitudeNumber,
  calcDestinyNumber,
  calcSoulUrgeNumber,
  calcPersonalityNumber,
  NumerologyProfile,
} from '../data/numerology/profiles';

type Phase = 'intro' | 'input' | 'result';
type TabId = 'overview' | 'psychology' | 'career' | 'love' | 'spiritual';

interface NumerologyResult {
  lifePath: NumerologyProfile;
  birthday: NumerologyProfile;
  attitude: NumerologyProfile;
  destiny: NumerologyProfile;
  soulUrge: NumerologyProfile;
  personality: NumerologyProfile;
  lifePathNum: number;
  birthdayNum: number;
  attitudeNum: number;
  destinyNum: number;
  soulUrgeNum: number;
  personalityNum: number;
  dob: string;
  fullName: string;
}

function gradientStyle(from: string, to: string) {
  return { background: `linear-gradient(135deg, ${from}, ${to})` };
}

function InfoSection({ icon, title, children, bg }: {
  icon: React.ReactNode; title: string; children: React.ReactNode; bg: string;
}) {
  return (
    <div className={`${bg} rounded-xl p-4`}>
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-base leading-none">{icon}</span>
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600">{title}</span>
      </div>
      {children}
    </div>
  );
}

const INDEX_CONTEXT: Record<string, string> = {
  lifepath: "Số Đường Đời là tấm bản đồ chính của cuộc đời bạn. Nó hé lộ bản chất thực sự, định hướng cốt lõi bạn sẽ đi, những thử thách trọng tâm cần vượt qua và cơ hội sẽ đến.",
  birthday: "Số Ngày Sinh là món quà tự nhiên, những tài năng bẩm sinh mà bạn được Vũ trụ trang bị sẵn khi chào đời để hỗ trợ Đường Đời.",
  attitude: "Số Thái Độ phản ánh tấm lăng kính mà bạn dùng để nhìn nhận thế giới và cách bạn đối mặt, giải quyết các rắc rối trong đời sống.",
  destiny: "Số Sứ Mệnh (từ Họ Tên) là nhiệm vụ, là định mệnh lớn mà cuộc đời đã giao phó. Đây là vai trò bạn sinh ra để đóng.",
  soul: "Số Linh Hồn (từ Nguyên âm) đại diện cho khát khao, động lực và nhu cầu tận cùng của trái tim. Bạn chỉ hạnh phúc khi được sống trọn với bản chất này.",
  personality: "Số Nhân Cách (từ Phụ âm) là chiếc 'mặt nạ' bạn đeo ra xã hội. Nó cho thấy cách thế giới phân tích tính cách của bạn trước khi họ thực sự hiểu bạn."
};

function NumberCard({ number, label, profile, indexType }: {
  number: number; label: string; profile: NumerologyProfile; indexType: string;
}) {
  const [tab, setTab] = useState<TabId>('overview');

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'overview',   label: 'Tổng quan',  icon: <Brain size={13} /> },
    { id: 'psychology', label: 'Tâm lý',     icon: <Zap size={13} /> },
    { id: 'love',       label: 'Quan hệ',    icon: <Heart size={13} /> },
    { id: 'career',     label: 'Nghề & Ngành',icon: <Briefcase size={13} /> },
    { id: 'spiritual',  label: 'Tâm linh',   icon: <BookOpen size={13} /> },
  ];

  const grad = gradientStyle(profile.colorFrom, profile.colorTo);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
      <div className="p-6 text-white" style={grad}>
        <p className="text-xs font-bold tracking-widest uppercase opacity-75 mb-3">{label}</p>
        <div className="flex items-start justify-between">
          <div className="flex items-end gap-3">
            <span className="text-6xl font-black leading-none">{number}</span>
            <span className="text-4xl leading-none pb-1">{profile.emoji}</span>
          </div>
          <div className="text-right text-xs opacity-75 space-y-1 pt-1">
            <p>{profile.planet}</p>
            <p>{profile.element}</p>
          </div>
        </div>
        <div className="mt-4 border-t border-white/20 pt-3">
          <p className="font-black text-xl leading-snug">{profile.name}</p>
          <p className="text-sm opacity-80 mt-1">{profile.keyword}</p>
        </div>
      </div>

      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 space-y-3">
        {INDEX_CONTEXT[indexType] && (
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-3 rounded-r-lg">
            <p className="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-wide">Ý nghĩa chỉ số</p>
            <p className="text-indigo-800 text-sm leading-relaxed">{INDEX_CONTEXT[indexType]}</p>
          </div>
        )}
        <p className="text-slate-700 text-sm leading-relaxed"><strong>Năng lực cốt lõi: </strong>{profile.essence}</p>
      </div>

      <div className="flex overflow-x-auto border-b border-slate-200 bg-white">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-1.5 px-4 py-3 text-xs font-bold whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${
              tab === t.id
                ? 'border-purple-500 text-purple-700 bg-purple-50'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div className="p-5 space-y-4 bg-white">
        {tab === 'overview' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoSection icon="✨" title="Góc Sáng" bg="bg-amber-50">
                <p className="text-sm text-amber-900 leading-relaxed">{profile.lightSide}</p>
              </InfoSection>
              <InfoSection icon="🌑" title="Góc Tối" bg="bg-slate-100">
                <p className="text-sm text-slate-700 leading-relaxed">{profile.darkSide}</p>
              </InfoSection>
            </div>
            {profile.giftToWorld && (
              <InfoSection icon="🎁" title="Món Quà Cho Thế Giới" bg="bg-emerald-50">
                <p className="text-sm text-emerald-900 leading-relaxed font-medium">{profile.giftToWorld}</p>
              </InfoSection>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoSection icon="💪" title="Ưu Điểm" bg="bg-green-50">
                <ul className="space-y-2">
                  {profile.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                      <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </InfoSection>
              <InfoSection icon="⚠️" title="Nhược Điểm" bg="bg-red-50">
                <ul className="space-y-2">
                  {profile.weaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                      <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </InfoSection>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <InfoSection icon="🤝" title="Hợp với số" bg="bg-blue-50">
                <div className="flex flex-wrap gap-2 mt-1">
                  {profile.compatible.map(n => (
                    <span key={n} className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm font-black shadow" style={grad}>{n}</span>
                  ))}
                </div>
              </InfoSection>
              <InfoSection icon="⚡" title="Thách thức" bg="bg-orange-50">
                <div className="flex flex-wrap gap-2 mt-1">
                  {profile.challenging.map(n => (
                    <span key={n} className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm font-black shadow" style={{ background: 'linear-gradient(135deg,#fb923c,#ef4444)' }}>{n}</span>
                  ))}
                </div>
              </InfoSection>
            </div>
          </>
        )}

        {tab === 'psychology' && (
          <>
            <InfoSection icon={<Brain size={14} className="text-purple-500" />} title="Phân Tích Tâm Lý Chuyên Sâu" bg="bg-purple-50">
              <ul className="space-y-3 mt-1">
                {profile.deepAnalysis.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-purple-900 leading-relaxed">
                    <ChevronRight size={14} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoSection>
            {profile.childhood && (
              <InfoSection icon={<Baby size={14} className="text-teal-600" />} title="Dấu Ấn Tuổi Thơ" bg="bg-teal-50">
                <p className="text-sm text-teal-900 leading-relaxed">{profile.childhood}</p>
              </InfoSection>
            )}
            {profile.mindset && (
              <InfoSection icon="🎯" title="Mô Thức Tư Duy" bg="bg-sky-50">
                <p className="text-sm text-sky-900 leading-relaxed">{profile.mindset}</p>
              </InfoSection>
            )}
            {profile.stressResponse && (
              <InfoSection icon={<Zap size={14} className="text-orange-500" />} title="Phản Ứng Khi Căng Thẳng & Bảo Vệ" bg="bg-orange-50">
                <p className="text-sm text-orange-900 leading-relaxed">{profile.stressResponse}</p>
              </InfoSection>
            )}
            {profile.shadowWork && (
              <InfoSection icon={<Shield size={14} className="text-slate-600" />} title="Góc Khuất Cần Chữa Lành (Shadow Work)" bg="bg-slate-100">
                <p className="text-sm text-slate-800 leading-relaxed italic">{profile.shadowWork}</p>
              </InfoSection>
            )}
          </>
        )}

        {tab === 'love' && (
          <>
            <InfoSection icon={<Heart size={14} className="text-rose-500" />} title="Phong Cách Tình Yêu" bg="bg-rose-50">
              <p className="text-sm text-rose-900 leading-relaxed">{profile.loveStyle}</p>
            </InfoSection>
            {profile.relationshipDynamics && (
              <InfoSection icon={<Infinity size={14} className="text-pink-500" />} title="Động Lực Trong Các Mối Quan Hệ" bg="bg-pink-50">
                <p className="text-sm text-pink-900 leading-relaxed">{profile.relationshipDynamics}</p>
              </InfoSection>
            )}
            {profile.communicationStyle && (
              <InfoSection icon={<Speech size={14} className="text-blue-500" />} title="Phong Cách Giao Tiếp" bg="bg-blue-50">
                <p className="text-sm text-blue-900 leading-relaxed">{profile.communicationStyle}</p>
              </InfoSection>
            )}
            <InfoSection icon="🏥" title="Sức Khỏe Cần Chú Ý" bg="bg-teal-50">
              <p className="text-sm text-teal-900 leading-relaxed">{profile.healthFocus}</p>
            </InfoSection>
          </>
        )}

        {tab === 'career' && (
          <>
            <InfoSection icon={<Briefcase size={14} className="text-blue-500" />} title="Môi Trường Làm Việc Lý Tưởng" bg="bg-blue-50">
              <p className="text-sm text-blue-900 leading-relaxed">{profile.workEnv}</p>
            </InfoSection>
            <InfoSection icon="🎓" title="Gợi Ý Ngành Học (Đại Học)" bg="bg-purple-50">
              <div className="flex flex-wrap gap-2 mt-1">
                {profile.majors && profile.majors.map((m, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold text-purple-900 bg-purple-200 shadow-sm border border-purple-300">
                    {m}
                  </span>
                ))}
              </div>
            </InfoSection>
            <InfoSection icon="💼" title="Gợi Ý Nghề Nghiệp" bg="bg-slate-50">
              <div className="flex flex-wrap gap-2 mt-1">
                {profile.careers.map((c, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm" style={grad}>{c}</span>
                ))}
              </div>
            </InfoSection>
            <InfoSection icon="💰" title="Phong Cách Tài Chính" bg="bg-green-50">
              <p className="text-sm text-green-900 leading-relaxed">{profile.moneyStyle}</p>
            </InfoSection>
          </>
        )}

        {tab === 'spiritual' && (
          <>
            <InfoSection icon="🌌" title="Con Đường Tâm Linh" bg="bg-violet-50">
              <p className="text-sm text-violet-900 leading-relaxed">{profile.spiritualPath}</p>
            </InfoSection>
            <InfoSection icon={<BookOpen size={14} className="text-purple-500" />} title="Bài Học Cuộc Đời" bg="bg-purple-50">
              <p className="text-sm text-purple-900 leading-relaxed italic">"{profile.lesson}"</p>
            </InfoSection>
            {profile.karmicLesson && (
              <InfoSection icon={<Shield size={14} className="text-indigo-500" />} title="Bài Học Nghiệp (Karmic Lesson)" bg="bg-indigo-50">
                <p className="text-sm text-indigo-900 leading-relaxed">{profile.karmicLesson}</p>
              </InfoSection>
            )}
            {profile.lifeThemes && profile.lifeThemes.length > 0 && (
              <InfoSection icon="🧭" title="Các Chủ Đề Lớn Của Cuộc Đời" bg="bg-amber-50">
                <ul className="space-y-2 mt-1">
                  {profile.lifeThemes.map((theme, i) => (
                    <li key={i} className="flex gap-2 text-sm text-amber-900">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </InfoSection>
            )}
            {profile.affirmations && profile.affirmations.length > 0 && (
              <InfoSection icon="✨" title="Khẳng Định Tích Cực Tăng Tần Số" bg="bg-fuchsia-50">
                <div className="space-y-2 mt-1">
                  {profile.affirmations.map((aff, i) => (
                    <p key={i} className="text-sm font-semibold text-fuchsia-800 italic bg-white/60 p-2 rounded-lg border border-fuchsia-100">
                      {aff}
                    </p>
                  ))}
                </div>
              </InfoSection>
            )}
            <InfoSection icon="💡" title="Lời Khuyên Thực Tế" bg="bg-yellow-50">
              <p className="text-sm text-yellow-900 leading-relaxed italic">"{profile.advice}"</p>
            </InfoSection>
          </>
        )}
      </div>
    </div>
  );
}

export default function NumerologyTest() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [fullName, setFullName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<NumerologyResult | null>(null);

  const validate = (): boolean => {
    const d = parseInt(day), m = parseInt(month), y = parseInt(year);
    if (!fullName.trim()) { setError('Vui lòng nhập Họ và Tên của bạn.'); return false; }
    if (!day || !month || !year) { setError('Vui lòng nhập đầy đủ ngày sinh.'); return false; }
    if (isNaN(d) || d < 1 || d > 31) { setError('Ngày sinh không hợp lệ.'); return false; }
    if (isNaN(m) || m < 1 || m > 12) { setError('Tháng sinh không hợp lệ.'); return false; }
    if (isNaN(y) || y < 1900 || y > new Date().getFullYear()) { setError('Năm sinh không hợp lệ.'); return false; }
    const date = new Date(y, m - 1, d);
    if (date.getMonth() !== m - 1) { setError('Ngày tháng không hợp lệ.'); return false; }
    setError('');
    return true;
  };

  const handleCalculate = () => {
    if (!validate()) return;
    const d = parseInt(day), m = parseInt(month), y = parseInt(year);
    
    // Ngày sinh
    const lifePathNum = calcLifePath(d, m, y);
    const birthdayNum = calcBirthdayNumber(d);
    const attitudeNum = calcAttitudeNumber(d, m);
    
    // Tên
    const destinyNum = calcDestinyNumber(fullName);
    const soulUrgeNum = calcSoulUrgeNumber(fullName);
    const personalityNum = calcPersonalityNumber(fullName);

    setResult({
      lifePath: NUMEROLOGY_PROFILES[lifePathNum],
      birthday: NUMEROLOGY_PROFILES[birthdayNum],
      attitude: NUMEROLOGY_PROFILES[attitudeNum],
      destiny: NUMEROLOGY_PROFILES[destinyNum],
      soulUrge: NUMEROLOGY_PROFILES[soulUrgeNum],
      personality: NUMEROLOGY_PROFILES[personalityNum],
      lifePathNum, birthdayNum, attitudeNum,
      destinyNum, soulUrgeNum, personalityNum,
      dob: `${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}/${y}`,
      fullName: fullName.trim().toUpperCase()
    });
    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setPhase('intro');
    setFullName(''); setDay(''); setMonth(''); setYear('');
    setError(''); setResult(null);
  };

  if (phase === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#1e1b4b,#312e81,#0f172a)' }}>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{
                width: Math.random() > 0.7 ? 2 : 1, height: Math.random() > 0.7 ? 2 : 1,
                opacity: Math.random() * 0.4 + 0.1,
                top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
              }} />
          ))}
        </div>
        <div className="max-w-2xl w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-purple-200 text-sm font-semibold mb-6 border border-purple-500/40" style={{ background: 'rgba(109,40,217,0.3)' }}>
            <Sparkles size={14} /> KHÁM PHÁ BẢN THÂN TOÀN DIỆN
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 leading-tight">
            Thần Số Học<br />
            <span style={{ background: 'linear-gradient(90deg,#fcd34d,#fbbf24,#f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Toàn Diện & Chuyên Sâu
            </span>
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed mb-6 max-w-lg mx-auto">
            Hé mở những bí mật từ <strong className="text-white">Họ Tên</strong> và <strong className="text-white">Ngày Sinh</strong> với góc nhìn Phân tâm học sâu sắc nhất hiện nay.
          </p>
          <div className="grid grid-cols-2 gap-4 my-8 max-w-md mx-auto">
            <div className="rounded-2xl p-4 border border-white/10 text-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <div className="text-3xl mb-2">🌟</div>
              <p className="text-white font-semibold text-xs">Phân Tích Ngày Sinh</p>
            </div>
            <div className="rounded-2xl p-4 border border-white/10 text-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-white font-semibold text-xs">Phân Tích Họ Tên</p>
            </div>
          </div>
          <button onClick={() => setPhase('input')}
            className="inline-flex items-center gap-2 px-10 py-4 font-black text-slate-900 rounded-2xl text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg,#fbbf24,#f97316)' }}>
            Khám phá ngay <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'input') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{ background: 'linear-gradient(135deg,#1e1b4b,#312e81,#0f172a)' }}>
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white">Thông Tin Của Bạn</h2>
            <p className="text-purple-300 mt-2 text-sm">Hệ thống sẽ bóc tách các chỉ số một cách chính xác nhất.</p>
          </div>
          <div className="rounded-3xl p-8 border border-white/10 shadow-2xl"
            style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
            
            <div className="mb-6">
              <label className="block text-purple-300 text-xs font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
                <User size={14}/> HỌ VÀ TÊN (TRÊN CCCD)
              </label>
              <input
                type="text"
                placeholder="VD: NGUYEN VAN A"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-white text-lg font-bold placeholder-white/30 focus:outline-none transition-all border uppercase"
                style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
              />
            </div>

            <label className="block text-purple-300 text-xs font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={14}/> NGÀY THÁNG NĂM SINH
            </label>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[ { value: day, setter: setDay, ph: 'Ngày' }, { value: month, setter: setMonth, ph: 'Tháng' }, { value: year, setter: setYear, ph: 'Năm' } ]
              .map(({ value, setter, ph }, i) => (
                <input key={i} type="number" placeholder={ph} value={value} onChange={e => setter(e.target.value)}
                  className="w-full rounded-xl px-3 py-3 text-white text-center text-lg font-bold placeholder-white/30 focus:outline-none transition-all border"
                  style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                />
              ))}
            </div>

            {error && (
              <p className="text-red-300 text-sm text-center mb-4 rounded-xl py-2 px-4"
                style={{ background: 'rgba(239,68,68,0.15)' }}>{error}</p>
            )}

            <button onClick={handleCalculate}
              className="w-full py-4 font-black rounded-xl text-slate-900 text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 mt-4"
              style={{ background: 'linear-gradient(135deg,#fbbf24,#f97316)' }}>
              <Star size={20} /> Giải mã bản đồ của tôi
            </button>
            <button onClick={() => setPhase('intro')} className="mt-3 w-full py-3 text-purple-300 hover:text-white text-sm font-semibold transition-colors">
              ← Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div style={{ background: 'linear-gradient(180deg,#1e1b4b 0%,#0f172a 300px,#f8fafc 300px)' }} className="min-h-screen pb-20">
      <div className="py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg,#1e1b4b,#312e81,#0f172a)' }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-purple-200 text-sm font-semibold mb-4 border border-purple-500/40" style={{ background: 'rgba(109,40,217,0.3)' }}>
          <Sparkles size={14} /> BẢN ĐỒ THẦN SỐ HỌC
        </div>
        <h1 className="text-4xl font-black text-white mb-2 uppercase">{result.fullName}</h1>
        <p className="text-purple-300 text-sm mb-8">Ngày sinh: <span className="font-bold text-amber-400">{result.dob}</span></p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {[
            { label: '🌟 Đường Đời', num: result.lifePathNum, profile: result.lifePath },
            { label: '🎯 Sứ Mệnh', num: result.destinyNum, profile: result.destiny },
            { label: '💖 Linh Hồn', num: result.soulUrgeNum, profile: result.soulUrge },
            { label: '🎭 Nhân Cách', num: result.personalityNum, profile: result.personality },
            { label: '🎂 Ngày Sinh', num: result.birthdayNum, profile: result.birthday },
            { label: '🌙 Thái Độ',   num: result.attitudeNum, profile: result.attitude },
          ].map(({ label, num, profile: p }, i) => (
            <div key={i} className="rounded-2xl px-4 py-4 text-white text-center shadow-lg border border-white/10" style={gradientStyle(p.colorFrom, p.colorTo)}>
              <p className="text-3xl font-black leading-none">{num}</p>
              <p className="text-xs font-semibold opacity-90 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        
        <div className="space-y-6">
          <div className="border-b-2 border-slate-200 pb-2 mb-4">
            <h2 className="text-2xl font-black text-slate-800">1. Nhóm Ngày Sinh</h2>
            <p className="text-slate-500 text-sm">Thiên hướng tự nhiên, con đường sống và tài năng bẩm sinh.</p>
          </div>
          <NumberCard number={result.lifePathNum} label="🌟 Số Đường Đời - Core" profile={result.lifePath} indexType="lifepath" />
          <NumberCard number={result.birthdayNum} label="🎂 Số Ngày Sinh" profile={result.birthday} indexType="birthday" />
          <NumberCard number={result.attitudeNum} label="🌙 Số Thái Độ" profile={result.attitude} indexType="attitude" />
        </div>

        <div className="space-y-6 pt-6">
          <div className="border-b-2 border-slate-200 pb-2 mb-4">
            <h2 className="text-2xl font-black text-slate-800">2. Nhóm Họ Tên</h2>
            <p className="text-slate-500 text-sm">Khát vọng sâu thẳm, vai trò cuộc đời và vỏ bọc xã hội.</p>
          </div>
          <NumberCard number={result.destinyNum} label="🎯 Số Sứ Mệnh (Biểu đạt)" profile={result.destiny} indexType="destiny" />
          <NumberCard number={result.soulUrgeNum} label="💖 Số Linh Hồn" profile={result.soulUrge} indexType="soul" />
          <NumberCard number={result.personalityNum} label="🎭 Số Nhân Cách" profile={result.personality} indexType="personality" />
        </div>

        <div className="text-center py-8">
          <p className="text-slate-500 text-sm mb-4">Muốn phân tích thêm người khác?</p>
          <button onClick={handleReset}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-2xl transition-all shadow-sm">
            <RotateCcw size={16} /> Tính lại
          </button>
        </div>
      </div>
    </div>
  );
}
