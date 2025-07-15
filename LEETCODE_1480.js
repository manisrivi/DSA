// var runningSum = function(nums) {
//     if (nums?.length === 0)  return [];
//     const result = [];
//     result[0] = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         result[i] = result[i-1] + nums[i];
//     }
//     return result;
// };

var runningSum = function(nums) {
    if (nums?.length === 0)  return [];
     for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};


const nums = [1,2,3,4];

console.log(runningSum(nums))