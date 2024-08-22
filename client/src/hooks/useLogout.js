import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../services/authServices";

const useLogout = () => {
  const navigate = useNavigate();
  const { logout: contextLogout } = useAuth();

  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      contextLogout();
      navigate("/login");
    },
    onError: (error) => {
      console.error("Error logging out:", error);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  return mutation;
};

export default useLogout;