import TableContent from "./Table";
import "../assets/css/style.css";

function Mainpage() {
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
