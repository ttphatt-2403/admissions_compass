export function StatsSection() {
  const stats = [
    { 
      value: '200+', 
      label: 'Trường Đại Học', 
      description: 'Trên toàn quốc',
      icon: '🏛️',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      value: '10,000+', 
      label: 'Tài Liệu Miễn Phí', 
      description: 'Đầy đủ các môn',
      icon: '📚',
      color: 'from-green-500 to-green-600'
    },
    { 
      value: '500+', 
      label: 'Ngành Học', 
      description: 'Đa dạng lĩnh vực',
      icon: '🎓',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      value: '50,000+', 
      label: 'Học Sinh Tin Dùng', 
      description: 'Mỗi năm',
      icon: '👥',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <div className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Con Số Ấn Tượng</h3>
          <p className="text-gray-600">Đồng hành cùng hàng nghìn học sinh THPT trên khắp Việt Nam</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}