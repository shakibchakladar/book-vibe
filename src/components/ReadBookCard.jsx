import { Link } from "react-router-dom";

const ReadBookCard = ({sbook}) => {
    // console.log(sbook);
    const{category, bookName,author,image,review,totalpages,rating,tags,yearOfPublishing,publisher,totalPages,bookId}=sbook;
  return (
    <div className="gap-5 p-5 px-20 m-3 shadow-xl card card-side bg-base-100">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="space-y-4 card-body gap-x-7">
        <h2 className="card-title">{bookName}</h2>
        <div className="flex gap-4">
          <h2>Tag</h2>
          <h2 className="text-green-400">#{tags[0]}</h2>
          <h2 className="text-green-400">#{tags[1]}</h2>
          <h2>Year of publish :{yearOfPublishing}</h2>
        </div>
        <div className="flex gap-5">
          <h2>Publisher : {publisher}</h2>
          <h2>Page : {totalPages}</h2>
        </div>
        <hr />
        <p className="text-left ">author:{author}</p>
        <div className="flex items-center gap-10 text-left">
          <h2>Category:{category}</h2>
          <h2>Rating:{rating}</h2>
          <Link to={`/bookdetails/${bookId}`} className="btn">View details</Link>
        </div>


      </div>
    </div>
  );
};

export default ReadBookCard;
