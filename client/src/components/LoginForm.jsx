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
    <div className="flex w-screen h-screen justify-center mt-[200px]">
      <div className="flex justify-center items-center w-[700px] h-[450px] bg-gray-300 rounded-lg shadow-2xl">
        <div className="flex flex-col w-[600px] h-[400px] bg-gray-100 rounded-2xl">
          <div className="flex justify-self-start items-center justify-center bg-gray-200 rounded-t-2xl h-24">
            <h2 className="text-2xl">Login to your account</h2>
          </div>
          <div className="flex flex-col justify-center h-full">
            <div className="flex justify-center mb-5">
              <img
                src="user.png"
                alt="profile img"
                className="w-16 ml-4 p-2 border-black border-2 rounded-l-md"
              />
              <input
                type="text"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                placeholder="username"
                className="bg-gray-100 pl-4 border-black border-l-0 border-2 rounded-r-md w-[300px] focus:outline-none"
              />
            </div>
            <div className="flex justify-center mb-10">
              <img
                src="key.png"
                alt="password img"
                className="w-16 ml-4 p-2 border-black border-2 rounded-l-md"
              />
              <input
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="password"
                className="bg-gray-100 pl-4 border-black border-l-0 border-2 rounded-r-md w-[300px] focus:outline-none"
              />
            </div>
            <button
              onClick={login}
              disabled={loading}
              className="w-min bg-gray-500 text-white px-10 py-2 rounded-md ml-[373px] hover:underline hover:bg-gray-400"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
