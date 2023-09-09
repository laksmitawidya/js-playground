const testlet = document.getElementById("testlet");
const testvar = document.getElementById("testvar");
const testconst = document.getElementById("testconst");

const testLet = () => {
  let num = 100;
  {
    let num = 200;
  }
  return num;
};

testlet.innerHTML = testLet();

const testVar = () => {
  var num = 100;
  {
    var num = 200;
  }
  return num;
};

testvar.innerHTML = testVar();

try {
  const PI = 3.141592653589793;
  PI = 3.14;
  testconst.innerHTML = PI;
} catch (error) {
  testconst.innerHTML = error;
}

function calculateBill(meal, taxRate = 0.05) {
  const total = meal * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(100, 0.13);
document.getElementById("taxBill").innerHTML = myTotal;

// ES 5
var car = {
  name: "Honda",
  products: ["jazz", "civic", "hrv"],
  showProduct: function () {
    this.products.map(
      function (product) {
        // console.log(`${this.name} has launched ${product}`);
      }.bind(this)
    );
  },
};

car.showProduct();

var car = {
  name: "Honda",
  products: ["jazz", "civic", "hrv"],
  showProduct: function () {
    this.products.map((product) => {
      console.log(`${this.name} has launched ${product}`);
    });
  },
};

car.showProduct();

const formatMessage = (name = "test", id = 5, avatar) => {
  return {
    namaPanjang: name,
    id,
    avatar,
  };
};

const newMessage = formatMessage(
  "Belajar Programming",
  1,
  "https://i.pravatar.cc/300"
);
console.log("newMessage", newMessage);

const { avatar, namaPanjang, id } = newMessage;

console.log("namaPanjang", namaPanjang, newMessage.namaPanjang);
console.log("id", id);
console.log("avatar", avatar);

const newMessage2 = formatMessage();

console.log("newMessage2", newMessage2);

const arr1 = ["a", "b"];
const arr2 = ["2"];

const allArr = [...arr1, ...arr2];
console.log("allArr", allArr);

const pekerjaan = { job: "programmer" };
const coba = "a";
const coba2 = "b";
const data = { ...newMessage, ...pekerjaan, ...coba, ...coba2 };
console.log("data", data);

// import { info, info2 } from "./person.js";
import personabc from "./person.js";

// console.log("person", info, info2);
console.log("person", personabc);

const isMale = true;
const value = `Full name: ${name} Sex: ${
  isMale ? "Laki-laki" : "Perempuan"
} Age ${age}`;
console.log("value", value);
