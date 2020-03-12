console.log("Starting Javascript");

var myName = "Gabriela";
console.log(myName);
var age = 20;
console.log(age);
var Ignasiage = 32;
var ageDiff;
var ageDiff = age - Ignasiage;
console.log("La diferencia es " + ageDiff);

if (age < 21) {
  console.log("You are not older than 21");
} else {
  console.log("you are older than 21");
}

if (age > Ignasiage) {
  console.log ("Ignasi is younger than you");
} else if (age == Ignasiage){
  console.log("You have the same age as Ignasi");
} else {
  console.log("Ignasi is older than you");
}
