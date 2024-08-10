import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Data } from "../interfaces/Data";

function useLoginFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const postData = async (data: Data) => {
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
      navigate("/booklist");

      return response.data;
    } catch (error: any) {
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
