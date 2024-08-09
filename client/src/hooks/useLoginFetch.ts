import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/api";

function useLoginFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const postData = async (data: { username: string; password: string }) => {
    setLoading(true);
    setError(null);

    try {
      const token = await login(data);
      sessionStorage.setItem("accessToken", token);
      navigate("/book");
    } catch (error) {
      setError(error as string);
      console.log("Login error: ", error)
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
}

export default useLoginFetch;