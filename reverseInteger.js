const reverseInteger = (n) => {
    let nCopy = n;
    let rev = 0;
    n = Math.abs(n);
    while (n > 0) {
        let lastDigit = n % 10;
        rev = (10 * rev) + lastDigit;
        n = Math.floor(n / 10)  ;
    }
    return (nCopy < 0) ? -rev : rev;

}


console.log(reverseInteger(-123))