let user = {
  name: "Cosimo",
  age: 30,
};

function changeName(user, key, value){
  let newUser = Object.assign({}, user);
  newUser[key] = value;
  return newUser;
}
changeName(user, "name", "Paolo");

console.log(user.name);
console.log(newUser.name);

