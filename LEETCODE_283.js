var moveZeroes = function(nums) {
     if (nums.length === 0 || nums.length === 1) return nums;
     let lastNonZero = 0;
     for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
            lastNonZero++;
        }
     }
};

const nums = [0,1,0,3,12]

console.log(moveZeroes(nums))