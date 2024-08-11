import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useRegistrationFetch from "../../hooks/useRegistrationFetch";
import RegistrationHead from "./RegistrationHead";

const RegistrationInput = ({ label, name, placeholder, iconSrc, type }) => {
  return (
    <div className="flex flex-col mb-5">
      <div className="flex self-center">
        <img
          src={iconSrc}
          alt={`${label} icon`}
          className="w-16 ml-4 p-2 border-black border-2 rounded-l-md"
        />
        <Field
          autoComplete="off"
          name={name}
          placeholder={placeholder}
          className="bg-gray-100 pl-4 border-black border-l-0 border-2 rounded-r-md w-[300px] focus:outline-none"
          type={type}
        />
      </div>
      <ErrorMessage name="username" component="span" className="ml-[130px] text-red-500"/>
    </div>
  );
};

export default RegistrationInput;
