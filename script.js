
var _ = require('lodash');

var array = [1,2,3,4,5,6];
console.log('answer', _.without(array, 3))


// Define selectors
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

/* 
body.style.background = "red";
console.log(body);
console.log(css)
console.log(color1);
console.log(color2);
 */

/// Methods
const setGradient = () => {
    body.style.background =
    "linear-gradient(to right, "
     + color1.value
      + ", " 
     + color2.value 
     + ")";

     css.textContent = body.style.background + ";";
}


/// Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


