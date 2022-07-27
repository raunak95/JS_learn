// // Log a statement using console.log()
// console.log("Hello from main.js");

// //This is how you can comment in JS files

// // First concept: Variables
// // Devlaring using let/const keywords

// // let age = 25
// // console.log(age)

// // // Once assigned using const, the value cannot be changed
// // const salary = 800080
// // console.log(salary)

// // Data Types

// const name = "Vishwas";
// const language = "JavaScript";
// const channel = `Codevolution`;

// const total = 0;
// const pie = 3.14;

// const isPrimaryNumber = true;
// const isNewUser = false;

// let result;
// console.log(result);

// // Preferably use null instead of undefined
// const res = undefined;

// const data = null;

// // Non primitive objects are like dictionaries
// // Keys can be of type symbol
// // https://www.programiz.com/javascript/symbol

// // Syntax is known as object literal
// const person = {
//   firstName: "Raunak",
//   lastName: "Chitlangia",
//   age: 30,
// };

// console.log(person.firstName);

// // Arrays
// const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers[2]);

// // DataTypes are dynamic. No need to declare explicitly (unlike C)
// let a = 10;
// a = "Raunak";
// a = true;
// console.log(a);

// // Operators

let x = 10;
let y = 4;

const isValidNumber = x > 8 && 8 > y;

console.log("Raunak " + "Chitlangia");

// Ternary operator
const isEven = 10 % 2 === 0 ? "Number is even" : "Number is off";
//console.log(isEven)

// console.log(true + 'testing')
// console.log('2'*3)

//Similarly String, parseInt, parseFloat, Boolean

// const var1 = null
// const var2 = undefined

// console.log(var1 == var2)
// console.log(var1 === var2)

const num = 0;

// Can specify as many else if as possible

// if (num > 0) {
//   console.log("Number is positive");
// } else if (num < 0) {
//   console.log("Number is Negative");
// } else {
//   console.log("Number is 0");
// }

// const color = "10";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "green":
//     console.log("Color is green");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   default:
//     console.log("Not a valid colour");
// }

// for(let i = 1; i <= 5; i++) {
//     console.log('Iteration number ' + i)
// }

// let i = 1;
// while (i <= 5) {
//   console.log("Iteration number " + i);
//   i++;
// }

// let i = 6;
// do {
//   console.log("Iteration number " + i);
//   i++;
// } while (i <= 5);

// const numArray = [1, 2, 3, 4, 5]
// for (const num of numArray) {
//     console.log('Iteration number ' + num)
// }

function greet(username) {
  console.log("Good morning " + username + ". You are awesome :)");
}

function add(a, b) {
  return a + b;
}

// Arrow functions
const arrowSum = (a, b) => {
  return a + b;
};

// No need to have curly braces and return if only 1 line within function
const arrowSum2 = (a, b) => a + b;

// No need for brackets for parameters if only one parameter present
const add5 = num => num + 5

console.log(arrowSum2(43, 26));
