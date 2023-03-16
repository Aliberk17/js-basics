let helloName = "Hello Ali"

function printName(){
    let helloName = "Hello John";
    function inner(){
        return helloName;
    }
    return inner;
}
console.log(printName()());