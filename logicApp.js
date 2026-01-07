// Building a Logic Checker App:
// 1. Begin by declaring a variable named truthyOrFalsy and assign it the boolean value true.

// const truthyOrFalsy = true;

// 2. You can use the Boolean() function to check the truthiness of a value. For example, Boolean("Hello World!") will return true because "Hello World!" is truthy.
// Now, call Boolean(truthyOrFalsy) and log the result to the console.

// Boolean(truthyOrFalsy);
// console.log(Boolean(truthyOrFalsy)); // true

// 3. Change the assignment of truthyOrFalsy by setting its value to "freeCodeCamp". You will still see true logged to the console because a non-empty string is a truthy value.
// const truthyOrFalsy = true;
// const truthyOrFalsy = "freeCodeCamp";
// console.log(Boolean(truthyOrFalsy)); // true

// 4. For now, change the assignment of truthyOrFalsy by setting its value to an empty string. After that, you'll see false logged to the console.

// const truthyOrFalsy = "freeCodeCamp";
// const truthyOrFalsy = '';
// console.log(Boolean(truthyOrFalsy)); // false

// 5. Declare a variable named hasDeveloperJob and assign it the boolean value true.

// const hasDeveloperJob = true;

// 6. Below your variable, create an if statement that uses hasDeveloperJob as its condition. Within the body of your if statement, log "Timmy is employed as a developer." to the console.

// if (hasDeveloperJob) {
//     console.log('Timmy is employed as a developer.'); // true
    
// }

// 7. Declare another variable named isTimmyAGamer and assign it the boolean false.

// const isTimmyAGamer = false;
// if (isTimmyAGamer) {
//     console.log("Timmy loves to play World of Warcraft.");
    
// }

// 8. Declare another variable named timmyAge and set it to 18.

// const timmyAge = 18;

// 9.Create a third if statement. For its condition, use the >= operator to check if timmyAge is greater than or equal to 16.
// Inside the body of your new if statement, log "Timmy is old enough to drive." to the console.
// 10. Add an else clause to the existing if statement. Inside the body of your else clause, log "Timmy is not old enough to drive." to the console.

// if (timmyAge >= 18) {
//     console.log("Timmy is old enough to drive.");
 
// } else {
//     console.log("Timmy is not old enough to drive.");
    
// }

// Finally, change the declaration of timmyAge and set it to a number less than 16. After that you'll see "Timmy is not old enough to drive." logged to the console.

// const timmyAge = 15;

// if (timmyAge >= 16) {
//     console.log("Timmy is old enough to drive.");
    
// } else {
//     console.log("Timmy is not old enough to drive");
    
// }

// Full code:

const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer."); // true
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}
const timmyAge = 15;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}