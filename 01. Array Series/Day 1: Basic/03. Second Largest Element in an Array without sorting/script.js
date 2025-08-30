//  Brute Force Approach

function findSecondLargeAndSmall1(arr) {
  arr.sort((a, b) => a - b);
  const secondMax = arr[arr.length - 2];
  const secondMin = arr[1];

  return {
    secondMin,
    secondMax,
  };
}

const arr = [1, 2, 3, 4, 5];
console.log(findSecondLargeAndSmall1(arr)); // { secondMin: 2, secondMax: 4 }

/*
Complexity Analysis
--------------------
Time Complexity: O(NlogN), For sorting the array
Space Complexity: O(1)
*/

// ###################################################################

//  Better Approach

function findSecondLargeAndSmall2(arr) {
  let max = -Infinity;
  let min = Infinity;
  let secondMax = -Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }

    if (arr[i] < secondMin && arr[i] != min) {
      secondMin = arr[i];
    }
  }

  return {
    secondMin,
    secondMax,
  };
}

const arr2 = [1, 2, 3, 4, 5];
console.log(findSecondLargeAndSmall2(arr2)); // { min: 2, max: 4 }

/*
Complexity Analysis
--------------------
Time Complexity: O(N), We do two linear traversals in our array
Space Complexity: O(1)
*/

// #########################################################################

//  Optimal Approach

function findSecondLargeAndSmall3(arr) {
  let max = -Infinity;
  let min = Infinity;
  let secondMax = -Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    }

    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    }

    if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }

    if (arr[i] < secondMin && arr[i] != min) {
      secondMin = arr[i];
    }
  }

  return {
    secondMin,
    secondMax,
  };
}

const arr3 = [1, 2, 3, 4, 5];
console.log(findSecondLargeAndSmall3(arr3)); // { min: 2, max: 4 }
/*
Complexity Analysis
--------------------
Time Complexity: O(N), Single-pass solution
Space Complexity: O(1)
*/
