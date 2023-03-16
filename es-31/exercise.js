function sayHelloName(printName){
  console.log("Hello");
  printName();
}
 


function printName(){
    console.log("Ali")
}
sayHelloName(printName);