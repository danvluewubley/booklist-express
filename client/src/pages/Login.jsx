import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { username: username, password: password };
    axios
      .post("http://localhost:3001/auth/login", data)
      .then((response) => {
        sessionStorage.setItem("accessToken", response.data);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.error;
        alert(errorMessage);
      });
  };

  return (
    <div>
      <label>Login</label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="username"
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="password"
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
