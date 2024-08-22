import { useQuery } from "@tanstack/react-query";
import { fetchBook } from "../services/bookServices";

export const useFetchBook = (id) => {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBook(id),
    onError: (error) => console.error("Error fetching books", error),
  });
};

export default useFetchBook;