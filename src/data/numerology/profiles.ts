export interface NumerologyProfile {
  number: number;
  name: string;
  keyword: string;
  essence: string;
  lightSide: string;
  darkSide: string;
  strengths: string[];
  weaknesses: string[];
  workEnv: string;
  careers: string[];
  majors: string[];
  lesson: string;
  color: string;
  colorFrom: string;
  colorTo: string;
  emoji: string;
  planet: string;
  element: string;
  famousPeople: string[];
  compatible: number[];
  challenging: number[];
  moneyStyle: string;
  loveStyle: string;
  healthFocus: string;
  spiritualPath: string;
  karmicLesson: string;
  advice: string;
  deepAnalysis: string[];
  // New detailed fields
  childhood: string;
  communicationStyle: string;
  relationshipDynamics: string;
  shadowWork: string;
  lifeThemes: string[];
  affirmations: string[];
  mindset: string;
  stressResponse: string;
  giftToWorld: string;
}

export const NUMEROLOGY_PROFILES: Record<number, NumerologyProfile> = {
  1: {
    number: 1,
    name: 'Người Tiên Phong & Lãnh Đạo',
    keyword: 'Độc lập · Quyết đoán · Tiên phong · Cái tôi lớn',
    essence: 'Số 1 là ngọn lửa khởi nguồn của vũ trụ – con số đầu tiên, đại diện cho bản ngã (Ego), sự sinh tồn và khả năng tự đứng trên đôi chân của mình. Bạn mang năng lượng dương tính mạnh mẽ nhất trong hệ thống Thần số học. Khi số 1 bước vào phòng, người ta cảm nhận được sự hiện diện ngay cả trước khi bạn mở miệng.',
    lightSide: 'Ý chí sinh tồn mãnh liệt – không bao giờ chờ người khác mang cơ hội đến mà tự tạo ra nó. Khả năng chịu đòn tâm lý tốt, ngã ở đâu đứng lên ở đó. Khi được thử thách, năng lượng số 1 bùng cháy mạnh hơn bao giờ hết.',
    darkSide: 'Hội chứng "Tôi là cái rốn vũ trụ". Dễ rơi vào độc đoán, bảo thủ và không thể chấp nhận sai. Khi thất bại, sinh ra tự ái và phẫn nộ tột độ thay vì tự nhìn nhận lại bản thân.',
    deepAnalysis: [
      'Tâm lý học: Số 1 vận hành từ trung tâm của bản ngã. Bạn có một "lõi cứng" bên trong – tập hợp niềm tin cốt lõi về bản thân mà gần như không thể lay chuyển. Đây là nguồn sức mạnh lẫn điểm mù lớn nhất.',
      'Cơ chế tâm lý bảo vệ: Khi bị đe dọa, số 1 phản ứng bằng sự tấn công phủ đầu hoặc rút lui hoàn toàn – hiếm khi chọn cách đối thoại trung gian. Họ không quen với sự dễ bị tổn thương vì coi đó là yếu đuối.',
      'Trong công việc: Số 1 không làm tốt khi bị quản lý vi mô. Mỗi khi bị kiểm soát quá mức, năng suất sụt giảm và tinh thần nổi loạn. Họ cần mục tiêu rõ ràng và toàn quyền thực thi.',
      'Trong mối quan hệ: Yêu theo kiểu bảo bọc – muốn bảo vệ người khác nhưng vô hình chung kiểm soát họ. Đối phương cần không gian riêng – điều số 1 khó chấp nhận vì diễn giải đó là sự từ chối.',
      'Năng lượng bóng tối: Khi số 1 sống ở rung động thấp, trở thành kẻ bắt nạt hoặc ngược lại – sợ hãi đến mức không dám bắt đầu bất cứ điều gì. Hai cực đoan, không có điểm giữa.',
      'Chu kỳ cuộc đời: Số 1 thường trải qua những khởi đầu mạnh mẽ nhưng giai đoạn giữa hay gặp khủng hoảng bản sắc – câu hỏi "Ta thực sự là ai ngoài những thành công đã đạt được?" là bài kiểm tra lớn nhất.',
      'Điểm đặc biệt: Người số 1 có "may mắn bắt đầu" – những khởi đầu mới thường thuận lợi hơn người khác. Năng lượng khởi đầu là tài năng thiên bẩm của họ, nhưng khả năng duy trì lại là thử thách suốt đời.',
    ],
    childhood: 'Trẻ số 1 thường là người con cả hoặc được nuôi dưỡng trong môi trường đề cao sự độc lập và thành tích. Có thể có tuổi thơ cạnh tranh gay gắt – hoặc không được thể hiện bản thân, dẫn đến việc quyết tâm "tự làm chủ" khi trưởng thành. Nhiều người số 1 mang theo vết thương của việc bị so sánh hoặc bị kiểm soát trong thời thơ ấu.',
    communicationStyle: 'Trực tiếp, thẳng thắn đến mức đôi khi thô lỗ. Số 1 không vòng vo – nói thẳng vào vấn đề và kỳ vọng người khác cũng vậy. Họ không giỏi "đọc giữa các dòng chữ" về mặt cảm xúc và thường hiểu nhầm sự tế nhị là thiếu trung thực. Phong cách trình bày: tự tin, khẳng định, ít nghi vấn.',
    relationshipDynamics: 'Trong tình yêu: đối tác bảo hộ, mạnh mẽ nhưng hay áp đặt. Trong tình bạn: người bạn trung thành nhưng cần được tôn trọng, không chịu bị coi thường. Trong gia đình: con cái hay tranh quyền với cha mẹ từ nhỏ, khi làm cha/mẹ thì đặt kỳ vọng cao. Đặc biệt hòa hợp với những người biết tôn trọng không gian và quyết định của họ.',
    shadowWork: 'Bài tập cốt lõi: Mỗi ngày thực hành nói câu "Tôi cần giúp đỡ" ít nhất một lần và thực sự chờ đón sự hỗ trợ đó. Viết nhật ký về những lúc bạn cảm thấy yếu đuối – thay vì phủ nhận, hãy ngồi với cảm giác đó 5 phút. Bóng tối chưa tích hợp: sự kiêu ngạo che giấu nỗi sợ không đủ tốt.',
    lifeThemes: [
      'Bài học về sự khiêm tốn – cuộc đời sẽ lặp lại tình huống buộc bạn phải cúi đầu cho đến khi học được',
      'Tìm kiếm ý nghĩa của lãnh đạo thực sự – không phải quyền lực mà là phụng sự',
      'Cân bằng giữa tự lực và kết nối – học rằng nhờ người khác không phải yếu đuối',
      'Vượt qua nỗi sợ thất bại và bị nhìn thấy khi không hoàn hảo',
      'Chuyển hóa cái tôi từ "tôi làm được tất cả" sang "chúng ta cùng tạo ra điều kỳ diệu"',
    ],
    affirmations: [
      '"Sức mạnh của tôi càng lớn khi tôi biết lắng nghe."',
      '"Tôi tin tưởng vào quá trình – không phải mọi thứ cần tôi kiểm soát."',
      '"Việc cần giúp đỡ không làm tôi nhỏ bé – nó làm tôi trở nên người."',
      '"Tôi dẫn đường bằng tình thương, không phải bằng nỗi sợ."',
    ],
    mindset: 'Tư duy chiến binh – luôn ở chế độ "giải quyết vấn đề". Nhìn cuộc đời như một chuỗi thử thách cần vượt qua, mỗi trở ngại là bằng chứng để chứng minh bản thân. Cần học tư duy "cộng tác" thay vì "chinh phục".',
    stressResponse: 'Khi stress: trở nên kiểm soát hơn, cáu kỉnh và thu mình. Có xu hướng làm việc nhiều hơn để "kiểm soát" hoàn cảnh. Thường phủ nhận stress bằng cách tập trung vào hành động. Dấu hiệu cảnh báo: mất ngủ, tăng tốc không ngừng, hay bắt lỗi người khác.',
    giftToWorld: 'Số 1 mang đến cho thế giới sự can đảm để bắt đầu – những gì người khác sợ hãi nhất, số 1 bước vào trước. Họ là những người mở đường, tạo ra con đường để người khác đi theo. Không có số 1, nhiều ý tưởng vĩ đại sẽ mãi chỉ là ý tưởng.',
    strengths: [
      'Ra quyết định nhanh và dứt khoát, không sa lầy vào do dự',
      'Dũng cảm đối mặt thử thách mà người khác né tránh',
      'Khả năng làm việc độc lập cực tốt, không cần ai thúc đẩy',
      'Tư duy mở đường – nhìn thấy cơ hội trước người khác',
      'Chịu đựng áp lực và hồi phục sau thất bại tốt hơn hầu hết',
      'Truyền lửa và tạo động lực cho đội nhóm bằng năng lượng bản thân',
    ],
    weaknesses: [
      'Độc đoán – ít chịu lắng nghe phản hồi từ người khác',
      'Kiêu ngạo và bảo thủ khi bị phản bác',
      'Dễ cô đơn vì đứng quá cao hoặc đi quá nhanh',
      'Khó hợp tác bình đẳng – luôn muốn là người chủ đạo',
      'Tự ái cao, mất nhiều thời gian để chấp nhận mình sai',
    ],
    workEnv: 'Môi trường startup, doanh nghiệp nhỏ hoặc bộ phận có tính tự chủ cao. Ghét bộ máy quan liêu và quy trình dài dòng. Phát triển tốt nhất khi được giao mục tiêu rõ ràng và toàn quyền thực thi.',
    careers: ['CEO / Founder Startup', 'Giám đốc kinh doanh', 'Quản lý dự án cấp cao', 'Freelancer chuyên sâu', 'Chính trị gia', 'Vận động viên đỉnh cao', 'Doanh nhân độc lập'],
    majors: ['Quản trị kinh doanh', 'Khởi nghiệp & Đổi mới sáng tạo', 'Quản lý dự án', 'Marketing', 'Quan hệ công chúng'],
    moneyStyle: 'Kiếm tiền táo bạo và nhanh chóng – thích đầu tư rủi ro cao, lợi nhuận lớn. Tiêu tiền phóng khoáng, không tiếc tay cho những gì muốn. Cần xây dựng tài sản thụ động thay vì chỉ dựa vào thu nhập chủ động. Hay bỏ lỡ cơ hội vì không chịu hợp tác hay chia sẻ lợi nhuận.',
    loveStyle: 'Yêu theo kiểu bảo bọc và che chở. Rất chung thủy khi đã cam kết nhưng hay áp đặt quan điểm. Cần người bạn đời đủ mạnh để không bị cuốn theo, đồng thời biết tôn trọng và khen ngợi đúng lúc. Dễ bị tổn thương khi cảm thấy không được trân trọng xứng đáng.',
    healthFocus: 'Dễ bị đau đầu, tăng huyết áp do căng thẳng và ôm quá nhiều trách nhiệm. Cần tập thể dục đơn độc – chạy bộ, gym cá nhân – để xả stress. Điểm yếu thể chất: đầu, mắt, não. Cần học cách nghỉ ngơi thực sự, không phải chỉ chuyển sang "chế độ thư giãn hoạt động".',
    spiritualPath: 'Con đường tâm linh của số 1 là học cách "buông bỏ cái tôi". Từ "tôi làm mọi thứ" tiến đến "vũ trụ đồng hành cùng tôi". Thiền định và yoga giúp số 1 kết nối với phần nội tâm yên tĩnh hơn. Bài học tâm linh lớn nhất: cái tôi là công cụ, không phải bản thể.',
    karmicLesson: 'Nếu số 1 xuất hiện nhiều lần trong biểu đồ Thần số, bạn đang học bài học về sự khiêm tốn và hợp tác. Trong các kiếp trước, bạn có thể đã là người lãnh đạo nhưng đã lạm dụng quyền lực hoặc bỏ lại người khác phía sau.',
    lesson: 'Học cách lắng nghe và thấu hiểu người khác. Nhận ra rằng lãnh đạo thực sự không phải là ra lệnh, mà là truyền cảm hứng để người khác tự nguyện bước đi.',
    advice: 'Thực hành "lắng nghe tích cực" mỗi ngày – không ngắt lời, không chuẩn bị phản biện khi người khác đang nói. Sức mạnh của bạn sẽ nhân lên khi biết kết hợp ý chí cá nhân với sức mạnh tập thể.',
    planet: 'Mặt Trời ☀️',
    element: 'Lửa 🔥',
    compatible: [1, 3, 5, 9],
    challenging: [2, 6, 8],
    famousPeople: ['Steve Jobs', 'Napoleon Bonaparte', 'Martin Luther King Jr.', 'Lady Gaga'],
    color: 'from-amber-500 to-orange-600',
    colorFrom: '#f59e0b',
    colorTo: '#ea580c',
    emoji: '☀️',
  },

  2: {
    number: 2,
    name: 'Người Kết Nối & Hòa Giải',
    keyword: 'Lắng nghe · Hợp tác · Nhạy cảm · Thấu cảm sâu sắc',
    essence: 'Số 2 đại diện cho năng lượng Âm – sự tiếp nhận, tính hai mặt và sự gắn kết. Bạn là chất keo vô hình gắn kết mọi người lại với nhau. Không ồn ào, không nổi bật, nhưng thiếu bạn mọi cấu trúc sẽ dần tan vỡ từ bên trong. Số 2 là người đứng sau mọi thành công tập thể lớn.',
    lightSide: 'Có "giác quan thứ 6" cực nhạy – đọc vị cảm xúc của người khác chỉ qua ánh mắt và nét mặt. Rất kiên nhẫn, luôn muốn hòa giải mọi xung đột. Là người mà ai cũng muốn tâm sự vì bạn lắng nghe bằng cả trái tim.',
    darkSide: 'Nhạy cảm thái quá dẫn đến suy diễn (overthinking) không kiểm soát được. Hội chứng sợ bị bỏ rơi. Thiếu chính kiến, thường ngậm đắng nuốt cay để giữ hòa khí đến mức tự hủy hoại mình từ bên trong.',
    deepAnalysis: [
      'Tâm lý học: Số 2 vận hành từ trung tâm cảm xúc. Bạn xử lý thế giới qua cảm giác trước, rồi mới đến lý trí. Điều này tạo ra sự thấu cảm sâu sắc nhưng cũng dễ bị tổn thương bởi những câu nói vô tình.',
      'Hệ thống cảnh báo nội tâm: Số 2 có "hệ thống rađa cảm xúc" cực kỳ nhạy – họ cảm nhận được sự thay đổi tinh tế trong không khí của một mối quan hệ trước khi bất kỳ điều gì được nói ra. Đây là thiên phú nhưng cũng là gánh nặng.',
      'Cơ chế phòng vệ: Khi bị tổn thương, số 2 không nổi giận mà rút lui và im lặng. Họ xây một bức tường vô hình và chờ người khác nhận ra. Điều này gây hiểu lầm lớn trong các mối quan hệ.',
      'Bẫy của người giúp đỡ: Số 2 hay rơi vào vòng lặp – hy sinh → không được ghi nhận → oán giận → hy sinh tiếp. Nhận ra vòng lặp này là bước đầu tiên để thoát ra. Sự cho đi không có ranh giới không phải là đức hạnh mà là hình thức tự trừng phạt.',
      'Điểm mạnh ẩn: Số 2 là những nhà thương lượng xuất sắc nhất – không phải vì họ mạnh mà vì họ thực sự hiểu nhu cầu của cả hai bên và tìm ra điểm chung mà người khác không nhìn thấy.',
      'Mối quan hệ với quyền lực: Số 2 thường không thoải mái với quyền lực trực tiếp nhưng lại là "người tạo ra vua" – quyền lực thực sự của họ nằm ở ảnh hưởng, không phải vị trí. Nhiều chính trị gia và CEO thành công nhất thế giới đều có cố vấn là số 2.',
      'Điểm đặc biệt: Số 2 có khả năng "cảm nhận năng lượng phòng" – họ biết ngay khi bước vào căn phòng ai đang căng thẳng, ai đang vui, ai đang giả tạo. Đây là tài năng cực kỳ hiếm có.',
    ],
    childhood: 'Trẻ số 2 thường lớn lên trong gia đình có xung đột hoặc không ổn định cảm xúc, khiến họ phát triển khả năng "đọc không khí" rất sớm như một cơ chế sinh tồn. Nhiều người số 2 đã là "nhà hòa giải" trong gia đình từ khi còn nhỏ – đứng giữa cha mẹ bất hòa hoặc làm dịu mâu thuẫn giữa anh chị em. Vết thương tuổi thơ điển hình: cảm giác tình yêu thương có điều kiện.',
    communicationStyle: 'Nhẹ nhàng, khéo léo và quan tâm đến cảm xúc của người nghe. Số 2 giỏi lắng nghe hơn nói – họ tạo ra không gian an toàn để người khác mở lòng. Thường dùng ngôn ngữ "chúng ta" thay vì "tôi". Điểm yếu: khó nói điều không vừa lòng người khác, hay dùng cách nói vòng vo để tránh xung đột.',
    relationshipDynamics: 'Trong tình yêu: người yêu lý tưởng về sự tận tụy nhưng cần được khẳng định liên tục. Trong tình bạn: người bạn trung thành nhất – nhớ mọi kỷ niệm, luôn có mặt khi cần. Trong công việc: "người giữ đội lại" – khi số 2 rời đi, tinh thần tập thể sụt giảm rõ rệt. Dễ bị lợi dụng vì khó từ chối và ít khi bảo vệ ranh giới bản thân.',
    shadowWork: 'Bài tập cốt lõi: Thực hành nói "Không, tôi không thể làm điều này" mà không giải thích. Nhật ký về cảm giác tức giận – số 2 thường không nhận ra mình đang tức vì luôn hợp lý hóa cảm xúc. Bóng tối chưa tích hợp: sự thao túng tinh tế – dùng sự hy sinh để tạo ra cảm giác tội lỗi cho người khác.',
    lifeThemes: [
      'Học cách yêu bản thân trước khi yêu người khác – không phải ích kỷ mà là nền tảng',
      'Tìm kiếm bản sắc riêng tách biệt khỏi các mối quan hệ – "Tôi là ai khi không ai cần đến tôi?"',
      'Xây dựng ranh giới lành mạnh mà không cảm thấy tội lỗi hay sợ bị bỏ rơi',
      'Chuyển hóa từ "người cần thiết" thành "người lựa chọn cách yêu thương"',
      'Học cách nhận sự giúp đỡ và chấp nhận tình yêu thương từ người khác',
    ],
    affirmations: [
      '"Nhu cầu của tôi cũng quan trọng như nhu cầu của người khác."',
      '"Tôi có thể yêu thương mà không đánh mất chính mình."',
      '"Ranh giới của tôi là hành động của tình yêu, không phải sự từ chối."',
      '"Tôi xứng đáng được yêu thương đầy đủ, không có điều kiện."',
    ],
    mindset: 'Tư duy quan hệ – mọi thứ được nhìn qua lăng kính "điều này ảnh hưởng đến mối quan hệ như thế nào?". Cần phát triển thêm tư duy "Tôi cần gì?" song song với "Họ cần gì?".',
    stressResponse: 'Khi stress: im lặng, rút lui, khóc một mình. Hay ăn uống để xoa dịu cảm xúc. Tìm kiếm sự trấn an từ người thân nhưng lại ngại nói thẳng mình đang cần gì. Dấu hiệu cảnh báo: mất giọng nói (theo nghĩa bóng – không dám nói điều mình nghĩ), kiệt sức mà không biết tại sao.',
    giftToWorld: 'Số 2 mang đến cho thế giới sức mạnh của sự kết nối và lắng nghe thực sự. Trong thế giới ngày càng ồn ào và tự trung tâm, khả năng thực sự lắng nghe của số 2 là món quà hiếm có. Họ là người giữ cho tập thể không tan vỡ.',
    strengths: [
      'Trực giác và linh cảm cực nhạy – gần như không sai',
      'Khéo léo trong giao tiếp và đàm phán, giỏi tìm điểm chung',
      'Làm việc nhóm xuất sắc – là "chất keo" của đội ngũ',
      'Kiên nhẫn vô đối, có thể chờ đợi và chịu đựng lâu dài',
      'Biết đặt mình vào vị trí người khác – Empathy cao',
      'Khả năng lắng nghe sâu khiến người đối diện cảm thấy được thực sự hiểu',
    ],
    weaknesses: [
      'Quá nhạy cảm, dễ bị tổn thương bởi những câu nói không có ác ý',
      'Thiếu quyết đoán – hay ba phải, sợ làm mất lòng ai',
      'Sợ xung đột đến mức chấp nhận bất công để giữ yên bình',
      'Dễ đánh mất bản sắc khi yêu hoặc trong nhóm bạn mạnh',
      'Suy nghĩ quá nhiều và lo lắng về những điều chưa xảy ra',
    ],
    workEnv: 'Môi trường hòa hợp, có sự tin tưởng và hỗ trợ lẫn nhau. Phát triển tốt nhất trong vai trò hậu phương, tư vấn hoặc kết nối. Tránh môi trường cạnh tranh độc hại và xung đột liên tục.',
    careers: ['Chuyên viên nhân sự (HR)', 'Cố vấn / Tư vấn tâm lý', 'Nhà ngoại giao / Hòa giải viên', 'Chăm sóc khách hàng cấp cao', 'Giáo viên / Điều dưỡng', 'Nhà thương lượng hợp đồng', 'Công tác xã hội'],
    majors: ['Tâm lý học', 'Quản trị nhân sự', 'Sư phạm', 'Quan hệ quốc tế', 'Công tác xã hội', 'Chăm sóc sức khỏe'],
    moneyStyle: 'Thích sự an toàn tài chính hơn là giàu nhanh. Kiếm tiền dựa trên mối quan hệ và sự tin tưởng. Có xu hướng tiêu tiền cho người khác nhiều hơn cho bản thân. Cần học cách đặt mục tiêu tài chính cho riêng mình và không để cảm xúc chi phối quyết định tài chính.',
    loveStyle: 'Lụy tình, hy sinh hết mình cho đối phương. Cần rất nhiều sự khẳng định về tình yêu – lời nói, cử chỉ âu yếm – để cảm thấy an toàn. Hay tự hỏi "người ấy có thực sự yêu mình không" dù đã được chứng minh nhiều lần.',
    healthFocus: 'Dễ bị các vấn đề về đường tiêu hóa và hệ miễn dịch do stress cảm xúc tích tụ. Điểm yếu thể chất: dạ dày, thận, hệ thần kinh tự trị. Cần "xả cảm xúc" thường xuyên qua viết nhật ký, nói chuyện hoặc thiền định.',
    spiritualPath: 'Con đường tâm linh của số 2 là học cách kết nối với Nguồn năng lượng cao hơn thay vì phụ thuộc vào tình yêu của người khác để cảm thấy an toàn. Thực hành "tự yêu bản thân" (Self-love) là bài học cốt lõi.',
    karmicLesson: 'Số 2 thường mang nghiệp từ kiếp trước liên quan đến sự phụ thuộc hoặc bị kiểm soát. Bài học kiếp này là tìm lại bản thân, thiết lập ranh giới và học cách yêu mà không mất mình.',
    lesson: 'Học cách thiết lập ranh giới cá nhân. Học cách nói "Không" mà không cảm thấy tội lỗi. Biết rằng yêu thương bản thân không phải là ích kỷ.',
    advice: 'Mỗi ngày tự hỏi: "Hôm nay tôi cần gì?" trước khi hỏi "Người khác cần gì từ tôi?". Ranh giới khỏe mạnh không phá vỡ mối quan hệ – chúng tạo ra các mối quan hệ bền vững hơn.',
    planet: 'Mặt Trăng 🌙',
    element: 'Nước 💧',
    compatible: [2, 4, 6, 8],
    challenging: [1, 5, 7],
    famousPeople: ['Diana Spencer', 'Barack Obama', 'Bill Clinton', 'Jennifer Aniston'],
    color: 'from-blue-400 to-indigo-600',
    colorFrom: '#60a5fa',
    colorTo: '#4f46e5',
    emoji: '🌙',
  },

  3: {
    number: 3,
    name: 'Người Truyền Cảm Hứng & Sáng Tạo',
    keyword: 'Giao tiếp · Vui vẻ · Nghệ thuật · Lan tỏa năng lượng',
    essence: 'Số 3 là biểu tượng của sự sinh sôi (1+2=3), năng lượng của đứa trẻ: tỏa sáng, vui vẻ, tò mò và đầy tính biểu đạt. Bạn là người mang lại ánh sáng cho bất kỳ căn phòng nào bạn bước vào. Khi số 3 im lặng, người xung quanh cảm thấy thiếu thứ gì đó mà không thể gọi tên được.',
    lightSide: 'Khả năng dùng từ ngữ xuất thần – dù là nói hay viết. Bộ não luôn nảy sinh hàng ngàn ý tưởng. Thỏi nam châm trong các buổi gặp gỡ xã hội – mọi người bị thu hút bởi năng lượng sống động và sự hài hước tự nhiên của bạn.',
    darkSide: 'Hay phóng đại sự thật hoặc thêm thắt chi tiết không phải vì muốn lừa dối mà vì muốn câu chuyện hấp dẫn hơn. Cảm xúc lên xuống thất thường như tàu lượn siêu tốc. Làm việc theo cảm hứng, bỏ cuộc giữa chừng khi hết hứng.',
    deepAnalysis: [
      'Tâm lý học: Số 3 sống trong hiện tại. Họ không lo lắng về tương lai hay hối tiếc quá khứ nhiều như các số khác. Đây là năng lượng "Carpe Diem" thuần túy – tận hưởng từng khoảnh khắc và không giỏi học từ quá khứ.',
      'Bộ não số 3: Hoạt động theo kiểu liên tưởng tự do. Một ý tưởng dẫn đến 10 ý tưởng khác trong vài giây. Đây là thiên tài sáng tạo nhưng cũng là lý do họ khó tập trung và hay bị chẩn đoán ADHD.',
      'Trong công việc: Số 3 cần deadline và người nhắc nhở – không phải vì lười biếng mà vì bộ não họ luôn bị cuốn sang chủ đề mới hấp dẫn hơn. Cần cấu trúc bên ngoài để bù đắp sự thiếu kỷ luật nội tâm.',
      'Năng lượng bóng tối: Khi bị tổn thương, số 3 dùng ngôn từ như vũ khí – châm chọc, mỉa mai, hoặc phán xét cực kỳ sắc bén. Lưỡi số 3 ở trạng thái tiêu cực có thể cắt rất sâu và để lại thương tích lâu dài.',
      'Nỗi sợ ẩn: Đằng sau vẻ vui vẻ và bề ngoài không lo lắng, số 3 thường mang nỗi sợ sâu sắc về việc không được chú ý, không được yêu thích hoặc trở nên "bình thường". Sự vui vẻ đôi khi là mặt nạ che giấu nỗi cô đơn.',
      'Tài năng ngôn ngữ đặc biệt: Số 3 có khả năng bẩm sinh để chuyển đổi những khái niệm phức tạp thành câu chuyện đơn giản, hấp dẫn mà ai cũng hiểu được. Đây là tài năng vô cùng quý giá trong thế giới thông tin ngày nay.',
      'Điểm đặc biệt: Số 3 có "năng lượng chữa lành bằng tiếng cười". Chỉ cần họ xuất hiện, không khí nặng nề lập tức tan biến. Đây là món quà hiếm có mà nhiều người không nhận ra giá trị của nó.',
    ],
    childhood: 'Trẻ số 3 thường là "ngôi sao" trong gia đình – được khen ngợi vì sự dễ thương, hài hước và sáng tạo. Tuy nhiên, nhiều người số 3 học được từ sớm rằng để được yêu thương, họ cần phải "vui vẻ" và "không phàn nàn". Vết thương tuổi thơ: không được phép buồn, không gian biểu đạt cảm xúc tiêu cực bị thu hẹp.',
    communicationStyle: 'Sống động, đầy màu sắc và giàu hình ảnh. Số 3 kể chuyện tuyệt vời – họ biết cách khiến câu chuyện đơn giản nhất trở nên hấp dẫn. Giỏi thuyết phục và truyền cảm hứng. Điểm yếu: đôi khi nói quá nhiều, ngắt lời người khác vì bị kích thích bởi ý tưởng, và có thể quá nhấn mạnh vào chi tiết hài hước mà bỏ qua chiều sâu.',
    relationshipDynamics: 'Trong tình yêu: cực kỳ lãng mạn và bất ngờ nhưng mau chán nếu mối quan hệ trở nên đơn điệu. Trong tình bạn: người bạn vui nhất nhưng đôi khi bạn bè cảm thấy số 3 không ở đó thực sự khi họ cần một người lắng nghe nghiêm túc. Trong công việc: người giỏi khởi đầu dự án và truyền cảm hứng cho nhóm nhưng cần người khác để hoàn thiện.',
    shadowWork: 'Bài tập cốt lõi: Ngồi với cảm giác buồn hoặc trống rỗng mà không lấp đầy bằng mạng xã hội, tiệc tùng hay hoạt động. Tập viết về những điều bạn thực sự lo lắng. Bóng tối chưa tích hợp: sự phù phiếm và nhu cầu được chú ý che giấu nỗi sợ không có giá trị thực sự.',
    lifeThemes: [
      'Học cách đi sâu vào một điều thay vì chạm vào tất cả rồi bỏ',
      'Phát triển kỷ luật – biến tài năng bẩm sinh thành thành thạo thực sự',
      'Học cách ngồi với sự tĩnh lặng và cô đơn mà không cảm thấy sợ hãi',
      'Chuyển hóa từ "người vui vẻ bên ngoài" thành "người bình an bên trong"',
      'Dùng tài năng ngôn ngữ để chữa lành và xây dựng thay vì chỉ giải trí',
    ],
    affirmations: [
      '"Chiều sâu của tôi cũng đẹp như sự vui vẻ của tôi."',
      '"Tôi hoàn thành những gì tôi bắt đầu."',
      '"Sự im lặng không phải là kẻ thù – đó là nơi ý tưởng thực sự của tôi nảy sinh."',
      '"Tôi dùng lời nói để xây dựng, không phải để phán xét."',
    ],
    mindset: 'Tư duy lạc quan bẩm sinh – luôn nhìn thấy mặt sáng của mọi tình huống. Cần phát triển thêm khả năng đối mặt với thực tế và những sự thật khó chịu mà không né tránh bằng sự hài hước.',
    stressResponse: 'Khi stress: trở nên phân tán, nói nhiều hơn bình thường, tham gia quá nhiều hoạt động xã hội như một cách trốn tránh. Hoặc ngược lại – đột ngột im lặng và rút khỏi mọi thứ. Dấu hiệu cảnh báo: hay nói về những dự án chưa bắt đầu như cách tự khích lệ bản thân.',
    giftToWorld: 'Số 3 mang đến cho thế giới niềm vui, sự sáng tạo và khả năng kể chuyện – những thứ giúp con người kết nối với nhau qua cảm xúc. Trong thế giới đầy lo lắng, khả năng mang lại niềm vui của số 3 là liều thuốc không thể thiếu.',
    strengths: [
      'Khả năng ngôn ngữ tuyệt vời – viết lách, diễn thuyết, kể chuyện',
      'Sức hút tự nhiên, duyên dáng và hài hước bẩm sinh',
      'Luôn mang lại năng lượng tích cực cho đội nhóm',
      'Trí tưởng tượng phong phú – giỏi brainstorm ý tưởng',
      'Kết nối với mọi loại người ở mọi hoàn cảnh',
      'Sự nhiệt tình lây lan – truyền cảm hứng hành động cho người khác',
    ],
    weaknesses: [
      'Thiếu tập trung trầm trọng – cả thèm chóng chán',
      'Quản lý tài chính kém – tiêu theo cảm xúc',
      'Dễ phóng đại hoặc nói quá sự thật để câu chuyện hay hơn',
      'Né tránh trách nhiệm và những cuộc trò chuyện khó khăn',
      'Kỷ luật bản thân yếu – khó duy trì thói quen lâu dài',
    ],
    workEnv: 'Không gian sáng tạo, năng động, được tự do ngôn luận. Cần đồng nghiệp hỗ trợ và deadline rõ ràng để phát huy tối đa. Ghét công việc lặp đi lặp lại và môi trường quá nghiêm khắc.',
    careers: ['Diễn viên / MC / Người dẫn chương trình', 'Chuyên viên Marketing / PR / Branding', 'Content Creator / YouTuber', 'Nhà văn / Nhà báo / Copywriter', 'Diễn giả truyền cảm hứng', 'Giáo viên sáng tạo', 'Nghệ sĩ / Nhạc sĩ'],
    majors: ['Truyền thông đa phương tiện', 'Báo chí', 'Thiết kế đồ họa/Nghệ thuật', 'Quan hệ công chúng (PR)', 'Marketing', 'Ngôn ngữ'],
    moneyStyle: 'Tiền đến từ tài ăn nói và sự sáng tạo. Tiền vào bao nhiêu ra bấy nhiêu vì thói quen mua sắm theo cảm xúc. Cần lập ngân sách cứng và nhờ người khác quản lý tài chính dài hạn.',
    loveStyle: 'Cực kỳ lãng mạn, sáng tạo trong tình yêu. Nhưng mau chán nếu mối quan hệ trở nên đơn điệu. Cần người bạn đời liên tục tạo sự mới mẻ và chịu được sự thất thường.',
    healthFocus: 'Dễ bị các vấn đề về cổ họng, phổi và hệ thần kinh do nói nhiều và cảm xúc không ổn định. Cần thời gian "im lặng" mỗi ngày để cân bằng.',
    spiritualPath: 'Con đường tâm linh của số 3 là học cách đi sâu vào một chiều hướng thay vì cưỡi ngựa xem hoa. Thiền âm thanh và nghệ thuật thiêng liêng là con đường phù hợp.',
    karmicLesson: 'Số 3 thường mang nghiệp liên quan đến việc lạm dụng ngôn từ hoặc tài năng biểu đạt trong kiếp trước. Bài học kiếp này là dùng ngôn từ để xây dựng và chữa lành.',
    lesson: 'Kỷ luật bản thân là chìa khóa. Học cách đi sâu vào một lĩnh vực thay vì chạm đến rồi bỏ.',
    advice: 'Chọn một dự án và cam kết với nó trong ít nhất 90 ngày. Sức mạnh thực sự của bạn chỉ xuất hiện khi học được sự kiên nhẫn.',
    planet: 'Mộc Tinh (Jupiter) ♃',
    element: 'Khí 🌬️',
    compatible: [1, 3, 5, 9],
    challenging: [4, 7, 8],
    famousPeople: ['Audrey Hepburn', 'John Travolta', 'Christina Aguilera', 'Alec Baldwin'],
    color: 'from-yellow-400 to-orange-500',
    colorFrom: '#facc15',
    colorTo: '#f97316',
    emoji: '⭐',
  },

  4: {
    number: 4,
    name: 'Người Xây Dựng & Thực Tế',
    keyword: 'Quy trình · Kỷ luật · Ổn định · Chính xác tuyệt đối',
    essence: 'Số 4 đại diện cho 4 phương (Đông, Tây, Nam, Bắc), 4 mùa, 4 nguyên tố – sự nền tảng, vật chất, logic và trật tự. Bạn là kiến trúc sư thầm lặng của mọi công trình lớn. Không có số 4, mọi ý tưởng vĩ đại mãi chỉ là ý tưởng trên giấy. Người số 4 là xương sống của mọi tổ chức.',
    lightSide: 'Năng lực làm việc vô đối – lì lợm, kiên nhẫn và bền bỉ không ai bằng. Luôn có "Kế hoạch B, C, D". Được tin tưởng tuyệt đối vì không bao giờ thất hứa nếu có thể tránh được.',
    darkSide: 'Quá thực dụng đến mức khô khan, máy móc. Cực kỳ bảo thủ – "thấy mới tin", ghét mọi thứ chưa được chứng minh. Thường đánh mất cơ hội lớn vì suy tính quá lâu và sợ rủi ro.',
    deepAnalysis: [
      'Tâm lý học: Số 4 vận hành từ trung tâm của sự an toàn. Mọi quyết định đều được lọc qua câu hỏi "Liệu điều này có an toàn không? Liệu nó có bền vững không?" Bộ lọc này giúp tránh sai lầm nhưng cũng ngăn nắm bắt cơ hội.',
      'Làm việc theo hệ thống: Số 4 không chỉ làm việc chăm chỉ – họ làm việc thông minh trong khuôn khổ hệ thống. Họ là người tạo ra quy trình, checklist và chuẩn mực mà người khác tuân theo. Không có số 4, tổ chức nào cũng rơi vào hỗn loạn.',
      'Bẫy của sự hoàn hảo: Số 4 thường không bắt đầu vì sợ chưa đủ điều kiện. Họ chờ thời điểm "hoàn hảo" không bao giờ đến. Paradox lớn nhất: người xây dựng giỏi nhất lại hay bị tê liệt bởi việc chuẩn bị.',
      'Mối quan hệ với thay đổi: Số 4 không ghét thay đổi – họ sợ thay đổi không có kế hoạch. Nếu bạn cho số 4 đủ thời gian để chuẩn bị, họ sẽ thực thi sự thay đổi tốt hơn bất kỳ ai. Vấn đề là khi thay đổi đến bất ngờ.',
      'Trí nhớ chi tiết: Số 4 có trí nhớ chi tiết đáng sợ – họ nhớ số liệu, ngày tháng và thông tin kỹ thuật lâu năm sau khi học. Đây là lợi thế cạnh tranh vô giá trong các lĩnh vực đòi hỏi chuyên môn sâu.',
      'Vấn đề với cảm xúc: Số 4 không phải không có cảm xúc – họ chỉ không biết cách xử lý chúng. Cảm xúc với số 4 như một biến số không nằm trong phương trình, khiến họ cảm thấy mất kiểm soát. Nhiều người số 4 bị đánh giá là "lạnh lùng" trong khi thực chất họ đang rất rối loạn bên trong.',
      'Điểm đặc biệt: Số 4 là những "thợ sửa chữa" của cuộc đời – khi hệ thống, mối quan hệ hay dự án bị hỏng, họ là người kiên nhẫn ngồi xuống, tìm ra đúng vấn đề và sửa nó từng bước một.',
    ],
    childhood: 'Trẻ số 4 thường lớn lên trong gia đình đề cao trách nhiệm, kỷ luật và thành tích thực tế. Nhiều người số 4 sớm trở thành "người lớn" trong gia đình – gánh vác trách nhiệm quá sức với lứa tuổi. Vết thương tuổi thơ điển hình: không được phép vui chơi thoải mái, áp lực phải "làm đúng mọi thứ".',
    communicationStyle: 'Chính xác, thực tế và đi thẳng vào vấn đề. Số 4 không lãng phí lời. Khi nói, họ đã suy nghĩ kỹ và mỗi từ đều có lý do. Điểm yếu: đôi khi quá khô khan và thiếu sắc thái cảm xúc trong giao tiếp, khiến người nghe cảm thấy bị đánh giá hoặc phán xét dù không phải ý định của số 4.',
    relationshipDynamics: 'Trong tình yêu: thể hiện tình cảm bằng hành động thiết thực – sửa điện nước, lên kế hoạch tài chính, luôn có mặt khi cần. Không giỏi nói "tôi yêu em/anh" nhưng hành động chứng minh tất cả. Trong công việc: người đồng nghiệp đáng tin cậy nhất nhưng đôi khi quá cứng nhắc với quy trình. Dễ xung đột với những người làm việc theo cảm hứng.',
    shadowWork: 'Bài tập cốt lõi: Làm một việc hoàn toàn không có kế hoạch mỗi tuần – có thể chỉ là đi dạo không biết trước điểm đến. Tập nhận ra cảm xúc và đặt tên cho chúng. Bóng tối chưa tích hợp: sự cứng nhắc che giấu nỗi sợ mất kiểm soát sâu sắc.',
    lifeThemes: [
      'Học cách linh hoạt và chấp nhận sự thay đổi như phần tất yếu của cuộc sống',
      'Phá vỡ vòng lặp "chuẩn bị mãi mà không bắt đầu"',
      'Học cách tin tưởng vào trực giác bên cạnh dữ liệu và bằng chứng',
      'Cân bằng giữa trách nhiệm với người khác và nghỉ ngơi cho bản thân',
      'Chuyển hóa từ "làm đúng" sang "làm với tình yêu thương"',
    ],
    affirmations: [
      '"Tôi có thể bắt đầu với những gì tôi có ngay bây giờ."',
      '"Sự linh hoạt là sức mạnh, không phải yếu đuối."',
      '"Tôi tin tưởng vào quá trình ngay cả khi chưa thấy toàn bộ bức tranh."',
      '"Tôi xứng đáng được nghỉ ngơi và vui chơi."',
    ],
    mindset: 'Tư duy xây dựng – mọi thứ đều có thể được cải thiện nếu có đúng hệ thống và quy trình. Cần phát triển thêm tư duy tổng thể và khả năng chấp nhận sự không hoàn hảo.',
    stressResponse: 'Khi stress: trở nên cứng nhắc hơn, kiểm soát nhiều hơn và làm việc nhiều hơn. Có thể trở nên hay soi xét lỗi của người khác. Dấu hiệu cảnh báo: cơ thể thường báo hiệu qua đau lưng, đau khớp, hoặc hệ tiêu hóa có vấn đề.',
    giftToWorld: 'Số 4 mang đến cho thế giới sự ổn định, đáng tin cậy và khả năng biến ý tưởng thành hiện thực. Trong thế giới đầy những ý tưởng bốc đồng, số 4 là người thực sự ngồi xuống và xây dựng nó từng viên gạch một.',
    strengths: [
      'Đáng tin cậy tuyệt đối – không bao giờ thất hứa nếu có thể tránh được',
      'Kỷ luật và kiên nhẫn vượt trội – làm đến cùng dù khó khăn',
      'Tư duy hệ thống – giỏi tổ chức và xây dựng quy trình',
      'Quản lý tài chính xuất sắc – biết tiết kiệm và đầu tư an toàn',
      'Phân tích rủi ro cực tốt, ít mắc phải sai lầm do bốc đồng',
      'Trí nhớ chi tiết – nhớ số liệu, quy định, kỹ thuật lâu dài',
    ],
    weaknesses: [
      'Cứng nhắc – khó thích nghi với thay đổi đột ngột',
      'Bảo thủ – khó chấp nhận ý tưởng mới chưa được chứng minh',
      'Ngại rủi ro đến mức bỏ lỡ cơ hội lớn',
      'Đôi khi nhàm chán và thiếu sự linh hoạt trong giao tiếp',
      'Hay chú trọng tiểu tiết mà quên mất bức tranh tổng thể',
    ],
    workEnv: 'Tổ chức có hệ thống rõ ràng, chính sách minh bạch và văn hóa làm việc chuyên nghiệp. Phát triển tốt trong nhà nước, tập đoàn lớn, hoặc lĩnh vực đòi hỏi chính xác cao.',
    careers: ['Kế toán / Kiểm toán viên', 'Lập trình viên Back-end / DevOps', 'Kỹ sư xây dựng / Cơ khí', 'Luật sư / Công chứng viên', 'Quản lý hành chính', 'Bác sĩ / Dược sĩ', 'Quản lý dự án truyền thống'],
    majors: ['Kế toán / Kiểm toán', 'Công nghệ thông tin', 'Kỹ thuật / Cơ khí', 'Luật', 'Khoa học dữ liệu', 'Phân tích tài chính'],
    moneyStyle: 'Xây dựng tài sản theo kiểu "kiến tha lâu cũng đầy tổ". Thích đất đai, sổ tiết kiệm và tài sản an toàn. Không bao giờ đánh bạc hay đầu tư mạo hiểm. Tài chính cá nhân thường ở trạng thái tốt dù không giàu nhanh.',
    loveStyle: 'Rất chung thủy và có trách nhiệm cao. Thể hiện tình cảm bằng hành động thiết thực hơn lời nói. Đối phương đôi khi cảm thấy thiếu sự lãng mạn. Cần học cách nói ra cảm xúc bằng lời.',
    healthFocus: 'Dễ bị các vấn đề về xương khớp và cột sống do ngồi làm việc nhiều. Cần vận động đều đặn và tránh ôm đồm dẫn đến burnout mãn tính.',
    spiritualPath: 'Con đường tâm linh của số 4 là học cách tin vào những thứ không thể nhìn thấy hay đo đếm được. Từ "chỉ tin những gì chứng minh được" tiến đến "có những điều vượt ngoài logic".',
    karmicLesson: 'Số 4 thường mang nghiệp từ kiếp trước liên quan đến sự lười biếng hoặc vô kỷ luật. Kiếp này, họ được trao năng lực kỷ luật để xây dựng và hoàn thiện những gì còn dang dở.',
    lesson: 'Học cách linh hoạt và chấp nhận sự thay đổi. Tin vào trực giác đôi khi cũng quan trọng không kém bằng chứng.',
    advice: 'Thực hành "bắt đầu với 80% sẵn sàng" thay vì chờ 100%. Hoàn hảo là kẻ thù của hoàn thành.',
    planet: 'Sao Thổ (Saturn) ♄',
    element: 'Đất 🌍',
    compatible: [2, 4, 6, 8],
    challenging: [3, 5, 9],
    famousPeople: ['Oprah Winfrey', 'Bill Gates', 'Arnold Schwarzenegger', 'Nicole Kidman'],
    color: 'from-green-500 to-emerald-700',
    colorFrom: '#22c55e',
    colorTo: '#047857',
    emoji: '🌍',
  },

  5: {
    number: 5,
    name: 'Người Tự Do & Phiêu Lưu',
    keyword: 'Tự do · Biến đổi · Phiêu lưu · Kết nối đa chiều',
    essence: 'Số 5 là năng lượng của sự chuyển động và thay đổi không ngừng. Đây là con số của tự do tuyệt đối – cả tự do thể chất lẫn tự do tư tưởng. Người mang số 5 sinh ra để trải nghiệm thế giới bằng toàn bộ giác quan, không bị giam cầm bởi giới hạn, quy tắc hay sự nhàm chán. Họ là cầu nối giữa các thế giới khác nhau, mang thông điệp từ nơi này đến nơi khác.',
    lightSide: 'Tinh thần tự do và thích nghi phi thường. Khả năng kết nối với bất kỳ ai ở bất kỳ đâu. Trí tò mò vô hạn và ham học hỏi. Sức hút cá nhân mạnh mẽ, dễ tạo ảnh hưởng đám đông. Khả năng giải quyết vấn đề sáng tạo và phi tuyến tính.',
    darkSide: 'Sợ cam kết và trách nhiệm lâu dài. Thiếu tập trung, dễ bỏ dở giữa chừng. Có xu hướng nghiện cảm giác mới – từ công việc mới, mối quan hệ mới đến những trải nghiệm kích thích giác quan. Bất ổn về tài chính do thiếu kế hoạch dài hạn.',
    deepAnalysis: [
      'Số 5 vận hành theo "nguyên lý cộng hưởng đa chiều" – họ không đi theo đường thẳng mà di chuyển theo những đường cong kỳ diệu, đồng thời kết nối nhiều luồng thông tin và trải nghiệm khác nhau.',
      'Não bộ của số 5 hoạt động như một mạng lưới phi tuyến. Họ có thể xử lý nhiều chủ đề cùng lúc và tìm thấy những mối liên hệ không ngờ giữa các lĩnh vực tưởng chừng không liên quan.',
      'Tự do không chỉ là điều số 5 muốn – đó là nhu cầu sinh tồn. Khi bị kiểm soát hay giam hãm trong môi trường cứng nhắc, họ dần mất đi năng lực sáng tạo và trở nên bất an, khó chịu.',
      'Số 5 có thiên tài đặc biệt trong việc đọc "năng lượng phòng" – họ cảm nhận được bầu không khí, cảm xúc tập thể và biết chính xác điều gì cần được nói hoặc làm tại thời điểm đó.',
      'Nỗi sợ lớn nhất của số 5 là bị bỏ lỡ (FOMO). Họ luôn cảm thấy cuộc sống thú vị nhất đang diễn ra ở nơi khác, điều này dẫn đến sự phân tán và không bao giờ thực sự đắm mình vào hiện tại.',
      'Khi số 5 học được cách tìm thấy tự do bên trong – thay vì chạy trốn ra ngoài – họ trở thành những cá nhân phi thường: vừa có chiều sâu vừa có chiều rộng, vừa tự do vừa có nền tảng.',
      'Mối quan hệ tốt nhất với số 5 là mối quan hệ cho phép họ là chính mình. Đối tác phải hiểu rằng kiểm soát số 5 giống như cố giam cầm gió – không thể làm được, và nếu thử, bạn sẽ mất họ.',
    ],
    strengths: [
      'Thích nghi xuất sắc với mọi môi trường và hoàn cảnh mới',
      'Kỹ năng giao tiếp và kết nối con người vượt trội',
      'Tư duy sáng tạo và khả năng nhìn nhận vấn đề đa chiều',
      'Sức hút cá nhân tự nhiên, dễ thu hút người theo',
      'Khả năng học nhanh và tiếp thu kiến thức đa lĩnh vực',
      'Tinh thần lạc quan và khả năng hồi phục tốt sau thất bại',
    ],
    weaknesses: [
      'Thiếu kiên nhẫn và bỏ cuộc khi công việc trở nên đơn điệu',
      'Khó cam kết lâu dài – cả trong tình cảm lẫn công việc',
      'Quản lý thời gian và tài chính kém do thiếu kế hoạch',
      'Dễ bị cám dỗ bởi những thú vui giác quan quá mức',
      'Thiếu nhất quán – năng lượng theo kiểu "bùng cháy rồi tắt ngúm"',
    ],
    workEnv: 'Môi trường linh hoạt, ít cứng nhắc, cho phép sáng tạo và di chuyển. Ghét văn phòng 9-5 truyền thống. Phát triển tốt trong startup, freelance, media và bất cứ nơi nào đề cao sự đổi mới.',
    careers: ['Nhà báo / Phóng viên / Blogger', 'Hướng dẫn viên du lịch', 'Diễn viên / Nghệ sĩ biểu diễn', 'Nhân viên kinh doanh / Tiếp thị', 'Doanh nhân / Startup founder', 'Chuyên gia truyền thông xã hội', 'Nhà ngoại giao / Chuyên gia quan hệ quốc tế'],
    majors: ['Báo chí / Truyền thông', 'Marketing / Kinh doanh', 'Quan hệ quốc tế', 'Du lịch / Khách sạn', 'Nghệ thuật biểu diễn'],
    moneyStyle: 'Tiền đến rồi đi như làn sóng. Số 5 kiếm tiền dễ nhưng cũng tiêu dễ không kém. Cần học kỷ luật tài chính cơ bản. Phù hợp với những công việc hoa hồng, commission vì họ làm việc tốt nhất khi có động lực trực tiếp.',
    loveStyle: 'Đối tác đam mê và đầy bất ngờ khi còn hứng thú. Cần người yêu hiểu được nhu cầu tự do và không gian cá nhân. Một khi cam kết thật sự, họ cực kỳ trung thành – nhưng cần cảm giác mối quan hệ vẫn "mới" và thú vị.',
    healthFocus: 'Cần chú ý đến hệ thần kinh dễ bị kích thích quá mức. Xu hướng lạm dụng các chất kích thích. Thiền định và yoga giúp số 5 tìm lại trung tâm trong cơn xoáy của sự kích thích.',
    spiritualPath: 'Con đường tâm linh của số 5 là học cách tìm thấy tự do bên trong không gian, không phải qua việc chạy trốn. Từ "tự do là không bị ràng buộc" tiến đến "tự do thực sự là khi tôi an bình ngay cả trong giới hạn".',
    karmicLesson: 'Số 5 thường mang nghiệp từ kiếp trước liên quan đến sự kiểm soát và giam cầm. Kiếp này họ trải nghiệm tự do để học cách sử dụng nó có trách nhiệm.',
    lesson: 'Học cách cam kết và tìm thấy tự do bên trong trách nhiệm, không phải chạy trốn khỏi nó.',
    advice: 'Chọn một mục tiêu lớn và "cắm rễ" vào đó trong ít nhất 2 năm. Tự do đích thực đến từ sự thành thạo, không phải từ sự phân tán.',
    planet: 'Sao Thủy (Mercury) ☿',
    element: 'Không khí 💨',
    compatible: [1, 3, 5, 7],
    challenging: [4, 8],
    famousPeople: ['Mick Jagger', 'Steven Spielberg', 'Abraham Lincoln', 'Vincent Van Gogh'],
    color: 'from-orange-400 to-amber-600',
    colorFrom: '#fb923c',
    colorTo: '#d97706',
    emoji: '💨',
    childhood: 'Tuổi thơ của số 5 thường đầy chuyển đổi – chuyển nhà, chuyển trường hoặc trải qua nhiều thay đổi lớn trong gia đình. Điều này rèn luyện khả năng thích nghi nhưng cũng tạo ra nỗi lo về sự ổn định và cam kết.',
    communicationStyle: 'Hùng hồn, cuốn hút và đa dạng. Kể chuyện hay, biết cách giữ người nghe chú ý. Dễ chuyển chủ đề và đôi khi không đi đến kết luận rõ ràng.',
    relationshipDynamics: 'Cần đối tác vừa là người yêu vừa là người bạn phiêu lưu. Sợ cô đơn nhưng cũng sợ bị giam cầm. Mối quan hệ tốt nhất là mối quan hệ dựa trên sự tự nguyện, không phải nghĩa vụ.',
    shadowWork: 'Bóng tối của số 5 là sự trốn tránh. Mỗi khi cảm xúc khó chịu xuất hiện, họ chạy sang kích thích mới thay vì đối mặt. Công việc shadow là ngồi yên với sự khó chịu và để nó dạy mình điều gì đó.',
    lifeThemes: ['Tự do và trách nhiệm', 'Trải nghiệm và sự thành thạo', 'Kết nối không biên giới', 'Biến đổi và thích nghi', 'Tìm trung tâm trong hỗn loạn'],
    affirmations: ['Tôi tự do và có trách nhiệm với tự do đó', 'Tôi có thể cam kết mà không mất đi bản thân', 'Sự thay đổi là người bạn, không phải kẻ thù của tôi', 'Tôi tìm thấy bình yên ngay trong khoảnh khắc hiện tại này'],
    mindset: 'Tư duy phi tuyến, liên kết và sáng tạo. Luôn hỏi "tại sao không?" thay vì "tại sao?". Nhìn thế giới như một sân chơi vô hạn.',
    stressResponse: 'Khi căng thẳng, số 5 hoặc chạy trốn vào những hoạt động kích thích (mua sắm, rượu, mạng xã hội) hoặc trở nên bồn chồn và không thể ngồi yên. Cần không gian tự do có cấu trúc để hồi phục.',
    giftToWorld: 'Số 5 mang đến năng lượng đổi mới, sự kết nối và tinh thần tự do cho thế giới. Họ là những người phá vỡ giới hạn và mở ra những khả năng mới mà người khác chưa nhìn thấy.',
  },

  6: {
    number: 6,
    name: 'Người Nuôi Dưỡng & Bảo Vệ',
    keyword: 'Yêu thương · Trách nhiệm · Hài hòa · Hy sinh',
    essence: 'Số 6 là trái tim của hệ thống Thần số học – con số của tình yêu vô điều kiện, trách nhiệm gia đình và sự hài hòa trong cộng đồng. Người mang số 6 có bản năng chăm sóc và bảo vệ người khác sâu trong DNA. Họ cảm nhận được nỗi đau của người khác như của chính mình và không thể dửng dưng trước sự bất công hay đau khổ.',
    lightSide: 'Tình yêu thương chân thành và không điều kiện. Khả năng tạo ra hòa bình và hòa giải trong xung đột. Sự cống hiến và trách nhiệm đáng tin cậy. Tài năng thẩm mỹ và cảm nhận cái đẹp tinh tế. Khả năng dạy dỗ và truyền cảm hứng thế hệ sau.',
    darkSide: 'Hy sinh quá mức đến mức tự hủy hoại. Kiểm soát bằng tình yêu thương (overprotective). Hay phán xét và ép người khác theo tiêu chuẩn của mình. Khó buông tay và để người thân tự đứng vững. Cảm giác tội lỗi liên miên khi không làm hài lòng ai đó.',
    deepAnalysis: [
      'Số 6 vận hành theo "nguyên lý từ trường tình yêu" – họ thu hút những người cần được chăm sóc như nam châm thu hút kim loại. Điều này có thể trở thành sứ mệnh cao đẹp hoặc gánh nặng kiệt sức nếu không được cân bằng.',
      'Khi số 6 nói "tôi muốn giúp", đó là sự thật – nhưng đôi khi ẩn sâu dưới đó là nhu cầu được cần thiết, được yêu thương và được công nhận. Việc nhận ra động cơ thực sự là bước quan trọng trong hành trình trưởng thành.',
      'Số 6 có thiên tài giải quyết xung đột. Họ nhìn thấy điểm chung giữa các bên mâu thuẫn và tìm ra ngôn ngữ chung. Đây là lý do nhiều số 6 tự nhiên trở thành hòa giải viên, nhà tư vấn hoặc thầy cô giáo.',
      'Vẻ đẹp và sự hài hòa là nhu cầu tâm linh của số 6. Họ không thể sống lâu trong môi trường xấu xí, lộn xộn hay đầy mâu thuẫn. Không gian xung quanh phản ánh trực tiếp trạng thái nội tâm của họ.',
      'Thách thức lớn nhất của số 6 là ranh giới (boundaries). Họ có xu hướng đặt nhu cầu của người khác lên trên nhu cầu của chính mình đến mức quên mất mình là ai và mình muốn gì.',
      'Khi số 6 học được cách yêu thương mà không đánh mất bản thân – yêu từ sự sung mãn chứ không từ sự sợ hãi – họ trở thành những cá nhân phi thường với khả năng chữa lành và truyền cảm hứng.',
      'Số 6 thường được gọi là "số của người chữa lành" – không phải vì họ có phép màu, mà vì sự hiện diện đầy yêu thương và không phán xét của họ tạo ra không gian an toàn để người khác phát triển.',
    ],
    strengths: [
      'Khả năng yêu thương và chăm sóc sâu sắc và chân thành',
      'Kỹ năng hòa giải và tạo sự hài hòa trong nhóm',
      'Trách nhiệm và đáng tin cậy trong mọi vai trò',
      'Tài năng nghệ thuật và thẩm mỹ bẩm sinh',
      'Khả năng tạo ra môi trường ấm áp và an toàn cho người khác',
      'Sự kiên nhẫn và tận tụy trong công việc dài hơi',
    ],
    weaknesses: [
      'Hy sinh bản thân quá mức, quên đi nhu cầu cá nhân',
      'Kiểm soát người thân dưới danh nghĩa "vì tốt cho họ"',
      'Cảm giác tội lỗi và tự trách khi không hoàn hảo',
      'Khó nói "không" dẫn đến burnout và oán giận ngầm',
      'Hay phán xét và áp đặt tiêu chuẩn cao lên người khác',
    ],
    workEnv: 'Môi trường có ý nghĩa xã hội, ấm áp và hợp tác. Không phù hợp với văn hóa cạnh tranh khắc nghiệt hay thiếu nhân văn. Phát triển tốt trong giáo dục, y tế, nghệ thuật và các tổ chức phi lợi nhuận.',
    careers: ['Giáo viên / Nhà giáo dục', 'Bác sĩ / Y tá / Chuyên gia trị liệu', 'Nhà thiết kế nội thất / Kiến trúc sư', 'Nhà tư vấn tâm lý / Công tác xã hội', 'Nghệ sĩ / Nhạc sĩ', 'Nhà quản lý nhân sự', 'Đầu bếp / Chuyên gia ẩm thực'],
    majors: ['Sư phạm / Giáo dục', 'Y khoa / Điều dưỡng', 'Tâm lý học', 'Thiết kế nội thất / Mỹ thuật', 'Công tác xã hội'],
    moneyStyle: 'Có xu hướng chi tiêu cho người khác hơn cho bản thân. Có thể tích lũy tài sản tốt khi được định hướng, nhưng dễ bị lợi dụng lòng tốt trong các quyết định tài chính.',
    loveStyle: 'Người yêu đích thực, chung thủy và sẵn sàng hi sinh. Cần được nhận tình yêu lại thay vì chỉ cho. Học cách yêu bản thân trước để không rơi vào các mối quan hệ co-dependent.',
    healthFocus: 'Căng thẳng do ôm đồm quá nhiều là vấn đề chính. Cần học cách đặt ranh giới để tránh burnout. Chú ý đến các vấn đề tim mạch và hệ tiêu hóa liên quan đến stress mãn tính.',
    spiritualPath: 'Con đường tâm linh của số 6 là học cách yêu vô điều kiện – kể cả với chính bản thân. Từ "yêu để được yêu lại" tiến đến "yêu vì đó là bản chất của tôi".',
    karmicLesson: 'Số 6 thường mang nghiệp từ kiếp trước liên quan đến sự lạnh lùng hoặc ích kỷ. Kiếp này, họ học bài học yêu thương qua trải nghiệm nuôi dưỡng người khác.',
    lesson: 'Học cách yêu và chăm sóc bản thân với cùng sự tận tụy như chăm sóc người khác. Ranh giới lành mạnh là hành động của tình yêu, không phải sự ích kỷ.',
    advice: 'Thực hành nói "không" ít nhất một lần mỗi tuần với điều gì đó bạn thực sự không muốn làm. Self-care không phải là xa xỉ – đó là nghĩa vụ với chính mình.',
    planet: 'Sao Kim (Venus) ♀',
    element: 'Đất 🌍',
    compatible: [2, 4, 6, 8, 9],
    challenging: [1, 5],
    famousPeople: ['Mother Teresa', 'Albert Einstein', 'Michael Jackson', 'John Lennon'],
    color: 'from-rose-400 to-pink-600',
    colorFrom: '#fb7185',
    colorTo: '#db2777',
    emoji: '💖',
    childhood: 'Tuổi thơ của số 6 thường gắn liền với vai trò chăm sóc từ sớm – có thể là em nhỏ nhất trong nhà hoặc người phải đảm nhận trách nhiệm gia đình. Họ học cách yêu thương qua sự phục vụ và điều này hình thành bản sắc sâu sắc.',
    communicationStyle: 'Ấm áp, quan tâm và chú ý đến cảm xúc của người nghe. Giỏi lắng nghe và tạo không gian an toàn. Đôi khi tránh nói sự thật khó nghe vì sợ làm người khác tổn thương.',
    relationshipDynamics: 'Người đối tác tận tụy nhất trong hệ thống Thần số học. Tạo ra mái ấm và sự an toàn. Cần người bạn đời biết trân trọng và đáp lại tình cảm, không phải người lợi dụng lòng tốt.',
    shadowWork: 'Bóng tối của số 6 là sự kiểm soát ẩn sau tình yêu. "Tôi làm vì tôi yêu em" đôi khi thực ra là "Tôi cần em cần tôi". Công việc shadow là phân biệt giữa yêu thương chân thành và nhu cầu được cần thiết.',
    lifeThemes: ['Tình yêu và sự hi sinh', 'Trách nhiệm và ranh giới', 'Hài hòa trong gia đình và cộng đồng', 'Chữa lành và nuôi dưỡng', 'Yêu bản thân để yêu người khác'],
    affirmations: ['Tôi xứng đáng được yêu thương và chăm sóc', 'Đặt ranh giới là hành động của tình yêu', 'Tôi cho đi từ sự sung mãn, không phải từ nỗi sợ', 'Tôi tin tưởng người khác có thể tự chăm sóc bản thân họ'],
    mindset: 'Tư duy lấy mối quan hệ làm trung tâm. Luôn hỏi "điều này ảnh hưởng như thế nào đến những người tôi yêu?". Tin rằng hạnh phúc đến từ sự kết nối và cống hiến.',
    stressResponse: 'Khi căng thẳng, số 6 có thể trở nên hay phán xét, cằn nhằn hoặc rút lui vào im lặng ấm ức. Cần được công nhận và cảm ơn để nạp lại năng lượng.',
    giftToWorld: 'Số 6 mang đến tình yêu vô điều kiện và sự chữa lành cho thế giới. Họ là những người tạo ra "nhà" – không phải về mặt vật lý mà về mặt cảm xúc – nơi mọi người cảm thấy được thuộc về.',
  },

  7: {
    number: 7,
    name: 'Người Tìm Kiếm Chân Lý',
    keyword: 'Trí tuệ · Nội tâm · Huyền bí · Hoàn hảo',
    essence: 'Số 7 là nhà thám hiểm của thế giới nội tâm và bí ẩn vũ trụ. Đây là con số của trí tuệ sâu sắc, sự hoài nghi lành mạnh và hành trình tìm kiếm chân lý không ngừng. Người mang số 7 không bao giờ hài lòng với câu trả lời bề mặt – họ cần hiểu tại sao ở cấp độ sâu nhất có thể. Họ là những người độc lập về tư tưởng, thường đi ngược dòng chủ lưu và không hài lòng với sự thỏa hiệp về chân lý.',
    lightSide: 'Trí tuệ phân tích xuất sắc và khả năng nghiên cứu sâu. Trực giác nhạy bén kết hợp với tư duy logic. Khả năng nhìn xuyên qua lừa dối và bề ngoài giả tạo. Tinh thần độc lập và không bị ảnh hưởng bởi áp lực xã hội. Sự kiên nhẫn và tập trung cao độ trong công việc tri thức.',
    darkSide: 'Cô đơn tự nguyện đến mức trở thành cô lập cô độc. Hoài nghi quá mức – không tin ai, không tin gì. Cầu toàn làm tê liệt hành động. Xu hướng sống trong đầu nhiều hơn thực tế. Lạnh lùng và khó tiếp cận về mặt cảm xúc.',
    deepAnalysis: [
      'Số 7 vận hành theo "nguyên lý chiều sâu không đáy" – họ không quan tâm đến bề rộng mà chỉ muốn đào sâu đến tận cùng của một chủ đề. Một chủ đề thực sự cuốn hút họ có thể chiếm trọn cuộc đời.',
      'Bộ não của số 7 có cấu trúc đặc biệt – nó liên tục phân tích, nghi ngờ và đặt câu hỏi ngay cả khi họ không cố ý. Điều này tạo ra những nhà khoa học, triết học và nhà thần học xuất sắc.',
      'Số 7 có mối quan hệ phức tạp với niềm tin. Họ muốn tin nhưng không thể tin mà không có bằng chứng. Hành trình tâm linh của họ thường là hành trình từ hoài nghi đến niềm tin có cơ sở.',
      'Không gian cá nhân không chỉ là sở thích của số 7 – đó là nhu cầu sinh lý. Họ nạp lại năng lượng khi ở một mình và cạn kiệt năng lượng khi ở đám đông quá lâu.',
      'Số 7 thường trải qua những giai đoạn "sa mạc tâm linh" – những khoảng thời gian dài khi tất cả mọi thứ dường như vô nghĩa. Đây thực ra là những giai đoạn quan trọng của quá trình biến đổi sâu sắc.',
      'Điểm mạnh ẩn của số 7 là khả năng nhận ra pattern (mô hình) trong dữ liệu hỗn độn. Họ nhìn thấy cấu trúc ở những nơi người khác chỉ thấy hỗn loạn.',
      'Khi số 7 tìm được sự cân bằng giữa trí tuệ và trái tim, giữa phân tích và trực giác – họ trở thành những người hướng dẫn tâm linh và tri thức đặc biệt, có khả năng chiếu sáng con đường cho những người đang lạc lối.',
    ],
    strengths: [
      'Trí tuệ phân tích sắc bén và khả năng nghiên cứu chuyên sâu',
      'Trực giác và khả năng cảm nhận những điều người khác bỏ qua',
      'Tính độc lập tư tưởng và không bị áp lực dư luận chi phối',
      'Tập trung cao độ khi làm việc với chủ đề yêu thích',
      'Sự thành thật và không khoan nhượng với sự giả dối',
      'Khả năng phát hiện mâu thuẫn và logic lỗi trong lập luận',
    ],
    weaknesses: [
      'Cô lập xã hội và khó xây dựng mối quan hệ thân thiết',
      'Hoài nghi thái quá dẫn đến không tin vào bất cứ điều gì',
      'Cầu toàn khiến không bao giờ cảm thấy đủ tốt',
      'Sống trong thế giới của suy nghĩ nhiều hơn hành động thực tế',
      'Lạnh lùng và xa cách trong biểu đạt cảm xúc',
    ],
    workEnv: 'Môi trường yên tĩnh, cho phép nghiên cứu sâu và làm việc độc lập. Ghét bị ngắt quãng hay kiểm soát. Phát triển tốt trong học thuật, nghiên cứu, công nghệ và các lĩnh vực đòi hỏi tư duy sâu.',
    careers: ['Nhà khoa học / Nhà nghiên cứu', 'Triết học gia / Nhà thần học', 'Lập trình viên / Nhà phân tích dữ liệu', 'Nhà văn / Nhà thơ', 'Nhà tâm lý học / Tâm thần học', 'Kiến trúc sư hệ thống', 'Chuyên gia mật mã / An ninh mạng'],
    majors: ['Khoa học / Nghiên cứu', 'Triết học / Tôn giáo học', 'Công nghệ thông tin', 'Tâm lý học', 'Toán học / Vật lý lý thuyết'],
    moneyStyle: 'Không coi trọng tiền bạc nhưng lại giỏi phân tích đầu tư khi quan tâm. Có thể sống giản dị với thu nhập thấp miễn là có không gian và thời gian cho trí tuệ.',
    loveStyle: 'Yêu sâu sắc và trung thành nhưng khó biểu đạt. Cần người bạn đời kiên nhẫn, tôn trọng không gian cá nhân và kích thích trí tuệ. Mối quan hệ tốt nhất là kết nối tâm hồn trước, thể xác sau.',
    healthFocus: 'Dễ bị các vấn đề tâm lý như lo âu, trầm cảm do sống quá nhiều trong đầu. Cần thực hành kết nối với cơ thể qua thiền định, yoga hoặc vận động ngoài trời.',
    spiritualPath: 'Con đường tâm linh của số 7 là hành trình từ kiến thức đến trí tuệ, từ thông tin đến sự giác ngộ. Học cách rằng không phải mọi bí ẩn đều cần được giải mã – một số cần được trải nghiệm.',
    karmicLesson: 'Số 7 thường mang nghiệp từ kiếp trước liên quan đến việc sử dụng kiến thức để kiểm soát hay thao túng. Kiếp này, họ học cách dùng trí tuệ để phục vụ chứ không phải để thống trị.',
    lesson: 'Học cách tin tưởng – vào người khác, vào vũ trụ và vào bản năng của chính mình. Không phải tất cả câu trả lời đều nằm trong sách hay logic.',
    advice: 'Đặt ra ít nhất 30 phút mỗi ngày để kết nối với cơ thể và cảm xúc thực sự. Chia sẻ kiến thức với người khác – đó là cách tốt nhất để củng cố sự hiểu biết và thoát khỏi bong bóng cô lập.',
    planet: 'Sao Hải Vương (Neptune) ♆',
    element: 'Nước 💧',
    compatible: [3, 5, 7],
    challenging: [2, 4, 6],
    famousPeople: ['Stephen Hawking', 'Marilyn Monroe', 'Bruce Lee', 'Katy Perry'],
    color: 'from-violet-500 to-purple-700',
    colorFrom: '#8b5cf6',
    colorTo: '#7e22ce',
    emoji: '🔮',
    childhood: 'Tuổi thơ của số 7 thường bao gồm nhiều thời gian một mình, đọc sách hoặc khám phá thế giới theo cách riêng. Họ thường cảm thấy khác biệt với bạn bè đồng trang lứa và điều này có thể tạo ra cảm giác cô đơn hoặc đặc biệt.',
    communicationStyle: 'Chính xác, súc tích và dựa trên dữ liệu. Không thích nói chuyện phiếm. Khi thực sự quan tâm đến chủ đề, họ có thể nói hàng giờ với độ sâu đáng kinh ngạc.',
    relationshipDynamics: 'Cần thời gian dài để mở lòng. Khi đã tin tưởng ai đó, họ cực kỳ trung thành và sâu sắc. Mối quan hệ tốt nhất là dựa trên sự tôn trọng trí tuệ lẫn nhau.',
    shadowWork: 'Bóng tối của số 7 là sự kiêu ngạo trí tuệ. Cảm giác mình hiểu nhiều hơn người khác có thể tạo ra sự xa cách và phán xét ngầm. Công việc shadow là học cách trân trọng các loại trí tuệ khác nhau.',
    lifeThemes: ['Tìm kiếm chân lý và ý nghĩa', 'Cô đơn và kết nối', 'Niềm tin và hoài nghi', 'Trí tuệ và trực giác', 'Từ kiến thức đến sự giác ngộ'],
    affirmations: ['Tôi tin tưởng trực giác của mình', 'Tôi không cần phải hiểu hết mọi thứ để tìm thấy bình yên', 'Tôi chia sẻ trí tuệ của mình với lòng khiêm tốn', 'Sự kết nối với người khác làm phong phú thêm trí tuệ của tôi'],
    mindset: 'Tư duy phân tích và hoài nghi lành mạnh. Không chấp nhận câu trả lời đơn giản cho câu hỏi phức tạp. Luôn tìm kiếm lớp ý nghĩa sâu hơn.',
    stressResponse: 'Khi căng thẳng, số 7 rút lui hoàn toàn – cả về thể xác lẫn cảm xúc. Có thể đột nhiên biến mất khỏi các mối quan hệ mà không giải thích. Cần không gian và thời gian để xử lý nội tâm.',
    giftToWorld: 'Số 7 mang đến sự hiểu biết sâu sắc và trí tuệ phân tích cho thế giới. Họ là những người hỏi những câu hỏi mà người khác sợ hỏi, và tìm kiếm sự thật khi người khác đã hài lòng với câu trả lời bề mặt.',
  },

  8: {
    number: 8,
    name: 'Người Quyền Lực & Vật Chất',
    keyword: 'Quyền lực · Thịnh vượng · Kỷ luật · Biểu hiện',
    essence: 'Số 8 là biểu tượng của quyền lực và sự thịnh vượng vật chất trong Thần số học. Nhưng đây không phải là quyền lực ép buộc – đó là quyền lực thực sự được xây dựng từ năng lực, kỷ luật và sự hiểu biết về luật nhân quả. Người mang số 8 đến để biểu hiện sức mạnh tâm linh thành hiện thực vật chất, để chứng minh rằng tinh thần và vật chất không đối lập nhau mà bổ sung cho nhau.',
    lightSide: 'Khả năng lãnh đạo mạnh mẽ dựa trên năng lực thực sự. Tầm nhìn chiến lược dài hạn và khả năng thực thi. Quyết đoán và không ngại đưa ra quyết định khó. Khả năng biến tư tưởng thành thực tế vật chất. Hiểu biết sâu sắc về chu kỳ âm-dương của thành công và thất bại.',
    darkSide: 'Bị quyền lực và tiền bạc chi phối đến mức đánh mất giá trị cốt lõi. Ích kỷ và bất chấp đạo đức để đạt mục tiêu. Không thể chấp nhận thất bại và suy sụp khi gặp nghịch cảnh lớn. Kiểm soát và thao túng người khác để đạt mục đích.',
    deepAnalysis: [
      'Số 8 vận hành theo "nguyên lý luật hấp dẫn vật chất" – họ biết cách thu hút tài nguyên, cơ hội và con người cần thiết để hiện thực hóa tầm nhìn.',
      'Con số 8 khi nằm ngang trở thành biểu tượng vô cực (∞). Đây không phải ngẫu nhiên – số 8 hiểu rằng mọi thứ đều là chu kỳ. Thành công rồi thất bại, thất bại rồi thành công. Họ không sợ mất vì biết rằng mất là tiền đề của được.',
      'Số 8 có khả năng đặc biệt trong việc nhìn nhận giá trị thực của con người và tài sản. Họ biết đặt đúng người vào đúng vị trí, biết khi nào mua vào và khi nào bán ra.',
      'Thách thức karma lớn nhất của số 8 là học cách sử dụng quyền lực có đạo đức. Lịch sử cho thấy những số 8 vĩ đại nhất là những người dùng ảnh hưởng để phục vụ cộng đồng.',
      'Số 8 có mối quan hệ đặc biệt với chu kỳ 8 năm. Mỗi 8 năm, cuộc đời họ thường có một bước ngoặt lớn – một sự mất mát hoặc một đột phá.',
      'Bên dưới vỏ bọc mạnh mẽ của số 8 là nỗi sợ hãi sâu sắc về sự nghèo đói hoặc vô nghĩa. Động lực tích lũy quyền lực và tài sản thường bắt nguồn từ trải nghiệm thiếu thốn trong quá khứ.',
      'Khi số 8 kết hợp được sức mạnh vật chất với trí tuệ tâm linh, họ trở thành những nhà lãnh đạo và nhà từ thiện phi thường – có khả năng thay đổi thế giới theo nghĩa đen.',
    ],
    strengths: [
      'Khả năng lãnh đạo và quản lý tài nguyên xuất sắc',
      'Tầm nhìn chiến lược dài hạn và thực thi hiệu quả',
      'Quyết đoán và không ngại trách nhiệm trong quyết định lớn',
      'Khả năng phục hồi mạnh mẽ sau thất bại',
      'Hiểu biết về kinh doanh và tạo ra giá trị vật chất',
      'Sức chịu đựng và bền bỉ trước nghịch cảnh',
    ],
    weaknesses: [
      'Bị ám ảnh bởi quyền lực và tài sản đến mức đánh mất bản thân',
      'Thiếu kiên nhẫn với người làm việc kém hiệu quả',
      'Khó cân bằng công việc và cuộc sống cá nhân',
      'Có xu hướng kiểm soát và áp đặt ý chí lên người khác',
      'Khó biểu đạt cảm xúc yếu đuối và dễ bị tổn thương',
    ],
    workEnv: 'Môi trường có mục tiêu rõ ràng, hiệu suất cao và thưởng phạt minh bạch. Cần quyền tự chủ và cơ hội thăng tiến. Phát triển tốt trong kinh doanh, tài chính, chính trị và bất cứ lĩnh vực nào đo lường được kết quả.',
    careers: ['CEO / Giám đốc điều hành', 'Doanh nhân / Nhà đầu tư', 'Luật sư / Chính khách', 'Nhà tài chính / Banker', 'Bất động sản', 'Giám đốc sản xuất phim', 'Quân đội / Cảnh sát cấp cao'],
    majors: ['Quản trị kinh doanh / MBA', 'Luật', 'Tài chính / Ngân hàng', 'Khoa học chính trị', 'Kinh tế học'],
    moneyStyle: 'Sinh ra để kiếm và quản lý tiền lớn. Có bản năng kinh doanh tự nhiên. Cần cẩn thận với xu hướng đặt cược quá lớn. Khi mất tiền, họ có khả năng xây dựng lại nhanh hơn bất kỳ con số nào khác.',
    loveStyle: 'Đối tác mạnh mẽ và bảo vệ nhưng đôi khi kiểm soát quá mức. Cần người bạn đời có sức mạnh riêng để không bị "nuốt chửng". Học cách chia sẻ quyền lực trong mối quan hệ.',
    healthFocus: 'Cần chú ý đến tim mạch và huyết áp cao do căng thẳng và làm việc quá sức. Có xu hướng bỏ qua sức khỏe vì ưu tiên công việc. Cần lịch tập thể dục nghiêm túc.',
    spiritualPath: 'Con đường tâm linh của số 8 là học cách phân biệt giữa quyền lực thực sự (nội tâm) và quyền lực giả tạo (vật chất bên ngoài). Từ "tôi có quyền lực vì tôi có tiền" tiến đến "tôi có quyền lực vì tôi hiểu chính mình".',
    karmicLesson: 'Số 8 thường mang nghiệp từ kiếp trước liên quan đến việc lạm dụng quyền lực. Kiếp này, họ được trao lại sức mạnh để học cách sử dụng nó một cách công bằng và vị tha.',
    lesson: 'Học cách dùng quyền lực và của cải để nâng đỡ người khác thay vì chỉ để khẳng định bản thân. Thịnh vượng thực sự bao gồm cả tâm linh, cảm xúc và vật chất.',
    advice: 'Một lần mỗi tháng, làm điều gì đó cho người khác mà không ai biết và không có lợi ích trực tiếp. Thực hành sự rộng lượng vô danh để giữ quyền lực của bạn trong sạch.',
    planet: 'Sao Thổ (Saturn) ♄',
    element: 'Đất 🌍',
    compatible: [2, 4, 6, 8],
    challenging: [3, 5, 7],
    famousPeople: ['Nelson Mandela', 'Pablo Picasso', 'Amitabh Bachchan', 'Sebastian Kurz'],
    color: 'from-gray-700 to-slate-900',
    colorFrom: '#374151',
    colorTo: '#0f172a',
    emoji: '♾️',
    childhood: 'Tuổi thơ của số 8 thường đánh dấu bởi những trải nghiệm về thiếu thốn hoặc chứng kiến sự bất công. Điều này tạo ra động lực mạnh mẽ để xây dựng sự ổn định và quyền lực, nhưng cũng có thể tạo ra nỗi sợ sâu sắc về việc mất kiểm soát.',
    communicationStyle: 'Quyết đoán, trực tiếp và hướng kết quả. Không thích vòng vo hay cảm tính trong công việc. Giọng điệu tự nhiên mang tính thẩm quyền.',
    relationshipDynamics: 'Bảo vệ và trung thành với những người họ yêu. Nhưng đôi khi coi mối quan hệ như một dự án cần quản lý. Cần học cách để đối tác dẫn đầu đôi khi.',
    shadowWork: 'Bóng tối của số 8 là sự tham lam và nỗi sợ mất kiểm soát. Đằng sau mọi nỗ lực tích lũy quyền lực thường là nỗi sợ bị tổn thương và không an toàn. Công việc shadow là nhận ra rằng an toàn thực sự đến từ bên trong.',
    lifeThemes: ['Quyền lực và trách nhiệm', 'Thịnh vượng và đạo đức', 'Thắng và thua là hai mặt của một chu kỳ', 'Từ sức mạnh cá nhân đến phục vụ cộng đồng', 'Cân bằng vật chất và tâm linh'],
    affirmations: ['Tôi sử dụng quyền lực của mình để phục vụ điều tốt đẹp', 'An toàn thực sự đến từ bên trong tôi, không phải từ tài sản bên ngoài', 'Tôi chia sẻ sự thịnh vượng của mình một cách rộng lượng', 'Tôi đủ mạnh để dễ bị tổn thương với những người tôi tin tưởng'],
    mindset: 'Tư duy chiến lược và kết quả. Luôn hỏi "cái này tạo ra giá trị gì?". Nhìn thế giới như một hệ thống có thể được tối ưu hóa.',
    stressResponse: 'Khi căng thẳng, số 8 làm việc nhiều hơn và cứng nhắc hơn – đây là cơ chế bảo vệ bằng cách kiểm soát. Cần học cách buông tay và tin tưởng vào người khác.',
    giftToWorld: 'Số 8 mang đến sức mạnh, nguồn lực và khả năng biểu hiện tầm nhìn thành thực tế. Họ là những người xây dựng đế chế – nhưng khi ở mức cao nhất, họ xây dựng đế chế để phục vụ nhân loại.',
  },

  9: {
    number: 9,
    name: 'Nhà Nhân Đạo & Triết Gia',
    keyword: 'Nhân đạo · Lý tưởng · Hoàn thành · Buông bỏ',
    essence: 'Số 9 là con số của sự hoàn thành và trí tuệ vũ trụ. Đây là con số cuối cùng trong dãy cơ bản, chứa đựng sự khôn ngoan của tất cả các con số trước. Người mang số 9 đến thế giới này với sứ mệnh phục vụ nhân loại, buông bỏ cái tôi cá nhân và kết nối với điều gì đó lớn lao hơn bản thân. Họ là những linh hồn già dặn nhất trong hệ thống Thần số học.',
    lightSide: 'Lòng nhân ái và thấu hiểu sâu sắc về bản chất con người. Khả năng tha thứ và buông bỏ phi thường. Tầm nhìn toàn cục và quan điểm nhân loại vượt qua ranh giới quốc gia, chủng tộc. Trí tuệ cảm xúc cao và khả năng đồng cảm sâu sắc. Sức mạnh truyền cảm hứng và chữa lành thông qua nghệ thuật hay lời nói.',
    darkSide: 'Hay rơi vào vai nạn nhân khi không ai trân trọng sự hi sinh. Lý tưởng hóa thế giới đến mức thất vọng liên miên. Khó để nhận – luôn cho đi mà không biết cách tiếp nhận. Tự ti và không nhận ra giá trị của bản thân. Xu hướng hy sinh không lành mạnh và ở lại trong các mối quan hệ độc hại.',
    deepAnalysis: [
      'Số 9 vận hành theo "nguyên lý bồ đề tát đa" – họ trở lại thế giới vật chất không phải vì nghiệp chưa giải, mà vì họ chọn ở lại để giúp đỡ người khác. Đây là sự khôn ngoan và lòng trắc ẩn ở mức cao nhất.',
      'Con số 9 có thuộc tính toán học đặc biệt: 9 × bất kỳ số nào cũng tổng các chữ số về 9. Điều này phản ánh bản chất của số 9 – dù đi đâu, họ luôn quay về với bản chất nhân ái cốt lõi.',
      'Số 9 cảm nhận đau khổ của thế giới một cách vật lý. Khi đọc tin tức về thiên tai hay bất công xã hội, họ không chỉ cảm thấy buồn – họ cảm thấy đau trong người.',
      'Số 9 thường trải qua những mất mát lớn trong cuộc đời. Những mất mát này không phải ngẫu nhiên – chúng là bài học về sự buông bỏ và nhận ra rằng không có gì thực sự thuộc về ai.',
      'Nghệ thuật là ngôn ngữ tự nhiên của số 9. Khi không thể diễn đạt bằng lời, họ chuyển nỗi đau và niềm vui thành âm nhạc, thơ, tranh hay bất kỳ hình thức nghệ thuật nào.',
      'Thách thức lớn nhất của số 9 là học cách nhận. Họ giỏi cho nhưng khó nhận lại. Điều này tạo ra sự mất cân bằng trong năng lượng – khi không học cách nhận, họ dần cạn kiệt.',
      'Khi số 9 hoàn thành hành trình học hỏi của mình – khi họ cho đi không phải từ nỗi sợ hay tội lỗi mà từ niềm vui và sự sung mãn – họ trở thành ánh sáng thuần khiết nhất.',
    ],
    strengths: [
      'Lòng nhân ái và khả năng yêu thương vô điều kiện ở mức rộng lớn',
      'Trí tuệ cảm xúc cao và khả năng đồng cảm sâu sắc',
      'Tầm nhìn toàn cục và quan điểm vượt cái tôi cá nhân',
      'Khả năng tha thứ và buông bỏ phi thường',
      'Sức mạnh nghệ thuật và truyền cảm hứng qua sáng tạo',
      'Hiểu biết sâu sắc về chu kỳ nhân quả và ý nghĩa cuộc sống',
    ],
    weaknesses: [
      'Dễ rơi vào tâm lý nạn nhân khi không được trân trọng',
      'Khó nhận sự giúp đỡ và tình yêu thương từ người khác',
      'Lý tưởng hóa quá mức dẫn đến thất vọng liên tục',
      'Tự ti và không nhận ra giá trị thực sự của bản thân',
      'Ở lại các mối quan hệ hay hoàn cảnh độc hại quá lâu',
    ],
    workEnv: 'Môi trường có ý nghĩa lớn lao, hướng đến phục vụ cộng đồng hay nhân loại. Không thể làm việc trong môi trường vô nghĩa hay phi đạo đức lâu dài. Phát triển tốt trong nghệ thuật, từ thiện, giáo dục và công tác xã hội.',
    careers: ['Nghệ sĩ / Nhạc sĩ / Nhà thơ', 'Bác sĩ / Chuyên gia y tế quốc tế', 'Nhà hoạt động xã hội / Nhà nhân đạo', 'Giáo viên / Giáo sư triết học', 'Nhà tâm lý học / Nhà trị liệu', 'Nhà văn / Nhà báo điều tra', 'Đại diện các tổ chức nhân đạo quốc tế'],
    majors: ['Mỹ thuật / Âm nhạc', 'Y khoa / Y tế công cộng', 'Triết học / Nhân văn', 'Tâm lý học', 'Công tác xã hội / Nhân đạo quốc tế'],
    moneyStyle: 'Không coi trọng tiền bạc nhiều như các con số khác. Có xu hướng cho đi nhiều hơn giữ lại. Cần học cách xây dựng nền tảng tài chính vững chắc để có thể tiếp tục phục vụ lâu dài.',
    loveStyle: 'Yêu sâu sắc và có khả năng tha thứ phi thường. Nhưng có xu hướng yêu những người cần được "cứu". Cần học cách chọn người bạn đời từ sức mạnh, không phải từ lòng thương hại.',
    healthFocus: 'Dễ bị kiệt sức do cho quá nhiều mà không nạp lại. Cần thực hành tự chăm sóc nghiêm túc. Dễ bị các vấn đề miễn dịch và kiệt sức mãn tính.',
    spiritualPath: 'Con đường tâm linh của số 9 là hành trình từ hy sinh đến phục vụ từ sức mạnh. Từ "tôi cho vì tôi phải cho" tiến đến "tôi cho vì đó là niềm vui thuần khiết của tôi".',
    karmicLesson: 'Số 9 thường mang ký ức từ nhiều kiếp trước và học bài học tổng hợp của tất cả. Nhiệm vụ kiếp này là hoàn thành chu kỳ học hỏi và chuẩn bị cho sự chuyển hóa lớn tiếp theo.',
    lesson: 'Học cách nhận với lòng biết ơn như khi cho đi. Sự cho nhận cân bằng là nền tảng của tình yêu thương lành mạnh.',
    advice: 'Mỗi ngày hỏi bản thân: "Hôm nay tôi đã cho bản thân điều gì?". Thực hành nhận sự giúp đỡ từ người khác mà không cảm thấy mắc nợ hay có tội.',
    planet: 'Sao Hỏa (Mars) ♂',
    element: 'Lửa 🔥',
    compatible: [3, 6, 9],
    challenging: [1, 4, 8],
    famousPeople: ['Mahatma Gandhi', 'Mother Teresa', 'Jimi Hendrix', 'Elvis Presley'],
    color: 'from-red-400 to-rose-600',
    colorFrom: '#f87171',
    colorTo: '#e11d48',
    emoji: '🌏',
    childhood: 'Tuổi thơ của số 9 thường gắn liền với những trải nghiệm buồn hay mất mát sớm. Họ học rất nhanh về đau khổ của cuộc đời, điều này vừa tạo ra sự chín chắn sớm vừa có thể để lại vết thương sâu cần được chữa lành.',
    communicationStyle: 'Sâu sắc, đầy cảm xúc và thường mang tính triết học. Có khả năng chạm đến trái tim người nghe bằng những câu chuyện và ví dụ từ cuộc sống thực. Đôi khi quá lý tưởng trong cách truyền đạt.',
    relationshipDynamics: 'Yêu sâu sắc nhưng có xu hướng hy sinh bản thân quá mức. Cần học cách đặt ranh giới lành mạnh. Mối quan hệ tốt nhất là với người cũng có lý tưởng và giá trị sống tương tự.',
    shadowWork: 'Bóng tối của số 9 là sự tự ti ẩn sâu. Bên dưới lòng nhân ái là nỗi sợ rằng mình không đủ tốt trừ khi cho đi. Công việc shadow là học cách yêu thương bản thân mà không cần điều kiện.',
    lifeThemes: ['Phục vụ nhân loại từ tình yêu', 'Buông bỏ và chấp nhận mất mát', 'Hoàn thành chu kỳ nghiệp', 'Từ hy sinh đến hiến dâng tự nguyện', 'Trí tuệ vũ trụ và sự đồng cảm'],
    affirmations: ['Tôi xứng đáng nhận tình yêu và sự chăm sóc', 'Tôi cho đi từ niềm vui, không phải từ nỗi sợ', 'Tôi hoàn thành chu kỳ này với ân sủng và lòng biết ơn', 'Mỗi mất mát mở ra một không gian cho điều mới mẻ hơn'],
    mindset: 'Tư duy toàn cục và nhân văn. Luôn hỏi "điều này có ý nghĩa gì với nhân loại?". Nhìn thế giới như một tổng thể liên kết mà mỗi hành động đều có tác động rộng lớn.',
    stressResponse: 'Khi căng thẳng, số 9 có thể rút lui vào thế giới nội tâm hoặc trở nên quá nhạy cảm và xúc động. Cần thời gian trong thiên nhiên và không gian để xử lý cảm xúc sâu sắc.',
    giftToWorld: 'Số 9 mang đến lòng trắc ẩn và trí tuệ vũ trụ cho thế giới. Họ là những người nhắc nhở chúng ta rằng chúng ta là một – rằng đau khổ của người khác là đau khổ của mình và niềm vui của người khác làm phong phú cuộc sống của mình.',
  },

  11: {
    number: 11,
    name: 'Số Chủ Đạo: Nhà Trực Giác & Tiên Tri',
    keyword: 'Trực giác · Truyền cảm hứng · Nhạy cảm · Tiên tri',
    essence: 'Số 11 là con số chủ đạo đầu tiên và được mệnh danh là "Cầu Ánh Sáng" trong Thần số học. Đây không chỉ là 1+1=2 mà là con số mang tần số rung động cao nhất trong số các con số cơ bản. Người mang số 11 là kênh truyền tải từ thế giới tâm linh đến thực tại, có khả năng cảm nhận những điều người khác không thể thấy và truyền đạt những chân lý cao hơn.',
    lightSide: 'Trực giác và khả năng cảm nhận tâm linh phi thường. Tài năng truyền cảm hứng và đánh thức người khác. Khả năng nhìn thấy tiềm năng trong mọi người và hoàn cảnh. Sáng tạo ở mức độ nghệ thuật thuần khiết. Sức hút huyền bí và khả năng kết nối với ý thức tập thể.',
    darkSide: 'Quá nhạy cảm đến mức không thể chức năng trong thực tế. Lo âu mãn tính do cảm nhận quá nhiều. Hoặc sử dụng năng lực ở mức thấp hơn (như số 2) và không bao giờ thực hiện được tiềm năng. Dễ bị năng lượng tiêu cực của môi trường và người khác ảnh hưởng.',
    deepAnalysis: [
      'Số 11 vận hành theo "nguyên lý ăng-ten tâm linh" – họ thu nhận tín hiệu từ những tầng thực tại mà hầu hết mọi người không có quyền truy cập. Đây vừa là quà tặng phi thường vừa là gánh nặng đôi khi không thể chịu đựng.',
      'Số 11 thường trải qua cuộc sống như đang sống ở hai tần số cùng lúc – thực tế hàng ngày và một thực tại cao hơn. Điều này tạo ra cảm giác không bao giờ hoàn toàn thuộc về nơi này hay nơi kia.',
      'Thách thức của số 11 không phải là thiếu tài năng – mà là học cách hiện thực hóa tài năng đó vào thực tế cụ thể. Nhiều số 11 có tầm nhìn vĩ đại nhưng không biết cách bắt đầu từ đâu.',
      'Số 11 có thiên tài đặc biệt trong việc "đọc năng lượng" con người. Họ biết ngay từ giây đầu gặp ai đó người đó có ý định gì, cảm xúc thực sự là gì, ngay cả khi người kia che giấu hoàn toàn.',
      'Con đường của số 11 thường trải qua những giai đoạn "đêm tối tâm hồn" sâu sắc. Đây là những khoảng thời gian khủng hoảng bản sắc khi tất cả những gì họ tin tưởng dường như sụp đổ. Nhưng sau mỗi đêm tối là một sự thức tỉnh lớn hơn.',
      'Số 11 không thể "tắt" khả năng cảm nhận của mình như người ta tắt đèn. Điều này có nghĩa là họ cần học cách quản lý năng lượng nghiêm túc – bảo vệ không gian, thời gian một mình và kỹ thuật grounding.',
      'Khi số 11 hoàn toàn sống trong sứ mệnh của mình, họ trở thành những người thay đổi thế giới theo nghĩa sâu sắc nhất – không phải qua quyền lực chính trị hay kinh tế, mà qua sự thức tỉnh ý thức.',
    ],
    strengths: [
      'Trực giác và khả năng cảm nhận tâm linh vượt trội',
      'Tài năng truyền cảm hứng và đánh thức tiềm năng trong người khác',
      'Sáng tạo nghệ thuật ở mức thuần khiết và độc đáo',
      'Sức hút huyền bí tự nhiên và khả năng kết nối sâu',
      'Khả năng nhìn thấy tiềm năng và khả năng ẩn giấu',
      'Thấu hiểu bản chất con người ở mức độ phi ngôn ngữ',
    ],
    weaknesses: [
      'Quá nhạy cảm dẫn đến lo âu và kiệt sức năng lượng',
      'Khó hiện thực hóa tầm nhìn thành hành động cụ thể',
      'Dễ bị ảnh hưởng bởi năng lượng tiêu cực xung quanh',
      'Mâu thuẫn nội tâm liên tục giữa hai luồng sống',
      'Đôi khi tê liệt vì cảm nhận quá nhiều điều cùng lúc',
    ],
    workEnv: 'Môi trường sáng tạo, có ý nghĩa tinh thần và tôn trọng sự nhạy cảm. Cần không gian để kết nối với trực giác. Ghét môi trường ồn ào, mâu thuẫn và đòi hỏi chỉ kết quả thực tế.',
    careers: ['Nghệ sĩ / Nhạc sĩ / Diễn viên', 'Nhà giáo tinh thần / Life coach', 'Nhà tâm lý học / Nhà trị liệu', 'Nhà văn truyền cảm hứng', 'Nhà nghiên cứu tâm linh', 'Chuyên gia trực giác / Tư vấn tâm linh', 'Người dẫn đường và giáo viên thiền định'],
    majors: ['Nghệ thuật / Âm nhạc', 'Tâm lý học', 'Triết học / Tâm linh học', 'Văn học / Sáng tác', 'Giáo dục học'],
    moneyStyle: 'Có mối quan hệ phức tạp với tiền bạc. Có thể thu hút tài chính lớn khi sống trong sứ mệnh, nhưng cũng có thể bỏ qua hoàn toàn thực tế vật chất. Cần cân bằng lý tưởng tâm linh với thực tế tài chính.',
    loveStyle: 'Yêu ở mức độ sâu sắc và tâm linh. Tìm kiếm kết nối linh hồn không chỉ là kết nối thể xác. Dễ bị tổn thương và cần người bạn đời hiểu và trân trọng sự nhạy cảm của mình.',
    healthFocus: 'Hệ thần kinh dễ bị quá tải và kiệt sức. Cần thực hành grounding thường xuyên. Thiền định và thời gian trong thiên nhiên là thiết yếu, không phải tùy chọn.',
    spiritualPath: 'Con đường tâm linh của số 11 là học cách làm kênh dẫn thuần khiết – để ánh sáng đi qua mà không bị bẻ cong bởi cái tôi cá nhân. Từ "tôi có khả năng đặc biệt" tiến đến "tôi là phương tiện cho điều gì đó lớn hơn tôi".',
    karmicLesson: 'Số 11 mang sứ mệnh khai mở ý thức. Đây không phải nghiệp báo thông thường mà là lựa chọn linh hồn – họ chọn đến để thức tỉnh và giúp người khác thức tỉnh.',
    lesson: 'Học cách cân bằng giữa thế giới tâm linh và thực tế vật chất. Tầm nhìn cao đẹp cần được hiện thực hóa thành hành động cụ thể mới tạo ra sự thay đổi thực sự.',
    advice: 'Đặt ra thời gian "grounding" hàng ngày: chân trần trên cỏ, nấu ăn, làm vườn hay bất cứ hoạt động thực tế nào. Kết nối với đất là cách số 11 nạp lại năng lượng an toàn nhất.',
    planet: 'Sao Hải Vương (Neptune) ♆ + Sao Mặt Trời ☀',
    element: 'Ánh Sáng ✨',
    compatible: [2, 11, 22],
    challenging: [4, 8],
    famousPeople: ['Barack Obama', 'Prince William', 'Edgar Allan Poe', 'Orlando Bloom'],
    color: 'from-sky-400 to-indigo-600',
    colorFrom: '#38bdf8',
    colorTo: '#4338ca',
    emoji: '✨',
    childhood: 'Tuổi thơ của số 11 thường đánh dấu bởi sự nhạy cảm khác thường – họ cảm nhận được những điều người khác không nhận ra, thấy những điều không ai thấy, biết những điều chưa ai nói. Điều này đôi khi khiến họ bị coi là "kỳ lạ" nhưng thực ra là dấu hiệu của món quà đặc biệt.',
    communicationStyle: 'Truyền cảm hứng và sâu sắc. Khi nói, người ta cảm thấy được đánh thức. Đôi khi khó diễn đạt những gì họ "biết" vì nó đến từ trực giác, không phải từ logic.',
    relationshipDynamics: 'Cần kết nối sâu và có ý nghĩa. Không thể ở trong mối quan hệ hời hợt lâu dài. Cần người bạn đời có chiều sâu tâm linh và tôn trọng sự nhạy cảm của họ.',
    shadowWork: 'Bóng tối của số 11 là việc sử dụng sự nhạy cảm như công cụ thao túng hoặc rút lui khỏi thực tế hoàn toàn. Công việc shadow là học cách hiện diện đầy đủ trong thực tế vật chất trong khi vẫn duy trì kết nối tâm linh.',
    lifeThemes: ['Cầu nối giữa hai thế giới', 'Thức tỉnh bản thân và người khác', 'Quản lý sự nhạy cảm', 'Từ tầm nhìn đến hiện thực', 'Sứ mệnh linh hồn trong thân xác vật chất'],
    affirmations: ['Sự nhạy cảm của tôi là món quà, không phải điểm yếu', 'Tôi là kênh dẫn ánh sáng thuần khiết và an toàn', 'Tôi cân bằng trực giác với hành động thực tế', 'Tôi bảo vệ năng lượng của mình với tình yêu và sự kiên quyết'],
    mindset: 'Tư duy đa tầng và huyền bí. Nhìn thấy ý nghĩa và kết nối trong mọi thứ. Đôi khi quá chú trọng tầng ý nghĩa cao mà bỏ qua thực tế cụ thể.',
    stressResponse: 'Khi căng thẳng, số 11 có thể bị áp đảo bởi cảm xúc và cảm giác – cả của mình lẫn của người xung quanh. Cần những kỹ thuật bảo vệ năng lượng và grounding cụ thể.',
    giftToWorld: 'Số 11 mang đến ánh sáng của sự thức tỉnh cho thế giới. Họ là những ngọn nến thắp sáng trong bóng tối – không phải bằng quyền lực hay trí tuệ, mà bằng sự hiện diện thuần khiết và khả năng nhìn thấy ánh sáng trong mọi người.',
  },

  22: {
    number: 22,
    name: 'Số Chủ Đạo: Nhà Xây Dựng Vĩ Đại',
    keyword: 'Biểu hiện vĩ đại · Xây dựng · Thực tế tâm linh · Di sản',
    essence: 'Số 22 được mệnh danh là "Nhà Xây Dựng Vĩ Đại" – con số chủ đạo mạnh nhất trong Thần số học. Đây là con số có khả năng kết hợp tầm nhìn tâm linh phi thường của số 11 với năng lực thực thi vật chất của số 4. Người mang số 22 đến thế giới này với sứ mệnh xây dựng những điều vĩ đại, bền vững và có ảnh hưởng đến hàng triệu người.',
    lightSide: 'Khả năng hiện thực hóa tầm nhìn vĩ đại thành thực tế cụ thể. Kết hợp trực giác tâm linh với năng lực thực thi xuất sắc. Lãnh đạo ở mức độ toàn cầu và để lại di sản lâu dài. Khả năng xây dựng hệ thống và cơ sở hạ tầng cho sự phát triển nhân loại. Sức chịu đựng và bền bỉ phi thường.',
    darkSide: 'Gánh nặng sứ mệnh quá lớn có thể gây ra lo âu và khủng hoảng. Đôi khi vận hành ở tần số số 4 thấp hơn và không dám thực hiện tầm nhìn vĩ đại. Tự ái và độc đoán khi bị thách thức. Khó cân bằng giữa tầm nhìn lớn và chi tiết nhỏ.',
    deepAnalysis: [
      'Số 22 vận hành theo "nguyên lý kiến trúc vũ trụ" – họ không chỉ xây dựng công trình vật lý mà còn xây dựng hệ thống, tổ chức và ý tưởng có khả năng tồn tại hàng trăm năm sau khi họ mất đi.',
      'Mâu thuẫn lớn nhất của số 22 là giữa ước muốn bình thường và sức kéo của sứ mệnh phi thường. Họ muốn có cuộc sống bình dị nhưng không thể làm ngơ khi nhìn thấy khả năng tạo ra điều gì đó vĩ đại.',
      'Số 22 có năng lực biến không thể thành có thể. Những điều họ thực hiện thường được người đương thời coi là điên rồ nhưng sau này được lịch sử chứng minh là thiên tài.',
      'Áp lực karma của số 22 rất cao – bởi vì được trao nhiều, nhiều sẽ được yêu cầu. Khi số 22 không sống theo tiềm năng của mình, họ thường cảm thấy trống rỗng và không thỏa mãn dù thành công về vật chất.',
      'Số 22 cần học cách ủy quyền. Họ có tầm nhìn nhưng không thể làm mọi thứ một mình. Khả năng xây dựng đội ngũ và truyền đạt tầm nhìn cho người khác là kỹ năng thiết yếu.',
      'Chu kỳ 22 năm rất quan trọng với số 22. Những cột mốc lớn nhất trong cuộc đời họ thường xảy ra ở các mốc tuổi liên quan đến số 22.',
      'Khi số 22 hoàn toàn hiện thực hóa tiềm năng của mình, họ trở thành những người xây dựng nền văn minh – không phải theo nghĩa hoa mỹ mà theo nghĩa đen: họ tạo ra những thứ tồn tại và phục vụ nhân loại lâu dài.',
    ],
    strengths: [
      'Kết hợp tầm nhìn tâm linh với năng lực thực thi phi thường',
      'Khả năng xây dựng hệ thống và tổ chức bền vững',
      'Lãnh đạo ở mức độ ảnh hưởng toàn cầu và di sản lâu dài',
      'Sức chịu đựng và kiên nhẫn trong các dự án dài hơi',
      'Khả năng thu hút và truyền cảm hứng cho đội ngũ lớn',
      'Tầm nhìn vĩ đại kết hợp với tư duy thực tế và chi tiết',
    ],
    weaknesses: [
      'Gánh nặng sứ mệnh có thể gây lo âu và cô đơn',
      'Đôi khi không dám bước vào tầm vĩ đại vì trách nhiệm quá lớn',
      'Tự ái và khó tiếp nhận ý kiến trái chiều',
      'Khó ủy quyền và tin tưởng người khác',
      'Cô đơn trong vai trò lãnh đạo và thiếu người hiểu được tầm nhìn',
    ],
    workEnv: 'Môi trường lớn, có tầm ảnh hưởng rộng và cho phép xây dựng điều gì đó bền vững. Không phù hợp với công việc nhỏ lẻ hay thiếu ý nghĩa. Phát triển tốt nhất khi được trao quyền tự chủ tuyệt đối.',
    careers: ['Kiến trúc sư tầm cỡ quốc tế', 'Nhà sáng lập tổ chức lớn', 'Chính trị gia / Nhà lãnh đạo quốc gia', 'Kỹ sư hệ thống lớn', 'Nhà khoa học thay đổi paradigm', 'CEO của tổ chức có ảnh hưởng toàn cầu', 'Người sáng lập phong trào xã hội'],
    majors: ['Kiến trúc / Kỹ thuật xây dựng', 'Quản trị chiến lược', 'Khoa học chính trị', 'Kỹ thuật hệ thống', 'Khoa học quản lý'],
    moneyStyle: 'Có khả năng thu hút và quản lý nguồn lực lớn. Không tích lũy cho bản thân mà đầu tư vào sứ mệnh. Cần học cách cân bằng giữa tầm nhìn lớn và quản lý tài chính thực tế.',
    loveStyle: 'Yêu sâu sắc nhưng sứ mệnh thường chiếm ưu tiên hàng đầu. Cần người bạn đời không chỉ yêu họ mà còn hiểu và ủng hộ sứ mệnh của họ. Dễ bỏ bê mối quan hệ cá nhân vì bận tâm với "bức tranh lớn".',
    healthFocus: 'Cần cẩn thận với xu hướng làm việc quá sức và bỏ qua nhu cầu cơ thể. Hệ thần kinh dễ bị căng thẳng. Thiền định và thực hành thể chất đều đặn là thiết yếu.',
    spiritualPath: 'Con đường tâm linh của số 22 là học cách sống trong ý thức rằng mình là công cụ của điều gì đó lớn hơn bản thân. Từ "tôi xây dựng vĩ đại vì tôi có thể" tiến đến "tôi xây dựng vì tôi được gọi để phục vụ".',
    karmicLesson: 'Số 22 mang sứ mệnh xây dựng thiên đường trên mặt đất – tạo ra xã hội, tổ chức và hệ thống đáp ứng được những nhu cầu cao nhất của nhân loại.',
    lesson: 'Học cách cân bằng giữa tầm nhìn vũ trụ và trách nhiệm hàng ngày. Bước từng bước nhỏ trong sự kiên nhẫn để xây dựng điều vĩ đại.',
    advice: 'Tìm ít nhất một người cố vấn hoặc đồng đội có thể hiểu và thách thức tầm nhìn của bạn. Vĩ đại không bao giờ được xây dựng một mình.',
    planet: 'Sao Thổ (Saturn) ♄ + Sao Thiên Vương (Uranus) ♅',
    element: 'Đất + Ether 🌍✨',
    compatible: [4, 11, 22],
    challenging: [5, 3],
    famousPeople: ['Bill Gates', 'Paul McCartney', 'Oprah Winfrey', 'Leonardo da Vinci'],
    color: 'from-amber-500 to-yellow-700',
    colorFrom: '#f59e0b',
    colorTo: '#a16207',
    emoji: '🏛️',
    childhood: 'Tuổi thơ của số 22 thường đánh dấu bởi cảm giác được kêu gọi cho điều gì đó lớn lao từ rất sớm. Họ thường có những giấc mơ hoặc tầm nhìn mà người khác không hiểu. Môi trường nuôi dưỡng lành mạnh là rất quan trọng để phát triển tiềm năng này.',
    communicationStyle: 'Rõ ràng, có tầm nhìn và truyền cảm hứng. Giỏi truyền đạt những ý tưởng lớn theo cách người khác có thể hiểu và hành động. Đôi khi nói chuyện vượt tầm hiểu biết của người nghe.',
    relationshipDynamics: 'Cần đối tác mạnh mẽ và độc lập, không chỉ là người ủng hộ thụ động. Sứ mệnh lớn đòi hỏi người bạn đời phải có sứ mệnh riêng của mình. Mối quan hệ tốt nhất là đối tác đồng hành.',
    shadowWork: 'Bóng tối của số 22 là sự kiêu ngạo về sứ mệnh – cảm giác mình quan trọng hơn người khác vì được trao nhiều hơn. Công việc shadow là học cách khiêm tốn và phục vụ từ vị trí bình đẳng.',
    lifeThemes: ['Xây dựng di sản lâu dài', 'Trách nhiệm với sứ mệnh', 'Cân bằng tầm nhìn và thực tế', 'Lãnh đạo từ phục vụ', 'Một mình trong đỉnh cao'],
    affirmations: ['Tôi đủ sức để thực hiện sứ mệnh của mình', 'Tôi xây dựng để phục vụ, không phải để nổi tiếng', 'Tôi tin tưởng người khác và chia sẻ tầm nhìn của mình', 'Sự vĩ đại của tôi không làm nhỏ bé bất kỳ ai'],
    mindset: 'Tư duy kiến trúc tổng thể. Luôn hỏi "điều này sẽ ảnh hưởng như thế nào đến 100 năm sau?". Nhìn thế giới như một công trình đang xây dựng.',
    stressResponse: 'Khi căng thẳng, số 22 có thể trở nên kiểm soát hơn hoặc ngược lại – buông xuôi hoàn toàn. Cần các hệ thống hỗ trợ mạnh mẽ và người tin cậy để chia sẻ gánh nặng.',
    giftToWorld: 'Số 22 mang đến khả năng xây dựng những nền móng vĩ đại cho nhân loại. Họ là những người tạo ra cơ sở hạ tầng văn minh – không phải chỉ về vật chất mà còn về xã hội, tư tưởng và tinh thần.',
  },

  33: {
    number: 33,
    name: 'Số Chủ Đạo: Thầy Giáo Vũ Trụ',
    keyword: 'Chữa lành · Dạy dỗ · Tình yêu vũ trụ · Hi sinh thiêng liêng',
    essence: 'Số 33 là con số chủ đạo cao nhất trong Thần số học – "Thầy Giáo Vũ Trụ" hay "Đức Kitô Con Số". Đây không phải là sứ mệnh mà người thường mang – chỉ những linh hồn đã trải qua nhiều chu kỳ học hỏi mới chọn con đường này. Người mang số 33 đến để chữa lành những vết thương sâu nhất của nhân loại qua tình yêu vô điều kiện, sự hi sinh thiêng liêng và sự dạy dỗ từ trái tim thuần khiết nhất.',
    lightSide: 'Tình yêu vũ trụ và khả năng chữa lành sâu sắc nhất. Trí tuệ cảm xúc ở mức độ cao nhất có thể. Khả năng dạy dỗ và truyền đạt những chân lý cao nhất bằng ngôn ngữ đơn giản. Sự hiện diện thuần khiết có tác dụng chữa lành tự nhiên. Khả năng nhìn thấy ánh sáng trong mọi người dù trong hoàn cảnh tăm tối nhất.',
    darkSide: 'Gánh nặng của sứ mệnh có thể nghiền nát nếu không có nền tảng vững chắc. Dễ rơi vào "hội chứng người chữa lành bị thương" – tự hi sinh đến mức tự hủy hoại. Đôi khi vận hành ở tần số số 6 thấp hơn và không bao giờ hiện thực hóa tiềm năng số 33. Cực kỳ nhạy cảm với đau khổ của người khác và thế giới.',
    deepAnalysis: [
      'Số 33 vận hành theo "nguyên lý từ bi vô điều kiện" – đây không phải tình yêu cảm xúc mà là tình yêu vũ trụ bao trùm tất cả, không loại trừ ai. Đây là năng lượng mà các truyền thống tôn giáo gọi là Agape, Karuna hay Metta.',
      'Người mang số 33 thực sự (rất hiếm) không chỉ cảm nhận được đau khổ của người khác – họ có khả năng hấp thụ và chuyển hóa năng lượng tiêu cực, biến nó thành ánh sáng. Đây vừa là thiên năng vừa là gánh nặng cực kỳ nặng.',
      'Số 33 thường trải qua những bài kiểm tra karma cực kỳ khắt khe trong cuộc đời – những mất mát, phản bội hay thử thách tưởng chừng không thể vượt qua. Đây không phải hình phạt mà là quá trình thanh lọc để trở thành công cụ chữa lành thuần khiết.',
      'Sứ mệnh của số 33 không bao giờ chỉ là cá nhân. Mọi trải nghiệm trong cuộc đời họ – kể cả đau khổ và thất bại – đều phục vụ cho sự hiểu biết sâu sắc hơn về bản chất con người và khả năng chữa lành lớn hơn.',
      'Số 33 có thể gặp nhiều "Giuđa" trong cuộc đời – những người phản bội hay lợi dụng họ. Đây là bài học về sự tin tưởng và tha thứ ở mức độ cao nhất. Khả năng tha thứ ngay cả những phản bội sâu sắc nhất là nét đặc trưng của số 33 đã trưởng thành.',
      'Nghệ thuật, âm nhạc và chữ viết của số 33 thường có khả năng chữa lành thực sự. Người nghe hay đọc cảm thấy được chữa lành ở một mức độ họ không giải thích được.',
      'Khi số 33 hoàn toàn sống trong sứ mệnh của mình – khi họ yêu thương từ sức mạnh và toàn vẹn chứ không từ vết thương – họ trở thành ánh sáng thuần khiết nhất mà nhân loại có thể tiếp nhận.',
    ],
    strengths: [
      'Tình yêu vô điều kiện và khả năng chữa lành sâu nhất',
      'Trí tuệ cảm xúc và trí tuệ tâm linh ở mức tối cao',
      'Khả năng dạy dỗ những chân lý phức tạp bằng cách đơn giản nhất',
      'Sự hiện diện chữa lành tự nhiên không cần nỗ lực',
      'Khả năng tha thứ và chuyển hóa năng lượng tối tăm',
      'Sức mạnh tâm linh tích lũy từ nhiều kiếp học hỏi',
    ],
    weaknesses: [
      'Gánh nặng sứ mệnh quá lớn nếu không có nền tảng',
      'Quá nhạy cảm với đau khổ của thế giới dẫn đến kiệt sức',
      'Khó giữ ranh giới và dễ bị năng lượng tiêu cực ảnh hưởng',
      'Xu hướng hi sinh không lành mạnh và tự hủy hoại',
      'Cô đơn sâu sắc trong trải nghiệm vũ trụ mà ít ai hiểu được',
    ],
    workEnv: 'Môi trường có sứ mệnh chữa lành và phục vụ nhân loại. Cần không gian thiêng liêng và tôn trọng. Không thể làm việc trong môi trường vô nghĩa hay phi đạo đức dù trong một thời gian ngắn.',
    careers: ['Nhà trị liệu / Chuyên gia chữa lành tâm linh', 'Thầy giáo tinh thần / Người hướng dẫn', 'Nghệ sĩ / Nhạc sĩ mang năng lượng chữa lành', 'Nhà hoạt động nhân đạo ở mức toàn cầu', 'Nhà lãnh đạo tôn giáo / Tâm linh', 'Nhà văn / Nhà thơ chạm đến trái tim nhân loại', 'Nhà nghiên cứu ý thức và chữa lành'],
    majors: ['Tâm lý học / Trị liệu', 'Thần học / Tôn giáo học', 'Nghệ thuật / Âm nhạc chữa lành', 'Triết học', 'Công tác xã hội / Nhân đạo'],
    moneyStyle: 'Tiền bạc thường đến tự nhiên khi số 33 sống trong sứ mệnh. Nhưng họ không bao giờ đặt tiền bạc lên trên sứ mệnh. Cần học cách nhận đền bù xứng đáng mà không cảm thấy tội lỗi.',
    loveStyle: 'Yêu ở mức độ tâm linh thuần khiết nhất. Mọi mối quan hệ đều là cơ hội chữa lành cho cả hai. Cần người bạn đời ở cùng mức độ tiến hóa tâm linh. Dễ bị thu hút bởi những người cần được chữa lành.',
    healthFocus: 'Cực kỳ cần thiết phải có thực hành bảo vệ năng lượng nghiêm túc. Hệ thần kinh và cơ thể vật lý dễ bị kiệt sức bởi gánh nặng sứ mệnh. Nghi lễ chăm sóc bản thân hàng ngày là không thể bỏ qua.',
    spiritualPath: 'Con đường tâm linh của số 33 là hiện thực hóa tình yêu vũ trụ qua thân xác người. Từ "tôi cảm thấy tình yêu vũ trụ" tiến đến "tôi là biểu hiện sống động của tình yêu vũ trụ".',
    karmicLesson: 'Số 33 đã hoàn thành hầu hết các bài học karma. Kiếp này là kiếp tổng hợp và hoàn thành – không phải học thêm mà là biểu hiện hoàn toàn những gì đã học qua nhiều kiếp.',
    lesson: 'Học cách hi sinh từ sức mạnh và toàn vẹn, không phải từ vết thương và thiếu hụt. Chữa lành bản thân là điều kiện tiên quyết để chữa lành người khác.',
    advice: 'Tạo ra "nghi lễ thiêng liêng" hàng ngày để kết nối với nguồn tình yêu vô hạn. Nhớ rằng bạn không thể cho đi những gì bạn không có – tự chăm sóc là nghĩa vụ thiêng liêng đối với sứ mệnh của bạn.',
    planet: 'Sao Hải Vương (Neptune) ♆ + Sao Mộc (Jupiter) ♃',
    element: 'Ánh Sáng Vũ Trụ 🌟',
    compatible: [6, 9, 11, 33],
    challenging: [1, 8],
    famousPeople: ['Francis of Assisi', 'Malala Yousafzai', 'Albert Schweitzer', 'Rumi'],
    color: 'from-fuchsia-400 to-purple-700',
    colorFrom: '#e879f9',
    colorTo: '#7e22ce',
    emoji: '🌟',
    childhood: 'Tuổi thơ của số 33 thường bao gồm những trải nghiệm chữa lành hoặc tiếp xúc với đau khổ sâu sắc từ rất sớm. Họ học được sự đồng cảm và lòng trắc ẩn từ những trải nghiệm đầu đời này. Môi trường an toàn và yêu thương là cực kỳ quan trọng.',
    communicationStyle: 'Chạm đến trái tim trực tiếp mà không cần nhiều lời. Nói từ không gian yêu thương thuần khiết. Khả năng truyền đạt chân lý sâu sắc bằng ngôn ngữ đơn giản nhất.',
    relationshipDynamics: 'Mọi mối quan hệ đều là cơ hội chữa lành và học hỏi lẫn nhau. Không thể ở trong mối quan hệ thiếu chiều sâu và ý nghĩa. Cần người bạn đời không chỉ yêu họ mà còn hiểu sứ mệnh của họ.',
    shadowWork: 'Bóng tối của số 33 là "hội chứng đấng cứu thế" – tin rằng chỉ mình mới có thể cứu người khác và thế giới. Công việc shadow là học cách tôn trọng hành trình và lựa chọn của mọi người, kể cả khi họ chọn con đường đau khổ.',
    lifeThemes: ['Chữa lành qua tình yêu vô điều kiện', 'Hi sinh thiêng liêng và tự nguyện', 'Dạy dỗ từ trái tim thuần khiết', 'Biểu hiện ánh sáng trong bóng tối', 'Hoàn thành chu kỳ tiến hóa linh hồn'],
    affirmations: ['Tôi là biểu hiện sống động của tình yêu vũ trụ', 'Tôi chữa lành người khác bằng cách sống toàn vẹn với bản thân', 'Tôi xứng đáng nhận tình yêu và sự chăm sóc', 'Sứ mệnh của tôi bắt đầu bằng việc chữa lành chính mình'],
    mindset: 'Tư duy từ bi và toàn cục tuyệt đối. Nhìn mọi người và mọi hoàn cảnh qua lăng kính tình yêu và chữa lành. Luôn hỏi "làm thế nào điều này phục vụ cho tiến hóa của ý thức?".',
    stressResponse: 'Khi căng thẳng, số 33 có thể bị áp đảo hoàn toàn bởi cảm xúc và cảm giác của người xung quanh. Cần nghi lễ bảo vệ năng lượng cụ thể và thời gian đơn độc thiêng liêng để tái lập kết nối với nguồn.',
    giftToWorld: 'Số 33 mang đến tình yêu chữa lành thuần khiết nhất cho thế giới. Sự hiện diện của họ thắp sáng bất kỳ không gian nào họ bước vào. Họ là những người nhắc nhở nhân loại rằng dù thế giới có tối tăm đến đâu, ánh sáng tình yêu không bao giờ tắt.',
  },
};

