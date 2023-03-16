let user = {
  name: "Cosimo",
  age: 30,
};
const newUser = user;
function changeName(user, key, value){
  
  newUser[key] = value;
}

console.log(user);
changeName(newUser, "name", "Paolo");
console.log(newUser);

