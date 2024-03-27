const getstorewishbooks=()=>{
    const storedwishbooks=localStorage.getItem('wish-books');
    if(storedwishbooks){
        return JSON.parse(storedwishbooks);
    }
    return [];
}


const savewishbooks=id=>{
    const storedwishbooks=getstorewishbooks();
    // const exist=storedreadbooks.find(readId => readId===id);
    const exist=storedwishbooks.find(wishId => wishId===id);
    if(!exist){
        storedwishbooks.push(id);
        // localStorage.setItem('read-books',JSON.stringify(storedreadbooks))
        localStorage.setItem('wish-books',JSON.stringify(storedwishbooks));
    }

}

// export{savereadbooks,getstorereadbooks}
export{savewishbooks,getstorewishbooks}