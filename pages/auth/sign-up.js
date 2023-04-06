import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { validate } from "../../helper/validation/validate";

const SignUpPage = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAdress: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "sign-up"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const focusHandler = (e) => {
    setTouched((prevState) => ({ ...prevState, [e.target.name]: true }));
  };

  const toggleClass = (errorValue, touchValue) => {
    return errorValue && touchValue ? "ring-rose-400" : "ring-blue-400";
  };

  const submitHandler = (event) => {
    if (!Object.keys(errors).length) {
      alert("You signed in successfully", "success");
    } else {
      event.preventDefault();
      setTouched({
        firstName: true,
        lastName: true,
        phoneNumber: true,
        emailAdress: true,
        password: true,
        confirmPassword: true,
      });
    }
  };

  return (
    <Layout title="Create new Account">
      <div className="flex min-h-full items-center justify-center py-10 px-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-3">
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create new Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Do you have an account ?{" "}
              <Link
                href="sign-in"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign in to your Account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-4" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid md:grid-cols-2 md:gap-x-10 gap-y-4">
              <div className="space-y-1 col-span-2 md:col-span-1">
                <label htmlFor="first-name" className="text-gray-600">
                  First name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  value={data.firstName}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  className={`border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ${toggleClass(
                    errors.firstName,
                    touched.firstName
                  )}`}
                />
                {errors.firstName && touched.firstName && (
                  <span className="text-xs text-rose-500">
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <label htmlFor="last-name" className="text-gray-600">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  value={data.lastName}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  className={`border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ${toggleClass(
                    errors.lastName,
                    touched.lastName
                  )}`}
                />
                {errors.lastName && touched.lastName && (
                  <span className="text-xs text-rose-500">
                    {errors.lastName}
                  </span>
                )}
              </div>
              <div className="col-span-2 space-y-1 flex flex-col">
                <label htmlFor="phone-number" className="text-gray-600">
                  Phone number
                </label>
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="number"
                  placeholder="+98"
                  value={data.phoneNumber}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  className={`border border-slate-300 py-1.5 px-2 rounded-md w-full md:w-3/4 outline-none focus:ring ${toggleClass(
                    errors.phoneNumber,
                    touched.phoneNumber
                  )}`}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <span className="text-xs text-rose-500">
                    {errors.phoneNumber}
                  </span>
                )}
              </div>
              <div className="col-span-2 space-y-1">
                <label htmlFor="email-adress" className="text-gray-600">
                  Email adress
                </label>
                <input
                  id="email-adress"
                  name="emailAdress"
                  type="email"
                  placeholder="something@Example.com"
                  value={data.emailAdress}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  className={`border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ${toggleClass(
                    errors.emailAdress,
                    touched.emailAdress
                  )}`}
                />
                {errors.emailAdress && touched.emailAdress && (
                  <span className="text-xs text-rose-500">
                    {errors.emailAdress}
                  </span>
                )}
              </div>
              <div className="col-span-2 space-y-1">
                <label htmlFor="password" className="text-gray-600">
                  Create password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={data.password}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  className={`border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ${toggleClass(
                    errors.password,
                    touched.password
                  )}`}
                />
                {errors.password && touched.password && (
                  <span className="text-xs text-rose-500">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="col-span-2 space-y-1">
                <label htmlFor="confirm-password" className="text-gray-600">
                  Confirm password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  value={data.confirmPassword}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  className={`border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ${toggleClass(
                    errors.confirmPassword,
                    touched.confirmPassword
                  )}`}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <span className="text-xs text-rose-500">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full mt-8 justify-center transition rounded-md bg-indigo-500 py-2 px-3 font-medium text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
