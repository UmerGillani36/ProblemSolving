function outer() {
  let counter = 0;
  return function inner(num) {
    counter += num;
    return counter;
  };
}

const counter = outer();

console.log(counter(2));
console.log(counter(3));
console.log(counter(4));
