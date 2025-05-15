import axiosInstance from "./Axios/AxiosInstance";

export const CreateAnalytic = async (data) => {
  try {
    const response = await axiosInstance.post("/analytic", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const LikeHandler = async (data) => {
  try {
    const response = await axiosInstance.post("/analytic/like", data);
    console.log("API Success:", response); // Tambahin ini
    return response.data;
  } catch (error) {
    console.error("API Error in LikeHandler:", error.response?.status); // Tambahin ini
    throw error;
  }
};
