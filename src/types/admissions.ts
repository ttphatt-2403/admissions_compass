// ================================================================
// ADMISSIONS TYPE SYSTEM
// Hỗ trợ đa phương thức xét tuyển đại học Việt Nam
// ================================================================

/**
 * Các phương thức xét tuyển phổ biến tại Việt Nam
 */
export type AdmissionMethodType =
  | 'thpt'          // Điểm thi THPT Quốc gia tiêu chuẩn (3 môn bằng nhau, thang 30)
  | 'thpt_weighted' // THPT có nhân hệ số (một số môn nhân đôi, thang 30 sau chuẩn hóa)
  | 'dgnl_vnu_hn'   // ĐGNL ĐHQG Hà Nội (thang 150)
  | 'dgnl_vnu_hcm'  // ĐGNL ĐHQG TP.HCM (thang 1200)
  | 'dgtd_bk'       // ĐGTD Bách Khoa Hà Nội (thang 50)
  | 'hoc_ba';       // Xét học bạ THPT (TB học kỳ, thang 30)

/**
 * Một môn học với trọng số trong tổ hợp xét tuyển
 */
export interface SubjectWeight {
  name: string;   // Tên môn: "Toán", "Vật lý", "Tiếng Anh"...
  weight: number; // 1 = bình thường, 2 = nhân đôi
}

/**
 * Một phương thức xét tuyển cụ thể của một ngành
 *
 * Ví dụ THPT A00:
 *   { type: 'thpt', combinationId: 'A00',
 *     subjects: [{name:'Toán',weight:1},{name:'Vật lý',weight:1},{name:'Hóa học',weight:1}],
 *     benchmarkScore: 28.5 }
 *
 * Ví dụ THPT nhân hệ số - Sư phạm Anh D01 (Tiếng Anh × 2):
 *   { type: 'thpt_weighted', combinationId: 'D01',
 *     subjects: [{name:'Ngữ văn',weight:1},{name:'Toán',weight:1},{name:'Tiếng Anh',weight:2}],
 *     benchmarkScore: 28.0 }
 *   → Công thức: (Văn + Toán + Anh×2) / 4 × 10 + ưu tiên
 *
 * Ví dụ ĐGNL ĐHQG HN:
 *   { type: 'dgnl_vnu_hn', examLabel: 'Điểm ĐGNL', examMaxScore: 150,
 *     benchmarkScore: 95 }
 *
 * Ví dụ ĐGTD Bách Khoa:
 *   { type: 'dgtd_bk', examLabel: 'Điểm ĐGTD', examMaxScore: 50,
 *     benchmarkScore: 42.5 }
 */
export interface AdmissionMethod {
  id: string;              // Unique ID: "thpt-a00", "dgnl-vnu-hn", "dgtd-bk"
  type: AdmissionMethodType;
  name: string;            // Tên hiển thị: "Xét thi THPT (A00)", "Xét ĐGNL VNU"...

  // ── Dành cho THPT / thpt_weighted ──────────────────────────────
  combinationId?: string;       // "A00", "A01", "D01"...
  subjects?: SubjectWeight[];   // môn thi + trọng số

  // ── Dành cho bài thi riêng (ĐGNL, ĐGTD) ───────────────────────
  examLabel?: string;      // Label nhập điểm: "Điểm ĐGNL (0–150)"
  examMaxScore?: number;   // Thang điểm tối đa: 150, 1200, 50...

  // ── Điểm chuẩn & chỉ tiêu ─────────────────────────────────────
  benchmarkScore: number;
  quota?: number;
  trend: 'up' | 'down' | 'stable';
}

/**
 * Kết quả tính điểm từ một phương thức xét tuyển
 */
export interface ScoreResult {
  score: number;
  methodType: AdmissionMethodType;
  maxScore: number;
  diff: number;              // yourScore - benchmarkScore
  probability: 'high' | 'medium' | 'low' | null;
}

/**
 * Gợi ý ngành phù hợp sau khi tính điểm
 */
export interface MajorSuggestion {
  majorName: string;
  majorCode: string;
  university: string;
  universityShortName: string;
  universityId: string;
  ranking: number;
  method: AdmissionMethod;
  yourScore: number;
  probability: 'high' | 'medium' | 'low';
}
