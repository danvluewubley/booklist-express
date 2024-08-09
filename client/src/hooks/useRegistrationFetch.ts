import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../interfaces/auth";
import { register } from "../services/api";

function useRegistrationFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const postData = async (data: Data) => {
    setLoading(true);
    setError(null);

    if (sessionStorage.getItem("accessToken")) {
      setLoading(false);
      return setError("User cannot sign up if they are already logged in");
    }

    try {
      const response = await register(data);

      navigate("/login");
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

export default useRegistrationFetch;
