import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPersonalBooks = () => {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/api/books/booklist", {
          withCredentials: true,
        });
        setListOfBooks(response.data);
      } catch (error) {
        const errorMessage =
          error?.response?.data?.error || "Error fetching books";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { listOfBooks, loading, error };
};

export default useFetchPersonalBooks;
