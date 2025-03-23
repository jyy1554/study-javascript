/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //for loop 하나씩
  for (let i = 0; i < nums.length - 1; i++) {
    const firstNum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j];

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
};
