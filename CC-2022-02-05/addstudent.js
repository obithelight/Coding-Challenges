/*
Add a function to our code findStudent(keyword) that matches all students in the students array whose lowercased name includes the lowercased keyword, and print a formatted string based on the number of matches as described below.

If one student matches the keyword, print the string <student> is enrolled.. If more than one student matches the keyword, print the string Multiple students match this keyword.. If zero students match the keyword, print the string No students match this keyword..
Note: The match should not be case sensitive. The keyword a should match the student Alec and the keyword A should match the student Sarah.
*/

let students = ["Ada", "Mama", "Papa", "Jero"];

function findStudent(keyword) {
  let newArr = students.filter((student) =>
    student.toLowerCase().includes(keyword.toLowerCase())
  );
  if (newArr.length === 1) {
    console.log(`${newArr} is enrolled.`);
  } else if (newArr.length > 1) {
    console.log(`Multiple students match this keyword.`);
  } else {
    console.log(`No students match this keyword.`);
  }
}

//ZUITT 
function findStudent(keyword) {
  // Loops through all elements of the array to find the student name that matches the keyword provided
  let match = students.filter(function (student) {
    // If the student name includes the keyword provided
    return student.toLowerCase().includes(keyword.toLowerCase());
  });
  // match is an array...
  if (match.length == 1) {
    console.log(match[0] + " is enrolled."); // if 1 student was found, print the first element (at index 0) in a formatted string
  } else if (match.length > 1) {
    console.log("Multiple students match this keyword."); // more than 1 student was found
  } else {
    console.log("No students match this keyword."); // 0 students were found
  }
}

findStudent("a"); //"Multiple students match this keyword."
findStudent("B"); //"No students match this keyword."
findStudent("c"); 
findStudent("D"); 
findStudent("e");