function gameOfThrones(s) {

    let countChar=[];
    let count;
    let temp = s;
    let isDiviByOdd = 0;
    let flag=false;

    temp=[...new Set(temp.split(''))];
    temp=temp.join('');

    for(let val of temp){
        count = 0;
        for(let ele of s){
            if(val === ele){
                count++;
            }
        }
        countChar.push(count);
    }

    for(let val of countChar){
        if(isDiviByOdd===2){
            flag=true;
            break;
        }
        if(val%2 !==0){
            isDiviByOdd++;
        }
    }
    if(flag){
        return 'NO'
    }else{
        return 'YES';
    }
    
}


let result = gameOfThrones('cdefghmnopqrstuvw');
console.log(result);
