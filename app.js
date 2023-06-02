'use strict'; // Runs JS in strict mode, helps catch errors
// JS Code is read top to bottom, there is no main method in JS

window.onload = function() {
  checkMobileCSS();
};

function checkMobileCSS() {
  
    if (window.matchMedia("(max-width: 767px)").matches) {
 
      const columnLeft = document.querySelector('.column-left');
      const image = columnLeft.querySelector('img');
      image.src = './Resources/Images/mobile.gif';

    } 
}
//NOTES:
// let is one of the new ways to declare variables in JavaScript.
// let is block scoped, meaning it only exists within the block it is declared in.
// var is function scoped, meaning it exists within the function it is declared in.
// const is also block scoped, but it cannot be reassigned. Like final in Java.
let names = ['Joel', 'Jasmine', 'Julia', 'Jacob']; //an Array
let greeting = 'Hello, my name is '+ names[0]; //concatenation
console.log(greeting);  //=> 'Hello, my name is Joel'

//an object of ages (explicit Strings for keys)
//The `ages` object has a `sarah` property (with a value of 42)
let ages = {'sarah':42, 'amit':35, 'zhang':13};

//different properties can have the same values
//property names with non-letter characters must be in quotes
let meals = {breakfast:'coffee', lunch: 'coffee', 'afternoon tea': 'coffee'}

//values can be of different types (including arrays or other objects!)
let typeExamples = {number:12, string:'dog', array:[1,2,3]};

let myObject = {a:1, b:2}

//convert object to string, won't log nicely
console.log("My object: " + myObject); //=> My object: [object Object]

//log the object directly
console.log("My object ", myObject); //=> My object {a: 1, b: 2}
//objects can be nested and they are unordered.
let cssSelector;
let elem = document.querySelector(cssSelector);
//returns the first element that matches the CSS selector
//example:
//let elem1 = document.querySelector('p');
//elem1.textContent = 'Hello World!';


//a (named) callback function
function onClickCallback() {
  console.log("You clicked me!");
}

//get a reference to the element we want to "listen" to
  //let button = document.querySelector('button');

//register a listener for 'click' events
  //button.addEventListener('click', onClickCallback);