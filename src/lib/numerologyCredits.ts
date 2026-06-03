import {
  doc, getDoc, updateDoc, increment,
  collection, addDoc, serverTimestamp, query, orderBy, getDocs,
} from 'firebase/firestore';
import { db } from './firebase';

export interface UserCredit {
  uid: string;
  email: string;
  displayName: string;
  credits: number;
  totalPurchased: number;
  createdAt: unknown;
}

export interface Transaction {
  id: string;
  credits: number;
  method: 'demo' | 'vnpay' | 'momo' | 'stripe';
  priceVnd: number;
  createdAt: unknown;
}

/** Lấy số credits hiện tại của user */
export async function getCredits(uid: string): Promise<number> {
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return 0;
  return (snap.data().credits as number) ?? 0;
}

/** Thêm credits sau khi thanh toán thành công */
export async function addCredits(uid: string, amount: number, method: Transaction['method'] = 'demo', priceVnd = 0) {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, {
    credits: increment(amount),
    totalPurchased: increment(amount),
  });
  await addDoc(collection(db, 'users', uid, 'transactions'), {
    credits: amount,
    method,
    priceVnd,
    createdAt: serverTimestamp(),
  });
}

/** Trừ 1 credit khi xem bản đồ số học */
export async function consumeCredit(uid: string): Promise<boolean> {
  const credits = await getCredits(uid);
  if (credits < 1) return false;
  await updateDoc(doc(db, 'users', uid), { credits: increment(-1) });
  return true;
}

/** [Admin] Lấy danh sách tất cả users */
export async function getAllUsers(): Promise<UserCredit[]> {
  const snap = await getDocs(collection(db, 'users'));
  return snap.docs.map(d => ({ uid: d.id, ...d.data() } as UserCredit));
}

/** [Admin] Lấy lịch sử giao dịch của một user */
export async function getUserTransactions(uid: string): Promise<Transaction[]> {
  const q = query(collection(db, 'users', uid, 'transactions'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Transaction));
}

/** Gói credits demo */
export const CREDIT_PACKAGES = [
  { id: 'starter', name: 'Khởi đầu', credits: 3,  priceVnd: 15000, label: '15K' },
  { id: 'popular', name: 'Phổ biến', credits: 10, priceVnd: 49000, label: '49K', badge: 'Hot' },
  { id: 'premium', name: 'Cao cấp', credits: 30, priceVnd: 129000, label: '129K' },
];
