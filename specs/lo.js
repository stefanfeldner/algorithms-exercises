// var sortedSquares = function (nums) {
//   let squared = [];
//   for (let i = 0; i < nums.length; i++) {
//     squared.push(nums[i] * nums[i]);
//   }
//   // const squared = nums.map(num => num * num)
//   squared.sort((a, b) => a - b);
//   return squared;
// };

// sortedSquares([-4, -1, 0, 3, 10]); // [0,1,9,16,100]

// var rotate = function (nums, k) {
//   const turn = k % 2 === 0 ? k : k + 1;
//   nums = [...nums.slice(turn, nums.length), ...nums.slice(0, turn)];
//   console.log(nums);
// };

// rotate([-1,-100,3,99], 2);

// var rotate = function (nums, k) {
//   const turn = k % 2 === 0 ? k : k + 1;
//   let front = []
//   for (let i = turn; i <= nums.length - 1; i++) {
//     front.push(nums[i]);
//   }
//   nums = front.concat(nums.slice(0, turn))
//   console.log(nums);
// };

// rotate([-1,-100,3,99], 2); // [3,99,-1,-100]

// var rotate = function (nums, k) {
//   if (k < nums.length) {
//     // take k elements off end of nums into new Array temp
//     let tempArray = nums.splice(0, nums.length - k);
//     // add temp array to beginning of nums
//     nums.push(...tempArray);
//   } else {
//     for (let i = 0; i < k; i++) {
//       const val = nums.pop();
//       nums.unshift(val);
//     }
//   }
// };

// var moveZeroes = function (nums) {
//   for (let i = nums.length; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.push(...nums.splice(i, 1));
//     }
//   }
// };

// moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
// // moveZeroes([0, 0, 0, 0, 3, 1]); // [1,0,0]

// var twoSum = function (numbers, target) {
//   // define pointers at start and end
//   let pointer1 = 0;
//   let pointer2 = numbers.length - 1;

//   while (pointer1 < pointer2) {
//     // calc sum of the pointers
//     let sum = numbers[pointer1] + numbers[pointer2];
//     // return indexes + 1
//     if (sum === target) {
//       return [pointer1 + 1, pointer2 + 1];
//       // if sum is false and sum < target, move pointer1 to the next array item
//     } else if (sum < target) {
//       pointer1++;
//       // move pointer 2 to the previous item
//     } else {
//       pointer2--;
//     }
//   }
// };

// twoSum([2, 7, 11, 15], 9);

// var reverseString = function (s) {
//   let pointer1 = 0;
//   let pointer2 = s.length - 1;

//   while (pointer1 < pointer2) {
//     let temp = s[pointer2];
//     s[pointer2] = s[pointer1];
//     s[pointer1] = temp;
//     pointer1++;
//     pointer2--
//   }

//   return s;
// };

// reverseString(["H","a","n","n","a","h"]);

// var reverseWords = function (s) {
//   let reversed = s.split(' ').map(elem => elem.split('').reverse().join('')).join(' ');
//   return reversed;
// };

// reverseWords("Let's take LeetCode contest");

var jump = function (nums) {
  let jumps = 0;
  let start = nums[0];
  let end = nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }
};

jump([2, 3, 1, 1, 4]); // 2
