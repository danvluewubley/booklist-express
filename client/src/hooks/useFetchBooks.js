import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../services/bookServices";

const useFetchBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
    onError: (error) => console.error("Error fetching books", error),
  });
};

export default useFetchBooks;