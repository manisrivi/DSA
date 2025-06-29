const reverseString = (s) => {

    let len = s.length;
    let halfLength = Math.floor(len / 2);

    for (let i=0; i < halfLength; i++) {        
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;  
    }
}

let s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s)
console.log(s)