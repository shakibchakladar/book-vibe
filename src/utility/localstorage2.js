const getstorewishbooks=()=>{
    const storedwish=localStorage.getItem('wish-books');
    if(storedwish){
        return JSON.parse(storedwish);
    }
    return [];
}


const savewishbooks=id=>{
    const storedwishbooks=getstorewishbooks();
    const exist=storedwishbooks.find(readId => readId===id);
    if(!exist){
        storedwishbooks.push(id);
        localStorage.setItem('wish-books',JSON.stringify(storedwishbooks))
    }

}

export{savewishbooks,getstorewishbooks}