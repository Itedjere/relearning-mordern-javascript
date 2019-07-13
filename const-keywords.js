//Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.

// function printManyTimes(str) {
//   "use strict";

//   // change code below this line

//   var sentence = str + " is cool!";
//   for(var i = 0; i < str.length; i+=2) {
//     console.log(sentence);
//   }

//   // change code above this line

// }
// printManyTimes("freeCodeCamp");

function printManyTimes(str) {
  "use strict";

  // change code below this line

  let SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");