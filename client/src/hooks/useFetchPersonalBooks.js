import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchPersonalBooks } from "../services/bookServices";

const useFetchPersonalBooks = () => {
  return useQuery({
    queryKey: ["personalBooks"],
    queryFn: fetchPersonalBooks,
    onError: (error) => console.error("Error fetching books", error),
  });
};

export default useFetchPersonalBooks;
