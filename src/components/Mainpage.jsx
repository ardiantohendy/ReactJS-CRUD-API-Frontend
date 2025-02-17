import TableContent from "./Table";
import "../assets/css/style.css";
import { getBooksList, deleteBook } from "../api/Api";
import { useEffect, useState } from "react";

function Mainpage() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const result = await getBooksList();
    setBooksList(result);
  };

  const handleDelete = async (bookId) => {
    const success = await deleteBook(bookId);
    if (success) {
      alert("Book deleted successfully!");
      setBooksList(booksList.filter((book) => book.id !== bookId));
    } else {
      alert("Failed to delete book!");
    }
  };

  return (
    <div className="container">
      <div className="main">
        <p>List of Books</p>
        <TableContent books={booksList} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Mainpage;
