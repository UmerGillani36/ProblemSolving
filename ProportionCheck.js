function plusMinus(arr) {

    let len= arr.length;
    let zeros=0;
    let positives=0;
    let negatives=0;
    let zr=0;
    let pr=0;
    let nr=0;
    
    for(let i=0; i<len ;i++){
        let val=arr[i];
        if(val==0){
            zeros+=1;
        }else if(val < 0){
            negatives+=1;
        }else{
            positives+=1;
        }
    }
        zr=zeros/len;
        pr=positives/len;
        nr=negatives/len;
        
        console.log(zr.toFixed(6))
        console.log(pr.toFixed(6))
        console.log(nr.toFixed(6))
        
    
    }
const arr=[1,1,0,-1,-1]
    plusMinus(arr);