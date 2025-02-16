function TableContent() {
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
          <tr>
            <td>Empty...</td>
            <td>Empty...</td>
            <td>Empty...</td>
            <td>Empty...</td>
            <td>
              <a className="edit" href="#">
                Edit
              </a>
              <a className="delete" href="#">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableContent;
