import React, { useState } from "react";
import useLoginFetch from "../hooks/useLoginFetch";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { postData, loading, error } = useLoginFetch();

  const handleLogin = async (event) => {
    event.preventDefault();
    await postData({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="username"
            value={username}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password"
            value={password}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && (
        <p className="text-red-500">
          {typeof error === "string"
            ? error
            : error?.error || "An error occurred."}
        </p>
      )}{" "}
    </div>
  );
}

export default Login;