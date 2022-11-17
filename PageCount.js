function pageCount(n, p) {
    if(n%2!=0){
        console.log(Math.floor(p/2))
        console.log(Math.floor((n-p)/2))
        return Math.min(Math.floor(p/2),Math.floor((n-p)/2)) 
        }
     else{ 
        console.log(Math.floor(p/2))
        console.log(Math.ceil((n-p)/2))
        return Math.min(Math.floor(p/2),Math.ceil((n-p)/2)) 
        }
}
const value=pageCount(6,2);
console.log(value)