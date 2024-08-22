import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useRegistrationFetch from "../../hooks/useRegistrationFetch";
import RegistrationHead from "./RegistrationHead";
import RegistrationInput from "./RegistrationInput";
import RegistrationButton from "./RegistrationButton";

function RegistrationForm() {
  const { handleSubmit, loading } = useRegistrationFetch();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Username is required"),
    password: Yup.string().min(4).max(20).required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      <Form className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[700px] h-[450px] bg-gray-300 rounded-lg shadow-2xl">
          <div className="flex flex-col w-[600px] h-[400px] bg-gray-100 rounded-2xl">
            <RegistrationHead />
            <div className="flex flex-col justify-center h-full">
              <div>
                <Field
                  name="username"
                  as={RegistrationInput}
                  label="Username"
                  placeholder="username"
                  iconSrc="user.png"
                />
              </div>
              <div>
                <Field
                  name="password"
                  as={RegistrationInput}
                  label="Password"
                  placeholder="password"
                  iconSrc="key.png"
                  type="password"
                />
              </div>
              <RegistrationButton loading={loading} />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
