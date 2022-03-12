/*Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.
*/

//Solution 
for(let i = 1; i <= 10; i++){
  console.log(i) 
}

//Improve it so that the number of turns is given by the user.
let turns = +prompt("Enter number of turns")
for(let i = 1; i <= turns; i++){
  console.log(i) 
}