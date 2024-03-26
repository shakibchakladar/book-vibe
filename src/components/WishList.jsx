import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorewishbooks } from "../utility/localstorage2";
// import { getstorereadbooks } from "../utility/localStorage";

const WishList = () => {
    const books = useLoaderData();
    const [wishbooks,setwishbooks]=useState([])
    // console.log(books);
    useEffect(() => {
        const storereadIds = getstorewishbooks();
        if (books.length) {
            const wish = books.filter(book => storereadIds.includes(book.bookId)); 
            setwishbooks(wish);
        }
    }, [books]); 
    return (
        <div>
            <h2>Wishlist{wishbooks.length}</h2>
            
        </div>
    );
};

export default WishList;