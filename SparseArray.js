function matchingStrings(stringList, queries) {
    let result = [];
    for(let query of queries){
        let count = 0;
        for(let value of stringList){
            if(query === value){
                count++;
            }
        }
        result.push(count);
    }
return result;
}

const result=matchingStrings(['ab','ab','abc'],['ab','abc','bc']);
console.log(result);