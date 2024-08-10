import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const deleteCookie = (name) => {
      document.cookie = `${name}=; Max-Age=0; path=/;`;
    };

    deleteCookie("accessToken");

    navigate("/login");
  }, [navigate]);
};

export default useLogout;