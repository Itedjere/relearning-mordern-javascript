// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /change/; // Change this line
// let result = myRegex; // Change this line




let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line