import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function useLoginFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const postData = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        data,
        {
          withCredentials: true,
        }
      );
      console.log("Cookie was received and validated:", response.data);
      login();
      navigate("/book");

      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || "An error occurred";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
}

export default useLoginFetch;
