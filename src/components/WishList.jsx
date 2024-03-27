import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorewishbooks } from "../utility/localstorage2";
import WishbookCard from "./WishbookCard";

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
    // console.log(wishbooks);
    return (
        <div>
            {
                wishbooks.map(wbook=><WishbookCard key={wbook.bookId} wbook={wbook}></WishbookCard>)

                //readbooksnumbers.map(sbook=><ReadBookCard key={sbook.bookId} sbook={sbook}></ReadBookCard>)


            }
            
        </div>
    );
};

export default WishList;