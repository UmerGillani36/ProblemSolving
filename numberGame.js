var numberGame = function(nums) {
    if(nums.length>0){
    const sortedNums = nums.sort((a,b)=>a-b);
    let result = [];
    for(let i=1; i<= sortedNums.length; i++){
        if(i%2 === 0){
            result.push(sortedNums[i-2])
        }else{
            result.push(sortedNums[i])
        }
    }
    return result;
    }
};
const output = numberGame([5,4,2,3]);
console.log('output', output);