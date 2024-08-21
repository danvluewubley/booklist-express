import React from "react";
import useFetchPersonalBooks from "../hooks/useFetchPersonalBooks";

function Books() {
  const { listOfBooks, loading, error } = useFetchPersonalBooks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {listOfBooks.map((value, key) => (
        <div key={key}>
          <div className="title">{value.title}</div>
          <div className="body">{value.author}</div>
          <div className="footer">{value.genre}</div>
        </div>
      ))}
    </>
  );
}

export default Books;