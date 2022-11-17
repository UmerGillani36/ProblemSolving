function miniMaxSum(arr) {


    let sum=[];
    
    let n=arr.length;
    let result=0

    for(let i=0 ; i<n; i++){
         result=0
     for(let j=0 ; j<n; j++){
        
        if(i!=j){
          result+= arr[j];
          console.log(result)
        }
    }
    sum.push(result)  
}
    
    console.log(Math.min(...sum)," ",Math.max(...sum));
    }

    const arr=[1,2,3,4,5,6]
    miniMaxSum(arr);