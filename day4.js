// Unary Operators:
// performs operation like type conversion, value manipulation, or checking certain condition.
// unary plus operator:

const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // Number

// unary negation operator:

const str1 = '-2'
const newNum = -str1;
console.log(str1); // -2
console.log(typeof str1); // string
console.log(typeof newNum); // number

// The NOT operator ( ! ):
// operand is true, it becomes false
// operand is false, it becomes true

let userOnline = true;
console.log(! userOnline); // false

let userActive = false;
console.log(! userActive); // true

// the bitwise NOT operator ( ~ ):
// changes OR flips bits numbers like 1 to 0 OR 0 to 1

let num = 2;
console.log(~ num); // -3

// The void keyword that return undefined:
// commonly used in hyperlinks to prevent navigation: 
let result = void(2 +2);
console.log(result); // undefined
// Example: 
// <a href="javascritp:void(0);">Click Me</a>

// The typeof Operator: 
let value = 'Hello';
console.log(typeof value); // string

// Bitwise Operators:

// The bitwise AND ( & ) operator returns 1 :

let a = 5;
let b = 3;
console.log(a & b); // 001
// The bitwise OR ( | ) returns 1:

let c = 5;
let d = 3;
console.log(c | d); // 111

// The bitwise XOR ( ^ ):
let e =5;
let f = 3;
console.log(e ^ f); // 110(6)

// The bitwise NOT (~):
let g = 5;
console.log(~g); // -6

// The bitwise left shift (<<) multipy by 2:
let h = 5;
console.log(h << 1); // 10 (1010)

let i = 2;
console.log(i << 1); // 4

// The right shif (>>):
let j = 5;
console.log(j >> 1); // 2

// divide by 2 and rounding

let k = 8;
console.log(k >> 1); // 2

let l = 10;
console.log(l >> 1); // 5
