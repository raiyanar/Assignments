/*
Task 1 — Array Methods
একটি fruits Array তৈরি  করতে হবে:
let fruits = ["Apple", "Mango", "Banana"];
নিচের কাজগুলো করতে হবে:
push() দিয়ে "Orange" যোগ করতে হবে
pop() দিয়ে শেষের item remove করতে হবে
forEach() দিয়ে সব fruits console-এ দেখাও।
*/

let fruits = ["Apple", "Mango", "Banana"];
fruits.pop();
fruits.push("Orange");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

/*
Task 2 — map() & filter()
নিচের Array ব্যবহার করতে হবে:
let numbers = [10, 20, 30, 40, 50];
map() ব্যবহার করে প্রতিটি number-এর সাথে 10 যোগ করতে হবে
filter() ব্যবহার করে 30 এর বেশি number বের করতে হবে
*/

let numbers = [10, 20, 30, 40, 50];

const added = numbers.map(function (num) {
  return num + 10;
});
console.log(added);

const remaining = numbers.filter(function (num) {
  return num <= 30;
});
console.log(remaining);

/* 
Task 3 — reduce(), find(), findIndex()
নিচের Array ব্যবহার করতে হবে:
let marks = [40, 55, 70, 85, 30];
reduce() দিয়ে মোট marks বের করতে হবে
find() দিয়ে প্রথম 70 বা তার বেশি mark খুঁজে বের করতে হবে
findIndex() দিয়ে 85 এর index বের করতে হবে
*/

let marks = [40, 55, 70, 85, 30];

const total = marks.reduce(function (acc, mark) {
  return acc + mark;
}, 0);
console.log(total);

const highMark = marks.find(function (mark) {
  return mark >= 70;
});
console.log(highMark);

const index = marks.findIndex(function (mark) {
  return mark == 85;
});
console.log(index);

/*
Task 4 — Object Methods
নিচের Object তৈরি করতে হবে:
let student = {
  name: "Rahim",
  age: 22,
  city: "Chittagong"
};
তারপর:
Object.keys() দিয়ে keys দেখাও।
Object.values() দিয়ে values দেখাও।
Object.entries() দিয়ে key ও value দেখাও।
hasOwnProperty() দিয়ে name property আছে কিনা check করতে হবে
*/

let student = {
  name: "Rahim",
  age: 22,
  city: "Chittagong",
};

let objKeys = Object.keys(student);
console.log(objKeys);

let objValues = Object.values(student);
console.log(objValues);

let objEntries = Object.entries(student);
console.log(objEntries);

let hasProp = student.hasOwnProperty("name");
console.log(hasProp);

/*
Task 5 — Set
নিচের Set তৈরি করতে হবে:
let numbers = new Set([10, 20, 30]);
তারপর:
add() দিয়ে 40 যোগ করতে হবে
delete() দিয়ে 20 remove করতে হবে
has() দিয়ে 30 আছে কিনা check করতে হবে
forEach() দিয়ে সব value print করতে হবে
*/

let numbersSet = new Set([10, 20, 30]);
numbersSet.add(40);
console.log(numbersSet);
numbersSet.delete(20);
console.log(numbersSet);
console.log(numbersSet.has(30));
numbersSet.forEach(function (num) {
  console.log(num);
});

/*
Task 6 — Map
একটি Map তৈরি করতে হবে:
let student = new Map();
তারপর:
set() দিয়ে name → Rahim
set() দিয়ে age → 22
get() দিয়ে name বের করতে হবে
has() দিয়ে age আছে কিনা check করতে হবে
size দিয়ে কয়টি data আছে দেখাও।
*/

let mapStudent = new Map();
mapStudent.set("name", "Rahim");
mapStudent.set("age", 22);
console.log(mapStudent);
console.log(mapStudent.get("name"));
console.log(mapStudent.has("age"));
console.log(mapStudent.size);

/*
Task 7 — Spread & Rest
Spread
দুইটি Array:
let a = [1, 2, 3];
let b = [4, 5, 6];
Spread operator ব্যবহার করে দুইটি Array একসাথে করতে হবে
Rest
একটি function তৈরি করো যেখানে যতগুলো number দেওয়া হবে সবগুলো যোগ করতে হবে
Example:
sum(10, 20, 30);
Output:
60
*/

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a, ...b];
console.log(c);

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(10, 20, 30));

/*
Task 8 — Class & Constructor
Student নামে একটি Class তৈরি করতে হবে
Constructor-এর মাধ্যমে:
name
age
course
নিতে হবে।
তারপর দুইজন student-এর object তৈরি করতে হবে
Example:
let student1 = new Student("Rahim", 22, "JavaScript");
let student2 = new Student("Karim", 23, "React");
*/

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}
const student1 = new Student("Rahim", 22, "JavaScript");
const student2 = new Student("Karim", 23, "React");
console.log(student1, student2);

/*
Task 9 — Inheritance & Overriding
Person নামে একটি parent class তৈরি করতে হবে
তারপর Student নামে child class তৈরি করতে হবে
Person class-এ:
introduce()
method থাকবে।
Student class-এ একই introduce() method তৈরি করে আলাদা output দেখাও।
এখানে Inheritance + Method Overriding practice করতে হবে।
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name}, and I am ${this.age} years old.`;
  }
}
const person1 = new Person("Adib", 22);
console.log(person1);
console.log(person1.introduce());

class StudentChild extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old. My course is ${this.course}`;
  }
}
const studentOne = new StudentChild("Adib", 22, "JavaScript");
console.log(studentOne);
console.log(studentOne.introduce());

/*
Task 10 — Small OOP Project ⭐
একটি simple Bank Account class তৈরি করতে হবে
Class-এর মধ্যে থাকবে:
name
balance
দুইটি method তৈরি করো:
deposit()
withdraw()
Example:
let account = new BankAccount("Rahim", 5000);
account.deposit(1000);
account.withdraw(500);
শেষে account holder-এর নাম এবং current balance console-এ দেখাও।
*/

class BankAccount {
  static totalAccounts = 0;
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    BankAccount.totalAccounts++;
  }
  deposit(num) {
    this.balance += num;
    return `${this.name}'s current balance is ${this.balance}.`;
  }
  withdraw(num) {
    if (num > this.balance) {
      return "Sorry! Insufficient balance.";
    }
    this.balance -= num;
    return `${this.name}'s current balance is ${this.balance}.`;
  }
  static getTotalAccounts() {
    return `The number of total accounts is: ${BankAccount.totalAccounts}`;
  }
}
let account1 = new BankAccount("Rahim", 5000);
console.log(account1);
console.log(account1.deposit(1000));
console.log(account1.withdraw(500));
console.log(account1.withdraw(6000));
console.log(BankAccount.getTotalAccounts());
/*
Bonus
static ব্যবহার করে একটি method তৈরি করার চেষ্টা করো।
*/

/*
📌 Rules
সব Task একটি .js file-এ করতে হবে।

প্রতিটি Task-এর আগে comment লিখতে হবে।

console.log() দিয়ে output দেখাতে হবে।



Submission Rules
GitHub Repository Link জমা দিতে হবে।  GitHub  লিংক না পেলে আপনি 0 পাবেন



*/
