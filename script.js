
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


