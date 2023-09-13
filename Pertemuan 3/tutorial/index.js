const div = document.getElementById("demo");

// Object
let employees = [
  { name: "Tony Stark", department: "IT" },
  { name: "Peter Parker", department: "Pizza Delivery" },
  { name: "Bruce Wayne", department: "IT" },
  { name: "Clark Kent", department: "Editing" },
];
const Component = (employee) => {
  return `<div>Name : ${employee.name}</div>
      <div>Department : ${employee.department}</div>`;
};
const itEmployee = employees.find((employee) => employee.department == "IT");
div.innerHTML = Component(itEmployee);

// ascending
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
document.getElementById("demo").innerHTML = fruits;
// descending
fruits.reverse();

document.getElementById("demo").innerHTML = fruits;

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
// Descending
points.sort(function (a, b) {
  return a - b;
});
document.getElementById("demo").innerHTML = points;
// Descending
points.sort(function (a, b) {
  return b - a;
});
document.getElementById("demo").innerHTML = points;

let employeeList = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },

  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },

  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];

const ComponentEmployee = (employee) => {
  return `<div>
    <div>
      Full Name: ${employee.firstName} ${employee.lastName}
    </div>
    <div>Age: ${employee.age}</div>
    <div>Joined Date: ${new Date(employee.joinedDate)}</div>
  </div>`;
};

employeeList.sort((a, b) => {
  return a.age - b.age;
});

employeeList.sort((a, b) => {
  let fa = a.firstName.toLowerCase(),
    fb = b.firstName.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});
div.innerHTML = employeeList.map((employee) => ComponentEmployee(employee));

employees.sort((a, b) => {
  let da = new Date(a.joinedDate),
    db = new Date(b.joinedDate);
  return da - db;
});

div.innerHTML = employeeList
  .map((employee) => ComponentEmployee(employee))
  .join("");
