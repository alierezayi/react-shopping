import React from "react";

// Next
import Head from "next/head";
import Link from "next/link";

// Redux
import { useSelector } from "react-redux";
import Header from "./Header";

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
        <Header />

        <main className="container mt-16 m-auto">{children}</main>

        
      </div>
    </>
  );
};

export default Layout;
