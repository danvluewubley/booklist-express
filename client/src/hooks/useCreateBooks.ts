import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BookData } from "../interfaces/BookData";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().required("Genre is required"),
});

const useCreateBooks = () => {
  const navigate = useNavigate();

  const initialValues: BookData = {
    title: "",
    author: "",
    genre: "",
  };

  const handleSubmit = async (
    data: BookData,
    { setSubmitting }: FormikHelpers<BookData>
  ) => {

    try {
      const response = await axios.post(
        "http://localhost:3001/api/books",
        data,
        {
          withCredentials: true,
        }
      );

      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/booklist");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.error || "An error occurred";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return { initialValues, validationSchema, handleSubmit };
};

export default useCreateBooks;
