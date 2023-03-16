function bigSorting(unsorted) {
    if(unsorted.length > 1){
        let sorted = unsorted.sort((a,b)=>a-b);
        return sorted;
    }else if(unsorted.length === 1){
        return unsorted
    }else{
        return ['']
    }
}

const result = bigSorting(['31415926535897932384626433832795', '3', '150', '31415926535897932384626433832795','1','5','12423542342394820938409238409238409']);
console.log(result)