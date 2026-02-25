export const mathRoadmap = {
  "subject": "Toán",
  "exam": {
    "total_questions": 50,
    "time_minutes": 90,
    "target_score": 9
  },
  "timeline": [
    {
      "month": "August",
      "phase": "Foundation 1",
      "focus": "Hàm số và Đạo hàm",
      "modules": [
        {
          "name": "Hàm số",
          "topics": [
            "Tính đơn điệu: xét dấu f'(x) trên từng khoảng",
            "Cực trị: f'(x) đổi dấu qua điểm cực trị",
            "Giá trị lớn nhất – nhỏ nhất trên đoạn [a,b]",
            "Tiệm cận ngang: lim f(x) khi x→±∞",
            "Tiệm cận đứng: lim f(x) = ±∞ tại x = x₀",
            "Bảng biến thiên: lập và đọc bảng biến thiên",
            "Đồ thị hàm số bậc 3, bậc 4 trùng phương, phân thức"
          ]
        },
        {
          "name": "Đạo hàm",
          "topics": [
            "Công thức đạo hàm cơ bản: (xⁿ)', (sinx)', (cosx)', (eˣ)', (lnx)'",
            "Quy tắc tính đạo hàm: tổng, hiệu, tích, thương",
            "Đạo hàm hàm hợp: [f(g(x))]' = f'(g(x))·g'(x)",
            "Đạo hàm cấp hai f''(x)",
            "Phương trình tiếp tuyến tại điểm (x₀, y₀)",
            "Tiếp tuyến song song / vuông góc với đường thẳng cho trước",
            "Ứng dụng đạo hàm trong khảo sát hàm số"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 200,
        "mini_tests": 4
      },
      "weekly_structure": {
        "week_1": "Lý thuyết hàm số + bảng biến thiên + 50 câu cơ bản",
        "week_2": "Chuyên đề đạo hàm + tiếp tuyến + 50 câu",
        "week_3": "Mini test 25 câu × 2 (hàm số + đạo hàm)",
        "week_4": "Ôn lại toàn bộ + tổng kết lỗi sai"
      },
      "target_score": 6.5,
      "checkpoints": [
        "Thuộc toàn bộ công thức đạo hàm cơ bản và hàm hợp",
        "Lập được bảng biến thiên chính xác trong 3 phút",
        "Giải câu cơ bản về hàm số dưới 60 giây",
        "Không sai điều kiện xác định của hàm số"
      ]
    },
    {
      "month": "September",
      "phase": "Foundation 2",
      "focus": "Hàm số Mũ – Logarit",
      "modules": [
        {
          "name": "Hàm số mũ và logarit",
          "topics": [
            "Định nghĩa hàm mũ y = aˣ (a > 0, a ≠ 1)",
            "Định nghĩa hàm logarit y = logₐx",
            "Tính chất đơn điệu: a > 1 thì tăng, 0 < a < 1 thì giảm",
            "Đồ thị hàm mũ và logarit",
            "Công thức đổi cơ số logarit"
          ]
        },
        {
          "name": "Phương trình – Bất phương trình mũ và logarit",
          "topics": [
            "Quy tắc logarit: logₐ(xy), logₐ(x/y), logₐ(xⁿ)",
            "Phương trình mũ cơ bản: aˣ = aᵇ → x = b",
            "Phương trình logarit cơ bản: logₐx = b → x = aᵇ",
            "Phương trình mũ đặt ẩn phụ",
            "Bất phương trình mũ: chú ý chiều bất đẳng thức khi a < 1",
            "Bất phương trình logarit: điều kiện xác định x > 0",
            "Phương trình mũ – logarit hỗn hợp"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 180,
        "mini_tests": 4
      },
      "weekly_structure": {
        "week_1": "Lý thuyết hàm mũ – logarit + tính chất + 50 câu",
        "week_2": "Phương trình mũ – đặt ẩn phụ + 50 câu",
        "week_3": "Bất phương trình logarit + điều kiện xác định + 50 câu",
        "week_4": "Mini test 25 câu × 2 + ôn lại lỗi sai"
      },
      "target_score": 7.0,
      "checkpoints": [
        "Không nhầm điều kiện xác định trong logarit (x > 0)",
        "Nhớ chiều bất đẳng thức thay đổi khi cơ số 0 < a < 1",
        "Giải phương trình mũ – log cơ bản trong <= 2 phút",
        "Thành thạo phương pháp đặt ẩn phụ"
      ]
    },
    {
      "month": "October",
      "phase": "Foundation 3",
      "focus": "Nguyên hàm – Tích phân và Ứng dụng",
      "modules": [
        {
          "name": "Nguyên hàm",
          "topics": [
            "Định nghĩa và tính chất của nguyên hàm",
            "Bảng nguyên hàm cơ bản: ∫xⁿdx, ∫sinx dx, ∫eˣdx, ∫(1/x)dx",
            "Nguyên hàm hàm hợp: ∫f(ax+b)dx",
            "Phương pháp đổi biến số (đặt u = g(x))",
            "Phương pháp tích phân từng phần: ∫u dv = uv - ∫v du"
          ]
        },
        {
          "name": "Tích phân xác định",
          "topics": [
            "Định nghĩa tích phân xác định ∫ₐᵇ f(x)dx",
            "Tính chất tích phân: tuyến tính, đổi cận",
            "Newton-Leibniz: ∫ₐᵇ f(x)dx = F(b) - F(a)",
            "Tích phân bằng đổi biến và từng phần có cận"
          ]
        },
        {
          "name": "Ứng dụng tích phân",
          "topics": [
            "Tính diện tích hình phẳng giới hạn bởi 2 đường cong",
            "Công thức: S = ∫ₐᵇ |f(x) - g(x)| dx",
            "Tính thể tích vật thể tròn xoay quanh trục Ox",
            "Công thức: V = π∫ₐᵇ [f(x)]² dx",
            "Tính thể tích khi quay quanh trục Oy"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 200,
        "mini_tests": 4
      },
      "weekly_structure": {
        "week_1": "Nguyên hàm cơ bản + đổi biến + 50 câu",
        "week_2": "Tích phân từng phần + tích phân xác định + 50 câu",
        "week_3": "Ứng dụng tích phân: diện tích + thể tích + 50 câu",
        "week_4": "Mini test tổng hợp 25 câu × 2 + ôn lỗi sai"
      },
      "target_score": 7.5,
      "checkpoints": [
        "Thuộc toàn bộ bảng nguyên hàm cơ bản",
        "Không sai phương pháp đổi biến (đổi cả cận khi tính tích phân xác định)",
        "Tính đúng diện tích hình phẳng với 2 đường cong giao nhau",
        "Áp dụng đúng công thức thể tích tròn xoay"
      ]
    },
    {
      "month": "November",
      "phase": "Foundation 4",
      "focus": "Hình học không gian Oxyz",
      "modules": [
        {
          "name": "Vector và tọa độ trong không gian",
          "topics": [
            "Tọa độ điểm và vector trong Oxyz",
            "Tích vô hướng: a⃗·b⃗ = |a||b|cosθ",
            "Tích có hướng: a⃗ × b⃗ (vector pháp tuyến)",
            "Điều kiện vuông góc, song song của vector"
          ]
        },
        {
          "name": "Mặt phẳng trong không gian",
          "topics": [
            "Phương trình mặt phẳng: Ax + By + Cz + D = 0",
            "Vector pháp tuyến n⃗ = (A, B, C)",
            "Mặt phẳng qua 3 điểm",
            "Mặt phẳng qua điểm và vuông góc với vector",
            "Khoảng cách từ điểm M đến mặt phẳng",
            "Góc giữa hai mặt phẳng"
          ]
        },
        {
          "name": "Đường thẳng trong không gian",
          "topics": [
            "Phương trình tham số đường thẳng",
            "Phương trình chính tắc đường thẳng",
            "Vector chỉ phương u⃗ = (a, b, c)",
            "Đường thẳng qua 2 điểm",
            "Vị trí tương đối: song song, cắt nhau, chéo nhau",
            "Góc giữa hai đường thẳng",
            "Khoảng cách từ điểm đến đường thẳng",
            "Khoảng cách giữa hai đường thẳng chéo nhau"
          ]
        },
        {
          "name": "Mặt cầu",
          "topics": [
            "Phương trình mặt cầu: (x-a)² + (y-b)² + (z-c)² = R²",
            "Tâm I = (a, b, c), bán kính R",
            "Mặt phẳng tiếp xúc với mặt cầu",
            "Xác định tâm và bán kính từ phương trình tổng quát"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 180,
        "mini_tests": 4
      },
      "weekly_structure": {
        "week_1": "Vector + tọa độ không gian + mặt phẳng + 50 câu",
        "week_2": "Đường thẳng trong không gian + vị trí tương đối + 50 câu",
        "week_3": "Khoảng cách + góc + mặt cầu + 50 câu",
        "week_4": "Mini test 25 câu × 2 + ôn lại dạng bài hay sai"
      },
      "target_score": 7.5,
      "checkpoints": [
        "Không nhầm công thức khoảng cách từ điểm đến mặt phẳng và đến đường thẳng",
        "Xác định đúng vị trí tương đối của 2 đường thẳng",
        "Vẽ hình nháp chính xác trước khi giải",
        "Viết đúng phương trình mặt phẳng qua 3 điểm"
      ]
    },
    {
      "month": "December",
      "phase": "Foundation 5",
      "focus": "Xác suất – Thống kê",
      "modules": [
        {
          "name": "Tổ hợp – Chỉnh hợp – Hoán vị",
          "topics": [
            "Hoán vị: Pₙ = n!",
            "Chỉnh hợp: Aₙᵏ = n!/(n-k)!",
            "Tổ hợp: Cₙᵏ = n!/[k!(n-k)!]",
            "Nhị thức Newton: (a+b)ⁿ",
            "Phân biệt khi nào dùng C, khi nào dùng A",
            "Bài toán đếm có điều kiện"
          ]
        },
        {
          "name": "Xác suất",
          "topics": [
            "Không gian mẫu Ω và biến cố",
            "Xác suất cổ điển: P(A) = |A|/|Ω|",
            "Biến cố đối, biến cố xung khắc",
            "Quy tắc cộng xác suất: P(A∪B) = P(A) + P(B) - P(A∩B)",
            "Quy tắc nhân xác suất độc lập: P(A∩B) = P(A)·P(B)",
            "Xác suất có điều kiện: P(A|B) = P(A∩B)/P(B)",
            "Bài toán Bernoulli: Pₙ(k) = Cₙᵏ·pᵏ·(1-p)ⁿ⁻ᵏ"
          ]
        },
        {
          "name": "Thống kê mô tả",
          "topics": [
            "Số trung bình cộng x̄",
            "Số trung vị Me",
            "Mốt Mo",
            "Phương sai s² và độ lệch chuẩn s",
            "Đọc và phân tích bảng tần số, biểu đồ"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 150,
        "mini_tests": 3
      },
      "weekly_structure": {
        "week_1": "Hoán vị + chỉnh hợp + tổ hợp + bài toán đếm + 50 câu",
        "week_2": "Xác suất cổ điển + quy tắc cộng nhân + 50 câu",
        "week_3": "Xác suất có điều kiện + Bernoulli + thống kê + 40 câu",
        "week_4": "Mini test tổng hợp + ôn lỗi sai"
      },
      "target_score": 8.0,
      "checkpoints": [
        "Phân biệt rõ khi nào dùng C (không thứ tự) và A (có thứ tự)",
        "Giải xác suất cổ điển trong <= 2 phút",
        "Áp dụng đúng quy tắc cộng và nhân xác suất",
        "Tính đúng phương sai và độ lệch chuẩn"
      ]
    },
    {
      "month": "January",
      "phase": "Advanced 1",
      "focus": "Hàm ẩn – Bài toán tham số",
      "modules": [
        {
          "name": "Hàm số chứa tham số",
          "topics": [
            "Khảo sát hàm số chứa tham số m",
            "Điều kiện để hàm số đơn điệu trên khoảng",
            "Điều kiện cực trị tồn tại hoặc không tồn tại",
            "Bài toán tìm m để đồ thị cắt đường thẳng tại k điểm"
          ]
        },
        {
          "name": "Hàm ẩn và phương trình chứa tham số",
          "topics": [
            "Phương trình f(x) = m: biện luận số nghiệm theo m",
            "Kỹ thuật tách tham số: m = g(x)",
            "Đường thẳng y = m và đồ thị y = g(x)",
            "Bài toán tương giao có điều kiện",
            "Bất phương trình chứa tham số: biện luận nghiệm"
          ]
        },
        {
          "name": "Ứng dụng đạo hàm nâng cao",
          "topics": [
            "Bài toán tối ưu hóa thực tế",
            "Tìm GTLN – GTNN trong bài toán kinh tế, vật lý",
            "Bài toán chứa điều kiện ràng buộc"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 200,
        "full_tests": 2,
        "mini_tests": 3
      },
      "weekly_structure": {
        "week_1": "Hàm số chứa tham số + điều kiện đơn điệu + 60 câu",
        "week_2": "Phương trình f(x) = m + kỹ thuật tách m + 60 câu",
        "week_3": "Bài toán tối ưu + 1 đề full 50 câu",
        "week_4": "1 đề full + ôn lại toàn bộ lỗi sai"
      },
      "target_score": 8.0,
      "checkpoints": [
        "Thành thạo kỹ thuật tách tham số m = g(x)",
        "Biện luận đúng số nghiệm phương trình theo tham số",
        "Hoàn thành 2 đề full 50 câu trong 90 phút"
      ]
    },
    {
      "month": "February",
      "phase": "Advanced 2",
      "focus": "Tích phân nâng cao – Số phức – Bài toán thực tế",
      "modules": [
        {
          "name": "Tích phân nâng cao",
          "topics": [
            "Tích phân của hàm hợp phức tạp",
            "Tích phân từng phần nhiều lần",
            "Bài toán diện tích – thể tích phức tạp",
            "Tích phân hàm lượng giác: dùng công thức hạ bậc",
            "Bài toán tích phân có tham số"
          ]
        },
        {
          "name": "Số phức",
          "topics": [
            "Dạng đại số: z = a + bi",
            "Môđun số phức: |z| = √(a² + b²)",
            "Số phức liên hợp z̄ = a - bi",
            "Phép tính: cộng, trừ, nhân, chia số phức",
            "Căn bậc hai của số âm và số phức",
            "Phương trình bậc 2 với hệ số thực có nghiệm phức",
            "Biểu diễn số phức trên mặt phẳng Argand"
          ]
        },
        {
          "name": "Bài toán thực tế",
          "topics": [
            "Bài toán lãi suất ngân hàng",
            "Bài toán tăng trưởng theo hàm mũ",
            "Bài toán vật lý ứng dụng toán (vận tốc, quãng đường)",
            "Bài toán hình học thực tế"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 180,
        "full_tests": 3,
        "mini_tests": 2
      },
      "weekly_structure": {
        "week_1": "Tích phân nâng cao + hàm lượng giác + 50 câu",
        "week_2": "Số phức toàn bộ + 50 câu",
        "week_3": "Bài toán thực tế + 1 đề full",
        "week_4": "2 đề full + ôn lỗi sai chuyên sâu"
      },
      "target_score": 8.5,
      "checkpoints": [
        "Thành thạo phép tính số phức (cộng, trừ, nhân, chia)",
        "Giải được phương trình bậc 2 có nghiệm phức",
        "Giải đúng bài tích phân hàm lượng giác bằng hạ bậc",
        "Ít nhất 2 đề full đạt >= 8.0"
      ]
    },
    {
      "month": "March",
      "phase": "Intensive Practice",
      "focus": "Luyện đề tổng hợp chuẩn cấu trúc Bộ GD",
      "modules": [
        {
          "name": "Ôn tập hệ thống theo dạng bài",
          "topics": [
            "Dạng 1: Hàm số – đồ thị (câu 1-10 trong đề thi)",
            "Dạng 2: Mũ – Logarit (câu 11-15)",
            "Dạng 3: Tích phân (câu 16-22)",
            "Dạng 4: Hình học Oxyz (câu 23-30)",
            "Dạng 5: Xác suất – Thống kê (câu 31-38)",
            "Dạng 6: Câu khó tổng hợp (câu 39-50)"
          ]
        }
      ],
      "practice_volume": {
        "full_tests": 8,
        "error_review_sessions": 6
      },
      "weekly_structure": {
        "week_1": "2 đề full + phân tích lỗi sai theo dạng bài",
        "week_2": "2 đề full + ghi sổ tay công thức hay sai",
        "week_3": "2 đề full + luyện riêng câu 40-50 điểm",
        "week_4": "2 đề full + tổng kết toàn bộ điểm yếu"
      },
      "target_score": 8.5,
      "checkpoints": [
        "Ít nhất 2 đề đạt >= 8.5 trong tháng",
        "Giảm lỗi sai do cẩu thả xuống dưới 2 câu/đề",
        "Thống kê lỗi sai theo từng chương sau mỗi đề",
        "Hoàn thành 50 câu trong đúng 90 phút"
      ]
    },
    {
      "month": "April",
      "phase": "Exam Simulation",
      "focus": "Thi thử đúng format – Nâng tốc độ và độ chính xác",
      "modules": [
        {
          "name": "Chiến lược làm bài thi",
          "topics": [
            "Phân bổ thời gian: câu 1-30 (45 phút), câu 31-50 (45 phút)",
            "Kỹ thuật loại trừ đáp án",
            "Xử lý câu khó: bỏ qua, quay lại sau",
            "Kỹ thuật kiểm tra đáp án nhanh",
            "Tâm lý thi: bình tĩnh, không bỏ câu"
          ]
        }
      ],
      "practice_volume": {
        "full_tests": 10,
        "error_review_sessions": 6
      },
      "weekly_structure": {
        "week_1": "3 đề full có bấm giờ nghiêm túc",
        "week_2": "3 đề full + tập xử lý câu 41-50",
        "week_3": "2 đề full + luyện tốc độ câu 1-30 trong 40 phút",
        "week_4": "2 đề full + tổng kết chiến lược làm bài"
      },
      "target_score": 9.0,
      "checkpoints": [
        "3 đề liên tiếp đạt >= 8.5",
        "Làm xong 50 câu trong đúng 85 phút (còn 5 phút kiểm tra)",
        "Không còn lỗi cẩu thả ở câu 1-30",
        "Tập xử lý ít nhất 3 câu trong nhóm câu khó 41-50"
      ]
    },
    {
      "month": "May",
      "phase": "Stabilization",
      "focus": "Ổn định phong độ – Xử lý dạng bài hay sai",
      "modules": [
        {
          "name": "Phân tích và khắc phục điểm yếu",
          "topics": [
            "Tổng hợp toàn bộ lỗi sai từ tháng 8 đến tháng 4",
            "Luyện tập chuyên sâu 2-3 dạng bài yếu nhất",
            "Luyện riêng câu tham số và hàm ẩn nếu còn sai",
            "Ôn lại số phức và tích phân nâng cao"
          ]
        }
      ],
      "practice_volume": {
        "full_tests": 8,
        "error_review_sessions": 6
      },
      "weekly_structure": {
        "week_1": "2 đề full + tổng hợp lỗi sai xuyên suốt",
        "week_2": "Luyện chuyên sâu dạng bài yếu nhất + 1 đề full",
        "week_3": "2 đề full + luyện câu khó tham số, hàm ẩn",
        "week_4": "2 đề full + đọc lại sổ tay công thức"
      },
      "target_score": 9.0,
      "checkpoints": [
        "Duy trì >= 8.5 qua tất cả các đề trong tháng",
        "Giải đúng ít nhất 4/10 câu khó nhóm 41-50",
        "Không còn sai lỗi cơ bản ở nhóm câu 1-35",
        "Hoàn thiện sổ tay công thức và dạng bài hay sai"
      ]
    },
    {
      "month": "June",
      "phase": "Final Review",
      "focus": "Ôn công thức – Luyện tốc độ – Giữ tâm lý",
      "modules": [
        {
          "name": "Ôn tổng kết cuối kỳ",
          "topics": [
            "Đọc lại toàn bộ sổ tay công thức (1 lần/ngày)",
            "Ôn nhanh 6 chương: Hàm số, Mũ-Log, Tích phân, Oxyz, XS-TK, Số phức",
            "Luyện tốc độ câu 1-30 trong 40 phút",
            "Xem lại 5 đề đã làm sai nhiều nhất"
          ]
        }
      ],
      "practice_volume": {
        "full_tests": 6,
        "error_review_sessions": 4
      },
      "weekly_structure": {
        "week_1": "2 đề full + ôn lại toàn bộ công thức chương 1-3",
        "week_2": "2 đề full + ôn lại công thức chương 4-6",
        "week_3": "2 đề full nhẹ nhàng + nghỉ ngơi hợp lý",
        "week_4": "Không làm đề mới – đọc lại sổ tay – nghỉ 3-5 ngày trước thi"
      },
      "target_score": 9.0,
      "checkpoints": [
        "Không học kiến thức mới trong 2 tuần cuối",
        "Giữ nhịp làm đề 2-3 ngày/lần ở tuần 1-2",
        "Đọc lại sổ tay công thức mỗi sáng 15 phút",
        "Nghỉ ngơi đủ giấc, ăn uống điều độ",
        "Tâm lý thoải mái: không áp lực điểm số trong tuần cuối"
      ]
    }
  ],
  "formula_summary": {
    "ham_so_dao_ham": [
      "(xⁿ)' = nxⁿ⁻¹",
      "(sinx)' = cosx",
      "(cosx)' = -sinx",
      "(eˣ)' = eˣ",
      "(aˣ)' = aˣ·lna",
      "(lnx)' = 1/x",
      "(logₐx)' = 1/(x·lna)",
      "[f(g(x))]' = f'(g(x))·g'(x)",
      "Tiếp tuyến tại (x₀, y₀): y = f'(x₀)(x - x₀) + y₀"
    ],
    "mu_logarit": [
      "logₐ(xy) = logₐx + logₐy",
      "logₐ(x/y) = logₐx - logₐy",
      "logₐ(xⁿ) = n·logₐx",
      "logₐb = logₓb / logₓa (đổi cơ số)",
      "logₐb = 1 / log_b(a)",
      "aˣ = aʸ ⟺ x = y (a > 0, a ≠ 1)"
    ],
    "nguyen_ham_tich_phan": [
      "∫xⁿdx = xⁿ⁺¹/(n+1) + C (n ≠ -1)",
      "∫(1/x)dx = ln|x| + C",
      "∫eˣdx = eˣ + C",
      "∫aˣdx = aˣ/lna + C",
      "∫sinx dx = -cosx + C",
      "∫cosx dx = sinx + C",
      "∫f(ax+b)dx = (1/a)·F(ax+b) + C",
      "∫u dv = uv - ∫v du (từng phần)",
      "S = ∫ₐᵇ |f(x) - g(x)| dx",
      "V = π∫ₐᵇ [f(x)]² dx (quay quanh Ox)"
    ],
    "hinh_hoc_oxyz": [
      "Mặt phẳng: Ax + By + Cz + D = 0, n⃗ = (A,B,C)",
      "d(M₀, (P)) = |Ax₀ + By₀ + Cz₀ + D| / √(A²+B²+C²)",
      "Đường thẳng: x = x₀+at, y = y₀+bt, z = z₀+ct, u⃗ = (a,b,c)",
      "cos∠(d₁,d₂) = |u₁⃗·u₂⃗| / (|u₁⃗|·|u₂⃗|)",
      "cos∠((P₁),(P₂)) = |n₁⃗·n₂⃗| / (|n₁⃗|·|n₂⃗|)",
      "Mặt cầu: (x-a)²+(y-b)²+(z-c)² = R², tâm I(a,b,c)"
    ],
    "xac_suat": [
      "Hoán vị: Pₙ = n!",
      "Chỉnh hợp: Aₙᵏ = n!/(n-k)!",
      "Tổ hợp: Cₙᵏ = n!/[k!(n-k)!]",
      "P(A∪B) = P(A) + P(B) - P(A∩B)",
      "P(A∩B) = P(A)·P(B) (nếu A, B độc lập)",
      "P(A|B) = P(A∩B)/P(B)",
      "Bernoulli: Pₙ(k) = Cₙᵏ·pᵏ·(1-p)ⁿ⁻ᵏ"
    ],
    "so_phuc": [
      "z = a + bi, |z| = √(a²+b²)",
      "z̄ = a - bi (số phức liên hợp)",
      "z·z̄ = a² + b² = |z|²",
      "1/z = z̄/|z|²",
      "i² = -1, i³ = -i, i⁴ = 1"
    ]
  },
  "common_mistakes": [
    "Quên điều kiện xác định khi lấy logarit: x > 0",
    "Nhầm chiều bất đẳng thức khi logarit có cơ số 0 < a < 1",
    "Sai dấu khi tính đạo hàm hàm hợp (quên nhân đạo hàm trong)",
    "Nhầm công thức khoảng cách từ điểm đến đường thẳng và đến mặt phẳng",
    "Không đổi cận khi dùng phương pháp đổi biến tích phân xác định",
    "Nhầm Aₙᵏ (có thứ tự) và Cₙᵏ (không thứ tự) trong bài toán đếm",
    "Quên lấy trị tuyệt đối trong công thức tính diện tích hình phẳng",
    "Sai khi biện luận số nghiệm: nhầm chiều bất đẳng thức delta",
    "Nhân chia số phức: quên i² = -1",
    "Bài toán tham số: tách m sai vế hoặc quên xét điều kiện"
  ],
  "study_tips": [
    "Lập sổ tay công thức theo từng chương, đọc lại mỗi sáng 10-15 phút",
    "Với bài hàm số: luôn lập bảng biến thiên trước khi kết luận",
    "Với tích phân: xác định phương pháp trước (đổi biến hay từng phần)",
    "Với Oxyz: vẽ hình nháp để hình dung không gian trước khi tính",
    "Với xác suất: xác định rõ bài toán có thứ tự hay không trước khi chọn C hay A",
    "Mỗi lần làm sai ghi ngay lý do cụ thể: sai công thức, sai tính toán, hay sai tư duy",
    "Luyện câu dễ đến đúng 100% trước khi lên câu khó",
    "Phân bổ thời gian: 45 phút cho câu 1-30, 45 phút cho câu 31-50",
    "Tập làm quen với áp lực thời gian từ tháng 4: bấm giờ mỗi lần làm đề"
  ]
};