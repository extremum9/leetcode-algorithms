const twoSum = (nums, target) => {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const difference = target - num;
    const secondIndex = map.get(difference);
    if (secondIndex !== undefined) {
      return [secondIndex, index];
    }
    map.set(num, index);
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([8, 7, -1, 6, 2, 5, 9], 1)); // [2, 4]
