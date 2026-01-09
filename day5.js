// Binary Logical Operators:
// logical AND, logical OR, and the nullish coalescing operator:

// The logical AND  operator (&&):
// Its fasly hunter 

const result = false && 'Hello';
console.log(result); // false

const result1 = true && 'Hi!';
console.log(result1); // Hi!

const result2 = 'Hi!' && true; // true
console.log(result2);

const result3 = false && false;
console.log(result3); // false

const num = 2 && 1;
console.log(num); // 1

const num1 = 3 && 0;
console.log(num1); // 0

const num2 = false && 0;
console.log(num2); // false

// AND operator multiple condition:

if (2 < 3 && 3 < 4) { // both condition is true 
    console.log('The if block runs'); // The if block runs
    
} else {
    console.log('The else block runs');
    
}

if (2 > 3 && 3 < 4) {
    console.log('Ture');
    
} else {
    console.log('False'); // false
    
}

// The logical OR operator: 

const a = 'This is truthy' || false;
console.log(a); // This is truthy

const c = 0 || 'Hello';
console.log(c); // Hello


let userId; // value is not assign and undefined

if (userId || 'Guset') {
    console.log('Normal user'); // Normal user
    
} else {
    console.log('Guest');
    
}

let userName = 'Shyam22';

if (userId || 'Shyam22') { // false and true
    console.log(`User: 00123`);
    
} else {
    console.log('Guest');
    
}
const user = '';
if (user || '') { // falsy
    console.log('User12');
    
} else {
    console.log('Guest');
    
}

// The nullish coalescing operator 
const numBer = null ?? 'default';
console.log(numBer);

const userInfo = {
    theme : null,
    volume : 0,
    notification: false,
    add : 'bh4'
};

let theme = userInfo.theme ?? 'light';
console.log(theme);

let add = userInfo. add ?? 'bh4';
console.log(add);

// The Math Object:

const randNum = Math.random();
console.log(randNum); // any number between 0 and 1 – 0 inclusive and 1 exclusive

// The Math.min() and Math.max()

const small = Math.min(1, 3, 0, 5) // 0
console.log(small);

const max = Math.max (1, 3, 10, 2); // 10
console.log(max);

// The Math.ceil() method: 

console.log(Math.ceil(3.5)); //4

console.log(Math.ceil(10.1)); // 11


// The Math.floor() method: 

console.log(Math.floor(2.5)); // 2

console.log(Math.floor(5.5)); // 5

// The Math.round() method: 

console.log(Math.round(2.5)); // 3
console.log(Math.round(1.2)); // 1
console.log(Math.round(10.6)); // 11

// 

const maxNum = 10;
const minNum = 5;
const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(randomNumber); // any random +ve integer number

// Generating a random number between 20 and 1

const randomNumbers = Math.floor(Math.random() * 20) + 1;
console.log(randomNumbers); // any random +ve integer under 20 

// The Math.trunc() method: 

console.log(Math.trunc (5.8)); // 5
console.log(Math.trunc(-12.6)); // -12

// The Math,sqrt() method for squate root (2 ** 2 ):

console.log(Math.sqrt(9)); // 3

console.log(Math.sqrt(4)); // 2

// The Math.cbrt() method for cube root number ( 2 ** 3):

console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(8)); // 2

// The Math.abs() method:

console.log(Math.abs(-5)); // 5
console.log(Math.abs(-1.5)); // 1.5

// The Math.pow() method: 
// Math.pow(base, exponent)
console.log(Math.pow(2, 3));
console.log(Math.pow(8, 2));


