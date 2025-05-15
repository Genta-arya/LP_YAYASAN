import axiosInstance from "./Axios/AxiosInstance";

export const GetBerita = async (data) => {
  try {
    const response = await axiosInstance.get("/berita/informasi/" + data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetRandomBerita = async () => {
  const data = 'user'
  try {
    const response = await axiosInstance.post("/berita/",{
      role: data
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getDetailBerita = async (slug) => {
  try {
    const response = await axiosInstance.get("/berita/detail/" + slug);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
