import TableContent from "./Table";
import "../assets/css/style.css";
import { getBooksList } from "../api/Api";
import { useEffect } from "react";

function Mainpage() {
  useEffect(() => {
    getBooksList();
  }, []);

  return (
    <div className="container">
      <div className="main">
        <p>List of Books</p>
        <TableContent />
      </div>
    </div>
  );
}

export default Mainpage;
