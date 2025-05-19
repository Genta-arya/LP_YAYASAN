// src/store/useGlobalStore.js
import { create } from "zustand";

const useGlobalStore = create((set) => ({
  data: null,
  loading: true,

  setData: (newData) => set({ data: newData }),
  setLoading: (status) => set({ loading: status }),
}));

export default useGlobalStore;
