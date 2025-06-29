const removeElement = (nums, val) => {
    let x = 0;
    for (let i=0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[x] = nums[i];
                x = x + 1;
        }
    }
    return x;
}

const nums = [3,2,1,5,3,4,8,3];
const val = 3;

console.log(removeElement(nums, val))