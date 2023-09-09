const demo = document.getElementById("app");
// const header = document.createElement("h1");
// const headerContent = document.createTextNode("Develop. Preview. Ship");
// header.appendChild(headerContent);
// app.appendChild(header);

// let text = "";
// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }

// const getDay = () => {
//   switch (new Date().getDay()) {
//     case 0:
//       return "Sunday";
//       break;
//     case 1:
//       return "Monday";
//       break;
//     case 2:
//       return "Tuesday";
//       break;
//     case 3:
//       return "Wednesday";
//       break;
//     case 4:
//       return "Thursday";
//       break;
//     case 5:
//       return "Friday";
//       break;
//     case 6:
//       return "Saturday";
//   }
// };

// const today = {
//   day: 1,
//   name: "Monday",
// };

// new Date().getDay() === today.day
//   ? (demo.innerHTML = `Today is ${today.name}`)
//   : (demo.innerHTML = `Today is not ${today.name}`);

// const anotherDay = {
//   day: 5,
//   name: "Friday",
// };

// new Date().getDay() === today.day
//   ? (demo.innerHTML = `Today is ${today.name}`)
//   : new Date().getDay() === anotherDay.day
//   ? (demo.innerHTML = `Today is ${today.anotherDay.day}`)
//   : (demo.innerHTML = `Today is neither ${today.name} nor ${anotherDay.name}`);

// const getDayF = () => {
//   if (new Date().getDay() === 0) {
//     return "Sunday";
//   }
//   if (newDate().getDay() === 1) {
//     return "Monday";
//   }
//   if (newDate().getDay() === 2) {
//     return "Tuesday";
//   }
//   if (newDate().getDay() === 3) {
//     return "Wednesday";
//   }
//   if (newDate().getDay() === 4) {
//     return "Thursday";
//   }
//   if (newDate().getDay() === 5) {
//     return "Friday";
//   }
//   if (newDate().getDay() === 6) {
//     return "Saturday";
//   }
// };

// demo.innerHTML = `Today is ${getDayF()}`;
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;

//   // some code (try to change x to 5)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// const myDisplayer = (some) => {
//   document.getElementById("demo").innerHTML = some;
// };

// const myFunction = async () => {
//   return "Hello";
// };

// const myDisplay = async () => {
//   const myPromise = new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("I love You !!");
//     }, 3000);
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// };

// text += "The number is " + i + "<br>";
// const listEl = document.createElement("ul");
// const getUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const albums = await response.json();
//   return albums;
// };
// const userList = getUsers().then((value) => {
//   value.map((album) => {
//     let titleText = "";
//     let bodyText = "";
//     const titleEl = document.createElement("li");
//     const bodyEl = document.createElement("p");
//     titleText += album.name;
//     bodyText += album.email;
//     titleEl.innerHTML = titleText;
//     bodyEl.innerHTML = bodyText;
//     titleEl.appendChild(bodyEl);
//     listEl.appendChild(titleEl);
//   });

//   demo.appendChild(listEl);
// });

const ParentComponent = () => {
  return <ChildrenComponent message="This is my first component" />;
};

const ChildrenComponent = (props) => {
  return <h1>{props.message}</h1>;
};

exports.ParentComponent = ParentComponent;
