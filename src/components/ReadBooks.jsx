
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorereadbooks } from "../utility/localStorage";
import ReadBookCard from "./ReadBookCard";

const ReadBooks = () => {
    const books = useLoaderData();
    const [readbooksnumbers,setReadbooksNumber]=useState([])
    const [displayread,setDisplayread]=useState([]);
    const handlereadFilter=(filter)=>{
        if(filter==='rating'){
            const ratingRead=readbooksnumbers.filter(readbook=>readbook.rating>0)
            setDisplayread(ratingRead);
        }

    }
     
    useEffect(() => {
        const storereadIds = getstorereadbooks();
        if (books.length) {
            const readBooks = books.filter(book => storereadIds.includes(book.bookId)); 
            setReadbooksNumber(readBooks);
        }
    }, [books]); 
    return (
        <div className="">
            {
                readbooksnumbers.map(sbook=><ReadBookCard key={sbook.bookId} sbook={sbook} handlereadFilter={handlereadFilter}></ReadBookCard>)
            }
        </div>
    );
};

export default ReadBooks;
