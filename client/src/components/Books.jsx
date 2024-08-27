import React from "react";
import useFetchBooks from "../hooks/useFetchBooks";
import { useNavigate } from "react-router-dom";

function Books() {
  const { data: listOfBooks, isLoading, isError, error } = useFetchBooks();

  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-5 gap-4">
      {listOfBooks.map((value, key) => (
        <div
          key={key}
          onClick={() => navigate(`/book/${value.id}`)}
          className="flex mx-auto bg-gray-200 h-[200px] w-[80%] justify-center items-center"
        >
          <div className="flex flex-col w-[80%] h-[80%] justify-around">
            <p>Title: {value.title}</p>
            <p>Author: {value.author}</p>
            <p>Genre: {value.genre}</p>
            <p>Added by: {value.User?.username}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
