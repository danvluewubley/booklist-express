import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/authServices";

function useLoginFetch() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      console.error("Error logging in:", error);
    },
    onSuccess: () => {
      login();
      navigate("/book");
    },
  });

  const handleSubmit = (data) => {
    mutation.mutate(data);
  };

  return { handleSubmit, loading: mutation.isLoading };
}

export default useLoginFetch;
