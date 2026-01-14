// Comparison and undefined:

console.log(undefined < 0); // false (NaN < 0 is false)
console.log(undefined > 0); // false (NaN >= 0 is false)
console.log(undefined > 1); // false


// Comparison and null:
console.log(null < 0); // false
console.log(null >= 0); // true

// equality operator ( == , null and undefined ) :

console.log(null == undefined); // true
console.log(null == 0); // false
console.log(undefined == NaN); // false
console.log(undefined == null); // true
console.log(undefined == 0); // false

// equality operator ( === with null and undefined):

console.log(null === undefined); // false
console.log(0 === null); // false
console.log( 0 === undefined); // false
console.log(undefined === undefined); // true

// Switch Statement:
// Example 1:
const dayOfWeek = 3; 

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday! Time to start the week strong.");
    break;
  case 2:
    console.log("It's Tuesday! Keep the momentum going.");
    break;
  case 3:
    console.log("It's Wednesday! We're halfway there.");
    break;
  case 4:
    console.log("It's Thursday! Almost the weekend.");
    break;
  case 5:
    console.log("It's Friday! The weekend is near.");
    break;
  case 6:
    console.log("It's Saturday! Enjoy your weekend.");
    break;
  case 7:
    console.log("It's Sunday! Rest and recharge.");
    break;
  default:
    console.log("Invalid day! Please enter a number between 1 and 7.");
}

// Example 2:

let userId = 34;

switch (userId) {
    case 22:
        console.log("Ramesh Stha");
        break;

    case 30:
        console.log("Hari Thapa");
        break;
    case 34 :
        console.log("Ram Bahadur Rai");
        break;

    case 12:
        console.log("Ram Gopal");
        break;

    default:
        console.log("Invalid userId");
               
}

// preview:

console.log(5 === 2 + 3 || 4 == 2); // true

// const a = 2;
// if (1 == "1") {
//   let b = 3;
//   console.log(a + b);
// }
// console.log(b); // b is not defined

// Example 3:
let vehicle = "car";

switch (vehicle) {
  case "bike":
    console.log("Bikes are two-wheelers.");
    break;
  case "car":
    console.log("Some cars are 4x4.");
  case "truck":
    console.log("Trucks can carry heavy loads.");
    break;
  default:
    console.log("Unknown vehicle.");
} // car and case truck


if (1) {
    console.log("True!");
    
}

const age = 22;
if (22 == "22") {
    let minAge = 17;
    console.log(age + minAge);
    
}
console.log("Minor");
