import axios from "axios";

export const getBooksList = async () => {
  //   const books = await axios.get("http://127.0.0.1:8000/");
  //   console.log(books.data);

  try {
    const response = await axios.get("http://127.0.0.1:8000/");
    console.log("Fetch data:", response.data, "Type:", typeof response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};
