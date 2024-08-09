import React, { useEffect, useState } from "react";
import axios from "axios";

function Booklist() {
  const [listOfBooks, setListOfBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((response) => {
        console.log(response.data);
        setListOfBooks(response.data);
      })
      .catch((error) => {
        const errorMessage = error?.response?.data?.error;
        alert(errorMessage);
      });
  }, []);

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
