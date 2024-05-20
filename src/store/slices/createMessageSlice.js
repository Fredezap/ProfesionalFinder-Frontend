import { create } from 'zustand';

export const createMessageSlice = create((set, get) => ({
  messages: [],

  addMessage: (message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));

    // delete the message after 10 sec
    setTimeout(() => {
      get().deleteMessage(message);
    }, 10000);
  },

  deleteMessage: (paramMessage) => set((state) => ({
    messages: state.messages.filter((message) => message !== paramMessage),
  })),
}));
