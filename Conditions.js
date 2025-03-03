//checking if  number is greater than another number

let num1 = 5;
let num2 = 10;

console.log("I am regular upper code");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num2 is greater than num1");
}

console.log("I am regular lower code");

//checking if a string is equal than another string

let str1 = "vaishali";
let str2 = "Vaishali";

if (str1 == str2) {
  console.log("Both strings are equal");
} else {
  console.log("Both strings are not equal");
}

//checking if a variable is a number or not

let score = 100;

if (typeof score === "number") {
  console.log("Score is a number");
} else {
  console.log("Score is not a number");
}

//checking if a boolean is true or false

let isLoggedin = true;

if (isLoggedin) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}

//checking if an array is empty or not

let fruits = ["apple", "banana", "mango"];

console.log(fruits.length);

if (fruits.length === 0) {
    console.log("Fruits array is empty");
    } else {
    console.log("Fruits array is not empty");
    }