// Use class keyword and write a proper constructor to create the Vegetable clas

// function makeClass() {
//   "use strict";
//   /* Alter code below this line */

//   /* Alter code above this line */
//   return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'



class Vegetable {
  constructor(plant) {
    this.name = plant;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'