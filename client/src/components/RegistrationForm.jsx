import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useRegistrationFetch from "../hooks/useRegistrationFetch";

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
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field autoComplete="off" name="username" placeholder="username" />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            name="password"
            placeholder="password"
            type="password"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Registering" : "Register"}
          </button>
        </Form>
      </Formik>
      {error && <p className="text-red-500">Error: {error}</p>}
    </>
  );
}

export default RegistrationForm;
