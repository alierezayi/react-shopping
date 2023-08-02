import bcrypt from "bcryptjs";

const users = [
  {
    name: "Ali",
    lastName: "Rezaei",
    phoneNumber: "09916937150",
    email: "im1.bitcode@gmail.com",
    password: bcrypt.hashSync("ali138282"),
    isAdmin: true,
  },
  {
    name: "Shiva",
    lastName: "Babayi",
    phoneNumber: "09029151047",
    email: "ali1382alh@gmail.com",
    password: bcrypt.hashSync("shiva13825"),
    isAdmin: false,
  },
];

export default users;
