function hackerrankInString(s) {
    let hackerRank='hackerrank';
    let arr=[];
    let val;
    let flag=false;
    for(let char of hackerRank){
        for(let i=0;i<s.length;i++){
            if(char===s[i]){
                flag=true;
                if(char==='a'){
                    arr.push(i);
                }else{
                    val=i;
                }
            }else{
                flag=false;
            }
        }
        if(flag=false){
            return 'NO';
        }else{
            arr.push(val);
        }
    }
    let len=arr.length;
    console.log('Array',arr);
    let flag1=false;
 if(len<10){
     return 'NO';
 }
 for(let i=0; i<len; i++){
     if(arr[i]>arr[i+1]){
         return 'NO'
     }else{
         flag1=true;
     }
 }
 if(flag1){
     return 'YES';
 }

}

let result=hackerrankInString('hereiamstackerrank');
console.log(result);