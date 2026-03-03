import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Target, BookOpen, Compass, CheckCircle2, Circle } from 'lucide-react';
import { RIASEC_QUESTIONS, RIASEC_LABELS, ANSWER_OPTIONS, RIASECType } from '../data/riasec/questions';
import { calculateScores, getTopTypes, getCareerSuggestions, SINGLE_TYPE_CAREERS } from '../data/riasec/careers';

type TestPhase = 'intro' | 'quiz' | 'result';

const RIASECTest = () => {
  const [phase, setPhase] = useState<TestPhase>('intro');
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  // track a question that should be highlighted (unanswered warning)
  const [highlightedQuestion, setHighlightedQuestion] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const questionsPerPage = 6;
  const totalPages = Math.ceil(RIASEC_QUESTIONS.length / questionsPerPage);

  const currentQuestions = useMemo(() => {
    const start = currentPage * questionsPerPage;
    return RIASEC_QUESTIONS.slice(start, start + questionsPerPage);
  }, [currentPage]);

  const progress = useMemo(() => {
    return (Object.keys(answers).length / RIASEC_QUESTIONS.length) * 100;
  }, [answers]);

  const canProceed = useMemo(() => {
    return currentQuestions.every(q => answers[q.id] !== undefined);
  }, [currentQuestions, answers]);

  const isComplete = Object.keys(answers).length === RIASEC_QUESTIONS.length;

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (highlightedQuestion === questionId) {
      setHighlightedQuestion(null);
    }
  };

  const handleNext = () => {
    if (!canProceed) {
      const firstUnanswered = currentQuestions.find(
        q => answers[q.id] === undefined
      );

      if (firstUnanswered) {
        setErrorMessage("⚠️ Bạn chưa trả lời hết các câu hỏi trên trang này!");
        setHighlightedQuestion(firstUnanswered.id);
      }

      return;
    }

    setErrorMessage(null);

    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (!isComplete) {
      if (!isComplete) {
        const firstUnanswered = RIASEC_QUESTIONS.find(
          q => answers[q.id] === undefined
        );

        if (firstUnanswered) {
          const idx = RIASEC_QUESTIONS.findIndex(
            q => q.id === firstUnanswered.id
          );

          const newPage = Math.floor(idx / questionsPerPage);

          setErrorMessage("⚠️ Bạn còn câu hỏi chưa trả lời. Vui lòng hoàn thành trước khi xem kết quả!");
          setCurrentPage(newPage);

          setTimeout(() => {
            setHighlightedQuestion(firstUnanswered.id);
          }, 100);
        }

        return;
      }

      setPhase('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setPhase('intro');
    setCurrentPage(0);
    setAnswers({});
  };


  const scores = useMemo(() => calculateScores(answers), [answers]);
  const topTypes = useMemo(() => getTopTypes(scores, 3), [scores]);
  const suggestions = useMemo(() => getCareerSuggestions(topTypes), [topTypes]);

  // Tính phần trăm cho biểu đồ radar
  const maxScore = 40;
  const scorePercentages = useMemo(() => {
    return Object.entries(scores).map(([type, score]) => ({
      type: type as RIASECType,
      score,
      percentage: (score / maxScore) * 100
    }));
  }, [scores]);

  // keep the unanswered highlight visible briefly
  useEffect(() => {
    if (highlightedQuestion != null) {
      const timer = setTimeout(() => setHighlightedQuestion(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightedQuestion]);
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  // scroll to highlighted question when set or when page changes
  useEffect(() => {
    if (highlightedQuestion != null) {
      const el = document.getElementById(`question-${highlightedQuestion}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [highlightedQuestion, currentPage]);

  // Intro Screen
  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg ">
              <Compass className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Trắc nghiệm RIASEC
            </h1>
            <p className="text-xl text-gray-600">
              Khám phá nghề nghiệp phù hợp với tính cách của bạn
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-blue-500" />
              Mô hình RIASEC là gì?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mô hình RIASEC (hay Holland Code) được phát triển bởi nhà tâm lý học John Holland,
              giúp xác định sở thích nghề nghiệp dựa trên 6 nhóm tính cách cơ bản.
              Kết quả sẽ cho bạn thấy những ngành học và nghề nghiệp phù hợp nhất với bản thân.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {(Object.keys(RIASEC_LABELS) as RIASECType[]).map((type) => (
                <div key={type} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 ">
                  <div className="text-2xl mb-2">{RIASEC_LABELS[type].icon}</div>
                  <div className="font-bold text-gray-800">{type} - {RIASEC_LABELS[type].name}</div>
                  <div className="text-sm text-gray-500">{RIASEC_LABELS[type].fullName}</div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Hướng dẫn làm bài
              </h3>
              <ul className="text-blue-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Bài test gồm <strong>60 câu hỏi</strong>, chia thành 10 trang</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Với mỗi câu, chọn mức độ phù hợp với bản thân (1-4 điểm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Trả lời <strong>thật lòng</strong>, không có đáp án đúng sai</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Thời gian: khoảng <strong>10-15 phút</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setPhase('quiz')}
              className="w-72 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Bắt đầu làm bài
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (phase === 'quiz') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Trang {currentPage + 1} / {totalPages}
              </h2>
              <span className="text-gray-500">
                {Object.keys(answers).length}/{RIASEC_QUESTIONS.length} câu đã trả lời
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {errorMessage && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl mb-4 animate-pulse">
              {errorMessage}
            </div>
          )}

          {/* Questions */}
          <div className="space-y-4 mb-6">
            {currentQuestions.map((question, index) => (
              <div
                id={`question-${question.id}`}
                key={question.id}
                className={`bg-white rounded-2xl shadow-lg p-6 border-2 transition-all duration-300 ${highlightedQuestion === question.id
                  ? 'border-red-500 bg-red-50 animate-pulse'
                  : answers[question.id] !== undefined
                    ? 'border-green-400 bg-green-50/30'
                    : 'border-transparent hover:border-blue-200'
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${answers[question.id] !== undefined
                    ? 'bg-green-500'
                    : 'bg-gray-400'
                    }`}>
                    {currentPage * questionsPerPage + index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 mb-4">{question.text}</p>
                    <div className="flex flex-wrap gap-2">
                      {ANSWER_OPTIONS.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(question.id, option.value)}
                          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${answers[question.id] === option.value
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md transform scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="group relative flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-200 hover:shadow-xl hover:-translate-y-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
              Trang trước
            </button>

            {currentPage === totalPages - 1 ? (
              <button
                onClick={handleSubmit}
                className={`group relative overflow-hidden flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-full text-lg font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105${!isComplete ? 'opacity-80' : ''}`}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
                <CheckCircle2 className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                Xem kết quả
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="group relative overflow-hidden flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:from-blue-600 hover:to-indigo-600"
              >
                Trang sau
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6 shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Kết quả của bạn
          </h1>
          <p className="text-xl text-gray-600">
            Mã Holland: <span className="font-bold text-blue-600">{suggestions.code}</span>
          </p>
        </div>

        {/* Score Chart */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">BIỂU ĐỒ ĐIỂM SỐ</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {scorePercentages
              .sort((a, b) => b.score - a.score)
              .map((item, index) => (
                <div
                  key={item.type}
                  className={`bg-white rounded-2xl p-5 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1cursor-pointer ${index === 0 ? 'border-yellow-400 bg-yellow-50' :
                    index === 1 ? 'border-gray-300 bg-gray-50' :
                      index === 2 ? 'border-orange-300 bg-orange-50' :
                        'border-gray-200 bg-white'
                    }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{RIASEC_LABELS[item.type].icon}</span>
                    <div>
                      <div className="font-bold text-gray-800">
                        {item.type} - {RIASEC_LABELS[item.type].name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {RIASEC_LABELS[item.type].fullName}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-blue-500 transition-all duration-1000 ease-out ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                          index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                            index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-500' :
                              'bg-gradient-to-r from-blue-400 to-blue-500'
                          }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="font-bold text-gray-800 min-w-[60px] text-right">
                      {item.score}/40
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Radar Chart Visualization */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Background hexagon */}
                <polygon
                  points="100,20 170,50 170,130 100,180 30,130 30,50"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <polygon
                  points="100,45 152,67 152,117 100,155 48,117 48,67"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <polygon
                  points="100,70 135,85 135,105 100,130 65,105 65,85"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />

                {/* Score polygon */}
                <polygon
                  points={`
                    ${100},${20 + (80 - (scores.R / maxScore) * 60)}
                    ${170 - (70 - (scores.I / maxScore) * 52)},${50 + (80 - (scores.I / maxScore) * 60) * 0.4}
                    ${170 - (70 - (scores.A / maxScore) * 52)},${130 - (50 - (scores.A / maxScore) * 37)}
                    ${100},${180 - (80 - (scores.S / maxScore) * 60)}
                    ${30 + (70 - (scores.E / maxScore) * 52)},${130 - (50 - (scores.E / maxScore) * 37)}
                    ${30 + (70 - (scores.C / maxScore) * 52)},${50 + (80 - (scores.C / maxScore) * 60) * 0.4}
                  `}
                  fill="rgba(59, 130, 246, 0.3)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />

                {/* Labels */}
                <text x="100" y="12" textAnchor="middle" className="text-xs font-bold fill-gray-700">R</text>
                <text x="180" y="55" textAnchor="start" className="text-xs font-bold fill-gray-700">I</text>
                <text x="180" y="140" textAnchor="start" className="text-xs font-bold fill-gray-700">A</text>
                <text x="100" y="198" textAnchor="middle" className="text-xs font-bold fill-gray-700">S</text>
                <text x="20" y="140" textAnchor="end" className="text-xs font-bold fill-gray-700">E</text>
                <text x="20" y="55" textAnchor="end" className="text-xs font-bold fill-gray-700">C</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Top Types */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 ">
            🏆 Top 3 nhóm tính cách của bạn
          </h2>

          <div className="space-y-4">
            {topTypes.map((type, index) => (
              <div
                key={type}
                className={`bg-white rounded-2xl p-5
    transition-all duration-300 ease-out
    hover:scale-105
    hover:shadow-2xl
    hover:-translate-y-1
    cursor-pointer ${index === 0 ? 'border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50' :
                    index === 1 ? 'border-gray-300 bg-gradient-to-r from-gray-50 to-slate-50' :
                      'border-orange-300 bg-gradient-to-r from-orange-50 to-red-50'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${index === 0 ? 'bg-yellow-400' :
                    index === 1 ? 'bg-gray-300' :
                      'bg-orange-400'
                    }`}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{RIASEC_LABELS[type].icon}</span>
                      <span className="text-xl font-bold text-gray-800">
                        {type} - {RIASEC_LABELS[type].name}
                      </span>
                    </div>
                    <p className="text-gray-600">{RIASEC_LABELS[type].description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-800">{scores[type]}</div>
                    <div className="text-sm text-gray-500">điểm</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Suggestions */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            🎯 Ngành học phù hợp với bạn
          </h2>

          {/* Primary suggestion */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center gap-2">
              <Circle className="w-4 h-4 fill-blue-600" />
              Dựa trên nhóm {topTypes[0]} ({RIASEC_LABELS[topTypes[0]].name})
            </h3>
            <p className="text-gray-600 mb-4">{suggestions.primary.description}</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.primary.majors.map((major, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium"
                >
                  {major}
                </span>
              ))}
            </div>
          </div>

          {/* Combo suggestion */}
          {suggestions.combo && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-purple-600 mb-3 flex items-center gap-2">
                <Circle className="w-4 h-4 fill-purple-600" />
                Kết hợp với nhóm {topTypes[1]} ({topTypes[0]}{topTypes[1]})
              </h3>
              <p className="text-gray-600 mb-4">{suggestions.combo.description}</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.combo.majors.map((major, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
                  >
                    {major}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Secondary type majors */}
          <div>
            <h3 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
              <Circle className="w-4 h-4 fill-green-600" />
              Các ngành từ nhóm {topTypes[1]} ({RIASEC_LABELS[topTypes[1]].name})
            </h3>
            <p className="text-gray-600 mb-4">{SINGLE_TYPE_CAREERS[topTypes[1]].description}</p>
            <div className="flex flex-wrap gap-2">
              {SINGLE_TYPE_CAREERS[topTypes[1]].majors.map((major, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium"
                >
                  {major}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5" />
            Làm lại bài test
          </button>
        </div>
      </div>
    </div>
  );
};

export default RIASECTest;
