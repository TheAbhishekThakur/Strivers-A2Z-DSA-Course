/*
    Brute Force Approach
*/

function isArraySorted1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }
  return true;
}

const arr = [1, 2, 3, 4, 5];
console.log(isArraySorted1(arr)); // true

/*
Complexity Analysis
--------------------
Time Complexity: O(N^2)
Space Complexity: O(1)
*/

// ###################################################################

/*
    Optimal Approach
*/

function isArraySorted2(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const arr2 = [1, 2, 3, 4, 5];
console.log(isArraySorted2(arr2)); // true

/*
Complexity Analysis
--------------------
Time Complexity: O(N)
Space Complexity: O(1)
*/
