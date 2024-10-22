console.log("Hello, World!");

var name = "Alice";
console.log(name); 
let age = 25;
console.log(age); 
const pi = 3.14;
console.log(pi); 

let userName = "John Doe"; 
let userAge = prompt("Please enter your age:");
userAge = Number(userAge);
if (userAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

let result = addNumbers(5, 7);
console.log(result); 



let number = 6;  
let factorial = 1;

// For loop to calculate factorial
for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`Factorial of ${number} is: ${factorial}`);

