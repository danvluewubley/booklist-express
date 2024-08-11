import React from "react";
import useFetchBooks from "../hooks/useFetchBooks";

function Books() {
  const { listOfBooks, loading, error } = useFetchBooks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {listOfBooks.map((value, key) => (
        <div key={key}>
          <div className="title">{value.title}</div>
          <div className="body">{value.author}</div>
          <div className="footer">{value.genre}</div>
          <div className="footer">Added by: {value.User?.username}</div>
        </div>
      ))}
    </div>
  );
}

export default Books;
