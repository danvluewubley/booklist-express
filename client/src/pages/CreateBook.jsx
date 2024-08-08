import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function CreateBook() {
  let navigate = useNavigate();

  const initialValues = {
    title: "",
    author: "",
    genre: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(""),
    author: Yup.string().required(""),
    genre: Yup.string().required(""),
  });

  const handleSubmit = (data) => {
    const token = sessionStorage.getItem("accessToken");

    if (!token) {
      alert("You are not authenticated. Please log in again.");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const dataWithUserId = {
        ...data,
        UserId: userId,
      };

      axios
        .post("http://localhost:3001/book", dataWithUserId, {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            navigate("/");
          }
        })
    } catch (error) {
      alert("Authentication error. Please log in again.");
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="title"
          />
          <label>Author: </label>
          <ErrorMessage name="author" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="author"
            placeholder="author"
          />
          <label>Genre: </label>
          <ErrorMessage name="genre" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="genre"
            placeholder="genre"
          />
          <button type="submit">Add book</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateBook;
