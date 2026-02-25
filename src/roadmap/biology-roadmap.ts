export const biologyRoadmap = {
  "subject": "Sinh học",
  "exam": {
    "total_questions": 40,
    "time_minutes": 50,
    "target_score": 9,
    "structure": [
      { "part": "Di truyền phân tử", "questions": 6, "chapter": "Chương 1-2" },
      { "part": "Di truyền Menđen & NST", "questions": 8, "chapter": "Chương 2-3" },
      { "part": "Di truyền quần thể", "questions": 4, "chapter": "Chương 4" },
      { "part": "Ứng dụng di truyền", "questions": 3, "chapter": "Chương 5" },
      { "part": "Tiến hóa", "questions": 5, "chapter": "Chương 6-7" },
      { "part": "Sinh thái học", "questions": 8, "chapter": "Chương 8-9" },
      { "part": "Câu vận dụng cao", "questions": 6, "chapter": "Tổng hợp" }
    ]
  },
  "timeline": [
    {
      "month": "Tháng 8",
      "phase": "Foundation 1",
      "focus": "Cơ chế di truyền và biến dị ở cấp độ phân tử",
      "modules": [
        {
          "name": "Cấu trúc ADN và ARN",
          "topics": [
            "Cấu trúc ADN: chuỗi xoắn kép, nucleotide (A-T-G-X), liên kết hydro (A=T: 2 liên kết, G≡X: 3 liên kết)",
            "Công thức ADN: A+G = T+X = 50%; A=T, G=X",
            "Tính số nucleotide: N = 2 × số cặp; Chiều dài L = (N/2) × 3,4 Å",
            "Số liên kết hydro: H = 2A + 3G",
            "Khối lượng phân tử ADN: M = N × 300 đvC",
            "ARN: mạch đơn, uracil thay thymine; rARN, tARN, mARN",
            "So sánh ADN và ARN: cấu trúc, chức năng, vị trí"
          ]
        },
        {
          "name": "Cơ chế nhân đôi ADN",
          "topics": [
            "Nguyên tắc: bổ sung và bán bảo toàn",
            "Diễn biến: tháo xoắn → tổng hợp → nối đoạn Okazaki",
            "Enzyme tham gia: Helicase (tháo xoắn), ADN Polymerase (tổng hợp mạch mới), Ligase (nối đoạn)",
            "Mạch khuôn: 3'→5'; Mạch mới tổng hợp: 5'→3'",
            "Công thức: từ 1 ADN mẹ → 2ⁿ ADN con sau n lần nhân đôi",
            "Số ADN con = 2ⁿ; Số ADN mới hoàn toàn = 2ⁿ - 2",
            "Số nucleotide tự do cần = N(2ⁿ - 1)"
          ]
        },
        {
          "name": "Phiên mã (Transcription)",
          "topics": [
            "Nguyên tắc: bổ sung; khuôn: mạch gốc 3'→5'; mARN tổng hợp 5'→3'",
            "Enzyme ARN Polymerase: nhận biết vùng promoter, tổng hợp mARN",
            "Trình tự: Khởi đầu → Kéo dài → Kết thúc",
            "Một gen có thể phiên mã nhiều lần → nhiều phân tử mARN",
            "Công thức: A(mARN) = T(gen-mạch gốc); U(mARN) = A(gen-mạch gốc)",
            "G(mARN) = X(gen-mạch gốc); X(mARN) = G(gen-mạch gốc)",
            "Số ribonucleotide mARN = N/2 (N là số nucleotide của gen)"
          ]
        },
        {
          "name": "Dịch mã (Translation)",
          "topics": [
            "Codon (bộ ba mã hóa) trên mARN; Anticodon trên tARN",
            "Bộ ba mở đầu: AUG (Met); Bộ ba kết thúc: UAA, UAG, UGA",
            "Ribosome: tiểu đơn vị bé và lớn; di chuyển theo chiều 5'→3' mARN",
            "Chuỗi polypeptide tổng hợp từ N đến C (đầu amin đến carboxyl)",
            "Số bộ ba mã hóa = (Số nucleotide mARN)/3",
            "Số axit amin = số bộ ba mã hóa - 1 (trừ bộ ba kết thúc)",
            "Polyribosome: nhiều ribosome cùng dịch mã trên 1 mARN",
            "Mối quan hệ: Gen → mARN → Protein → Tính trạng"
          ]
        },
        {
          "name": "Điều hòa biểu hiện gen",
          "topics": [
            "Mô hình Operon Lac (Jacob – Monod): vùng P, O, gen cấu trúc Z-Y-A",
            "Khi có Lactose: chất cảm ứng → ức chế chất ức chế → gen hoạt động",
            "Khi không có Lactose: protein ức chế gắn vào O → gen không hoạt động",
            "Ý nghĩa: điều hòa tiết kiệm năng lượng cho tế bào"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 180,
        "mini_tests": 4,
        "calculation_exercises": 30
      },
      "weekly_structure": {
        "week_1": "Cấu trúc ADN, ARN + công thức tính + 50 câu lý thuyết",
        "week_2": "Nhân đôi ADN + bài toán tính nucleotide + 50 câu",
        "week_3": "Phiên mã + Dịch mã + Operon Lac + 50 câu",
        "week_4": "Mini test 25 câu × 2 + ôn lỗi sai toàn bộ tháng 8"
      },
      "target_score": 6.5,
      "checkpoints": [
        "Nắm rõ nguyên tắc bổ sung và bán bảo toàn trong nhân đôi ADN",
        "Tính đúng số nucleotide, số liên kết hydro, chiều dài ADN",
        "Hiểu chiều tổng hợp mạch mới (5'→3') và enzyme từng giai đoạn",
        "Giải được bài toán nhân đôi ADN n lần",
        "Làm 150–180 câu trắc nghiệm chuyên đề"
      ]
    },
    {
      "month": "Tháng 9",
      "phase": "Foundation 2",
      "focus": "Di truyền học Menđen – Nhiễm sắc thể – Liên kết gen",
      "modules": [
        {
          "name": "Quy luật Menđen",
          "topics": [
            "Quy luật phân ly: F1 dị hợp × dị hợp → F2 tỉ lệ 3:1 (trội lặn) hoặc 1:2:1 (kiểu gen)",
            "Quy luật phân ly độc lập: 2 cặp gen PLĐL → F2: 9:3:3:1",
            "Điều kiện nghiệm đúng: gen nằm trên NST thường, không liên kết",
            "Tương tác gen không alen: 9:7, 9:3:4, 9:6:1, 13:3, 12:3:1, 15:1",
            "Nhận biết kiểu tương tác từ tỉ lệ phân ly F2",
            "Bài toán xác định kiểu gen bố mẹ từ tỉ lệ đời con"
          ]
        },
        {
          "name": "Di truyền liên kết NST và hoán vị gen",
          "topics": [
            "Liên kết gen hoàn toàn: 2 cặp gen trên 1 NST → F2: 1:2:1 kiểu gen, 3:1 kiểu hình",
            "Hoán vị gen (crossing over): tần số hoán vị f = (số giao tử hoán vị / tổng giao tử) × 100%",
            "f ≤ 50%; f = 50% tương đương phân ly độc lập",
            "Bản đồ gen: khoảng cách = tần số hoán vị (cM)",
            "Công thức tính kiểu giao tử khi có hoán vị",
            "Cấu trúc NST: chromatid, centromere, telomere",
            "Đột biến NST: lặp đoạn, mất đoạn, đảo đoạn, chuyển đoạn"
          ]
        },
        {
          "name": "Di truyền giới tính và liên kết giới tính",
          "topics": [
            "NST giới tính XX (nữ) và XY (nam)",
            "Gen liên kết X: mẹ truyền cho con trai; bố truyền 100% cho con gái",
            "Bệnh máu khó đông, mù màu: gen lặn liên kết X",
            "Công thức tính tỉ lệ kiểu hình theo giới tính",
            "Di truyền gen trên vùng không tương đồng của Y",
            "Di truyền ngoài nhân (ty thể, lạp thể): di truyền theo dòng mẹ",
            "Hiện tượng di truyền tế bào chất: kết quả lai thuận ≠ lai nghịch"
          ]
        },
        {
          "name": "Đột biến gen và đột biến NST",
          "topics": [
            "Đột biến điểm: thay thế, thêm, mất nucleotide → ảnh hưởng khác nhau",
            "Đột biến thêm/mất: gây dịch khung đọc → thay đổi toàn bộ chuỗi sau đột biến",
            "Đột biến thay thế: chỉ ảnh hưởng 1 axit amin hoặc không đổi (đột biến đồng nghĩa)",
            "Đột biến số lượng NST: dị bội (2n±1, 2n±2), đa bội (3n, 4n...)",
            "Hội chứng Down (3 NST 21), Turner (45, X), Klinefelter (47, XXY)",
            "Cơ chế phát sinh: không phân ly NST trong giảm phân",
            "Thể đa bội: thường to hơn, sinh trưởng mạnh, bất thụ (lẻ bội)"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 250,
        "mini_tests": 5,
        "genetics_problems": 40
      },
      "weekly_structure": {
        "week_1": "Quy luật Menđen + tương tác gen + 60 câu",
        "week_2": "Liên kết gen + hoán vị + bản đồ gen + 70 câu",
        "week_3": "Di truyền giới tính + liên kết X + đột biến + 70 câu",
        "week_4": "Mini test 30 câu × 2 + giải đề di truyền tổng hợp + ôn lỗi sai"
      },
      "target_score": 7.0,
      "checkpoints": [
        "Phân tích và lập được sơ đồ lai đơn, lai kép chính xác",
        "Nhận biết kiểu tương tác gen từ tỉ lệ F2",
        "Tính đúng tần số hoán vị gen và tỉ lệ giao tử",
        "Giải bài toán di truyền giới tính không nhầm chiều truyền gen",
        "Làm 200–250 câu trắc nghiệm chuyên đề"
      ]
    },
    {
      "month": "Tháng 10",
      "phase": "Foundation 3",
      "focus": "Di truyền quần thể – Định luật Hardy-Weinberg",
      "modules": [
        {
          "name": "Cấu trúc di truyền quần thể",
          "topics": [
            "Quần thể giao phối tự do (ngẫu phối): tần số alen ổn định qua các thế hệ",
            "Quần thể tự phối: tỉ lệ dị hợp giảm 1/2 qua mỗi thế hệ",
            "Tần số alen: p (alen trội A) + q (alen lặn a) = 1",
            "Tần số kiểu gen: AA = p², Aa = 2pq, aa = q²",
            "Điều kiện nghiệm đúng Hardy-Weinberg: quần thể lớn, ngẫu phối, không đột biến, không di nhập, không chọn lọc"
          ]
        },
        {
          "name": "Bài toán Hardy-Weinberg",
          "topics": [
            "Dạng 1: Cho tần số kiểu gen → tính tần số alen",
            "Dạng 2: Cho tần số alen → tính tần số kiểu gen",
            "Dạng 3: Cho tỉ lệ kiểu hình → tính tần số alen (lặn) → tính p, q → tính 2pq",
            "Dạng 4: Gen liên kết X trong quần thể (tần số alen X^A, X^a)",
            "Dạng 5: Quần thể tự phối – tính tỉ lệ dị hợp sau n thế hệ: Aa = (1/2)ⁿ × H₀",
            "Kiểm tra quần thể có cân bằng H-W: p² + 2pq + q² = 1 và 2pq = 2√(p²·q²)"
          ]
        },
        {
          "name": "Các yếu tố ảnh hưởng đến cấu trúc di truyền quần thể",
          "topics": [
            "Đột biến: làm thay đổi tần số alen chậm",
            "Di nhập gen (gene flow): làm tăng đa dạng di truyền",
            "Chọn lọc tự nhiên: loại bỏ kiểu gen kém thích nghi → thay đổi tần số alen nhanh",
            "Phiêu bạt di truyền (genetic drift): xảy ra trong quần thể nhỏ",
            "Giao phối không ngẫu nhiên (tự phối, giao phối cận huyết): tăng đồng hợp, giảm dị hợp"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 200,
        "mini_tests": 4,
        "calculation_exercises": 30
      },
      "weekly_structure": {
        "week_1": "Khái niệm quần thể + tần số alen + quần thể tự phối + 50 câu",
        "week_2": "Định luật H-W + 5 dạng bài toán + 60 câu tính toán",
        "week_3": "Các yếu tố ảnh hưởng + ứng dụng chọn lọc + 50 câu",
        "week_4": "Mini test 25 câu × 2 + ôn lại dạng bài tính tần số gen"
      },
      "target_score": 7.5,
      "checkpoints": [
        "Tính đúng tần số alen và tần số kiểu gen trong quần thể H-W",
        "Giải thành thạo 5 dạng bài toán Hardy-Weinberg",
        "Tính tỉ lệ dị hợp trong quần thể tự phối sau n thế hệ",
        "Phân biệt quần thể ngẫu phối và tự phối",
        "Làm 180–200 câu trắc nghiệm chuyên đề"
      ]
    },
    {
      "month": "Tháng 11",
      "phase": "Foundation 4",
      "focus": "Tiến hóa – Bằng chứng – Cơ chế hình thành loài",
      "modules": [
        {
          "name": "Bằng chứng tiến hóa",
          "topics": [
            "Bằng chứng giải phẫu học so sánh: cơ quan tương đồng, cơ quan tương tự, cơ quan thoái hóa",
            "Cơ quan tương đồng: cùng nguồn gốc, khác chức năng → bằng chứng tiến hóa phân kỳ",
            "Cơ quan tương tự: khác nguồn gốc, cùng chức năng → tiến hóa hội tụ",
            "Bằng chứng phôi sinh học: các loài có phôi giống nhau ở giai đoạn đầu",
            "Bằng chứng địa lý sinh vật học: sự phân bố loài theo địa lý",
            "Bằng chứng hóa thạch: tuổi hóa thạch, trình tự xuất hiện loài",
            "Bằng chứng sinh học phân tử: ADN, protein giống nhau → cùng nguồn gốc"
          ]
        },
        {
          "name": "Học thuyết tiến hóa",
          "topics": [
            "Học thuyết Lamarck: di truyền tính thích nghi, sử dụng hay không sử dụng (sai)",
            "Học thuyết Darwin: biến dị cá thể, chọn lọc tự nhiên, di truyền tính trạng thích nghi",
            "Học thuyết tiến hóa tổng hợp hiện đại: đột biến, chọn lọc tự nhiên, cách ly là 3 nhân tố chính",
            "Tiến hóa nhỏ: thay đổi tần số alen trong quần thể (vi tiến hóa)",
            "Tiến hóa lớn: hình thành loài mới, bậc phân loại trên loài (đại tiến hóa)"
          ]
        },
        {
          "name": "Cơ chế tiến hóa",
          "topics": [
            "Đột biến: tạo nguyên liệu cho tiến hóa, làm thay đổi tần số alen chậm",
            "Chọn lọc tự nhiên: nhân tố định hướng tiến hóa; loại bỏ kiểu gen kém thích nghi",
            "Di nhập gen: làm thay đổi tần số alen đột ngột",
            "Phiêu bạt di truyền: ngẫu nhiên, xảy ra trong quần thể nhỏ",
            "Giao phối không ngẫu nhiên: không thay đổi tần số alen nhưng thay đổi tần số kiểu gen"
          ]
        },
        {
          "name": "Sự hình thành loài mới",
          "topics": [
            "Cách ly địa lý + chọn lọc tự nhiên → cách ly sinh sản → loài mới",
            "Hình thành loài bằng cách ly địa lý (loài ổ địa lý): chậm",
            "Hình thành loài bằng đa bội hóa: nhanh (con đường lai xa + đa bội hóa)",
            "Hình thành loài bằng cách ly sinh thái",
            "Cơ chế cách ly sinh sản: cách ly trước giao phối và sau giao phối",
            "Ví dụ thực tế: lúa mì hexaploid, cải củ lai bắp cải → aloployploid"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 180,
        "mini_tests": 4
      },
      "weekly_structure": {
        "week_1": "Bằng chứng tiến hóa (4 loại) + phân biệt tương đồng/tương tự + 50 câu",
        "week_2": "Học thuyết Lamarck + Darwin + tổng hợp hiện đại + 50 câu",
        "week_3": "Cơ chế tiến hóa + hình thành loài mới + 50 câu",
        "week_4": "Mini test 25 câu × 2 + ôn lại toàn bộ phần tiến hóa"
      },
      "target_score": 7.5,
      "checkpoints": [
        "Phân biệt cơ quan tương đồng và cơ quan tương tự, cho ví dụ",
        "So sánh học thuyết Darwin và tiến hóa tổng hợp hiện đại",
        "Giải nhanh câu hỏi lý thuyết tiến hóa trong <= 45 giây",
        "Hiểu các con đường hình thành loài mới",
        "Làm 150–180 câu trắc nghiệm chuyên đề"
      ]
    },
    {
      "month": "Tháng 12",
      "phase": "Foundation 5",
      "focus": "Sinh thái học – Quần thể – Quần xã – Hệ sinh thái",
      "modules": [
        {
          "name": "Cá thể và Quần thể sinh vật",
          "topics": [
            "Môi trường và các nhân tố sinh thái: vô sinh, hữu sinh, giới hạn sinh thái",
            "Ổ sinh thái: không gian sinh thái của loài",
            "Đặc trưng quần thể: mật độ, tỉ lệ giới tính, thành phần nhóm tuổi, tỉ lệ sinh – tử",
            "Tăng trưởng quần thể theo tiềm năng sinh học (J) và thực tế (S – logistic)",
            "Điều chỉnh số lượng cá thể: sức kháng của môi trường K",
            "Công thức tăng trưởng: Nt = N₀ × e^(r×t) (lý thuyết); thực tế: r giảm khi N→K"
          ]
        },
        {
          "name": "Quần xã sinh vật",
          "topics": [
            "Đặc trưng quần xã: thành phần loài, số lượng loài, loài ưu thế, loài đặc trưng",
            "Quan hệ giữa các loài: hỗ trợ (cộng sinh, hội sinh, hợp tác) và đối kháng (cạnh tranh, ký sinh, ăn thịt)",
            "Diễn thế sinh thái: diễn thế nguyên sinh và diễn thế thứ sinh",
            "Diễn thế nguyên sinh: từ môi trường trống → quần xã đỉnh cực",
            "Diễn thế thứ sinh: từ quần xã bị phá hủy → phục hồi",
            "Ý nghĩa: hiểu để khai thác và bảo vệ hợp lý"
          ]
        },
        {
          "name": "Hệ sinh thái và Sinh quyển",
          "topics": [
            "Thành phần hệ sinh thái: sinh vật sản xuất, tiêu thụ, phân giải; nhân tố vô sinh",
            "Chuỗi thức ăn và lưới thức ăn: tối đa 4–5 mắt xích",
            "Bậc dinh dưỡng: SVSX (bậc 1), SV tiêu thụ bậc 1, 2, 3...",
            "Hiệu suất sinh thái: 10% năng lượng truyền lên bậc dinh dưỡng tiếp theo",
            "Tháp sinh thái: tháp số lượng, tháp sinh khối, tháp năng lượng",
            "Chu trình sinh địa hóa: chu trình Carbon, Nito, Nước, Phốt pho",
            "Chu trình Carbon: quang hợp, hô hấp, phân giải, đốt nhiên liệu hóa thạch"
          ]
        },
        {
          "name": "Bài toán sinh thái – Năng lượng",
          "topics": [
            "Tính năng lượng cần thiết khi biết hiệu suất sinh thái",
            "Ví dụ: Người cần 1000 kJ → cần bò 1000/10% = 10.000 kJ → cần cỏ 10.000/10% = 100.000 kJ",
            "Bài toán tính số cá thể, sinh khối theo bậc dinh dưỡng",
            "Phân tích chuỗi thức ăn trong lưới thức ăn phức tạp"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 220,
        "mini_tests": 4,
        "calculation_exercises": 25
      },
      "weekly_structure": {
        "week_1": "Cá thể + Quần thể + đặc trưng + tăng trưởng + 60 câu",
        "week_2": "Quần xã + quan hệ giữa loài + diễn thế + 60 câu",
        "week_3": "Hệ sinh thái + chuỗi thức ăn + chu trình + 60 câu",
        "week_4": "Bài toán năng lượng sinh thái + mini test × 2 + ôn lỗi sai"
      },
      "target_score": 8.0,
      "checkpoints": [
        "Phân biệt các quan hệ sinh thái và cho ví dụ thực tế",
        "Hiểu diễn thế nguyên sinh và thứ sinh, nêu ví dụ",
        "Tính đúng năng lượng qua các bậc dinh dưỡng (hiệu suất 10%)",
        "Phân tích được chuỗi và lưới thức ăn",
        "Làm 200–220 câu trắc nghiệm chuyên đề"
      ]
    },
    {
      "month": "Tháng 1",
      "phase": "Foundation 6",
      "focus": "Ứng dụng Di truyền học – Công nghệ Sinh học",
      "modules": [
        {
          "name": "Công nghệ ADN tái tổ hợp",
          "topics": [
            "Enzyme cắt giới hạn (Restriction enzyme): cắt ADN tại trình tự đặc hiệu",
            "ADN ligase: nối các đoạn ADN",
            "Vector: plasmid, virus; mang gen ngoại lai vào tế bào chủ",
            "Quy trình tạo ADN tái tổ hợp: cắt → nối → đưa vào tế bào → chọn lọc",
            "PCR (Polymerase Chain Reaction): khuếch đại ADN in vitro",
            "Ứng dụng: sản xuất insulin, hormone tăng trưởng, vaccine"
          ]
        },
        {
          "name": "Công nghệ tế bào",
          "topics": [
            "Nhân giống vô tính in vitro (nuôi cấy mô tế bào)",
            "Công nghệ tế bào thực vật: lai tế bào sinh dưỡng, chuyển gen vào thực vật",
            "Công nghệ tế bào động vật: nhân bản vô tính (cừu Dolly)",
            "Tế bào gốc: tế bào gốc phôi và tế bào gốc trưởng thành"
          ]
        },
        {
          "name": "Chọn giống và Ứng dụng",
          "topics": [
            "Chọn giống vi sinh vật: dùng đột biến, chọn lọc",
            "Chọn giống thực vật: lai hữu tính, đột biến, công nghệ tế bào",
            "Chọn giống động vật: lai kinh tế (ưu thế lai F1)",
            "Ưu thế lai: con lai F1 vượt bố mẹ về sinh trưởng, sức đề kháng",
            "Giải thích ưu thế lai: giả thuyết siêu trội, giả thuyết tính trội"
          ]
        },
        {
          "name": "Bảo tồn đa dạng sinh học",
          "topics": [
            "Đa dạng gen, đa dạng loài, đa dạng hệ sinh thái",
            "Nguyên nhân suy giảm đa dạng sinh học: mất nơi ở, ô nhiễm, săn bắt, ngoại lai",
            "Biện pháp bảo tồn: bảo tồn nguyên vị (in situ) và chuyển vị (ex situ)",
            "Vườn quốc gia, khu bảo tồn: ý nghĩa"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 150,
        "mini_tests": 3
      },
      "weekly_structure": {
        "week_1": "Công nghệ ADN tái tổ hợp + PCR + ứng dụng + 50 câu",
        "week_2": "Công nghệ tế bào + nhân bản vô tính + 40 câu",
        "week_3": "Chọn giống + ưu thế lai + bảo tồn + 40 câu",
        "week_4": "Mini test tổng hợp ứng dụng × 2 + ôn lỗi sai"
      },
      "target_score": 8.0,
      "checkpoints": [
        "Hiểu quy trình tạo ADN tái tổ hợp và ứng dụng thực tế",
        "Giải thích cơ chế ưu thế lai",
        "Phân biệt bảo tồn in situ và ex situ",
        "Liên hệ thành tựu công nghệ sinh học thực tế",
        "Làm 100–150 câu trắc nghiệm chuyên đề"
      ]
    },
    {
      "month": "Tháng 2",
      "phase": "Advanced 1",
      "focus": "Ôn tổng hợp Di truyền – Giải đề chuyên đề",
      "modules": [
        {
          "name": "Tổng hợp di truyền học",
          "topics": [
            "Chuỗi bài toán phức hợp: gen trên NST thường + giới tính + ngoài nhân",
            "Bài toán nhiều gen quy định nhiều tính trạng",
            "Xác định quy luật di truyền từ kết quả lai",
            "Bài toán tính xác suất kiểu gen, kiểu hình đời con",
            "Dạng bài: cho kết quả F2 → xác định bố mẹ F1",
            "Bài toán di truyền liên kết + hoán vị gen phức tạp"
          ]
        }
      ],
      "practice_volume": {
        "mcq_questions": 200,
        "full_tests_genetics": 5,
        "error_review_sessions": 4
      },
      "weekly_structure": {
        "week_1": "Ôn di truyền phân tử + Menđen + 1 đề di truyền",
        "week_2": "Ôn liên kết gen + di truyền giới tính + 1 đề di truyền",
        "week_3": "Ôn quần thể H-W + đột biến + 1 đề di truyền",
        "week_4": "2 đề di truyền tổng hợp + tổng kết công thức"
      },
      "target_score": 8.0,
      "checkpoints": [
        "Làm 5 đề chuyên đề di truyền đạt >= 7.5/10",
        "Tổng hợp và thuộc toàn bộ công thức di truyền",
        "Giải được bài toán di truyền phức hợp (2–3 gen)",
        "Rút ngắn thời gian giải bài tập di truyền xuống 2–3 phút/bài"
      ]
    },
    {
      "month": "Tháng 3",
      "phase": "Advanced 2",
      "focus": "Ôn toàn bộ chủ đề – Luyện đề tổng hợp",
      "modules": [
        {
          "name": "Hệ thống toàn bộ kiến thức Sinh 12",
          "topics": [
            "Sơ đồ tư duy: Di truyền phân tử → Menđen → NST → Quần thể → Tiến hóa → Sinh thái",
            "Câu vận dụng cao: phân tích bảng số liệu, đồ thị sinh thái",
            "Bài toán di truyền kết hợp sinh thái",
            "Phân tích đề thi các năm: dạng câu vận dụng cao thường gặp"
          ]
        }
      ],
      "practice_volume": {
        "full_tests": 8,
        "error_review_sessions": 6
      },
      "weekly_structure": {
        "week_1": "2 đề full + ôn lại di truyền phân tử và Menđen",
        "week_2": "2 đề full + ôn lại sinh thái và tiến hóa",
        "week_3": "2 đề full + luyện câu vận dụng cao",
        "week_4": "2 đề full + tổng kết điểm yếu"
      },
      "target_score": 8.5,
      "checkpoints": [
        "Mỗi tuần 2–3 đề full 40 câu trong 50 phút",
        "Tập trung phân tích câu vận dụng cao",
        "Phân loại và ghi lỗi sai theo từng chương",
        "Ít nhất 2 đề đạt >= 8.0 trong tháng"
      ]
    },
    {
      "month": "Tháng 4",
      "phase": "Intensive Practice",
      "focus": "Luyện đề nâng cao chuẩn cấu trúc Bộ GD",
      "practice_volume": {
        "full_tests": 12,
        "error_review_sessions": 6
      },
      "weekly_structure": {
        "week_1": "3 đề full + phân tích lỗi sai chi tiết theo từng phần",
        "week_2": "3 đề full + ghi sổ tay thuật ngữ và công thức hay sai",
        "week_3": "3 đề full + luyện riêng câu 8–9–10 điểm",
        "week_4": "3 đề full + giảm thời gian xuống 45 phút"
      },
      "target_score": 8.5,
      "checkpoints": [
        "4 đề mỗi tuần trong đúng 50 phút",
        "Thống kê lỗi sai theo chương sau mỗi đề",
        "Ghi sổ tay thuật ngữ và công thức hay sai",
        "Ít nhất 3 đề liên tiếp đạt >= 8.5",
        "Xử lý nhanh bảng số liệu sinh thái trong <= 2 phút"
      ]
    },
    {
      "month": "Tháng 5",
      "phase": "Exam Simulation",
      "focus": "Thi thử – Tăng tốc – Cố định phương pháp",
      "practice_volume": {
        "full_tests": 15,
        "error_review_sessions": 6
      },
      "weekly_structure": {
        "week_1": "4 đề full bấm giờ 50 phút + phân tích",
        "week_2": "4 đề full + tập xử lý câu vận dụng cao 8–9–10",
        "week_3": "4 đề full + cố định phương pháp suy luận",
        "week_4": "3 đề full + ôn lại toàn bộ công thức di truyền và sinh thái"
      },
      "target_score": 9.0,
      "checkpoints": [
        "5–6 đề mỗi tuần trong 50 phút",
        "4 đề liên tiếp đạt >= 8.5",
        "Giải câu di truyền phức tạp trong <= 3 phút",
        "Phần sinh thái đạt >= 7/8 câu ổn định"
      ]
    },
    {
      "month": "Tháng 6",
      "phase": "Stabilization & Final Review",
      "focus": "Ổn định phong độ – Ôn công thức – Giữ tâm lý",
      "practice_volume": {
        "full_tests": 8,
        "error_review_sessions": 4
      },
      "weekly_structure": {
        "week_1": "2 đề full + ôn lại công thức và thuật ngữ chương 1–3",
        "week_2": "2 đề full + ôn lại chương 4–6 (quần thể, tiến hóa, sinh thái)",
        "week_3": "2 đề full nhẹ nhàng + đọc lại sổ tay công thức",
        "week_4": "2 đề + nghỉ 3–5 ngày trước kỳ thi"
      },
      "target_score": 9.0,
      "checkpoints": [
        "Không học kiến thức mới trong 2 tuần cuối",
        "Ôn lại toàn bộ công thức ADN, di truyền quần thể, sinh thái",
        "Đọc lại sổ tay thuật ngữ và công thức mỗi sáng",
        "Giữ nhịp làm đề 2–3 ngày/lần",
        "Nghỉ ngơi đủ giấc, tâm lý thoải mái trước kỳ thi"
      ]
    }
  ],
  "formula_summary": {
    "di_truyen_phan_tu": [
      "ADN: A=T, G≡X; A+G = T+X = N/2",
      "Chiều dài: L = (N/2) × 3,4 Å",
      "Số liên kết hydro: H = 2A + 3G",
      "Khối lượng: M = N × 300 đvC",
      "Nhân đôi n lần: số ADN con = 2ⁿ; số ADN mới hoàn toàn = 2ⁿ - 2",
      "Nucleotide tự do cần = N(2ⁿ - 1)",
      "mARN: số ribonucleotide = N/2",
      "Số axit amin = số bộ ba mã hóa - 1"
    ],
    "di_truyen_menden": [
      "Phân ly: F2 = 3 trội : 1 lặn (kiểu hình); 1:2:1 (kiểu gen)",
      "Phân ly độc lập: F2 = (3:1)ⁿ với n cặp gen",
      "Tương tác 9:7 = 9A_B_ : 7(A_bb + aaB_ + aabb)",
      "Tương tác 9:3:4 = 9A_B_ : 3A_bb : 4(aaB_ + aabb)",
      "Tỉ lệ hoán vị f: giao tử ABf/2 + abf/2 + Ab(1-f)/2 + aB(1-f)/2",
      "Tỉ lệ dị hợp tự phối: Aa(n) = (1/2)ⁿ × H₀"
    ],
    "di_truyen_quan_the": [
      "Hardy-Weinberg: p² + 2pq + q² = 1; p + q = 1",
      "p = tần số alen A; q = tần số alen a",
      "Từ kiểu hình: q = √(tần số aa); p = 1 - q",
      "Tự phối: Aa sau n thế hệ = (1/2)ⁿ × Aa₀",
      "Kiểm tra H-W: (2pq)² = 4p²q²"
    ],
    "sinh_thai": [
      "Hiệu suất sinh thái: 10% năng lượng truyền lên bậc trên",
      "Năng lượng bậc n = Năng lượng bậc (n-1) × 10%",
      "Nt = N₀ × e^(r×t) (tăng trưởng theo tiềm năng sinh học)",
      "Logistic: dN/dt = rN(K-N)/K"
    ]
  },
  "common_mistakes": [
    "Nhầm chiều tổng hợp ADN: mạch khuôn đọc 3'→5', mạch mới tổng hợp 5'→3'",
    "Nhầm U thay T trong mARN khi tính nucleotide",
    "Tương tác gen: nhầm tỉ lệ 9:3:4 và 9:3:3:1",
    "Di truyền liên kết X: nhầm chiều truyền gen từ bố/mẹ sang con",
    "Quần thể H-W: quên lấy căn bậc 2 khi tính q từ tần số aa",
    "Sinh thái: nhầm hiệu suất 10% – tính ngược (chia thay vì nhân)",
    "Tiến hóa: nhầm cơ quan tương đồng và tương tự",
    "Bài toán đa bội: nhầm số NST trong tế bào đa bội",
    "Hoán vị gen: quên chia đều tỉ lệ giao tử hoán vị cho 2 loại",
    "Diễn thế sinh thái: nhầm nguyên sinh (môi trường trống) và thứ sinh (đã có sinh vật)"
  ],
  "study_tips": [
    "Vẽ sơ đồ tư duy cho từng chương lớn, ôn lại 2 lần/tuần",
    "Với di truyền: lập bảng so sánh các quy luật (vị trí gen, tỉ lệ, điều kiện)",
    "Với bài toán quần thể: luôn kiểm tra quần thể có cân bằng H-W không trước khi tính",
    "Với sinh thái: vẽ sơ đồ chuỗi thức ăn trước khi tính năng lượng",
    "Học thuật ngữ sinh học theo nhóm: cùng gốc từ Latin/Hy Lạp",
    "Mỗi lần làm sai bài tập di truyền, phân tích bước nào sai và ghi lại",
    "Ôn lại công thức ADN mỗi sáng 5 phút – không để quên",
    "Với câu vận dụng cao: đọc kỹ dữ liệu, xác định quy luật trước khi tính"
  ]
};
