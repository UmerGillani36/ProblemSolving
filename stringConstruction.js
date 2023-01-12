function stringConstruction(s) {
    let length = s.length;
    let result='';
    let count=0;
    for(let val of s){
        if(!(result.includes(val))){
         count++;   
         result+=val;
        }
    }
    return count;
}

const result = stringConstruction('abcdsa');

console.log('result =',`$${result}`);