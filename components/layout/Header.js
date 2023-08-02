import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/legacy/image";
import shopImage from "../../public/images/shop-image.png";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "../BreadCrumbs";
import NavLinks from "../NavLinks";
import { useSession } from "next-auth/react";
import { RiApps2Line } from "react-icons/ri";
import ProfileMenu from "../ProfileMenu";

const Header = () => {
  // Authentication
  const { status, data: session } = useSession();

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

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <header className="sticky top-0 z-10 w-full backdrop-blur-lg border-b bg-white/80 px-4 border-b-slate-100 sm:px-8 lg:px-16">
        <nav className="flex h-16 lg:h-20 justify-between items-center">
          <div className="w-16 sm:w-20 lg:hidden">
            <RiApps2Line
              className="w-6 h-6 text-indigo-500"
              onClick={() => setIsOpen(true)}
            />
          </div>

          <Link href="/" legacyBehavior>
            <div className="flex space-x-1 sm:text-xl font-bold">
              <Image
                src={shopImage}
                width={25}
                height={25}
                alt="main icon"
                className="sm:w-8 sm:h-8"
              />
              <span>Bit Code</span>
            </div>
          </Link>

          <NavLinks navItems={navItems} />

          <div className="flex items-center sm:space-x-6">
            <Link href="/cart" className="">
              <div className="flex items-center space-x-1 mb-1">
                <ShoppingBagIcon className="h-5 w-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600 transition" />
                <span className="text-sm">{cartCount}</span>
              </div>
            </Link>
            {status === "loading" ? (
              "Loading..."
            ) : session?.user ? (
              <ProfileMenu />
            ) : (
              <Link href="/sign-in" className="">
                <ArrowLeftOnRectangleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600 transition" />
              </Link>
            )}
          </div>
        </nav>
      </header>

      <Sidebar items={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
