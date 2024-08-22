import React from "react";
import useFetchPersonalBooks from "../hooks/useFetchPersonalBooks";
import useDeleteBooks from "../hooks/useDeleteBook";

function Books() {
  const {
    data: listOfBooks,
    isLoading,
    isError,
    error,
  } = useFetchPersonalBooks();

  const { handleSubmit } = useDeleteBooks();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <div>
      {listOfBooks.map((value) => (
        <div key={value.id}>
          <div className="title">{value.title}</div>
          <div className="body">{value.author}</div>
          <div className="footer">{value.genre}</div>
          <button className="footer" onClick={() => handleSubmit(value.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Books;
