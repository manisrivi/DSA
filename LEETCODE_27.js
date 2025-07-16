var removeElement = function(nums, val) {
    
    if (nums.length === 0) return 0;

    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;

console.log(removeElement(nums, val))