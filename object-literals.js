//Use simple fields with object literals to create and return a Person object.

// const createPerson = (name, age, gender) => {
//   "use strict";
//   // change code below this line
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };
//   // change code above this line
// };
// console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object