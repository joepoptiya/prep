console.log(4 << 2);
console.log(4 & 1);
console.log(3 & 1);


function isOdd (int) {
    return (int & 1) === 1;
}

function isEven (int) {
    return (int & 1) === 0;
}

console.log(isOdd(34)); // false
console.log(isOdd(-63)); // true
console.log(isEven(-12)); // true
console.log(isEven(199)); // false