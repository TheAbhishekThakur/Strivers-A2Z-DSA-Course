// Linear Search

const arr = [1, 2, 3, 4, 5];
const num = 3;

const linearSearch = (arr, n) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      index = i;
    }
  }
  return index;
};
console.log(linearSearch(arr, num)); // 2

/*
Complexity Analysis
--------------------
Time Complexity: O(n), where n is the length of the array.
Space Complexity: O(1)
*/
