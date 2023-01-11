function palindromeIndex(s) {

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i].charCodeAt(0) !== s[s.length - 1 - i].charCodeAt(0)) {
      let arr1 = s.split("");
      let arr2 = s.split("");
      arr1[i] = "";
      arr2[s.length - 1 - i] = "";
      if (arr1.join("") === arr1.reverse().join("")) {
        return i;
      } else if (arr2.join("") === arr2.reverse().join("")) {
        return s.length - 1 - i;
      }
    }
  }
  return -1;
}
const result = palindromeIndex("aaab");

console.log(result);
