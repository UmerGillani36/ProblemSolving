var scoreOfString = function (s) {
  let score = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) break;
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return score;
};

const score = scoreOfString("hello");
console.log("Score = ", score);
