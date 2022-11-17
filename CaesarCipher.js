function caesarCipher(s, k) {
    let caesarVal='';
    for(let val of s){
       let ascii = val.charCodeAt();
       if(ascii >= 97 && ascii <=122){
           ascii+=k;
           if(ascii>122){
                let res=ascii%122;
               for(let i=0; i<122 ; i++){
                let add=res+96;
                   if(add>122){
                      res=add%122;
                   }else{
                     caesarVal+=String.fromCharCode(res+96);
                       break;
                   }
               }
           }
           else{
               caesarVal+=String.fromCharCode(ascii);
           }
       }
       else if(ascii >= 65 && ascii <=90){
                  ascii+=k;
                  if(ascii>90){
               let res=ascii%90;
                   for(let i=0; i<90 ; i++){
                let add=res+64;
                   if(add>90){
                      res=add%90;
                   }else{
                     caesarVal+=String.fromCharCode(res+64);
                       break;
                   }
               }
               caesarVal+=String.fromCharCode(res+64);
           }else{
               caesarVal+=String.fromCharCode(ascii);
           }
    
       }else{
               caesarVal+=val;
    
       }
       
       
    }
    return caesarVal;
    
    }
    
    let val=caesarCipher('www.abc.xy',87);
    console.log(val);
    