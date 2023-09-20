const cars = ["BMW", "Volvo", "Honda", "Audi"];
const numbers = [0, 1, 2, 3, 4];
const person = [
  {
    firstName: "Budi",
    lastName: "Doremi",
  },
  {
    firstName: "Delta",
    lastName: "Test",
  },
  {
    firstName: "Delta",
    lastName: "Test",
  },
];

console.log("person Object", person);

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br/ >";
}

let textNumber = "";
for (let i = 0; i < numbers.length; i++) {
  textNumber += numbers[i] + "<br/ >";
}

let textPerson = "";
for (let i = 0; i < person.length; i++) {
  textPerson += `First Name: ${person[i].firstName} Last Name: ${person[i].lastName} <br />`;
}

document.getElementById("demo").innerHTML = text;
document.getElementById("demo2").innerHTML = textNumber;
document.getElementById("demo3").innerHTML = textPerson;

const personObject = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};
let personObjectText = "";
for (let key in personObject) {
  console.log(personObject[key]);
  console.log(key);
  personObjectText += personObject[key] + "<br/>";
}
document.getElementById("demo4").innerHTML = personObjectText;

const fruits = new Map([
  ["apples", 500],
  ["bananas", 200],
  ["oranges", 200],
]);

fruits.set("melon", 300);
fruits.set("oranges", 300);
console.log("Map [Updated]", fruits);
if (fruits.has("melon")) {
  fruits.delete("melon");
}
document.getElementById("demoMap").innerHTML = fruits.get("apples");
let fruitPrint = "";
fruits.forEach((value, key) => {
  console.log("data", value, key);
  fruitPrint += `${key} : ${value} <br>`;
});

for (let amount of fruits.values()) {
  console.log("amount", amount);
}
for (let fruit of fruits.keys()) {
  console.log("fruit", fruit);
}

for (let fruit of fruits) {
  console.log("fruit", fruit);
}

document.getElementById("demoMap").innerHTML = fruitPrint;

let personSet = new Set();
const john = {
  name: "john",
};
const pete = {
  name: "pete",
};
const marry = {
  name: "marry",
};

personSet.add(john);
personSet.add(pete);
personSet.add(marry);
personSet.add(marry);
console.log(personSet);

for (let user of personSet) {
  console.log("user", user.name);
}

const genreList = ["Action", "Comedy", "Romance"];
const ages = [32, 33, 16, 40];
const checkAdults = (age) => {
  return age >= 18;
};
const result = ages.filter(checkAdults);
const nonActionMovie = genreList.filter((genre) => {
  return genre !== "Action";
});

const actionMovie = genreList.filter((genre) => {
  return genre === "Action";
});

console.log("result", nonActionMovie, actionMovie);

const employees = [
  { name: "Tony Stark", department: "IT" },
  { name: "Peter Parker", department: "Pizza Delivery" },
  { name: "Bruce Wayne", department: "IT" },
  { name: "Clark Kent", department: "Editing" },
];

const searchEmployeesByName = employees.find((employee) => {
  return employee.department.includes("IT");
});

console.log("searchEmployeesByName", searchEmployeesByName);

const filteredEmployees = employees.filter((employee) => {
  return employee.name.includes("Br") || employee.department.includes("Pizza");
});

const Component = (employee) => {
  return `<div>${employee.name}</div>
    <div>${employee.department}</div>`;
};
console.log("filteredEmployees", filteredEmployees);
const printComponent = filteredEmployees
  .map((employee) => {
    return Component(employee);
  })
  .join("");

document.getElementById("employeeList").innerHTML = printComponent;
