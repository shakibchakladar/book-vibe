import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";

const BookDetails = () => {
    const books=useLoaderData();
    const bookId=useParams()
    const id = bookId.bookId;
    // console.log(id);
    const book=books.find(book=>book.bookId==id)
    // console.log(book);
    return (
        <div>
            <DetailCard key={book.bookId} book={book}></DetailCard>
        </div>
    );
};

export default BookDetails;