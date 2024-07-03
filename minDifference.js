var minDifference = function (nums) {
  //   if (nums.length <= 4) return 0;
  //   let left = 0;
  //   let right = 0;
  //   let leftSortedNums = nums.sort((a, b) => a - b);
  //   let rightSortedNums = [...leftSortedNums];
  //   console.log("leftSortedNums", leftSortedNums);

  //   for (let i = 0; i < 3; i++) {
  //     leftSortedNums[i] = leftSortedNums[nums.length - 1];
  //   }

  //   for (let i = nums.length - 1; i > nums.length - 4; i--) {
  //     rightSortedNums[i] = rightSortedNums[0];
  //   }

  //   left = Math.abs(Math.max(...leftSortedNums) - Math.min(...leftSortedNums));
  //   right = Math.abs(Math.max(...rightSortedNums) - Math.min(...rightSortedNums));
  //   console.log("left", left);
  //   console.log("right", right);
  //   return left < right ? left : right;
  if (nums.length <= 4) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let option1 = nums[n - 1] - nums[3];
  let option2 = nums[n - 2] - nums[2];
  let option3 = nums[n - 3] - nums[1];
  let option4 = nums[n - 4] - nums[0];
  return Math.min(option1, option2, option3, option4);
};
// const result = minDifference([6, 6, 0, 1, 1, 4, 6]);
const result = minDifference([82, 81, 95, 75, 20]);
// const result = minDifference([1, 5, 0, 10, 14]);
console.log("Result", result);
