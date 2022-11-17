const circularArrayRotation=(a,k,queries)=>{
    let result=[]
    
    for(let i=0; i<k ; i++){
        a.unshift(a.pop());
        
    }
    for(let i=0; i<queries.length ; i++){
       result.push( a[queries[i]]) 
    }
    
  return result;
}

let  value=circularArrayRotation([3,4,5],2,[1,2]);
console.log(value);