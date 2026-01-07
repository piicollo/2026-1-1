// Operator Precedence
// Operators with higher precedence are evaluated before those with lower precedence

// let num = 1 + 4 * 3;
// // first 4 * 3 then 12 + 1
// console.log(`Result: ${num}`); // 13

// let num2 = (9 + 3) * 2
// // first brakets than other operation
// console.log(`Result: ${num2}`);

// let num3 = 4 - 2 / 2;
// console.log(`Result: ${num3}`);

// let num4 = 10 - 2 + 5;
// console.log(`Result: ${num4}`);
// // JavaScript moves left to right in this case. Some operators, like assignment (=), are right-to-left associative. This means the right side of the expression gets evaluated first:

// let num5 = 2 + 3 - 3;
// // left to right operation
// console.log(`Result: ${num5}`);

// let a, b;
// a = b = 3;
// console.log(a); // first asign value
// console.log(b); // second asign value
// console.log(a + b); // 3 + 3

// let num6 = 2 ** 2 **3;
// // The exponent operator is also right-to-left associative
// console.log(`Result: ${num6}`); // 256

// The increment and decrement operators:
// "++" and "--" 
// let x = 1;
// let y = 2;
// let value = x + 2; // 1 + 2
// let value2 = y + 3; // 2 + 3
// console.log(value);
// console.log(value2);

// prefix "++x"
// Increases the value of the variable first, than returns a new value:
// let x = 2;
// let preFix = ++x; // 3
// console.log("Prefix: ", preFix);
// console.log(preFix);


// let preFix2 = ++x; // 4
// console.log("preFix2: ", preFix2);
// let a = 5;
// console.log(++a); // 5 first increment
// console.log(a); // 5


// postfix "x++"
// Returns current value of the variable first:

// let y = 5;
// let result = y++; 
// console.log("postfix: ", result); // 

// let result2 = y++;
// console.log("postfix: ", result2); // 

// let b = 10;
// console.log(b++); // 10 first it's value not
// console.log(b); // 11

// postfix "--x" and prefix "x--" decrement: 
// let x = 6;
// console.log(--x); // 5
// console.log(x); // 5
// console.log(--x); // 4


// let y = 10;
// console.log(y--); // 10
// console.log(y); // 10
// // console.log(y--); // 9

// Example:
// let a = 5;
// let b = ++a;
// console.log(b); // 6 ("a" was incremented before assignment)

// let c = 5;
// let d = c++;
// console.log(d); //5 ("d" was incremented after assignment)

// Compound Assignment Operators:

// Addition assignment (+=): 

// let num = 4;
// num = num + 2;
// console.log(num); // 6

// Same operation:
// let num = 4;
// num += 2;
// console.log(num); // 6

// let a = 22;
// a += 8;
// console.log(`Result: ${a}`); // 30

// subtraction assignment (-=): 
// let b = 20;
// b = b - 10;
// console.log(b);


// let b = 20;
// b -= 19;
// console.log(`Result: ${b}`); //1

// Multiplication assignment (*=):
// let x = 2;
// x = x * 3;
// console.log("Result: ", x); // 6

// another way:
// let c = 3;
// c *= 5;
// console.log("Result: ", c); // 15

// Division assignment (=/):
// let balance = 100;
// balance = balance / 20;
// console.log(balance); // 5

// Another way:
// let food = 4;
// food /= 2;
// console.log(food); // 2

// Reminder assignment operator (%=)

// let len = 5;
// len %= 2;
// console.log(len); // 1

// let a = 5;
// a %= 3;
// console.log("Result: ", a); // 2

// Exponent assignment operator ( **= )
// let b = 2;
// b **= 3;
// console.log("Result: ", b); // 8

// let b = 5;
// b **= 5;
// console.log('Square of 5: ', b); // 3125

