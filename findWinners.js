var findWinners = function (matches) {
  const winCount = {};
  const loseCount = {};

  for (const [winner, loser] of matches) {
    winCount[winner] = (winCount[winner] || 0) + 1;
    loseCount[loser] = (loseCount[loser] || 0) + 1;
  }

  const notLost = Object.keys(winCount).filter((player) => !loseCount[player]);
  const lostOnce = Object.keys(loseCount).filter(
    (player) => loseCount[player] === 1
  );

  return [notLost.sort((a, b) => a - b), lostOnce.sort((a, b) => a - b)];
};

const output = findWinners(
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9]
);
console.log("output", output);
