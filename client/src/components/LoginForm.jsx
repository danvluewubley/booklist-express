import React from "react";
import { useState } from "react";
import useLoginFetch from "../hooks/useLoginFetch";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { postData, loading, error } = useLoginFetch();

  const login = async () => {
    try {
      const result = await postData({
        username: username,
        password: password,
      });

      if (result) {
        console.log("Login successful:", result);
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
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

      <button onClick={login} disabled={loading}>
        {loading ? "Logging in" : "Login"}
      </button>
      <p className="text-red-500">{error}</p>
    </div>
  );
}

export default LoginForm;
