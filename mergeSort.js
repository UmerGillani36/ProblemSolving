/**
 * @param {number[]} nums
 * @return {number[]}
 */
function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  console.log("middle", middle);
  const left = nums.slice(0, middle);
  console.log("Left", left);
  const right = nums.slice(middle);
  console.log("right", right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArray = [],
    i = 0,
    j = 0;
  console.log("sortedArray", sortedArray);

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }
  return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}
var sortArray = function (nums) {
  return mergeSort(nums);
};

const sortedArray = sortArray([5, 2, 3, 1]);

console.log("Sorted Array", sortedArray);
