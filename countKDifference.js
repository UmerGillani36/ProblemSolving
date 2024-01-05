var countKDifference = function(nums, k) {
    let count = 0;
    for(let i=0; i<nums.length;i++){
        for(let j=i+1; j<nums.length; j++){
            if(Math.abs(nums[i]-nums[j]) === k){
                count= count+1;
            }
        }
    }
    return count;
};

const output = countKDifference([1,2,2,1],1);
console.log('output', output);