var findPermutationDifference = function (s, t) {
  let difference = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        difference += Math.abs(s.indexOf(s[i]) - t.indexOf(t[j]));
        break;
      }
    }
  }

  return difference;
};
const permDiffernece = findPermutationDifference("abc", "bac");
console.log("permutation difference = ", permDiffernece);
