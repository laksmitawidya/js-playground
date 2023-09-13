import { dog_env } from "./env.js";
const savedPetList = window.localStorage.getItem("petList");
const petList = JSON.parse(savedPetList);

const searchParams = new URLSearchParams(window.location.search);
const currentPage = searchParams.get("page") || 1;

const getBreedsImage = async (sortBy = "ASC") => {
  const response = await fetch(
    `${dog_env.endpoint}v1/images/search?include_categories=true&include_breeds=true&has_breeds=true&order=${sortBy}&page=${currentPage}&limit=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": dog_env.API_KEY,
      },
    }
  );
  return response.json();
};

const dropdownElement = document.querySelector(".dropdownMenu");
const formElement = document.querySelector(".searchForm");
const searchInputElement = document.querySelector(".searchInput");

// pagination
const prevPage = document.querySelector(".prevPagination");
const pageOne = document.querySelector(".pageOne");
const pageTwo = document.querySelector(".pageTwo");
const pageThree = document.querySelector(".pageThree");
const nextPage = document.querySelector(".nextPagination");

const PetCardComponent = (pet) => {
  const breedInfo = pet.breeds[0];
  if (!breedInfo) return;
  return `<div class="card my-3 mx-2" style="width: 20%">
    <img height="300" style="object-fit: cover" class="card-img-top" src=${pet.url} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title d-inline">${breedInfo.name}</h5>
      <p class="card-text">
        ${breedInfo.temperament}
      </p>
      <p>${breedInfo.bred_for}</p>
      <span class="badge badge-pill badge-info">${breedInfo.breed_group}</span>
      <span class="badge badge-pill badge-warning">Weight: ${breedInfo.weight.metric}</span>
      <span class="badge badge-pill badge-danger">Height: ${breedInfo.height.metric}</span>
    </div>
  </div>`;
};

const renderComponent = (filteredPet) => {
  document.querySelector(".petInfo").innerHTML = filteredPet
    .map((pet) => PetCardComponent(pet))
    .join("");
};

const fetchImage = (sortBy) =>
  getBreedsImage(sortBy).then((value) => {
    window.localStorage.setItem("petList", JSON.stringify(value));
    renderComponent(value);
  });

fetchImage();

const sortPetById = (key) => {
  if (key === "ascending") {
    fetchImage("ASC");
  }
  if (key === "descending") {
    fetchImage("DESC");
  }
};

const searchPetByKey = (key) => {
  return petList.filter((pet) =>
    pet.breeds[0].name.toLowerCase().includes(key.toLowerCase())
  );
};

dropdownElement.addEventListener("change", (event) => {
  event.preventDefault();
  const value = event.target.value;
  sortPetById(value);
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = searchInputElement.value;
  const filteredPet = searchPetByKey(value);
  console.log("filteredPet", filteredPet);
  renderComponent(filteredPet.length > 0 ? filteredPet : petList);
});

const redirectTo = (page) => {
  searchParams.set("page", page);
  window.location.search = searchParams.toString();
};

prevPage.addEventListener("click", (event) => {
  event.preventDefault();
  if (currentPage > 0) redirectTo(currentPage - 1);
});

pageOne.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("test");
  redirectTo(1);
});

pageTwo.addEventListener("click", (event) => {
  event.preventDefault();
  redirectTo(2);
});

pageThree.addEventListener("click", (event) => {
  event.preventDefault();
  redirectTo(3);
});

nextPage.addEventListener("click", (event) => {
  event.preventDefault();
  redirectTo(currentPage + 1);
});
