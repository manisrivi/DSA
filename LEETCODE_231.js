var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    else if ((n%2 != 0) || n < 1) return false;
    return isPowerOfTwo(n/2);
};


// Best Optimize Solution

var isPowerOfTwo_1 = function(n) {
    return n > 0 && (n & (n-1)) === 0;
};




console.log(isPowerOfTwo(7))