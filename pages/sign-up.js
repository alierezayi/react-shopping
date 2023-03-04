import Layout from "../components/layout/Layout";

export default function Example() {
  return (
    <Layout title="Create new Account">
      <div className="flex min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-3">
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create new Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Do you have account ?{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in to your Account
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-4" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid md:grid-cols-2 md:gap-x-10 gap-y-4">
              <div className="space-y-1 col-span-2 md:col-span-1">
                <label htmlFor="first-name">First Name</label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ring-blue-500 ring-offset-1"
                />
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ring-blue-500 ring-offset-1"
                />
              </div>
              <div className="col-span-2 space-y-1 flex flex-col">
                <label htmlFor="phone-number">Phone number</label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="+98"
                  required
                  className="border border-slate-300 py-1.5 px-2 rounded-md w-full md:w-3/4 outline-none focus:ring ring-blue-500 ring-offset-1"
                />
              </div>
              <div className="col-span-2 space-y-1">
                <label htmlFor="email-adress">Email Adress</label>
                <input
                  id="email-adress"
                  name="email-adress"
                  type="email"
                  placeholder="Example@gmail.com"
                  required
                  className="border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ring-blue-500 ring-offset-1"
                />
              </div>
              <div className="col-span-2 space-y-1">
                <label htmlFor="password">Create Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ring-blue-500 ring-offset-1"
                />
              </div>
              <div className="col-span-2 space-y-1">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="border border-slate-300 py-1.5 px-2 w-full rounded-md outline-none focus:ring ring-blue-500 ring-offset-1"
                />
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
}
