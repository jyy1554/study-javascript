/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //반 이상 나온 숫자
  const cache = {};
  let majority = nums[0];

  for (const num of nums) {
    const frequency = cache[num];

    if (!cache[num]) {
      cache[num] = 1;
    } else {
      cache[num]++;
    }

    if (cache[majority] < cache[num]) {
      majority = num;
    }
  }

  return cache[majority] <= nums.length / 2 ? null : majority;
};
