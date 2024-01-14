const leader = (nums)=>{
    let leaders = [];
    let flag = false;

    for(let i=0; i<nums.length; i++){
        flag= false;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] < nums[j]){
                flag = true;
            }
        }
        if(!flag){
            leaders.push(nums[i]);
        }
    }
    return leaders;
};
const output = leader([16,17,4,3,5,2]);
console.log('output',output)