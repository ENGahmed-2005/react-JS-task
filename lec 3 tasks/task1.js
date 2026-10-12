const name = prompt("أدخل اسمك:");
const age = Number(prompt("أدخل عمرك:"));

const user = {
  name: name,
  age: age,
  hasAccess: age > 20 ? true : false,
};

console.log(user);
