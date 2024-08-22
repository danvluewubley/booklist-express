import React, { useState, useEffect } from "react";
import useFetchBook from "../hooks/useFetchBook";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Modal from "../components/Modal";
import useEditBook from "../hooks/useEditBook";
import useDeleteBook from "../hooks/useDeleteBook";

function Book() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error } = useFetchBook(id);
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleSubmit: editBook, loading: isEditing } = useEditBook();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
  });
  const { handleSubmit: deleteBook } = useDeleteBook();

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || "",
        author: data.author || "",
        genre: data.genre || "",
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({ id, ...formData });
    closeModal();
    navigate(`/book/${id}`);
  };

  const handleDelete = () => {
    deleteBook(id);
    navigate("/booklist");
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.author}</p>
      <p>{data.genre}</p>
      {data.UserId === user && (
        <>
          <button
            onClick={() => handleDelete(id)}
            className="p-2 bg-red-500 text-white rounded"
          >Delete</button>
          <button
            onClick={openModal}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Edit
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="text-lg font-bold">Edit Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="author" className="block text-sm font-medium">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="genre" className="block text-sm font-medium">
                  Genre
                </label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="p-2 bg-green-500 text-white rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </Modal>
        </>
      )}
      <button
        onClick={() => navigate("/booklist")}
        className="p-2 bg-gray-500 text-white rounded"
      >
        Back
      </button>
    </div>
  );
}

export default Book;