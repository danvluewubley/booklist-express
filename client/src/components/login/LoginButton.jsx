import React from "react";

const LoginButton = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-min bg-gray-500 text-white px-10 py-2 rounded-md ml-[373px] hover:underline hover:bg-gray-400"
    >
      Login
    </button>
  );
};

export default LoginButton;
