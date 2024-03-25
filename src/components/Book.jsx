import { FaRegStar } from "react-icons/fa";
const Book = ({book}) => {
    const {bookName,author,category,image,publisher,rating,review,totalPages,yearOfPublishing, tags}=book;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Book"
          />
        </figure>
        <div className="card-body">
        <div className="card-actions justify-between">
            <div className="badge text-[#23BE0A]">{tags[0]}</div>
            <div className="badge text-[#23BE0A]">{tags[1]}</div>
          </div>
          <h2 className="card-title">
          {bookName}
          </h2>
          <p>By : {author}</p>
          <p>pu:{publisher}</p>
          <p>{review}</p>
          <hr />
          <div className="flex justify-around">
          <p>total pages:{totalPages}</p>
          <p> publish year: {yearOfPublishing}</p>
          </div>
          <div className="flex justify-between gap-40">
            <h2>{category}</h2>
            <p className="flex gap-1 items-center">{rating}<span><FaRegStar /></span> </p>
          </div>
        </div>
      </div>
    );
};

export default Book;