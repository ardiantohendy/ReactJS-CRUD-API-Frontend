import React from "react";
import { deleteBook } from "../api/Api";

function TableContent({ books }) {
  // const handleDelete = async (bookId) => {
  //   const success = await deleteBook(bookId);
  //   if (success) {
  //     alert("Book deleted successfully!"); // Panggil ulang fetch data setelah delete
  //   } else {
  //     alert("Failed to delete book!");
  //   }
  // };

  return (
    <>
      <table className="table-books">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published Year</th>
            <th>Created Date</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.published_date}</td>
                <td>{book.created_at}</td>
                <td>
                  <a className="edit" href="#">
                    Edit
                  </a>
                  <button className="delete" onClick={() => deleteBook(book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No books available...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default TableContent;
