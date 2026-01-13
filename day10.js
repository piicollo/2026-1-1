// Review of JavaScript Math :
// Ternary operator :

let userOne = 1445;

users = userOne > 1000 ? "Professional" :
    userOne > 600 ? "Intermediate": 
    userOne > 400 ? "Entry Level":
    "Intern";
console.log(users);

// Binary Logical Operators:

let result = true && 'Hello';
console.log(result); // hello

let result2 = false && 'Hi!';
console.log(result2); // fasle

let result3 = false && false;
console.log(result3);

let result4 = 22 || 'hell';
console.log(result4);

// Nullish Coalescing (??) operator:

const userInfo = {
    name: null,
    mail: 'kapil@mail.com',
    userId: 12345,
};

let name = userInfo.name ?? 'Suman';
console.log(name); // Suman

// The Math Object:

console.log(Math.random());
console.log(Math.floor(Math.random() * 5)) + 1;
console.log(Math.trunc(23.22)); // 23
console.log(Math.round(22.5)); // 23
console.log(Math.round(22.3)); // 22
let series = [2 , 3, 4, 5];
console.log(Math.max(2, 3, 5, 8, 9)); // 9
console.log(Math.min(2, 3 , 5, 1)); // 1

let userId = 100;
let users = userId >= 1000 ? "Professional":
    userId >= 800 ? "Intermediate" :
    userId >= 500 ? "Junior" :
    "Intern";

console.log(users);

let a = 2;
let b = 3;
console.log(Math.pow(a, b)); // 8 (2 ** 3)

console.log(isNaN("22")); // false
console.log(isNaN(2.22)); // false
console.log(isNaN("ab222")); /// true

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(Number.NaN)); // true

let numberOne = "22abe";
console.log(parseFloat(numberOne)); // 22
console.log(parseFloat(22.35)); // 22.35
console.log(parseFloat("abe2345")); // NaN
console.log(parseFloat("22.356abe")); // 22.356

let numberTwo = "23.23px";
console.log(parseInt(numberTwo)); // 23
console.log(parseInt("22.35abe")); // 22
console.log(parseInt("abe22.333")); // NaN

let stringOne = 12.23;
console.log(stringOne.toFixed()); // 12

let stringTwo = "123.22";
console.log(Number(stringTwo).toFixed(1)); // 123.2

