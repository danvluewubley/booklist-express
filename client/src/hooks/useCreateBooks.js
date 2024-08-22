import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createBooks } from "../services/bookServices";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().required("Genre is required"),
});

const useCreateBooks = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createBooks,
    onError: (error) => {
      alert(error.message);
    },
    onSuccess: () => {
      navigate("/booklist");
    },
  });

  const handleSubmit = (data) => {
    mutation.mutate(data);
  };

  return {
    initialValues: { title: "", author: "", genre: "" },
    validationSchema,
    handleSubmit,
    loading: mutation.isLoading,
  };
};

export default useCreateBooks;
