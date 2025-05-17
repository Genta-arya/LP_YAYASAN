import axiosInstance from "./Axios/AxiosInstance";


export const GetSpmb = async () => {
  try {
    const response = await axiosInstance.get("/spmb");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const GetDetailSpmb = async (data) => {
  try {
    const response = await axiosInstance.get("/spmb/" + data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
