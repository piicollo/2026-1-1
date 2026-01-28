
// if else statement:

// let annualIncome = 60000;
// if (annualIncome >= 50000) {
//     console.log("Eligible for basic loan rates.");
// } else if (annualIncome >= 100000) {
//     console.log("Eligible for standard rates.");
// } else if (annualIncome >= 200000) {
//     console.log("Eligible for Premium rates.");
// } else {
//     console.log("Not eligible due to insufficient income.");
    
// }

// Example 2:

// let cScore = 250;
// let aIncome = 60000;

// if (cScore >= 250 && aIncome >= 60000) {
//     console.log("Eligible for basic loan rates.");
    
// } else if (cScore >= 500 && aIncome >= 100000) {
//     console.log("Eligible for standard loan rates.");
    
// } else if (cScore >= 750 && aIncome >= 250000) {
//     console.log("Eligible for premium loan rates.");
    
// } else if (cScore > 1000 && aIncome >= 500000) {
//     console.log("Eligible for Home loan.");
    
// } else {
//     console.log("Not eligible due to insuffient income.");
    
// }

// Example 3

let creditScore = 600;
let yearIncome = 60000;
let loanAmount = 200000;

let eligibilityStatus;

if (creditScore >= 750 && yearIncome >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && yearIncome >= 50000){
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && yearIncome >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    eligibilityStatus = "Not eligible for due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income."
}
console.log(eligibilityStatus);
