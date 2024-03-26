import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookName,author,category,image,publisher,rating,review,totalPages,yearOfPublishing, tags,bookId}=book;
    return (
       <Link to={`/bookdetails/${bookId}`}>
        <div className="border shadow-xl card w-96 bg-base-100 border-solid border-[#23BE0A] p-2">
        <figure>
          <img
            src={image}
            alt="Book"
          />
        </figure>
        <div className="card-body">
        <div className="justify-between card-actions">
            <div className="badge text-[#23BE0A]">{tags[0]}</div>
            <div className="badge text-[#23BE0A]">{tags[1]}</div>
          </div>
          <h2 className="card-title">
          {bookName}
          </h2>
          <p>By : {author}</p>
          <p>pu:{publisher}</p>
          {/* <p>{review}</p> */}
          <hr />
          <div className="flex justify-around">
          <p>total pages:{totalPages}</p>
          <p> publish year: {yearOfPublishing}</p>
          </div>
          <div className="flex justify-between gap-40">
            <h2>{category}</h2>
            <p className="flex items-center gap-1">{rating}<span><FaRegStar /></span> </p>
          </div>
        </div>
      </div></Link>
    );
};

export default Book;