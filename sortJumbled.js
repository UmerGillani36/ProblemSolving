/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  let mapped = nums.map((num) => {
    let mapNum = "";
    String(num)
      .split("")
      .forEach((digit) => {
        mapNum += mapping[digit];
      });
    return parseInt(mapNum);
  });

  let combined = nums.map((num, index) => [num, mapped[index]]);

  combined.sort((a, b) => a[1] - b[1]);

  return combined.map((item) => item[0]);
};

console.time("timer");
const sorted = sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]);
console.timeLog("timer");

console.log("sorted:", sorted);
