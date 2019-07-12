//Question
// Add the equality operator to the indicated line so that the 
// function will return "Equal" when val is equivalent to 12

// // Setup
// function testEqual(val) {
//   if (val) { // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// // Change this value to test
// testEqual(10);

//Answer
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);