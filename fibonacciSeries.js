function fab(x){
    let arr=[];
    let next=1;
    let prev=0;
    if(x <= 0) return 0;
    if(x===1) return 1;
    arr.push(0,1);
    for(let i=0 ; i<=x ; i++){
        next=next+prev;
        arr.push(next);
        prev=arr[i+1];
    }
    return arr;
}

console.log(fab(6));