/*Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.
*/

//Solution (FOR LOOP)
for(let i = 1; i <= 10; i++){
  console.log(i) 
}

//Improve it so that the number of turns is given by the user.
let turns = +prompt("Enter number of turns")
for(let i = 1; i <= turns; i++){
  console.log(i) 
}

//Solution (WHILE LOOP)
let turns = +prompt("Enter number of turns")
let i = 1
while(i <= turns){
  console.log(i)
  i++
}