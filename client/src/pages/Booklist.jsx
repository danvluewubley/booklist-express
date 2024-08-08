import React, { useEffect, useState } from "react";
import axios from "axios";

function Booklist() {
  const [listOfBooks, setListOfBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/book").then((response) => {
      setListOfBooks(response.data);
    });
  }, []);

  return (
    <div>
      {listOfBooks.map((value, key) => {
        return (
          <div key={key}>
            <div className="title"> {value.title} </div>
            <div className="body">{value.author}</div>
            <div className="footer">{value.genre}</div>
            <div className="footer">{value.id}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Booklist;
