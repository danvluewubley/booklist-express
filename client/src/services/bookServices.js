import axios from "axios";

export const createBooks = async (data) => {
  const response = await axios.post("http://localhost:3001/api/books", data, {
    withCredentials: true,
  });

  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axios.delete(
    `http://localhost:3001/api/books/delete/${id}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const fetchBooks = async () => {
  const response = await axios.get("http://localhost:3001/api/books", {
    withCredentials: true,
  });
  return response.data;
};

export const fetchPersonalBooks = async () => {
  const response = await axios.get("http://localhost:3001/api/books/booklist", {
    withCredentials: true,
  });
  return response.data;
};

export const fetchBook = async (id) => {
  const response = await axios.get(`http://localhost:3001/api/books/${id}`, {
    withCredentials: true,
  });
  return response.data;
};