import axios from "axios";

export const getBooksList = async () => {
  const books = await axios.get("http://127.0.0.1:8000/");

  return books.data;
};
