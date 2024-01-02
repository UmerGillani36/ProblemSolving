var truncateSentence = function(s, k) {
    let words = "";
   
    s.split(' ').forEach((value, index)=>{
       if(index < k){
        words += value + ' ';
       }
   });

   return words.trim()
};
const result = truncateSentence('Edit and Run your Javascript code using JS Online Compiler', 3);