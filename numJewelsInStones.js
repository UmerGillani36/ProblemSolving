var numJewelsInStones = function (jewels, stones) {
  let jewelsCount = 0;
  for (let i = 0; i < jewels.length; i++) {
    jewelsCount += stones.split(jewels[i]).length - 1;
  }
  return jewelsCount;
};

const jewels = numJewelsInStones("aA", "aAAbbbb");

console.log("jewels = ", jewels);
