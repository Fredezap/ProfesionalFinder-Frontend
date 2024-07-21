import { create } from 'zustand';

let timeoutId;

export const createMessageSlice = create((set) => ({

  messages: [],

  addMessage: (message) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    set(() => ({
      messages: [message],
    }));

    timeoutId = setTimeout(() => {
      set(() => ({
        messages: [],
      }));
    }, 15000);
  },

}));