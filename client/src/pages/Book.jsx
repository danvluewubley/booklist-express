import useFetchBook from "../hooks/useFetchBook";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Book() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error } = useFetchBook(id);
  const { user } = useAuth();

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.author}</p>
      <p>{data.genre}</p>
      {data.UserId === user && (
        <button onClick={() => navigate(`/`)}>Edit</button>
      )}
      <button onClick={() => navigate("/booklist")}>Back</button>
    </div>
  );
}

export default Book;