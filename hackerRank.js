function hackerrankInString(s) {
    let hackerRank='hackerrank';
    let iterator=0;
        for(let i=0;i<s.length;i++){
            if(hackerRank[iterator] === s[i]){
                iterator++;
            }
        }
    if(hackerRank.length===iterator){
        return 'YES';
    }else{
        return 'NO';
    }
}

let result=hackerrankInString('hereiamstackerrank');
console.log(result);