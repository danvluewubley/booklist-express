import React from "react";

const RegistrationButton = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-min bg-gray-500 text-white px-10 py-2 rounded-md ml-[353px] hover:underline hover:bg-gray-400"
    >
      {loading ? "Registering" : "Register"}
    </button>
  );
};

export default RegistrationButton;