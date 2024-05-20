import { create } from 'zustand';
import user from '../models/user.json';

export const createUserSlice = create((set) => ({
  user: user,

  addUser: (username, email) => set(() => ({
    user: { username, email }
  })),

  updateUserEmail: (email) => set((state) => ({
    user: { ...state.user, email }
  })),

  updateUserUsername: (username) => set((state) => ({
    user: { ...state.user, username }
  })),
}));
