/*Multiplication table
Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).*/

//Solution 
let userNumber = +prompt("Please enter a number") 
for(let i = 1; i <= userNumber; i++){
  console.log(`${i} * ${userNumber} = ${i * userNumber}`)
}

//Improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let userInput = 0;
while (userInput < 2 || userInput > 9) {
  userInput = +prompt(`Please enter a number between 2 and 9`);
}

for(let i = 1; i <= userInput; i++){
  console.log(`${i} * ${userInput} = ${i * userInput}`)
}
