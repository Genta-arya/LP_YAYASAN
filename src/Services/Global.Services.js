import axiosInstance from "./Axios/AxiosInstance";

export const getDataGlobal = async () => {
  try {
    const response = await axiosInstance.get("/setting/metadata");
    return response;
  } catch (error) {
    throw error;
  }
};


export const getDataProfile = async () => {
  try {
    const response = await axiosInstance.get("/setting/profil");
    return response.data;
  } catch (error) {
    throw error;
    
  }
}