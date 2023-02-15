import React from "react";

// Next
import Head from "next/head";
import Link from "next/link";

// Icon
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Layout = ({ children, title }) => {
  let cartCount = 0;
  return (
    <>
      {/* head of pages */}
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>

      {/* layout */}
      <div className="flex min-h-screen flex-col justify-between">
        <header className="fixed top-0 left-0 right-0">
          <nav className="flex h-16 px-4 sm:px-8 lg:px-16 justify-between items-center border-b border-b-slate-100 backdrop-blur-md">
            <Link href="/" className="text-lg font-bold">
              Shopping
            </Link>
            <div className="flex sm:space-x-4">
              <Link href="/login" className="p-2 text-md text-gray-400 hover:text-gray-600">
                Signup / Login
              </Link>
              <Link
                href="/cart"
                className="flex p-2 space-x-1 text-gray-400 hover:text-gray-600"
              >
                <ShoppingBagIcon className="h-6 w-6" />
                <span>{cartCount}</span>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mt-28 rounded-2xl m-auto border border-slate-200 py-14 px-10">{children}</main>

        <footer className="flex justify-center items-center h-10">
          Footer
        </footer>
      </div>
    </>
  );
};

export default Layout;
