// Null and Undefined Data Types:
console.log(null == undefined); // true

console.log(null === undefined); // false
console.log(null == 0); // false
console.log(null == ""); // false
console.log(undefined == 0); // false 
console.log(undefined == ''); // false

// null behavior in comparisons:

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null < 0); // false


// undefined comparison in NaN
console.log(undefined > 0); // false 
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
