import TableContent from "./Table";
import "../assets/css/style.css";
import { getBooksList } from "../api/Api";
import { useEffect, useState } from "react";

function Mainpage() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    getBooksList().then((result) => {
      setBooksList(result);
    });
  }, []);

  return (
    <div className="container">
      <div className="main">
        <p>List of Books</p>
        <TableContent books={booksList} />
      </div>
    </div>
  );
}

export default Mainpage;
