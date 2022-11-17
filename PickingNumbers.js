function pickingNumbers(a) {
    // Write your code here
    a.sort((a,b)=>a-b);
    
    let prev = a[0];
    let sum = 1;
    let resArr = [];
    
    if(Math.abs(a[0] - a[1]) <= 1) {
        sum = 0;
    }
    
    a.forEach((n, i)=>{

        if(Math.abs(n - prev) <= 1) {
            sum = sum + 1;
        } else {
            resArr.push(sum);
            sum = 1;
            prev = n;
        }
    });
    resArr.push(sum);
    
    resArr.sort((a,b)=>a-b);
    return resArr[resArr.length - 1];
    }

    // pickingNumbers([4, 6, 5, 3, 3, 1])
    pickingNumbers([1,1,2,2,4,4,5,5,5])