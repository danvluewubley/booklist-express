import { useEffect, useState } from "react";
import axios from "axios";
import { BookData } from "../interfaces/BookData";

interface UseFetchBooksResult {
  listOfBooks: BookData[];
  loading: boolean;
  error: string | null;
}

const useFetchBooks = (): UseFetchBooksResult => {
  const [listOfBooks, setListOfBooks] = useState<BookData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<BookData[]>(
          "http://localhost:3001/api/books"
        );
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

export default useFetchBooks;