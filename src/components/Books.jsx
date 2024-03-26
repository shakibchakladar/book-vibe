import { useLoaderData } from "react-router-dom";
import Book from "./Book";


const Books = () => {
  const books = useLoaderData();
  // console.log(books);
  return (
    <div>
      <h2 className="p-5 text-4xl font-bold text-center">
        Books
      </h2>
      <div className="grid grid-cols-1 gap-5 my-3 md:grid-cols-3">
        {
           books.map(book=><Book key={book.bookId} book={book}></Book>)
        }
      </div>
      
    </div>
  );
};

export default Books;
