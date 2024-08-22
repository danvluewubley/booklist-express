import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authServices";
import { useMutation } from "@tanstack/react-query";

function useRegistrationFetch() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onError: (error) => {
      console.error("Error registering:", error);
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  const handleSubmit = (data) => {
    mutation.mutate(data);
  };

  return { handleSubmit, loading: mutation.isLoading };
}

export default useRegistrationFetch;
