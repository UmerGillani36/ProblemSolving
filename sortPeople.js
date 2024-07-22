/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      if (heights[j] < heights[j + 1]) {
        [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
        [names[j], names[j + 1]] = [names[j + 1], names[j]];
      }
    }
  }
  return names;
};

const sortedPeople = sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
console.log("sortedPeople", sortedPeople);
