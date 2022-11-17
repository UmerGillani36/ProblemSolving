
function nonDivisibleSubset(k, s) {
    let countArray = [];
    let len = s.length;
    for (let i = 0; i < len; i++) {
        let subArray=[];
        for (let j = i+1; j < len - i; j++) {
            let cal = (s[i] + s[j]) % k;
            if (cal !== 0) {
                subArray.push(s[i],s[j]);
            }
        }

        countArray.push([...new Set(subArray)]);
        console.log(countArray);
    }
    let dummyArray=[];
    for(let i=0; i<countArray.length ; i++){
        let val=countArray[i].length;
        dummyArray.push(val);
    }
    return Math.max(...dummyArray);

}
// 2 7 12 17 22
// const result = nonDivisibleSubset(3, [1, 7, 2, 4]);
// const result = nonDivisibleSubset(5, [2, 7, 12, 17,22]);
const result = nonDivisibleSubset(5, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]);
console.log(result);