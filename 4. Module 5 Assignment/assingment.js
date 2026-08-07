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

/*
Task 5 : switch-case
একটি Variable তৈরি করো।
let day = 3;
Output হবে
Wednesday
(১ থেকে ৭ পর্যন্ত Day দেখাতে হবে।)
*/

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

/*
Task 6 : for Loop
১ থেকে ১০ পর্যন্ত সংখ্যা Console-এ দেখাও।
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
Task 7 : while Loop
১০ থেকে ১ পর্যন্ত সংখ্যা Console-এ দেখাও।
*/

let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

/*
Task 8 : Array + for...of
একটি Array তৈরি করো।
["Apple", "Banana", "Mango", "Orange"]
for...of ব্যবহার করে সবগুলো ফল Console-এ দেখাও।
*/

let arrayOne = ["Apple", "Banana", "Mango", "Orange"];
for (let item of arrayOne) {
  console.log(item);
}

/*
Task 9 : Object + for...in
একটি Object তৈরি করো।
{
   name: "Rahim",
   age: 22,
   city: "Dhaka"
}
for...in ব্যবহার করে সব Key এবং Value Console-এ দেখাও।
*/

let objOne = {
  name: "Rahim",
  age: 22,
  city: "Dhaka",
};

for (let key in objOne) {
  console.log(key, objOne[key]);
}

/*
Task 10 : Comments
একটি Single Line Comment লেখো।
একটি Multi Line Comment লেখো।
*/

// This is a single line comment.
/*
This is a...
Multi Line comment.
*/

/*
Task 11 : Function (Arguments)
greet() নামে একটি Function তৈরি করো।
Function টি একটি নাম Argument হিসেবে নিবে।
Output হবে
Hello Rahim
*/

let name = "Adib";
function greet(nameArg) {
  console.log(`Hello ${nameArg}`);
}
greet(name);

/*
Task 13 : Returning Value
sum() নামে একটি Function তৈরি করো।
দুটি Number নিবে।
Return করবে যোগফল।
*/

function sum(valOne, valTwo) {
  return valOne + valTwo;
}
console.log(sum(7, 3));
