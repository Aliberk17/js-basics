function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}
let phone = new Smartphone("apple","iphone13",13000);
console.log(phone);
let phone2 = new Smartphone("samsung","A52",12000);
console.log(phone2);
