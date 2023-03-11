import Head from "next/head";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cookies from "js-cookie";
import Sidebar from "./Sidebar";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Layout = ({ children, title }) => {
  const navItems = [
    { label: "Product", href: "/product" },
    { label: "Features", href: "/features" },
    { label: "Company", href: "/company" },
    { label: "Marketplace", href: "/marketplace" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{`${title} - Shopping`}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <Header items={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="container mt-10 m-auto px-1">{children}</main>
        <Footer />
        <Sidebar items={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Layout;
