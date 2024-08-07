import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="username"
      />
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
