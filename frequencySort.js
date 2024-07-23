/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let frequency = {};
  let sortedNums = [];

  nums.forEach((value) => {
    if (frequency[value]) {
      frequency[value]++;
    } else {
      frequency[value] = 1;
    }
  });

  const entries = Object.entries(frequency);

  entries.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return a[1] - b[1];
  });

  entries.forEach(([key, value]) => {
    for (let i = 0; i < value; i++) {
      sortedNums.push(+key);
    }
  });

  return sortedNums;
};

// Example usage
const sortedNums1 = frequencySort([1, 1, 2, 2, 2, 3]);
console.log("sortedNums1", sortedNums1); // Output: [3, 1, 1, 2, 2, 2]

const sortedNums2 = frequencySort([2, 3, 1, 3, 2]);
console.log("sortedNums2", sortedNums2); // Output: [1, 3, 3, 2, 2]
