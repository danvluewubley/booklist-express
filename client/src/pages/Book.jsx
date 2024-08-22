import useFetchBook from "../hooks/useFetchBook";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Book() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error } = useFetchBook(id);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.author}</p>
      <p>{data.genre}</p>
      <button onClick={() => navigate("/booklist")}>Back</button>
    </div>
  );
}

export default Book;
