// Memoization (Dynamic Programming)

// const bestSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   let shortestCombination = null;

//   for (let num of numbers) {
//     const reminder = targetSum - num;
//     const reminderCombination = bestSum(reminder, numbers, memo);

//     if (reminderCombination != null) {
//       const combination = [...reminderCombination, num];
//       if (
//         shortestCombination === null ||
//         combination.length < shortestCombination.length
//       ) {
//         shortestCombination = combination;
//       }
//     }
//   }
//   memo[targetSum] = shortestCombination;
//   return shortestCombination;
// };

// Tabulation (Dynamic Programming)

const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25,25,25,25]
