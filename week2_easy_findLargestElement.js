/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
let result = findLargestElement([1, 2, 10, 4, 5]);
// module.exports = findLargestElement;
console.log(result);

function gfg() {
  // Illustration of in operator
  const array = ["geeks", "for", "geeks"];

  // Output of the indexed number
  console.log(0 in array);

  // Output of the Value
  console.log("for" in array);

  // output of the Array property
  console.log("length" in array);
}
gfg();
