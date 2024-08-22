import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteBook } from "../services/bookServices";

const useDeleteBook = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["personalBooks"]);
    },
    onError: (error) => {
      console.error("Error deleting book:", error);
    },
  });

  const handleSubmit = (id) => {
    mutation.mutate(id);
  };

  return {
    handleSubmit,
  };
};

export default useDeleteBook;
