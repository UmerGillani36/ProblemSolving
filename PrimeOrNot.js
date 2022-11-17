

const CheckPrime=(value)=>{

    let half=parseInt(value/2);
    let flag=false;
    for (let i = 2; i < half; i++) {
        
        if(value%i==0){
            flag=true;
        }
        
    }
    if (flag) {
        console.log(`${value} is not prime number`)
    } else {
        console.log(`${value} is a prime number`)
    }
}

let value=10;
CheckPrime(value);