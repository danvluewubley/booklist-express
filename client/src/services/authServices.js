import axios from "axios";

export const loginUser = async (data) => {
  const response = await axios.post(
    "http://localhost:3001/api/auth/login",
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const registerUser = async (data) => {
  const response = await axios.post(
    "http://localhost:3001/api/auth/signup",
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post(
    "http://localhost:3001/api/auth/logout",
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};