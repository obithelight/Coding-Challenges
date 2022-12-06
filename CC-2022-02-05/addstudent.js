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

