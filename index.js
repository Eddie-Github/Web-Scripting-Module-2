//make variables for numerator, denominator, and output
var numerator, denominator, output;

//solve numerator
numerator = 5 * 2 - Math.pow(3,2);

//solve denominator
denominator = Math.pow(Math.pow(2,2) - (-7),2)

//make output string
output = numerator + "/" + denominator;

//show output
document.getElementById("answer9").innerHTML = output;