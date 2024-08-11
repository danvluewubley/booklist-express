import React from "react";

const LoginInput = ({ label, value, onChange, iconSrc, type = "text" }) => {
  return (
    <div className="flex justify-center mb-5">
      <img
        src={iconSrc}
        alt={`${label} icon`}
        className="w-16 ml-4 p-2 border-black border-2 rounded-l-md"
      />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label.toLowerCase()}
        className="bg-gray-100 pl-4 border-black border-l-0 border-2 rounded-r-md w-[300px] focus:outline-none"
      />
    </div>
  );
};

export default LoginInput;