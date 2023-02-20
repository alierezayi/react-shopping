import React from "react";

// Next
import Head from "next/head";
import Link from "next/link";

// Redux
import { useSelector } from "react-redux";

// Icon
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Layout = ({ children, title }) => {
  const state = useSelector((state) => state.cart);

  const cartCount = state.cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  return (
    <>
      {/* head of pages */}
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>

      {/* layout */}
      <div className="flex min-h-screen flex-col justify-between ">
        <header className="sticky top-0 z-50 w-full backdrop-blur border-b bg-white/75 border-b-slate-100">
          <nav className="flex h-16 px-4 sm:px-8 lg:px-16 justify-between items-center">
            <Link href="/" className="text-lg font-bold">
              Shopping
            </Link>
            <div className="flex sm:space-x-4">
              <Link
                href="/login"
                className="p-2 text-md text-gray-400 hover:text-gray-600"
              >
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

        <main className="container mt-16 m-auto">{children}</main>

        <footer className="flex justify-center items-center h-10">
          Footer
        </footer>
      </div>
    </>
  );
};

export default Layout;
