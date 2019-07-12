//Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

//qQuestion
// Setup
// function testStrictNotEqual(val) {
//   // Only Change Code Below this Line
  
//   if (val) {

//   // Only Change Code Above this Line

//     return "Not Equal";
//   }
//   return "Equal";
// }

// // Change this value to test
// testStrictNotEqual(10);

// Answer
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);