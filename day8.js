// NaN (Not a Number) :

let result = 0/0;
console.log(result); // NaN

console.log(NaN === NaN); // false

// The IsNaN() function: 
// Used to determine whether a value is NaN or not.

console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true

console.log(isNaN(true)); // false
console.log(isNaN(null)); // false
console.log(isNaN(37)); // false

console.log(isNaN("37")); // false
console.log(isNaN("37.33")); // false
console.log(isNaN("")); // false 
console.log(isNaN("  ")); // false

console.log(isNaN("blabla")); // ture - Not a number

// The Number.isNaN() method:

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0)); // true

console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN("blabla")); // fase

let a = 0;
let b = 0;
let result1 = a / b;

if (Number.isNaN(result1)) {
    result1 = "Error: Division resulted in NaN"
}

console.log(result1); // Error: Division resulted in NaN
