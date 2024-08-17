import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/auth/logout",
          {},
          {
            withCredentials: true,
          }
        );
        navigate("/login");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }

    logout();
  }, [navigate]);
};


export default useLogout;
