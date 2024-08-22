import React from "react";
import useFetchBooks from "../hooks/useFetchBooks";

function Books() {
  const { data: listOfBooks, isLoading, isError, error } = useFetchBooks();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {listOfBooks.map((value, key) => (
        <div key={key}>
          <div>{value.title}</div>
          <div>{value.author}</div>
          <div>{value.genre}</div>
          <div>Added by: {value.User?.username}</div>
        </div>
      ))}
    </div>
  );
}

export default Books;