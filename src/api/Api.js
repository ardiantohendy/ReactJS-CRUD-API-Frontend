import axios from "axios";

export const getBooksList = async () => {
  try {
    const books = await axios.get("http://127.0.0.1:8000/");
    return books.data;
  } catch (error) {
    console.error("Error getting book list", error);
    return false;
  }
};

export const deleteBook = async (bookId) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/delete/${bookId}/`);
    return true;
  } catch (error) {
    console.error("Error deleting book", error);
    return false;
  }
};
