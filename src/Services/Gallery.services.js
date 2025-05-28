import axiosInstance from "./Axios/AxiosInstance";


export const GetGallery = async () => {
  try {
    const response = await axiosInstance.get("/setting/gallery");
    return response.data;
  } catch (error) {
    throw error;
  }
};