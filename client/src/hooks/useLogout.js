import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const useLogout = () => {
  const navigate = useNavigate();
  const { logout: contextLogout } = useAuth();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await axios.post(
          "http://localhost:3001/api/auth/logout",
          {},
          {
            withCredentials: true,
          }
        );
        contextLogout();
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    performLogout();
  }, [navigate, contextLogout]);
};

export default useLogout;