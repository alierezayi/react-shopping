const validPhoneNumber = new RegExp(
  "/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im"
);
const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export const validate = (data, type) => {
  const errors = {};

  if (!data.emailAdress) {
    errors.emailAdress = "Enter your email";
  } else if (!validEmail.test(data.emailAdress)) {
    errors.emailAdress = "Email Adress is invalid";
  } else {
    delete errors.emailAdress;
  }

  if (!data.password) {
    errors.password = "Password required";
  } else if (!validPassword.test(data.password)) {
    errors.password = "The password must contain numbers and letters";
  } else if (data.password.length < 8) {
    errors.password = "Password need to be 8 character or more";
  } else {
    delete errors.password;
  }

  if (type === "sign-up") {
    if (!data.firstName.trim()) {
      errors.firstName = "Enter your first name";
    } else if (data.firstName.length < 3) {
      errors.firstName = "Enter 3 or more characters";
    } else {
      delete errors.firstName;
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Enter your last name";
    } else if (data.lastName.length < 3) {
      errors.lastName = "Enter 3 or more characters";
    } else {
      delete errors.lastName;
    }

    if (!data.phoneNumber) {
      errors.phoneNumber = "Enter your phone number";
    } else if (
      data.phoneNumber.length > 11 ||
      !data.phoneNumber.includes("09")
    ) {
      errors.phoneNumber = "Phone number wrong";
    } else {
      delete errors.phoneNumber;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }
  }

  return errors;
};
