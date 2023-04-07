import {
  ArrowLeftOnRectangleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import shopImage from "../../public/images/shop-image.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "../UI/Sidebar";
import SearchBar from "../UI/SearchBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "../UI/BreadCrumbs";
import NavLinks from "../NavLinks";

const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Features", href: "/features" },
    { label: "About Us", href: "/about-us" },
  ];

  const [cartCount, setCartCount] = useState(0);

  const state = useSelector((state) => state.cart);
  const { cartItems } = state;

  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 w-full backdrop-blur-lg border-b bg-white/80 px-4 border-b-slate-100 sm:px-8 lg:px-16">
        <nav className="flex h-16 lg:h-20 justify-between items-center">
          <Bars3Icon
            className="w-7 h-7 text-gray-600 lg:hidden"
            onClick={() => setIsOpen(true)}
          />

          <Link
            href="/"
            className="flex space-x-1 sm:text-xl font-bold pl-8 md:pl-10 lg:pl-0"
          >
            <Image
              src={shopImage}
              width={25}
              height={25}
              alt="main icon"
              className="sm:w-8 sm:h-8"
            />
            <span>Bit Code</span>
          </Link>

          <NavLinks navItems={navItems} />

          <div className="flex sm:space-x-2">
            <Link href="/cart" className="flex p-2 space-x-1 ">
              <ShoppingBagIcon className="h-5 w-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600 transition" />
              <span className="text-sm sm:text-base">{cartCount}</span>
            </Link>
            <Link href="/auth/sign-in" className="p-2">
              <ArrowLeftOnRectangleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600 transition" />
            </Link>
          </div>
        </nav>
      </header>
      <div className="flex justify-between items-center py-3 px-4 sm:px-8 lg:px-16">
        <Breadcrumbs />
        <SearchBar component="header" />
      </div>
      <Sidebar items={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
