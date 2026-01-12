// the parseFloat() and parseInt() method:

// The parseFloat() method:

// console.log(parseFloat("3.14")); // 3.14
// console.log(parseFloat(2.13)); // 2.13
// console.log(parseFloat("2.15 abc")); // 2.15
// console.log(parseFloat("abc 2.31")); // NaN

// console.log("\n");

// The parseInt() method:

// console.log(parseInt("44")); // 44
// console.log(parseInt(2.15)); // 2
// console.log(parseInt("24px")); // 24
// console.log(parseInt("abc124")); // NaN

// Ignores leading whitespace: 

// console.log(parseFloat("  3.14")); // 3.14
// console.log(parseInt("  42")); // 42

// console.log(parseFloat("-25.3")); // -25.3
// console.log(parseFloat("+25.25")); // 25.25
// console.log(parseFloat("3.14.14"));


// console.log(parseInt("-25")); // -25
// console.log(parseInt("+22")); // 22


// the toFixed() method:
// rounds the numbers: 
// formats a number using fixed-point notation

// let price = 98.234567;
// console.log(price.toFixed(2)); // 98.23
// console.log((3.144).toFixed(2)); // 3.14
// console.log((3.14449).toFixed(3)); // 3.144 
// console.log((3.14258).toFixed(3)); // 3.143

// let usDollar = 145.3212;
// console.log(usDollar.toFixed(1));
// console.log(usDollar.toFixed(3));
// console.log(usDollar.toFixed(2));

// console.log((2.12345).toFixed(2));
// console.log((2.12345).toFixed(3));
// console.log((2.12345).toFixed(4));
// console.log((12.578).toFixed(2)); // 12.58
// console.log((8.145).toFixed(2)); // 8.14
// console.log((10.2345).toFixed(3)); // 10.235
// console.log((3.15329).toFixed(3)); // 3.153

// let numBer = 3.14159;
// console.log(numBer.toFixed()); // 3

// cost of petrol in 2026 Jan in Nepal:

// let oilPrice = 143.36;
// let taxRate = 0.13;
// let total = oilPrice + (oilPrice * taxRate)
// console.log(`Total price of petrol in Nepal: Rs.` + total.toFixed(2)); // 162.0

// let n1 = 12.522;
// let n2 = 10.25;
// let total1 = n1 + n2 ;

// console.log(typeof total1); // number

// let fixedValue = total1.toFixed(3)
// console.log(fixedValue)

// console.log(typeof fixedValue); // string

// Review of Javascript Math: 

// const result = 5 + '5'; // convert number to string
// console.log(result); // 55
// console.log(typeof result); // string

// const result2 = 5 - '2';
// console.log(result2); // 3 coerce the string into a number
// console.log(typeof result2); // number

// const result3 = 5 * '2';
// console.log(result3); // 10
// console.log(typeof result3); // number

// const result4 = 8 / "2";
// console.log(result4); // 4
// console.log(typeof result4); // number

// const result5 = null + 5; // 0 + 5
// console.log(result5); // 5
// console.log(typeof result5); // number

// const result6 = undefined + 2;
// console.log(result6); // NaN 
// console.log(typeof result6); // number

// Operator Precedence:

// const num = (2 + 3) * 4; // 5 * 4
// console.log(num); // 20

// const num2 = 10 - 2 + 3; // left to right
// console.log(num2); // 11

// const num3 = 2 ** 2 ** 3; // right to left
// // 2 * 2 * 2 = 8
// // 2 * 2 * 2 * 2 * 2 * 2 *2 * 2 = 256
// console.log(num3); // 

// const num4 = 2 ** 2 ** 2; // right to left
// console.log(num4); // 16

// Increment and Decrement operator:
// the prefix method:
// let x = 2;
// console.log(++x); // 3
// console.log(x); // 3

// the postfix method:

// let y = 5;
// console.log(y++); // 5
// console.log(y); // 6

// let a = 3;
// console.log(--a); // 2
// console.log(--a); // 1
// console.log(--a); //0
// console.log(a); // 0

// let b =  4;
// console.log(b--); //4
// console.log(b--); //3
// console.log(b--); //2
// console.log(b--); //1
// console.log(b--); // 0
// console.log(b--); // -1
// console.log(b); // -2

// let c = 2;
// c += 5;
// console.log(c); // 7

// let number2 = 22;
// number2 /= 11;
// console.log(number2); // 2

// console.log( a == b); // Error
// console.log(5 == '5'); // true
// console.log( 5 === '5'); // false

// console.log('abc' === 'abc'); // true

// console.log('a' != 1); // true
// console.log('2' !== 2); // true

// console.log(22 !== 22); // false

// console.log(2 > 5); // false
// console.log(2 >= 2); //true
// console.log( 5 < 2); // false
// console.log(3 <= 2); // false
// console.log(5 <= 8); // true


// let name = '42';
// const name1  = +name;

// console.log(name1);
// console.log(typeof name1);

// const userId = 12;
// console.log(-userId); // -12
// console.log(!userId); //false
// const user = "22";
// console.log(!user);

// Conditional Statement:
// const score = 35;
// if (score >= 90) {
//     console.log("A"); // false not print output
// }

// const price = 125;
// if (price >= 120) {
//     console.log("Premium");
    
// } else if (price >= 80) {
//     console.log("Medium");
    
// } else {
//     console.log("Cheap");
    
// }

// Ternary Operator:

const temp = 30;
const weather = 
    temp > 35 ? "very hot" :
    temp > 25 ? "Normal":
    temp > 12 ? "Avg" :
    temp > 5 ? "Cold" :
    "low temperature";
console.log(weather); // Normal
