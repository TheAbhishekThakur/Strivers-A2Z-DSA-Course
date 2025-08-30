const arr = [1, 2, 3, 4, 5];
// Output: 2,3,4,5,1

const rotateLeft = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  let first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = first;
  return arr;
};

console.log(rotateLeft(arr));

/*
Complexity Analysis
--------------------
Time Complexity: O(n)
Space Complexity: O(1)
*/

// ###########################################

// Left Rotate an array by D place

const arr2 = [1, 2, 3, 4, 5, 6, 7];
const d = 2;
// Output: [3,4,5,6,7,1,2]

// Brute Force Approach
let rotate = arr2.slice(0, d);
for (let i = d; i < arr2.length; i++) {
  arr2[i - d] = arr2[i];
}

for (let i = 0; i < rotate.length; i++) {
  arr2.push(rotate[i]);
}
console.log(arr2);
