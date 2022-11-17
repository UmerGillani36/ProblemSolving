function extraLongFactorials(n) {
    let factorial=1;
    for(let i=n ; i>=1; i--){
       factorial*=i;
    }
    console.log(BigInt(factorial))
}
extraLongFactorials(25)