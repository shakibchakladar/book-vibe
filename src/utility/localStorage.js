const getstorereadbooks=()=>{
    const storedreadbooks=localStorage.getItem('read-books');
    if(storedreadbooks){
        return JSON.parse(storedreadbooks);
    }
    return [];
}


const savereadbooks=id=>{
    const storedreadbooks=getstorereadbooks();
    const exist=storedreadbooks.find(readId => readId===id);
    if(!exist){
        storedreadbooks.push(id);
        localStorage.setItem('read-books',JSON.stringify(storedreadbooks))
    }

}

export{savereadbooks,getstorereadbooks}