//Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop. 

var names = ["Florencia", "Mariela", "Gonzalo", "Ender", "Ornella", "Cristian", "Gabriela", "Carlos", "Adrian", "Miguel"];
names.sort();

console.log(names[0]);
console.log(names[names.length - 1]);

for (var i = 0; i < 10; i++) {
  console.log(names[i]);
}

//Looping over an array 
//Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.
var i = 0
var ages = [24, 22, 19, 36, 20, 30, 21, 27, 25, 24];
while (i < 1) {
  console.log(ages);
  ++i;
}

for (var i = 0; i <= ages.length - 1; i++) {
  console.log(ages[i]);
}

// Exercise 3: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];

function valorMaximo(array) {
  var maximo = Math.max.apply(null, array);
  console.log(maximo);
}
valorMaximo(numbers);
//Exercise 4: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.
function valorMinimo(array) {
  var minimo = Math.min.apply(null, array);
  console.log(minimo);
}
valorMinimo(numbers);

//Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.

var moreNumbers = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var oneNumber = 1;

function imprimirOneBased(array, index) {

  console.log(array[index])
}

imprimirOneBased(moreNumbers, oneNumber);

//Exercise 6: Write a function which receives an array and only prints the values that repeat. 
var moreNumbers = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 31, 12, 99, 100];

var repetidosConFor = [];
for (i = 0; i < moreNumbers.length; i++) {
  for (j = (i + 1); j < moreNumbers.length; j++) {
    if (moreNumbers[i] == moreNumbers[j]) {
      repetidosConFor.push(moreNumbers[i]);
    };
  };

};
console.log(repetidosConFor);



//Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string. 
myColor = ["Red", "Green", "White", "Black"];
var color = myColor.join();
console.log(color);


//JAVASCRIPT STRING FUNCTIONS

//Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.

function invertirNums(numeros) {
  return numeros.split("").reverse().join("");
}
console.log(invertirNums("52549639"));

//Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.  Punctuation and numbers aren't passed in the string.


var letras = "polasjnbgf";

function ordenarAlfabeticamente(string) {

  
  var finalWord= string.split("").sort().join("");
  console.log(finalWord);
}
ordenarAlfabeticamente(letras);

//Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".

function imprimirMayuscula (string) {
return string
    .split(' ')
    .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
 }
 console.log(imprimirMayuscula("prince of persia"))

//Exercise 4: Write a JavaScript function that finds the longest word in a phrase.For example  if x = "Web Development Tutorial", then the output should be "Development".

var longestWord= "Web Development Tutorial";
function imprimirLongestWord(string) {
    var arrayLongest = string.split(" ");
    var longest = 0;
    var word = "";  
    arrayLongest.forEach(function(finalArray) {
        if (longest < finalArray.length) {
            longest = finalArray.length;
            word = finalArray;
        }
    });
    return word;
}
console.log(imprimirLongestWord(longestWord));