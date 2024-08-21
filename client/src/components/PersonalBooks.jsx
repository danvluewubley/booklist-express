import React, { useState, useEffect } from "react";
import useFetchPersonalBooks from "../hooks/useFetchPersonalBooks";
import axios from "axios";

function Books() {
  const { listOfBooks: initialBooks, loading, error } = useFetchPersonalBooks();
  const [listOfBooks, setListOfBooks] = useState(initialBooks);

  useEffect(() => {
    setListOfBooks(initialBooks);
  }, [initialBooks]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  async function deleteBook(id) {
    try {
      await axios.delete(`http://localhost:3001/api/books/delete/${id}`, {
        withCredentials: true,
      });

      setListOfBooks(listOfBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <>
      {listOfBooks.map((value, key) => (
        <div key={key}>
          <div className="title">{value.title}</div>
          <div className="body">{value.author}</div>
          <div className="footer">{value.genre}</div>
          <button className="footer" onClick={() => deleteBook(value.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default Books;