function InsertionSort(str) {
  let arr = str.split(""); // Convert string to array of characters
  let len = arr.length;

  // Implementing selection sort for simplicity
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr.join(""); // Convert array back to string
}

// Example usage:
const sortedString = InsertionSort("hello");
console.log(sortedString); // Output: 'ehllo'
