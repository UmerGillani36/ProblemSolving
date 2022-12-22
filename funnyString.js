function funnyString(s) {
    let length = s.length;
    let values = [];
    let reverse = [];
    let flag = false; 

    for(let i=0; i<length; i++){
        values.push(s.charCodeAt(i));
    }

    reverse = [...values];
    reverse.reverse();
    for(let i=0; i<length-1; i++){
        let abs1 = Math.abs(values[i] - values[i+1]);
        let abs2 = Math.abs(reverse[i] - reverse[i+1]);

        if(abs1 !== abs2){
            flag=true;
        }
    }
    if(!flag){
        return 'Funny';
    }else{
        return 'Not Funny';
    }
}

const result= funnyString('acxz');
console.log(result);