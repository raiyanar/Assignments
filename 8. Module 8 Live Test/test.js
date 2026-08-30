//1 - Basic Calculator

const num1 = 20;
const num2 = 10;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log(addition, subtraction, multiplication, division);

// 2 - Age Checker

const age = 30;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// 3 — Even & Odd Number

const numVar = 15;

if (numVar % 2 === 0) {
  console.log(`${numVar} is Even.`);
} else {
  console.log(`${numVar} is Odd.`);
}

// 4 — 1 থেকে 10 পর্যন্ত Number

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 5 — Student Result

const studentName = "Adib";
const bangla = 70;
const english = 60;
const math = 80;

let totalMarks = bangla + english + math;
let avgMarks = totalMarks / 3;

console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${avgMarks}`);

if (avgMarks >= 40) {
  console.log("Result: Pass");
} else {
  console.log("Result: Fail");
}
