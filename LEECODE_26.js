const removeDuplicates = (nums) => {
    
    if (nums.length === 0) return 0;
    
    let left = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[left]) {
            left ++
            nums[left] = nums[i];
        }
    }

    return left + 1;

};

const nums = [1,1,1,2,2];

console.log(removeDuplicates(nums));
