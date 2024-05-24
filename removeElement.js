var removeElement = function (nums, val) {
  let [left, right] = [0, 0];

  while (right < nums.length) {
    if (nums[right] != val) {
      nums[left] = nums[right];
      left += 1;
    }
    right += 1;
  }
  return left;
};

const result = removeElement([3, 2, 2, 1, 3], 3);
console.log("Result", result);
