function gemstones(arr) {
    let checker=''
    let count=0;
    let iterator = 1;
    if(arr){
        checker = arr[0];
        checker=[...new Set(checker.split(''))];
        checker=checker.join('');
    }
    for(let val of checker){
        iterator = 1;
        for(let i=1 ; i< arr.length ; i++){
            if(arr[i].includes(val)){
                iterator++;
            }
        }
        if(iterator === arr.length){
            count++;
        }
    }
    return count;
}
const result = gemstones(['aaaaaa', 'abce', 'abcz']);
console.log(result);