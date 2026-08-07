/*
Task 1 : Variables & Constants
তিনটি Variable তৈরি করো।
তোমার নাম
তোমার বয়স
তোমার প্রিয় রং
একটি Constant তৈরি করো।
দেশের নাম
সবগুলো Console-এ দেখাও।
*/

let myName = "Adib";
let myAge = 32;
let myFavColor = "Blue";
const myCountry = "Bangladesh";
console.log(myName, myAge, myFavColor, myCountry);

/*
Task 2 : Data Types
নিচের Data Types-এর একটি করে Example তৈরি করো।
String
Number
Boolean
Array
Object
সবগুলো Console-এ দেখাও।
*/

let str = "string"; //string
let num = 7; //number
let bool = true; //boolean
let arr = ["a", 7, "c"]; //array
let obj = { name: "Adib", age: 32 }; //object
console.log(str, num, bool, arr, obj);

/*
Task 3 : Operators
দুটি Number নাও।
যেমনঃ
let a = 20;
let b = 5;
নিচের Operation গুলো বের করো।
যোগ
বিয়োগ
গুণ
ভাগ
ভাগশেষ
*/

let a = 20;
let b = 5;
console.log(a + b); //যোগ
console.log(a - b); //বিয়োগ
console.log(a * b); //গুণ
console.log(a / b); //ভাগ
console.log(a % b); //ভাগশেষ

/*
Task 4 : Condition (if...else)
একটি Number নাও।
যদি Number টি 50 বা তার বেশি হয় তাহলে দেখাও
Pass
অন্যথায় দেখাও
Fail
*/

let result = 51;
if (result >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
