export interface SchoolAccount {
  schoolId: string;
  schoolName: string;
  logoColor: string; // màu chủ đạo cho dashboard
}

// Map email → thông tin trường
// Tạo tài khoản tương ứng trong Firebase Console > Authentication > Add user
export const SCHOOL_ACCOUNTS: Record<string, SchoolAccount> = {
  "fpt@dashboard.com": {
    schoolId: "FPT",
    schoolName: "Đại học FPT",
    logoColor: "#f97316", // orange
  },
  "rmit@dashboard.com": {
    schoolId: "RMIT",
    schoolName: "Đại học RMIT Việt Nam",
    logoColor: "#dc2626", // red
  },
};

export function getSchoolByEmail(email: string): SchoolAccount | null {
  return SCHOOL_ACCOUNTS[email.toLowerCase()] ?? null;
}
