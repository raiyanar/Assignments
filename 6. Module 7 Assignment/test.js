function greet(name, callback) {
  callback(name);
}
greet("Amit", callbackFunction);

function callbackFunction(name) {
  console.log(`Hello ${name}\nWelcome to JavaScript`);
}
