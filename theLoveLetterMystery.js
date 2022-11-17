function theLoveLetterMystery(s) {
   let count=0;
   let len=s.length;
   let reverse=s.split('').reverse().join('')
       
   let sAsscii=[];

   if(s===reverse){
    return count;
   }else{

    for(let i = 0; i < len; i++){
        let code = s.charCodeAt(i);
        sAsscii.push(code);
    }
    for(let i=0; i<Math.round(len/2); i++){
        if(sAsscii[i]!==sAsscii[(len-i)-1]){
            if(sAsscii[i]>sAsscii[(len-i)-1]){
                count+=sAsscii[i]-sAsscii[(len-i)-1];
            }else{
                count+=(sAsscii[(len-i)-1]-sAsscii[i]);
            }
        }
    }
   }

return count;
}

const result = theLoveLetterMystery('abc');

console.log(result);