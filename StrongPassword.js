function minimumNumber(n, password) {
  let missingNumber = 0;
  let check = { isCapital : false, isSmall : false, isSymbol : false, isNumber : false}
  let length = n;
  if (length < 6) {
    return 6-length;
  }
  for(let val of password){
    if(check.isCapital && check.isNumber && check.isSmall && check.isSymbol){
        break;
    }
      if(['1','2','3','4','5','6','7','8','9','0'].includes(val)){
         check = {...check, isNumber : true} 
  
     }
    else if(['!','@','#','$','%','^','&','*','(',')','-','+'].includes(val)){
         check = {...check, isSymbol : true} 
 
     }
    else if(val.toUpperCase() === val){
       check = {...check, isCapital : true} 
    }
    else if(val.toLowerCase() === val){
        check = {...check, isSmall : true} 

    }
  }
console.log('check',check);
  Object.values(check).map((val)=>{
    if(val === false){
        missingNumber++;
    }
  })
  return missingNumber;
}

const result = minimumNumber(11, "#HackerRank");
console.log("result = ", result);
