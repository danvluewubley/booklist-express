import { useState, useEffect } from "react";
import axios from "axios";
import Book from "../interfaces/books";
import {fetchBooks} from '../services/api'

function useBookList(): Book[] {
  const [listOfBooks, setListOfBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const token = sessionStorage.getItem("accessToken");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Book[]>(
          "http://localhost:3001/api/books"
        );
        setListOfBooks(response.data);
      } catch (error) {
        const errorMessage =
          error?.response?.data?.error ||
          "An error occurred while fetching books.";
        setError(errorMessage); 
      }
    };

    fetchBooks();
  }, [token]);

  return listOfBooks;
}

export default useBookList;
