var findMaxConsecutiveOnes = function(nums) {
    let max = 0, count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            if (count > max) max = count;
        } else {
            count = 0;
        }
    }

    return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,2,1,1,1,1]));


// Time Complexity O(n);
// Space Complexity O(1);
