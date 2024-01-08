var maximizeSum = function(nums, k) {
    let score = 0;
    for(let i = 1; i<= k; i++){
        const maxNum = Math.max(...nums);
        const indexOfMax = nums.findIndex((val)=>val===maxNum);
        nums[indexOfMax] = maxNum+1;
        score += maxNum;
    }
    return score;
};

const output = maximizeSum([1,2,3,4,5],3);
console.log('output', output);