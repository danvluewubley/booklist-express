import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().required("Genre is required"),
});

const useCreateBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    author: "",
    genre: "",
  };

  const handleSubmit = async (
    data,
    { setSubmitting }
  ) => {
    try {
      setLoading(true)

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
      setLoading(false)
    }
  };

  return { initialValues, validationSchema, handleSubmit, loading };
};

export default useCreateBooks;
