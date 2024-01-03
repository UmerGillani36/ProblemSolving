var differenceOfSum = function(nums) {
    const totalSum = nums.reduce((acc, currentNum) => acc + currentNum, 0);
     const digitSum = nums.join('').split('').reduce((acc, digit) => acc + Number(digit), 0);
 
     return Math.abs(totalSum - digitSum);
     
 };

const output =  differenceOfSum([1,15,6,3]);
console.log('output', output)