/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let minimumNumber = 0;
  let currentNumberIndex = 0;
  let lucky = [];
  let flag = true;
  matrix.forEach((arr) => {
    flag = true;
    minimumNumber = Math.min(...arr);
    currentNumberIndex = arr.indexOf(minimumNumber);
    for (let i = 0; i < matrix.length; i++) {
      if (minimumNumber < matrix[i][currentNumberIndex]) {
        flag = false;
      }
    }
    if (flag) {
      lucky.push(minimumNumber);
    }
  });

  return lucky;
};

// const lucky = luckyNumbers([
//   [3, 7, 8],
//   [9, 11, 13],
//   [15, 16, 17],
// ]);
const lucky = luckyNumbers([
  [3, 6],
  [7, 1],
  [5, 2],
  [4, 8],
]);
console.log("Lucky Number is: ", lucky);
