/*
    Brute Force Approach
*/

function findMax1(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
const arr = [7, 6, 4, 3, 1];
console.log(findMax1(arr)); // 7

const arr2 = [8, 10, 5, 7, 9];
console.log(findMax1(arr2)); // 10

/*
Complexity Analysis
--------------------
Time Complexity: O(N*log(N))
Space Complexity: O(n)
*/

// ###################################################################

/*
    Recursive Approach
*/

function findMax2(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr3 = [7, 6, 4, 3, 1];
console.log(findMax2(arr3)); // 7

const arr4 = [8, 10, 5, 7, 9];
console.log(findMax2(arr4)); // 10

/*
Complexity Analysis
--------------------
Time Complexity: O(N)
Space Complexity: O(1)
*/
