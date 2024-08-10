import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
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
    const token = sessionStorage.getItem("accessToken");

    if (!token) {
      alert("You are not authenticated. Please log in again.");
      return;
    }

    const decodedToken: any = jwtDecode(token);
    const userId = decodedToken.id;

    const dataWithUserId = {
      ...data,
      UserId: userId,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/books",
        dataWithUserId,
        {
          headers: {
            accessToken: token,
          },
        }
      );

      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/");
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