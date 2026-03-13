export const technologyRoadmap = {
    subject: "Công nghệ",
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
            focus: "Khởi động + nắm khái niệm nền tảng + an toàn trong công nghệ",
            target_score: 5.0,
            modules: [
                {
                    name: "Kiến thức Kinh tế & Công nghệ",
                    topics: [
                        "Khái niệm 'công nghệ' và vai trò trong đời sống",
                        "Quy trình công nghệ: đầu vào → xử lí → đầu ra",
                        "Chất lượng – tiêu chuẩn: hiểu qua ví dụ sản phẩm"
                    ]
                },
                {
                    name: "An toàn lao động & Môi trường",
                    topics: [
                        "An toàn lao động: nguyên tắc, PPE (phương tiện bảo hộ)",
                        "Nguy cơ thường gặp trong xưởng/thực hành, An toàn điện",
                        "Môi trường trong sản xuất: rác thải, tiết kiệm năng lượng, sản xuất bền vững"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Khái niệm nền tảng. Luyện 40 MCQ + 10 câu dạng chọn phát biểu đúng.",
                "Tuần 2": "An toàn lao động/điện. Luyện 50 MCQ + 10 câu đúng/sai + 15 tình huống.",
                "Tuần 3": "Môi trường và Bền vững. 50 MCQ + mini drill 20 câu bẫy từ khóa.",
                "Tuần 4": "Làm 2 mini test (20-25 câu) bấm giờ. Lập sổ lỗi sai 15 lỗi."
            },
            practice_volume: {
                mcq_questions: 160,
                true_false_sets: 2,
                situation_questions: 15,
                mini_tests: 2
            },
            checkpoints: [
                "Mini test đạt >= 5.5–6.0",
                "Thuộc 30 thuật ngữ nền",
                "Không sai câu an toàn cơ bản"
            ]
        },
        {
            month: "Tháng 9",
            phase: "Foundation 2",
            focus: "Quy trình công nghệ + thiết kế kĩ thuật (mức nhận biết/thông hiểu)",
            target_score: 5.5,
            modules: [
                {
                    name: "Thiết kế kĩ thuật",
                    topics: [
                        "Quy trình thiết kế kĩ thuật các bước cơ bản",
                        "Tiêu chí lựa chọn phương án: chi phí, hiệu quả, an toàn"
                    ]
                },
                {
                    name: "Vật liệu & Dụng cụ",
                    topics: [
                        "Vật liệu cơ bản (kim loại, nhựa, gỗ, composite)",
                        "Tính chất vật liệu: bền, dẻo, dẫn điện, chịu nhiệt",
                        "Dụng cụ/thiết bị thông dụng và nguyên tắc an toàn"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Quy trình thiết kế. 60 MCQ + 10 câu dạng điền khuyết.",
                "Tuần 2": "Vật liệu cơ bản. 50 MCQ + 10 tình huống chọn vật liệu.",
                "Tuần 3": "Dụng cụ/Thiết bị. 50 MCQ + mini test 25 câu.",
                "Tuần 4": "Làm 2 đề chủ đề (Quy trình + Vật liệu/An toàn). Lập bảng bẫy 15 dòng."
            },
            practice_volume: {
                mcq_questions: 210,
                true_false_sets: 2,
                situation_questions: 10,
                topic_tests: 2,
                mini_tests: 1
            },
            checkpoints: [
                "Đề chủ đề đạt >= 6.0",
                "Không nhầm trình tự quy trình thiết kế kĩ thuật",
                "Sổ lỗi sai tích lũy >= 60 dòng"
            ]
        },
        {
            month: "Tháng 10",
            phase: "Foundation 3",
            focus: "Sản xuất – kinh doanh – hiệu quả",
            target_score: 6.0,
            modules: [
                {
                    name: "Năng suất & Chi phí",
                    topics: [
                        "Năng suất lao động: khái niệm + yếu tố ảnh hưởng",
                        "Hiệu quả kinh tế, chi phí cố định/biến đổi, giá thành, lợi nhuận"
                    ]
                },
                {
                    name: "Tổ chức sản xuất",
                    topics: [
                        "Tổ chức sản xuất: quy trình, phân công, kiểm soát chất lượng",
                        "Vai trò tiêu chuẩn chất lượng trong sản xuất"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Năng suất lao động. 60 MCQ + 10 tình huống chọn phương án.",
                "Tuần 2": "Chi phí, giá cả, lợi nhuận. 60 MCQ + 20 câu bẫy.",
                "Tuần 3": "Tổ chức sản xuất. 50 MCQ + 1 mini test 25 câu.",
                "Tuần 4": "Làm 2 đề full 50 phút giả lập."
            },
            practice_volume: {
                mcq_questions: 170,
                true_false_sets: 1,
                situation_questions: 20,
                mini_tests: 1,
                full_tests: 2
            },
            checkpoints: [
                "Điểm đề full đạt >= 6.0–6.5",
                "Làm đúng >= 80% câu nhận biết",
                "Tốc độ: hoàn thành, soát bài dư 3-5 phút"
            ]
        },
        {
            month: "Tháng 11",
            phase: "Foundation 4",
            focus: "Khởi nghiệp – mô hình kinh doanh – kế hoạch đơn giản",
            target_score: 6.5,
            modules: [
                {
                    name: "Khởi nghiệp & Mô hình kinh doanh",
                    topics: [
                        "Khởi nghiệp: vấn đề – giải pháp – khách hàng mục tiêu",
                        "Giá trị cốt lõi và lợi thế cạnh tranh"
                    ]
                },
                {
                    name: "Kế hoạch & Marketing",
                    topics: [
                        "Marketing cơ bản: 4P (sản phẩm/giá/phân phối/xúc tiến)",
                        "Kế hoạch kinh doanh: mục tiêu – nguồn lực – rủi ro"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Khởi nghiệp cơ bản. 60 MCQ + 10 tình huống khách hàng.",
                "Tuần 2": "Marketing 4P cơ bản. 50 MCQ + 10 tình huống chọn 4P.",
                "Tuần 3": "Kế hoạch kinh doanh. 50 MCQ + 1 mini test.",
                "Tuần 4": "Làm 1 đề chủ đề (Khởi nghiệp) + 1 đề full."
            },
            practice_volume: {
                mcq_questions: 160,
                true_false_sets: 1,
                situation_questions: 20,
                mini_tests: 1,
                topic_tests: 1,
                full_tests: 1
            },
            checkpoints: [
                "Điểm đề full >= 6.5 ít nhất 1 lần",
                "Không nhầm 4P",
                "Sổ lỗi sai tổng >= 110 dòng"
            ]
        },
        {
            month: "Tháng 12",
            phase: "Consolidation 1",
            focus: "Tổng ôn + luyện đề để khóa 6.5 ổn định",
            target_score: 6.5,
            modules: [
                {
                    name: "Tổng ôn kiến thức",
                    topics: [
                        "Rà soát 4 block kiến thức (A-D) bằng cheat sheet",
                        "Giảm sai chủ quan, đọc kĩ từ khóa"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1": "Làm 1 đề full + 1 mini test. Lập bảng bẫy an toàn/tiêu chuẩn.",
                "Tuần 2": "Làm 1 đề full + 1 đề chủ đề yếu nhất. Lập bảng bẫy khởi nghiệp.",
                "Tuần 3": "Làm 1 đề full + ôn cheat sheet. 20 câu tình huống.",
                "Tuần 4": "Làm 2 đề full liên tiếp giả lập thi thật."
            },
            practice_volume: {
                full_tests: 5,
                mini_tests: 1,
                topic_tests: 1,
                situation_questions: 20
            },
            checkpoints: [
                "Điểm 5 đề cuối tháng: trung bình >= 6.3–6.5",
                "Không có đề dưới 5.8",
                "Hoàn thiện cheat sheet + bảng bẫy"
            ]
        },
        {
            month: "Tháng 1 - Tháng 2",
            phase: "Practice",
            focus: "Luyện đề có chữa (ổn định 6.5 - 7.0) + Tăng tốc",
            target_score: 6.8,
            modules: [
                {
                    name: "Luyện đề thực chiến",
                    topics: [
                        "Kỹ năng chữa lỗi theo chủ đề yếu",
                        "Rèn tâm lý và sự cẩn thận"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1 & 2": "Tối thiểu 2-3 đề full/tuần + chữa chi tiết. 20 câu tình huống.",
                "Tuần 3 & 4": "3 đề full/tuần. Tổng kết lỗi sai. Chữa theo nhóm lỗi."
            },
            practice_volume: {
                full_tests: 20,
                mini_tests: 1,
                topic_tests: 1,
                situation_questions: 20
            },
            checkpoints: [
                "Điểm trung bình >= 6.5",
                "Tỉ lệ đúng câu dễ >= 90%",
                "Không lặp lại lỗi cũ quá 2 lần"
            ]
        },
        {
            month: "Tháng 3 - Tháng 4",
            phase: "Intensive",
            focus: "Thi thử như thi thật (bấm giờ + tâm lý)",
            target_score: 7.0,
            modules: [
                {
                    name: "Thực chiến & Tâm lý",
                    topics: [
                        "Bấm giờ khắt khe (50 phút)",
                        "Giữ phong độ + ôn bảng bẫy"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1 & 2": "Thi thử bấm giờ 4 đề/tuần không gián đoạn.",
                "Tuần 3 & 4": "Lọc lại các đề điểm thấp, ôn cheat sheet. 3 đề/tuần."
            },
            practice_volume: {
                full_tests: 28,
                error_review_sessions: 8
            },
            checkpoints: [
                ">= 8/16 đề đạt >= 6.5 trong Tháng 3",
                "Điểm dao động 6.3–7.0",
                "Câu dễ đúng >= 90%"
            ]
        },
        {
            month: "Tháng 5 - Tháng 6",
            phase: "Exam Preparation",
            focus: "Ổn định trước thi + giảm sai do ẩu",
            target_score: 7.0,
            modules: [
                {
                    name: "Giai đoạn nước rút",
                    topics: [
                        "Rà soát bẫy, bảo toàn điểm dễ",
                        "Không học mới trong tuần cuối"
                    ]
                }
            ],
            weekly_structure: {
                "Tuần 1 & 2": "Luyện 3-4 đề/tuần. Rà soát mảng yếu nhất.",
                "Tuần 3 & 4": "Giảm tải, mỗi tuần 1–2 đề nhẹ. Ngủ đủ, chuẩn bị thi."
            },
            practice_volume: {
                full_tests: 22,
                error_review_sessions: 4
            },
            checkpoints: [
                "Sẵn sàng tâm lý 100%",
                "Không có đề dưới 6.0",
                "Cheat sheet thuộc làu"
            ]
        }
    ],
    formula_summary: {
        "A_nen_tang_an_toan": [
            "Quy trình công nghệ: Đầu vào → Xử lí → Đầu ra.",
            "Sản xuất bền vững: Đảm bảo 3 trụ cột (Kinh tế - Xã hội - Môi trường).",
            "An toàn điện cơ bản: Ngắt nguồn, sử dụng PPE, điểm tiếp đất."
        ],
        "B_thiet_ke_vat_lieu": [
            "Các bước thiết kế mạch lạc: Xác định vấn đề → Nghiên cứu/Ý tưởng → Chọn giải pháp → Tạo mẫu → Đánh giá.",
            "Vật liệu cơ bản: Kim loại (Dẫn điện/Nhiệt tốt), Nhựa (Cách điện), Composite (Nhẹ, bền)."
        ],
        "C_kinh_doanh_san_xuat": [
            "Chi phí sản xuất = Chi phí cố định (Mặt bằng, máy móc) + Chi phí biến đổi (Nguyên vật liệu, điện nước).",
            "Lợi nhuận = Doanh thu - Chi phí sản xuất.",
            "Marketing 4P = Product (Sản phẩm) - Price (Giá) - Place (Phân phối) - Promotion (Xúc tiến)."
        ],
        "D_ung_dung_cong_nghe": [
            "Bản chất khởi nghiệp: Đi tìm vấn đề của khách hàng và đưa ra giải pháp giải quyết nó.",
            "Tự động hóa/cảm biến: Giúp giảm nhân công, tăng sự chính xác và năng suất định lượng."
        ]
    },
    common_mistakes: [
        "Từ khóa tuyệt đối: Luôn luôn, chỉ, tất cả, không bao giờ → Luôn tìm phản ví dụ trước.",
        "Nhầm trình tự quy trình thiết kế: Hãy nhớ quy trình 5 bước cốt lõi thay vì thuộc vẹt.",
        "Chi phí tăng = Lợi nhuận giảm ngay: KHÔNG LUÔN ĐÚNG. Đôi khi chi phí tăng vào marketing nhưng doanh thu tăng vọt.",
        "Sản xuất bền vững chỉ quan tâm môi trường: SAI. Bền vững cần cả lợi ích kinh tế, xã hội và môi trường.",
        "Đọc lướt ở câu tình huống: Hãy xác định rõ rào cản hoặc MỤC TIÊU của tình huống trước khi đọc đáp án."
    ],
    study_tips: [
        "Học theo kiểu thực tế: Với môn Công nghệ, hãy liên tưởng các khái niệm với ví dụ đời thực (công ty, xưởng mỹ nghệ...).",
        "Ghi chú rập khuôn: Khái niệm - Ví dụ đúng - Ví dụ sai phổ biến.",
        "Sổ tay lỗi sai: Rất quan trọng, bắt buộc phải có, mỗi tuần ít nhất 15 dòng.",
        "Chiến thuật phần 2: Môn Công nghệ các câu Đúng/Sai hay gài từ 'chỉ'. Tránh chọn bừa cả 4 ý.",
        "Đầu tư vào 4P và quy trình công nghệ, đây là các chương dễ ra và rất logic."
    ]
};
