import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

interface Data {
  [key: string]: any;
}

function useLoginFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const postData = async (data: Data) => {
    setLoading(true);
    setError(null);

    try {
      if (sessionStorage.getItem("accessToken"))
        return setError("User is already logged in");

      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        data
      );

      sessionStorage.setItem("accessToken", response.data);
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
