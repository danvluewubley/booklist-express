import React from "react";
import CreateBookForm from "../components/CreateBookForm";
import useRedirectIfNotAuthenticated from "../hooks/useRedirectIfNotAuthenticated";

function CreateBook() {
  useRedirectIfNotAuthenticated();

  return (
    <>
      <CreateBookForm />
    </>
  );
}

export default CreateBook;
