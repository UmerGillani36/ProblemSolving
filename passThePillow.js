/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  // Total cycle length is 2 * (n - 1) because the pillow goes forward to the last person and then back to the first person
  const cycleLength = 2 * (n - 1);
  // Find the effective time within one cycle
  const effectiveTime = time % cycleLength;

  if (effectiveTime <= n - 1) {
    // Forward direction
    return effectiveTime + 1;
  } else {
    // Backward direction
    return n - (effectiveTime - (n - 1));
  }
};

// Case 1
const person = passThePillow(18, 38);
// Case 2
// const person = passThePillow(3, 2);

console.log("Person", person);
