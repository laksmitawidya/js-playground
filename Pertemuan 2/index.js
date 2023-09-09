import Person from "./person.js";

const jane = Person("jane", 20, false, "https://picsum.photos/200");
const mary = Person("mary", 23, false, "https://picsum.photos/200?grayscale");
const charles = Person(
  "charles",
  30,
  true,
  "https://picsum.photos/seed/picsum/200"
);

jane.addAge(15);
charles.setAge(80);

const charlesImg = document.querySelector("#charles > .img");
const charlesInfo = document.querySelector("#charles > .info");
charlesImg.src = charles.avatar;
charlesInfo.innerHTML = charles.toString();

const maryImg = document.querySelector("#mary > .img");
const maryInfo = document.querySelector("#mary > .info");
maryImg.src = mary.avatar;
maryInfo.innerHTML = mary.toString();

const janeImg = document.querySelector("#jane > .img");
const janeInfo = document.querySelector("#jane > .info");
janeImg.src = jane.avatar;
janeInfo.innerHTML = jane.toString();

const charlesJob = { job: "Programmer" };
const charlesJobInfo = { ...charles, ...charlesJob };
const { fullName, job } = charlesJobInfo;
const charlesJobInfoSelector = document.querySelector("#charles > .jobInfo");
charlesJobInfoSelector.innerHTML = `${fullName} is a ${job}`;
