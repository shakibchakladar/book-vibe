import { useLoaderData } from "react-router-dom";
import Book from "./Book";


const Books = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold p-5">
        Books:{books.length}
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-3">
        {
           books.map(book=><Book key={book.bookId} book={book}></Book>)
        }
      </div>
      
    </div>
  );
};

export default Books;
