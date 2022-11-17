console.log('This functon will count the trues in an array');

const countArray=(values)=>{
    let count=0;
   values.forEach(element => {
    if(element===true){
        count+=1;
    }
} 
      
   );
   return count;
}

const values=[true,false,false,true,true,false,true]

let count=countArray(values);
console.log(`There are ${count} number of true in an array `);