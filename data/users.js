
const users = [
  {
    firstName: "Ali",
    lastName: "Rezaei",
    phoneNumber: "09916937150",
    emailAdress: "im1.bitcode@gmail.com",
    password: bcrypt.hashSync("ali13823"),
    isAdmin: true,
  },
  {
    firstName: "Shiva",
    lastName: "Babayi",
    phoneNumber: "09029151047",
    emailAdress: "im1.bitcode@gmail.com",
    password: bcrypt.hashSync("shiva13825"),
    isAdmin: false,
  },
];

export default users;
