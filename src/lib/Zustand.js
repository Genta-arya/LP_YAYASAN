// src/store/useGlobalStore.js
import { getDataGlobal } from "@/Services/Global.Services";
import { create } from "zustand";



const useGlobalStore = create((set) => ({
  data: null,
  loading: true,

  setData: (newData) => set({ data: newData }),
  setLoading: (status) => set({ loading: status }),

  fetchData: async () => {
    set({ loading: true });
    try {
      const response = await getDataGlobal();
      
      set({ data: response.data.data });
    } catch (error) {
      console.error("Gagal fetch data SPMB:", error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useGlobalStore;
