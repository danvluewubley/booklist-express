import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const handleSubmit = (data) => {
    axios
      .post("http://localhost:3001/api/auth/signup", data)
      .then(() => {
        navigate("/booklist")
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.error;
        alert(errorMessage);
      });
  };

  return (
    <div className="createPostPage">
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
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
