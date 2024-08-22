import React, { useState } from "react";
import useLoginFetch from "../../hooks/useLoginFetch";
import LoginHead from "./LoginHead";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit, loading } = useLoginFetch();

  const onSubmit = () => {
    handleSubmit({ username, password });
  };

  return (
    <div className="flex w-screen h-screen justify-center mt-[200px]">
      <div className="flex justify-center items-center w-[700px] h-[450px] bg-gray-300 rounded-lg shadow-2xl">
        <div className="flex flex-col w-[600px] h-[400px] bg-gray-100 rounded-2xl">
          <LoginHead />
          <div className="flex flex-col justify-center h-full">
            <LoginInput
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              iconSrc="user.png"
            />
            <LoginInput
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              iconSrc="key.png"
              type="password"
            />
            <LoginButton onClick={onSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;