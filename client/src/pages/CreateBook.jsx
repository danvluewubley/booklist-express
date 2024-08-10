import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useCreateBooks from "../hooks/useCreateBooks";

function CreateBook() {
  const { initialValues, validationSchema, handleSubmit } = useCreateBooks();

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
          <Field autoComplete="off" name="author" placeholder="author" />
          <label>Genre: </label>
          <ErrorMessage name="genre" component="span" />
          <Field autoComplete="off" name="genre" placeholder="genre" />
          <button type="submit">Add book</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateBook;
