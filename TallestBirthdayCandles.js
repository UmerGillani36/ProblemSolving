function birthdayCakeCandles(candles) {

    let n=candles.length;
    console.log(candles)
    let tallest=Math.max(...candles);
    console.log("tallest candle",tallest)
    let count=0;
    for(let i=0 ; i<n ; i++){
        if(candles[i]==tallest){
            count+=1;
            console.log("candles",candles[i])
        }
    }
    console.log(count)
    }
const candles=[3, 2, 1, 3]
    birthdayCakeCandles(candles);