function repeatedString(s, n) {

    let len=s.length;
    let val=Math.floor(n/len);
    let remind=Math.floor(n%len);
    let count=0;
    for(let i=0; i<len ; i++){
        if(s[i]==='a'){
            count++;
        }
    }
    
    let result=count*val;
    for(let i=0 ; i<remind ; i++){
        if(s[i]==="a"){
            result=result+1;
        }
    }
return result;
   
    
}

let result=repeatedString("aba",10);
console.log(result);