import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReadBookCard = ({ sbook }) => {
    const {
        category,
        bookName,
        author,
        image,
        rating,
        tags,
        yearOfPublishing,
        publisher,
        totalPages,
        bookId
    } = sbook;

    return (
        <div className="gap-5 p-5 px-20 m-3 shadow-xl card card-side bg-base-100">
            <figure>
                <img
                    src={image}
                    alt="Book"
                />
            </figure>
            <div className="space-y-4 card-body gap-x-7">
                <h2 className="card-title">{bookName}</h2>
                <div className="flex gap-4">
                    <h2>Tags</h2>
                    {tags.map((tag, index) => (
                        <h2 key={index} className="text-green-400">#{tag}</h2>
                    ))}
                    <h2>Year of publish: {yearOfPublishing}</h2>
                </div>
                <div className="flex gap-5">
                    <h2>Publisher: {publisher}</h2>
                    <h2>Pages: {totalPages}</h2>
                </div>
                <hr />
                <p className="text-left ">Author: {author}</p>
                <div className="flex items-center gap-10 text-left">
                    <h2>Category: {category}</h2>
                    <h2>Rating: {rating}</h2>
                    <Link to={`/bookdetails/${bookId}`} className="btn">View details</Link>
                </div>
            </div>
        </div>
    );
};

ReadBookCard.propTypes = {
    sbook: PropTypes.shape({
        category: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        review: PropTypes.string,
        totalpages: PropTypes.number,
        rating: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        yearOfPublishing: PropTypes.number.isRequired,
        publisher: PropTypes.string.isRequired,
        totalPages: PropTypes.number.isRequired,
        bookId: PropTypes.string.isRequired
    }).isRequired
};

export default ReadBookCard;
