import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Shijil",
    email: "shijil@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jyothish",
    email: "jyothish@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
