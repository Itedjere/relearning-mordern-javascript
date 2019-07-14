function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C


class Thermostat {
  /* Alter code below this line */
  constructor(temp) {
    this._tempC = 5/9 * (temp - 32);
  }

  get temperature() {
    return this._tempC;
  }

  set temperature(tempc) {
    this._tempC = tempc;
  }
}
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C