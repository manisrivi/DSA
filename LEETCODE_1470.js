var shuffle = function(nums, n) {
    const firstHalf = nums.slice(0, n);
    const secondHalf = nums.slice(n);
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(firstHalf[i]);
        result.push(secondHalf[i]);
    }
    return result;
};


const nums = [2,5,1,3,4,7];

const n = 3

console.log(shuffle(nums, n))