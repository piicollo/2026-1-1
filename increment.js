// Debug Increment and Decrement Operator Errors in a Buggy App
// Your friend has asked you to help them debug their code. They are practicing increment and decrement operators but are getting unexpected results in the console.

// Your task is to help them identify the mistakes and update the code so that the console outputs match the expected results.

// You can refer back to the prior lessons on increment and decrement operators as well as prefix and postfix notation.

// User Stories:

//1.You should have a variable named updatedCounter that correctly produces the value 11 by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
// 2.You should have a variable named finalScore that correctly produces the value 8 by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
// 3.You should have a variable named updatedCoins that correctly produces the value 2 by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
// 4.You should have a variable named newHealth that correctly produces the value 7 by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.

let counter = 10;
console.log(`Counter is currently ${counter}`); // 10

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`); // 11

let score = 8;
console.log(`Score is currently ${score}`); // 8

let finalScore = score++;
console.log(`Score is still ${finalScore}`); // 8

let coins = 3;
console.log(`Coins is currently ${coins}`); // 3

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`); // 2

let health = 7;
console.log(`Health is currently ${health}`); // 7

let newHealth = health--;
console.log(`Health is still ${newHealth}`); // 7