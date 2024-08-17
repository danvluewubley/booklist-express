import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useCreateBooks from "../hooks/useCreateBooks";

function CreateBookForm() {
  const { initialValues, validationSchema, handleSubmit, loading } =
    useCreateBooks();
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex w-screen h-screen justify-center mt-[200px]">
          <div className="flex justify-center items-center w-[700px] h-[500px] bg-gray-300 rounded-lg shadow-2xl">
            <div className="flex flex-col w-[600px] h-[450px] bg-gray-100 rounded-2xl">
              <div className="flex justify-center bg-gray-200 rounded-t-2xl h-24 items-center">
                <h1 className="text-2xl">Create Book</h1>
              </div>
              <div className="flex flex-col justify-center h-full items-center w-[80%] self-center">
                <ErrorMessage
                  name="title"
                  component="span"
                  className="text-red-500 self-start"
                />
                <Field
                  autoComplete="off"
                  id="inputCreatePost"
                  name="title"
                  placeholder="Title"
                  className="w-full h-12 border-gray-300 border-2 rounded-md pl-4 focus:outline-none mb-4"
                />
                <ErrorMessage
                  name="author"
                  component="span"
                  className="text-red-500 self-start"
                />
                <Field
                  autoComplete="off"
                  name="author"
                  placeholder="Author"
                  className="w-full h-12 border-gray-300 border-2 rounded-md pl-4 focus:outline-none mb-4"
                />
                <ErrorMessage
                  name="genre"
                  component="span"
                  className="text-red-500 self-start"
                />
                <Field
                  autoComplete="off"
                  name="genre"
                  placeholder="Genre"
                  className="w-full h-12 border-gray-300 border-2 rounded-md pl-4 focus:outline-none mb-4"
                />
                <button
                  type="submit"
                  className="w-min bg-gray-500 text-white px-4 py-2 rounded-md text-nowrap text-center self-end"
                >
                  {loading ? "Adding Book" : "Add Book"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default CreateBookForm;
