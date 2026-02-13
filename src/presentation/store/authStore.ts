import { create } from 'zustand';
import { User } from '@/domain/user/User'; // Using the alias here

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isLoggedIn: false,
  user: null,
  login: (token: string, user: User) => set({ token, user, isLoggedIn: true }),
  logout: () => set({ token: null, user: null, isLoggedIn: false }),
}));
