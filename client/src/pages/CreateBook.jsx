import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useCreateBook from "../hooks/useCreateBook"; // Import the custom hook

function CreateBook() {
  const handleCreateBook = useCreateBook(); // Use the custom hook

  const initialValues = {
    title: "",
    author: "",
    genre: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    genre: Yup.string().required("Genre is required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleCreateBook}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="Title"
          />
          <label>Author: </label>
          <ErrorMessage name="author" component="span" />
          <Field autoComplete="off" name="author" placeholder="Author" />
          <label>Genre: </label>
          <ErrorMessage name="genre" component="span" />
          <Field autoComplete="off" name="genre" placeholder="Genre" />
          <button type="submit">Add book</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateBook;
