const findNumbers = function(nums) {
    let count = 0;
    for (let i=0; i < nums.length; i++) {
        let digitCount = Math.abs(nums[i]).toString().length;
        if (digitCount % 2 === 0) count ++;
    }
    return count;
};

const nums = [12,345,2,6,7896]

// Time Complexity O(n);
// Space Complexity O(1);



// console.log(findNumbers(nums));