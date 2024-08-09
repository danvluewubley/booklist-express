import React from "react";
import useBookList from "../hooks/useBookList";

function Booklist() {
  const listOfBooks = useBookList();

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

export default Booklist;