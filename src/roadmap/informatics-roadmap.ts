export const informaticsRoadmap = {
    subject: "Tin học",
    exam: {
        total_questions: 28,
        time_minutes: 50,
        target_score: 6.5,
        structure: [
            { part: "Phần I", questions: 24, chapter: "Trắc nghiệm nhiều lựa chọn" },
            { part: "Phần II", questions: 4, chapter: "Trắc nghiệm đúng/sai" }
        ]
    },
    timeline: [
        {
            month: "Tháng 8",
            phase: "Foundation 1",
            focus: "Làm quen cấu trúc đề + ATTT nền tảng + đạo đức số",
            target_score: 5.0,
            modules: [
                {
                    name: "Khái niệm Hệ Thống",
                    topics: [
                        "Dữ liệu – thông tin – tri thức: phân biệt bằng ví dụ đời sống",
                        "Hệ thống thông tin: thành phần (con người/phần cứng/phần mềm/dữ liệu/quy trình)"
                    ]
                },
                {
                    name: "An toàn thông tin cơ bản",
                    topics: [
                        "Mật khẩu mạnh: độ dài, độ phức tạp, không dùng lại",
                        "2FA: mục đích + ví dụ",
                        "Sao lưu: 3-2-1 (nhận biết) + lý do cần sao lưu"
                    ]
                },
                {
                    name: "Đạo đức & Dấu vết số",
                    topics: [
                        "Đạo đức số: bản quyền, trích dẫn, đạo văn",
                        "Dấu vết số: dữ liệu cá nhân, chia sẻ thông tin"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Dữ liệu & Thông tin. Luyện 80 MCQ và flashcards.",
                "Tuần 2": "ATTT (mật khẩu, 2FA, sao lưu). 60 MCQ, bài tình huống ATTT.",
                "Tuần 3": "Đạo đức số, bản quyền. 50 MCQ và 1 mini drill bẫy từ khóa.",
                "Tuần 4": "Làm 2 mini test. Tổng hợp lỗi sai phổ biến tháng 8."
            },
            practice_volume: {
                mcq_questions: 220,
                true_false_sets: 4,
                mini_tests: 2,
                situation_questions: 10
            },
            checkpoints: [
                "Điểm mini test đạt >= 5.5–6.0",
                "Phân biệt đúng: dữ liệu/thông tin/tri thức",
                "Nhớ được 10 biện pháp an toàn số cơ bản"
            ]
        },
        {
            month: "Tháng 9",
            phase: "Foundation 2",
            focus: "Mạng Internet + tình huống ATTT (dạng hay ra)",
            target_score: 5.5,
            modules: [
                {
                    name: "Mạng & Dịch vụ Internet",
                    topics: [
                        "Dịch vụ Internet: web/email/cloud – mỗi loại 2 ví dụ",
                        "Tài khoản trực tuyến: rủi ro khi dùng chung mật khẩu",
                        "HTTP vs HTTPS (khái niệm: mã hóa khi truyền)"
                    ]
                },
                {
                    name: "Quyền riêng tư & Cookie",
                    topics: [
                        "Cookie: nhận biết chức năng lưu phiên đăng nhập/ghi nhớ",
                        "Quyền riêng tư cơ bản trên môi trường mạng"
                    ]
                },
                {
                    name: "Chống Lừa Đảo",
                    topics: [
                        "Phishing: dấu hiệu link giả, domain lạ, yêu cầu OTP",
                        "Malware: phân biệt virus/trojan/ransomware (nhận biết)"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Mạng & Dịch vụ Internet. Luyện 60 MCQ + bảng tóm tắt.",
                "Tuần 2": "HTTP/HTTPS & Cookie. 70 MCQ, ghi sổ lỗi sai.",
                "Tuần 3": "Phishing & Malware. 70 MCQ, 15 tình huống thực tế.",
                "Tuần 4": "Luyện đề chủ đề mạng + ATTT. Chữa kỹ các câu bẫy."
            },
            practice_volume: {
                mcq_questions: 250,
                true_false_sets: 5,
                topic_tests: 2,
                situation_questions: 25
            },
            checkpoints: [
                "Nhận diện đúng phishing ở mức cơ bản >= 80%",
                "Điểm 2 đề chủ đề >= 6.0",
                "Không nhầm HTTPS với 'web nhanh hơn'"
            ]
        },
        {
            month: "Tháng 10",
            phase: "Foundation 3",
            focus: "Thuật toán cơ bản: mô phỏng nhanh để kéo điểm",
            target_score: 6.0,
            modules: [
                {
                    name: "Biến & Biểu thức",
                    topics: [
                        "Biến & biểu thức: đọc hiểu gán giá trị",
                        "Toán tử so sánh: >, <, ==, != (từ khóa)"
                    ]
                },
                {
                    name: "Cấu trúc Rẽ nhánh",
                    topics: [
                        "if/else: điều kiện đúng/sai",
                        "Điều kiện ghép AND/OR (mức cơ bản)"
                    ]
                },
                {
                    name: "Cấu trúc Lặp",
                    topics: [
                        "for/while: điều kiện dừng, vị trí tăng biến",
                        "Đếm số lần lặp ở mức đơn"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Biến & biểu thức. Mô phỏng 40 câu biểu thức.",
                "Tuần 2": "Lệnh if/else. Luyện 60 MCQ, mô phỏng 30 câu if.",
                "Tuần 3": "Vòng lặp for/while. Mô phỏng vòng lặp đơn, chú ý điều kiện.",
                "Tuần 4": "Làm đề mixed (ATTT + thuật toán). Chữa phân loại lỗi mô phỏng."
            },
            practice_volume: {
                mcq_questions: 220,
                true_false_sets: 4,
                simulation_exercises: 140,
                topic_tests: 3
            },
            checkpoints: [
                "Mô phỏng vòng lặp đơn đúng >= 70%",
                "Đề mixed đạt >= 6.0–6.5",
                "Phần I làm trong <= 27 phút"
            ]
        },
        {
            month: "Tháng 11",
            phase: "Foundation 4",
            focus: "Dữ liệu & CSDL mức phổ thông",
            target_score: 6.5,
            modules: [
                {
                    name: "Cấu trúc Bảng",
                    topics: [
                        "Bảng dữ liệu: thuộc tính/cột vs bản ghi/hàng",
                        "Khóa (key): khái niệm định danh duy nhất"
                    ]
                },
                {
                    name: "Chất lượng Dữ liệu",
                    topics: [
                        "Trùng lặp dữ liệu và hậu quả",
                        "Chất lượng dữ liệu: đúng/đủ/sạch",
                        "Làm sạch dữ liệu: sai chính tả, thiếu giá trị, ngoại lai"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Bảng dữ liệu, thuộc tính/bản ghi. Luyện 70 MCQ.",
                "Tuần 2": "Khóa & Trùng lặp. Luyện 60 MCQ + bảng bẫy dữ liệu.",
                "Tuần 3": "Chất lượng dữ liệu (sạch). 50 MCQ tình huống làm sạch.",
                "Tuần 4": "Luyện 2 đề chủ đề CSDL + 1 đề full. Viết lỗi hay nhầm."
            },
            practice_volume: {
                mcq_questions: 240,
                true_false_sets: 5,
                topic_tests: 2,
                full_tests: 1,
                situation_questions: 40
            },
            checkpoints: [
                "Điểm đề dữ liệu >= 6.5",
                "Nhớ 30 thuật ngữ dữ liệu/DB",
                "Không nhầm thuộc tính/bản ghi"
            ]
        },
        {
            month: "Tháng 12",
            phase: "Consolidation",
            focus: "Chuyên luyện phần đúng/sai + Tổng ôn 4 mảng",
            target_score: 6.5,
            modules: [
                {
                    name: "Tổng ôn kiến thức",
                    topics: [
                        "Rà soát lại ATTT và Đạo đức số",
                        "Rà soát Thuật toán và CSDL"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Luyện Đúng/Sai ATTT + Mạng. Chữa đề full tập trung Phần II.",
                "Tuần 2": "Luyện Đúng/Sai Thuật toán + Dữ liệu. Lập bảng bẫy điều kiện.",
                "Tuần 3": "Luyện Right/False trộn 4 bảng. Viết cheat sheet 40 gạch đầu dòng.",
                "Tuần 4": "Thi thử 2 đề full liên tiếp như thi thật. Lập sổ lỗi sai."
            },
            practice_volume: {
                true_false_sets: 12,
                full_tests: 6,
                error_review_sessions: 4
            },
            checkpoints: [
                "Điểm đề full cuối tháng >= 6.5",
                "Phần II không còn khoanh theo cảm tính",
                "Tốc độ: hoàn thành phần I <= 26 phút"
            ]
        },
        {
            month: "Tháng 1 - Tháng 2",
            phase: "Practice",
            focus: "Luyện đề có chữa chi tiết, đánh vào lỗi sai chủ quan",
            target_score: 6.8,
            modules: [
                {
                    name: "Luyện đề thực chiến",
                    topics: [
                        "Kỹ năng kiểm soát rủi ro phần II",
                        "Gỡ bẫy từ khóa: luôn/chỉ/tất cả",
                        "Mô phỏng nhanh thuật toán bằng nháp"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1 & 2": "Tối thiểu 3 đề full/tuần + chữa chi tiết. Luyện 2 set Đúng/Sai.",
                "Tuần 3 & 4": "3 đề full/tuần. Chuyên chữa lỗi mô phỏng thuật toán."
            },
            practice_volume: {
                full_tests: 15,
                true_false_sets: 6,
                error_review_sessions: 8
            },
            checkpoints: [
                "Đa số đề đạt >= 6.5",
                "Phần II trung bình >= 2 ý/câu",
                "Không có đề dưới 6.0"
            ]
        },
        {
            month: "Tháng 3 - Tháng 4",
            phase: "Intensive",
            focus: "Tăng tốc thi thử - Bấm giờ khắt khe",
            target_score: 7.0,
            modules: [
                {
                    name: "Chiến thuật phòng thi",
                    topics: [
                        "Giữ vững tâm lý trong 5 phút đầu",
                        "Chiến lược khoanh Phần II (2 ý chắc chắn)"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1 & 2": "Thi thử bấm giờ 4 đề/tuần không gián đoạn.",
                "Tuần 3 & 4": "Lọc lại các đề điểm thấp, làm lại các câu bị sai. Chốt cheat sheet v2."
            },
            practice_volume: {
                full_tests: 20,
                true_false_sets: 4,
                error_review_sessions: 8
            },
            checkpoints: [
                "Tỉ lệ đúng ATTT/Dữ liệu cơ bản >= 90%",
                "Điểm dao động 6.5–7.0",
                "Còn dư 3–5 phút soát bài"
            ]
        },
        {
            month: "Tháng 5 - Tháng 6",
            phase: "Exam Preparation",
            focus: "Rà soát bẫy, bảo toàn điểm dễ, giảm sai số",
            target_score: 7.0,
            modules: [
                {
                    name: "Tối ưu hóa điểm số",
                    topics: [
                        "Ôn tập sổ kỹ năng đúng/sai",
                        "Đọc lại cheat sheet mỗi sáng 10 phút"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1 & 2": "Luyện 3 đề/tuần. Rà soát mảng yếu nhất (thường là mô phỏng).",
                "Tuần 3 & 4": "Giảm tải, mỗi tuần 1–2 đề nhẹ. Ngủ đủ, chuẩn bị thi."
            },
            practice_volume: {
                full_tests: 8,
                error_review_sessions: 4
            },
            checkpoints: [
                "Sẵn sàng tâm lý 100%",
                "Không mất điểm câu dễ",
                "Cheat sheet thuộc làu"
            ]
        }
    ],
    formula_summary: {
        "A_ATTT_dao_duc_so": [
            "Mật khẩu mạnh: >8 ký tự, gồm Hoa/thường/số/ký tự đặc biệt.",
            "Virus: Lây nhiễm vào file có sẵn.",
            "Worm: Tự nhân bản qua mạng không cần file mồi.",
            "Trojan: Núp bóng phần mềm tiện ích.",
            "Ransomware: Mã hóa dữ liệu, tống tiền.",
            "Phishing: Lừa đảo lấy cắp mật khẩu qua link giả mạo."
        ],
        "B_mang_va_internet": [
            "HTTP: Không bảo mật. HTTPS: Cấu hình mã hóa bảo mật dữ liệu gửi/nhận.",
            "DNS: Lưu trữ và phân giải tên miền thành địa chỉ IP.",
            "Cookie: Lưu trữ phiên đăng nhập, tùy chọn trang."
        ],
        "C_thuat_toan_mo_phong": [
            "Kiểm tra điều kiện: AND - cả 2 đúng thì đúng; OR - một trong 2 đúng thì đúng.",
            "While (điều kiện): Lặp khi điều kiện ĐÚNG. Dừng khi điều kiện SAI.",
            "For: Biết trước số lần lặp. Hãy chú ý bước nhảy."
        ],
        "D_csdl": [
            "Dữ liệu: con số, ký tự rời rạc (Ví dụ: '10').",
            "Thông tin: Dữ liệu có ngữ cảnh (Ví dụ: 'Điểm 10 môn Toán').",
            "Bản ghi/Record/Hàng: Mô tả 1 đối tượng duy nhất.",
            "Thuộc tính/Field/Cột: Một đặc điểm của đối tượng.",
            "Khóa / Primary Key: Thuộc tính để nhận diện duy nhất 1 bản ghi."
        ]
    },
    common_mistakes: [
        "An toàn vs Bảo mật: Câu nói bảo vệ khỏi truy cập trái phép → bảo mật; an toàn khi sử dụng → an toàn.",
        "Khóa là bất kỳ cột nào khác nhau: SAI. Khóa phải là cột DUY NHẤT giúp nhận diện bản ghi.",
        "Dữ liệu = Thông tin: SAI. Dữ liệu chưa có ý nghĩa, thông tin là dữ liệu đã xử lý.",
        "Bẫy từ khóa tuyệt đối: Gặp luôn/chỉ/tất cả/không bao giờ, hãy cẩn thận tìm phản ví dụ.",
        "Đúng/Sai Phần II: Chọn ALL 4 ý rất rủi ro; hãy tối ưu 2 ý dễ để giành điểm."
    ],
    study_tips: [
        "Hàng ngày (25 phút): 10 phút flashcards, 10 phút luyện MCQ, 5 phút thử 1 câu Đúng/Sai.",
        "Quy tắc 3-2-2-1: 3 ngày ôn, 2 ngày tự kiểm, 2 ngày giải đề, 1 buổi chữa chi tiết.",
        "Sổ tay lỗi: Đặc biệt ghi chú lỗi do bẫy từ khóa và mô phỏng thuật toán nhầm vòng lặp.",
        "Không tốn quá 90 giây cho một câu ở Phần I. Tốn quá nhiều thời gian -> BỎ QUA.",
        "Khối D/A1 học Tin: Đừng sợ thuật toán, hãy coi nó như một bài toán mô phỏng Logic đơn giản."
    ]
};
