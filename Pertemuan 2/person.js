const Person = (fullName = "unknown", age = 25, isMale = false, avatar) => {
  // ternary operator, menggantikan if-else
  const value = () =>
    `Full Name: ${fullName}. \n
      Sex: ${!isMale ? `Her` : `His`} 
      Age: ${age} years.`;

  return {
    get getInfo() {
      return value();
    },
    toString() {
      return value();
    },
    addAge: (years) => (age += years),
    setAge: (newAge) => (age = newAge),
    rename: (newName) => (fullName = newName),
    fullName,
    age,
    isMale,
    avatar,
  };
};
export default Person;
