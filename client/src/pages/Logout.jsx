import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken')
    
    if (!accessToken){
      alert("User is not logged in");
      navigate("/login");
      return;
    }

    sessionStorage.removeItem("accessToken");
    navigate("/login");

  }, []);

  return null;
}

export default Logout;
