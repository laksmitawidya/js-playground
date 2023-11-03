const getDay = () => {
  if (new Date().getDay() === 0) {
    return "Sunday";
  }
  if (new Date().getDay() === 1) {
    return "Monday";
  }
  if (new Date().getDay() === 2) {
    return "Tuesday";
  }
  if (new Date().getDay() === 3) {
    return "Wednesday";
  }
  if (new Date().getDay() === 4) {
    return "Thrusday";
  }
  if (new Date().getDay() === 5) {
    return "Friday";
  }
  if (new Date().getDay() === 6) {
    return "Saturday";
  }
};

const today = getDay();
const demo = document.getElementById("demo");
demo.innerHTML = today;

const today2 = {
  day: 2,
  name: "Tuesday",
};

new Date().getDay() === 1
  ? (demo.innerHTML = `Today is ${today2.name}`)
  : (demo.innerHTML = `Today is not ${today2.name}`);

const anotherDay = {
  day: 5,
  name: "Friday",
};

new Date().getDay() === today2.day
  ? (demo.innerHTML = `Today is ${today2.name}`)
  : new Date().getDay() === anotherDay.day
  ? (demo.innerHTML = `Today is ${anotherDay.name}`)
  : (demo.innerHTML = `Today is neither ${today2.name} nor ${anotherDay.name}`);

const getDaySwitchCase = () => {
  switch (new Date().getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thrusday";
    case 5:
      return "Friday";
    case 6:
    default:
      return "Saturday";
  }
};

const todaySwitchCase = getDaySwitchCase();
demo.innerHTML = todaySwitchCase;

const myNumber = [4, 1, -20, -7, 5, 9, -6];
const posNumber = (number) => number >= 0;
const removeNeg = (numbers, callback) => {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
};

const findPosNumberFromArray = removeNeg(myNumber, posNumber);

demo.innerHTML = findPosNumberFromArray;

// Syntax Promise
let myPromise = new Promise((resolve, reject) => {
  //  Executor
  resolve();
  reject();
});

// consumer
myPromise.then(
  (value) => {}, // kode yang sukses
  (error) => {} // kode yang error
);

// fungsi untuk printing value
const myDisplayer = (value) => {
  demo.innerHTML = value;
};

let promise = new Promise((myResolve, myReject) => {
  let x = 1;
  if (x === 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

promise.then(
  (value) => {
    myDisplayer(value);
  },
  (error) => {
    myDisplayer(error);
  }
);

// Async Await
// syntax
const myFunction = async () => {
  const myPromise = new Promise((resolve, reject) => {
    const promiseTrue = false;
    // kondisi true atau resolved
    if (promiseTrue === true) {
      setTimeout(() => {
        resolve("I love you!");
      }, 3000);
    }

    // kondisi false atau rejected
    if (promiseTrue === false) {
      reject("Rejected");
    }
  });
  const result = await myPromise;
  myDisplayer(result);
};
myFunction();

const getUsers = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return users;
};

const userList = getUsers().then((value) => {
  console.log("value", value);
  demo.innerHTML = value.map((user) => {
    return `
          <h3>${user.name}</h3>
          <ul>
              <li>${user.username}</li>
              <li>${user.email}</li>
              <li>${user.company.name}</li>
              <li>${user.phone}</li>
              <li>${user.website}</li>
              <li>${user.address.street}</li>
          </ul>
          `;
  });
});
