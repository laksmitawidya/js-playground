const listEl = document.createElement("ul");
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

const userList = getUsers().then((value) => {
  document.getElementById("demo").innerHTML = value
    .map((user) => {
      console.log("user", user);
      return `<h3>${user.name}</h3>
      Profile:
      <ul>
        <li>Username: ${user.username}</li>
        <li>Email: ${user.email}</li>
        <li>Company: ${user.company.name}</li>
        <li>Phone: ${user.phone}</li>
        <li>Website: ${user.website}</li>
        <li>Address: ${user.street}</li></ul>`;
    })
    .join("<br>");
});

