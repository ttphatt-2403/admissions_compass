// ================================================================
// SCORE FORMULA UTILITIES
// Tính điểm xét tuyển theo từng phương thức
// ================================================================

import type {
  AdmissionMethod,
  AdmissionMethodType,
  ScoreResult,
} from '../types/admissions';

/**
 * Thang điểm tối đa của từng phương thức xét tuyển
 */
export function getMethodMaxScore(
  type: AdmissionMethodType,
  examMaxScore?: number
): number {
  switch (type) {
    case 'thpt':
    case 'thpt_weighted':
    case 'hoc_ba':
      return 30;
    case 'dgnl_vnu_hn':
      return 150;
    case 'dgnl_vnu_hcm':
      return 1200;
    case 'dgtd_bk':
      return examMaxScore ?? 50;
    default:
      return 30;
  }
}

/**
 * Tính điểm xét tuyển theo phương thức cụ thể
 *
 * @param method    - phương thức xét tuyển
 * @param inputs    - điểm các môn { "Toán": 8.5, "Vật lý": 7.0, ... }
 *                    hoặc { "examScore": 95 } cho ĐGNL/ĐGTD
 * @param priority  - điểm ưu tiên (chỉ áp dụng cho THPT, tối đa 2.75)
 */
export function calculateAdmissionScore(
  method: AdmissionMethod,
  inputs: Record<string, number>,
  priority: number = 0
): number {
  const subjects = method.subjects ?? [];

  switch (method.type) {
    case 'thpt': {
      // Công thức tiêu chuẩn: Σ(điểm môn) + ưu tiên
      const sum = subjects.reduce((acc, s) => acc + (inputs[s.name] ?? 0), 0);
      return Math.min(sum + priority, 30 + 2.75); // cap tại 32.75
    }

    case 'thpt_weighted': {
      // Công thức nhân hệ số: Σ(điểm × weight) / Σ(weight) × 10 + ưu tiên
      // Ví dụ: Sư phạm Anh D01 → (Văn + Toán + Anh×2) / 4 × 10
      const totalWeight = subjects.reduce((acc, s) => acc + s.weight, 0);
      if (totalWeight === 0) return 0;
      const weightedSum = subjects.reduce(
        (acc, s) => acc + (inputs[s.name] ?? 0) * s.weight,
        0
      );
      const normalized = (weightedSum / totalWeight) * 3; // chuẩn hóa về thang 30
      return Math.min(normalized + priority, 30 + 2.75);
    }

    case 'dgnl_vnu_hn':
    case 'dgnl_vnu_hcm':
    case 'dgtd_bk': {
      // Bài thi riêng - nhập một điểm duy nhất, không có điểm ưu tiên
      return inputs['examScore'] ?? 0;
    }

    case 'hoc_ba': {
      // Xét học bạ: TB các môn trong tổ hợp × 3 (chuẩn hóa về thang 30) + ưu tiên
      if (subjects.length === 0) return inputs['examScore'] ?? 0;
      const avg =
        subjects.reduce((acc, s) => acc + (inputs[s.name] ?? 0), 0) /
        subjects.length;
      return Math.min(avg * 3 + priority, 30 + 2.75);
    }

    default:
      return 0;
  }
}

/**
 * Đánh giá khả năng trúng tuyển dựa trên chênh lệch điểm
 *
 * Ngưỡng được scale theo thang điểm của từng phương thức
 * (1 điểm THPT ≈ 5 điểm ĐGNL VNU HN ≈ 40 điểm ĐGNL VNU HCM ≈ 1.67 điểm ĐGTD)
 */
export function getProbability(
  yourScore: number,
  benchmarkScore: number,
  methodType: AdmissionMethodType,
  examMaxScore?: number
): 'high' | 'medium' | 'low' | null {
  const diff = yourScore - benchmarkScore;
  const maxScore = getMethodMaxScore(methodType, examMaxScore);

  // Tương đương 1 điểm trên thang 30
  const unitHigh = maxScore / 30;
  // Tương đương 0 điểm (ngang điểm chuẩn)
  const unitMid = 0;
  // Tương đương -1 điểm trên thang 30
  const unitLow = -maxScore / 30;

  if (diff >= unitHigh) return 'high';    // cao hơn điểm chuẩn ≥ 1 đơn vị
  if (diff >= unitMid) return 'medium';   // bằng hoặc cao hơn điểm chuẩn
  if (diff >= unitLow) return 'low';      // thấp hơn trong 1 đơn vị
  return null;                             // quá thấp, không gợi ý
}

/**
 * Lấy tên hiển thị cho loại phương thức xét tuyển
 */
export function getMethodTypeName(type: AdmissionMethodType): string {
  switch (type) {
    case 'thpt':          return 'Xét điểm THPT';
    case 'thpt_weighted': return 'Xét điểm THPT (có nhân hệ số)';
    case 'dgnl_vnu_hn':   return 'ĐGNL ĐHQG Hà Nội';
    case 'dgnl_vnu_hcm':  return 'ĐGNL ĐHQG TP.HCM';
    case 'dgtd_bk':       return 'ĐGTD Bách Khoa';
    case 'hoc_ba':        return 'Xét học bạ';
    default:              return 'Xét tuyển';
  }
}

/**
 * Tính toán đầy đủ kết quả cho một phương thức
 */
export function evaluateMethod(
  method: AdmissionMethod,
  inputs: Record<string, number>,
  priority: number = 0
): ScoreResult {
  const score = calculateAdmissionScore(method, inputs, priority);
  const maxScore = getMethodMaxScore(method.type, method.examMaxScore);
  const diff = score - method.benchmarkScore;
  const probability = getProbability(
    score,
    method.benchmarkScore,
    method.type,
    method.examMaxScore
  );

  return { score, methodType: method.type, maxScore, diff, probability };
}

/**
 * Kiểm tra inputs có đầy đủ không cho một phương thức
 */
export function isInputComplete(
  method: AdmissionMethod,
  inputs: Record<string, number>
): boolean {
  if (
    method.type === 'dgnl_vnu_hn' ||
    method.type === 'dgnl_vnu_hcm' ||
    method.type === 'dgtd_bk'
  ) {
    return (inputs['examScore'] ?? -1) >= 0;
  }
  const subjects = method.subjects ?? [];
  return subjects.every((s) => (inputs[s.name] ?? -1) >= 0);
}
