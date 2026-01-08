// Conditional statements :
// if, else if, and else:
// The if statement return true value:

if (null) {
    console.log("This will not run.");
    
}

if ("freeCodeCamp") {
    console.log("This will run.");
    
}

if ('Hello') {
    console.log("This will run.");
    
}
if ('') {
    console.log("Execution is not done.");
    
}

if (-0){
    console.log("True");
    
}

if (-5) {
    console.log("Negative Number");
    
}

// if statement with comparison operators:

const age = 21;
if (age >= 18) {
    console.log("You're eligible to vote");
    
}

const userAge = 15;
if (userAge >= 18) {
    console.log("You are not eligible to enter in this website"); // condition false
    
}

// if else clause:

const userNum = 15;

if (userNum >= 20) {
    console.log('You are welcome');
    
} else {
    console.log('Good bye!'); // Good bye!
    
}

const userScore = 45;

if (userScore >= 25) {
    console.log('Passed'); // Passed
    
} else {
    console.log('Out!');
    
}

// Multiple conditions :

const mark = 30;

if (mark >= 80 ){
    console.log('A');
    
} else if (mark >= 70) {
    console.log('B');
    
} else if (mark >= '60') {
    console.log('C');
    
} else if (mark >= 50) {
    console.log('D');
    
} else if (mark >= 40) {
    console.log('E');
    
} else {
    console.log('Fail'); // Fail
    
}

// The ternary Operator:
// condition ? expressionIfTrue : expressionFalse;

const temp = 23;
const weather = temp >= 5 ? 'Cold' : 'Normal';
console.log(`It's a ${weather} day!`);
