import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useRegistrationFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const postData = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/signup",
        data, {
          withCredentials: true,
        }
      );
      navigate("/booklist");
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

export default useRegistrationFetch;
