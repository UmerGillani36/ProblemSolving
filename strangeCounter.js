function strangeCounter(t) {
    // let value=3;
    // let time = t;
    // let i = 1;
    // let prev = 3;
    // while(i !== time){ 
    //     if(value === 1){ 
    //         prev *= 2;  
    //         value = prev;
    //     }else if(value > 1){ 
    //         value -= 1;  
    //     }
    //     i += 1; 
    // }
    // return value;

    let value = 3;
    while (t > value) { // 6 > 3
        t -= value;   // 6-3 = 3
        value *= 2;    // 6
    }
    return value - t + 1; // 6 - 5 + 1 = 4
}

const result = strangeCounter(6);

console.log(result);