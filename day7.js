// Building a Fortune Teller :

const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// 2. Generate a whole random number between 1 and 5
const randomNumber = Math.floor(Math.random() * 5) + 1; 

// 3. The "Simple" Selection (Ternary Logic)
// This is one long line that checks the number and picks the string
const selectedFortune = 
    randomNumber === 1 ? fortune1:
    randomNumber === 2 ? fortune2:
    randomNumber === 3 ? fortune3:
    randomNumber === 4 ? fortune4:
    fortune5;
console.log("Fortune Number: " + randomNumber);
console.log(selectedFortune);