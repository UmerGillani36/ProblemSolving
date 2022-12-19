function alternatingCharacters(s) {
    let arr=s.split('');
    let len=arr.length;
    let count=0;
    let flag=false;
    let terminate=false;
  for(let i=0; i<len ; i++){
        if(arr.every(value => value === arr[i])){
            flag=true;
            break;
        }else{
            for(let j=i+1; j<len ; j++){
                if(arr[i] === arr[j]){
                    let temp=(arr.length)-2;
                    if(temp <= i){
                        terminate=true;
                    }
                    arr.splice(i,1);
                    count++;
                    i--;
                    break;
                }else{
                    break;
                }
            }
        }
        if(terminate){
            break;
        }
    }
    if(flag){
        return len-1;
    }else{
        return count;
    }
}

const result = alternatingCharacters('AAAAAAA');
console.log(result);