const ReadBookCard = ({sbook}) => {
    // console.log(sbook);
    const{bookName,author,image,review,totalpages,rating}=sbook;
  return (
    <div className="shadow-xl card card-side bg-base-100">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>Review:{review}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
