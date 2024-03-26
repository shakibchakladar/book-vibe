
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorereadbooks } from "../utility/localStorage";
import ReadBookCard from "./ReadBookCard";

const ReadBooks = () => {
    const books = useLoaderData();
    const [readbooksnumbers,setReadbooksNumber]=useState([])
    // console.log(books);
    useEffect(() => {
        const storereadIds = getstorereadbooks();
        if (books.length) {
            const readBooks = books.filter(book => storereadIds.includes(book.bookId)); 
            setReadbooksNumber(readBooks);
        }
    }, [books]); 
    return (
        <div>
            <h2>Read book:{readbooksnumbers.length}</h2>
            {
                readbooksnumbers.map(sbook=><ReadBookCard key={sbook.bookId} sbook={sbook}></ReadBookCard>)
            }
        </div>
    );
};

export default ReadBooks;
