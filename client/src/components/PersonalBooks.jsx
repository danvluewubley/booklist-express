import React from "react";
import useFetchPersonalBooks from "../hooks/useFetchPersonalBooks";
import useDeleteBooks from "../hooks/useDeleteBook";

function Books() {
  const {
    data: listOfBooks,
    isLoading,
    isError,
    error,
  } = useFetchPersonalBooks();

  const { handleSubmit } = useDeleteBooks();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-5 gap-4">
      {listOfBooks.map((value) => (
        <div
          key={value.id}
          className="flex flex-col mx-auto bg-gray-200 h-[200px] w-[80%] justify-center items-center"
        >
          <div className="flex flex-col w-[80%] h-[80%] justify-around">
            <p>{value.title}</p>
            <p>{value.author}</p>
            <p>{value.genre}</p>
            <button className="footer" onClick={() => handleSubmit(value.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
