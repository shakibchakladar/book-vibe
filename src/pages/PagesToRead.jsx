import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorereadbooks } from "../utility/localStorage";
import PagesToreadCard from "../components/PagesToreadCard";

const PagesToRead = () => {
    const books = useLoaderData();
    const [chartbooks, setChartBooks] = useState([]);
    
    useEffect(() => {
      const storereadIds = getstorereadbooks();
      
      if (books && books.length) {
        const readBooks = books.filter(book => storereadIds.includes(book.bookId)); 
        setChartBooks(readBooks);
      }
    }, [books]); 
    return (
        <div>
            <PagesToreadCard chartbooks={chartbooks}></PagesToreadCard>
            
        </div>
    );
};

export default PagesToRead;