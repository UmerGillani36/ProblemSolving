function sockMerchant(n, ar) {
    //  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    // newArray=[ 10, 20, 30, 50 ]
    let count=0;
    let newArr=[...new Set(ar)];
    let newLen=newArr.length;
    let result=[];
    let pairs=0;
    for(let i=0 ; i<newLen ; i++){
        count=0;
        for(let j=i ; j<n ; j++){
            if(newArr[i]==ar[j]){
                count++;
            }
        }
        if(count%2==0){
            result.push(count/2);
        }else if((count-1)%2==0){
            result.push((count-1)/2);
            
        }
    }
    for(let i=0 ; i<result.length ; i++){
        pairs+=result[i]
    }
    console.log(pairs)
}
sockMerchant(11,[10, 20, 20, 10, 10, 30, 50, 10, 20,10,10]);