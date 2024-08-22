import { useNavigate } from "react-router-dom";
import { editBook } from "../services/bookServices";
import { useMutation } from "@tanstack/react-query";

function useEditBook() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ id, ...data }) => editBook(id, data),
    onError: (error) => {
      console.error("Error editing book:", error);
    },
    onSuccess: (response) => {
      console.log(response);
      navigate(`/booklist`);
    },
  });

  const handleSubmit = (data) => {
    mutation.mutate(data);
  };

  return { handleSubmit, loading: mutation.isLoading };
}

export default useEditBook;