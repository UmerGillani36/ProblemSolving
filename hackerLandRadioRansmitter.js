function hackerlandRadioTransmitters(x, k) {
    let flag=false;
    let sorted;
    for (let i = 0; i < x.length; i++) {
        if (x[i + 1] && x[i + 1] > x[i]) {
          continue;
        } else if (x[i + 1] && x[i + 1] < x[i]) {
          flag=true;
        }
      }
      if(flag){
          sorted=x.sort((a,b)=> a-b );
        }else{
          sorted=x;
      }
    console.log('Enter',sorted);
    let count=0;
    while(sorted.length !== 0){
        for(let [i,val] of sorted.entries()){
                if(sorted.includes(val- k) && sorted.includes(val + k)){
                    sorted.splice(sorted.indexOf(val-k),sorted.indexOf(val+k)+1)
                    count++;
                    break;
                }
                if(sorted.length === 2){
                    if(sorted.includes(val + k)){
                        sorted.splice(sorted.indexOf(val),sorted.indexOf(val+k)+1)
                        count++;
                        break;
                    }
                }
            }
        if(sorted.length === 1){
            sorted.pop();
            count++;
        }
        console.log('Enter');

    }
    return count;
}

// let result = hackerlandRadioTransmitters([7,2,4,6,5,9,12,11],2);
let result = hackerlandRadioTransmitters([1,2,3,4,5],1);
console.log(result);