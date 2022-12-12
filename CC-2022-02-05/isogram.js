/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

//Solution 
function isIsogram(str){
  str = str.toUpperCase()
  for(let x = 0; x < str.length; x++){
    for(let y = x + 1; y < str.length; y++){
      if(str[x] === str[y]){
          return false
      }
    }
  }
  return true
}