function sumDigits(n: number): number {
  return String(n).split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
}

export function reduceToSingle(n: number): number {
  if (n === 11 || n === 22 || n === 33) return n;
  if (n < 10) return n;
  return reduceToSingle(sumDigits(n));
}

// Số Đường Đời: rút gọn từng thành phần (ngày, tháng, năm) riêng biệt
// rồi cộng lại và rút gọn — đảm bảo giữ đúng số chủ đạo (11, 22, 33)
export function calcLifePath(day: number, month: number, year: number): number {
  const d = reduceToSingle(day);
  const m = reduceToSingle(month);
  const y = reduceToSingle(year);
  return reduceToSingle(d + m + y);
}

export function calcBirthdayNumber(day: number): number {
  return reduceToSingle(day);
}

// Số Thái Độ: rút gọn ngày và tháng riêng trước để không bỏ sót số chủ đạo
// Ví dụ: ngày 29 (→11) + tháng 11 (→11) = 22, không phải 40→4
export function calcAttitudeNumber(day: number, month: number): number {
  return reduceToSingle(reduceToSingle(day) + reduceToSingle(month));
}

// Bảng Pythagoras đầy đủ 9 hàng — i=9 và r=9 là hàng hay bị bỏ sót
const letterValues: Record<string, number> = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9,
};

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function removeVietnameseTones(str: string): string {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str;
}

export function getFilteredLetters(name: string, filter: 'all' | 'vowel' | 'consonant'): string[] {
  const clean = removeVietnameseTones(name).toLowerCase();
  const letters = clean.replace(/[^a-z]/g, '').split('');
  if (filter === 'all') return letters;
  if (filter === 'vowel') return letters.filter(l => vowels.includes(l));
  if (filter === 'consonant') return letters.filter(l => !vowels.includes(l));
  return [];
}

function calcLettersSum(letters: string[]): number {
  if (letters.length === 0) return 0;
  const sum = letters.reduce((acc, char) => {
    return acc + (letterValues[char] || 0);
  }, 0);
  return reduceToSingle(sum);
}

export function calcDestinyNumber(name: string): number {
  return calcLettersSum(getFilteredLetters(name, 'all'));
}

export function calcSoulUrgeNumber(name: string): number {
  return calcLettersSum(getFilteredLetters(name, 'vowel'));
}

export function calcPersonalityNumber(name: string): number {
  return calcLettersSum(getFilteredLetters(name, 'consonant'));
}
