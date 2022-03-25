/*
Input validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.
*/ 

//Solution
let userNum = 0
do{
  userNum = +prompt("Enter a number between 1 and 100")
}while(userNum > 100){
  console.log(userNum)
}

//Improve the program so that the terminating number is between 50 and 100.

