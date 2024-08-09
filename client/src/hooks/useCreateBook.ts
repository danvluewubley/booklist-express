import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Corrected import
import Book from "../interfaces/books";
import DecodedToken from "../interfaces/auth";

function useCreateBook() {
  const navigate = useNavigate();

  const handleCreateBook = (data: Book) => {
    const token = sessionStorage.getItem("accessToken");

    if (!token) {
      alert("You are not authenticated. Please log in again.");
      return;
    }

    try {
      const decodedToken = jwtDecode<DecodedToken>(token);
      const userId = decodedToken.id;

      const dataWithUserId = {
        ...data,
        UserId: userId,
      };
      
      axios
        .post("http://localhost:3001/api/books", dataWithUserId, {
          headers: {
            accessToken: token,
          },
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          const errorMessage = error?.response?.data?.error;
          alert(errorMessage);
        });
    } catch (error) {
      console.error("Failed to decode token:", error);
      alert("Error decoding token. Please log in again.");
    }
  };

  return handleCreateBook;
}

export default useCreateBook;