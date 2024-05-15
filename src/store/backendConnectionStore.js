import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3000/api/salute";
const SUCCESS_MESSAGE = "Success al realizar consulta al backend: Response: ";
const ERROR_MESSAGE = "Error en catch al realizar consulta al backend";

const useBackendConnectionStore = create((set) => ({
  text: "",
  fetchText: async () => {
    try {
      const response = await axios.get(API_URL);
      set({ text: `${SUCCESS_MESSAGE}${JSON.stringify(response.data.data)}` });
    } catch (error) {
      const errorMessage = `${ERROR_MESSAGE}: ${error.message}`;
      set({ text: errorMessage });
      console.error(errorMessage);
    }
  },
}));

export default useBackendConnectionStore;
