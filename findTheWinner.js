/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let friends = [];
  for (let i = 1; i <= n; i++) {
    friends.push(i);
  }

  let lastIndex = 0;

  while (friends.length > 1) {
    lastIndex = (lastIndex + k - 1) % friends.length;
    friends.splice(lastIndex, 1);
  }

  return friends[0];
};

const winner = findTheWinner(5, 2);
// const winner = findTheWinner(6,5);

console.log("Winner", winner);
