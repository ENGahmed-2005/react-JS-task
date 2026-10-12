const users = [
  { name: "Ahmed", email: "ahmed@mail.com", type: "admin" },
  { name: "Sara", email: "sara@mail.com", type: "user" },
  { name: "Omar", email: "omar@mail.com", type: "user" },
  { name: "Lina", email: "lina@mail.com", type: "admin" },
  { name: "Yousef", email: "yousef@mail.com", type: "user" },
  { name: "Mona", email: "mona@mail.com", type: "user" },
  { name: "Khaled", email: "khaled@mail.com", type: "admin" },
  { name: "Huda", email: "huda@mail.com", type: "user" },
  { name: "Ali", email: "ali@mail.com", type: "user" },
  { name: "Noor", email: "noor@mail.com", type: "user" },
];

let usersCount = 0;
let adminsCount = 0;

users.forEach(function(user){
  if (user.type === "admin") {
    adminsCount++;
  } else {
    usersCount++;
  }
})

// for (let i = 0; i < users.length; i++) {

// }

console.log("Users:", usersCount);
console.log("Admins:", adminsCount);
