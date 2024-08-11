import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useRegistrationFetch from "../../hooks/useRegistrationFetch";
import RegistrationHead from "./RegistrationHead";
import RegistrationInput from "./RegistrationInput";
import RegistrationButton from "./RegistrationButton";

function RegistrationForm() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const { postData, loading, error } = useRegistrationFetch();

  const handleSubmit = async (data) => {
    try {
      const result = await postData({
        username: data.username,
        password: data.password,
      });
      if (result) {
        console.log("Signup successful:", result);
      }
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex w-screen h-screen justify-center mt-[200px]">
        <div className="flex justify-center items-center w-[700px] h-[450px] bg-gray-300 rounded-lg shadow-2xl">
          <div className="flex flex-col w-[600px] h-[400px] bg-gray-100 rounded-2xl">
            <RegistrationHead />
            <div className="flex flex-col justify-center h-full">
              <RegistrationInput
                label="Username"
                name="username"
                placeholder="username"
                iconSrc="user.png"
                type="text"
              />
              <RegistrationInput
                label="Password"
                name="password"
                placeholder="password"
                iconSrc="key.png"
                type="password"
              />
              <RegistrationButton loading={loading} />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
