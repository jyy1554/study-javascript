/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // if nums[i] == nums[j] and i < j
  let goods = 0;

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];

      if (nums[i] === nums[j]) {
        goods++;
      }
    }
  }

  return goods;
};
