function sayHelloName(printName) {
  setTimeout(() => {
    console.log("Hello");
    printName();
  }, 1000);
}
  
function printName() {
  console.log("Ali");
}
sayHelloName(printName);
