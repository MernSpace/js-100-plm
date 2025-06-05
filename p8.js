
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // recursion here
    } else {
      result.push(item);
    }
  }

  return result;
}


console.log(flattenArray([1, [2, [3, [4,5]], 5],7])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([[["a"]], [["b"]]]));    // Output: ["a", "b"]