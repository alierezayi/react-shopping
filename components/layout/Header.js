import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import PopoverBox from "../cart/PopoverBox";
import shopImage from "../../public/images/shop-image.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "../UI/Sidebar";
import { useState } from "react";

const Header = () => {
  const navItems = [
    { label: "Product", href: "/product" },
    { label: "Features", href: "/features" },
    { label: "Company", href: "/company" },
    { label: "Marketplace", href: "/marketplace" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 w-full backdrop-blur border-b bg-white/70 px-4 border-b-slate-100/80 sm:px-8 lg:px-16 ">
        <nav className="flex h-16 lg:h-20 justify-between items-center border-b border-b-slate-100 lg:border-none">
          <Link href="/" className="text-lg font-bold">
            <Image src={shopImage} width={45} height={45} alt="main icon" />
          </Link>
          <ul className="hidden lg:flex items-center justify-center space-x-12">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="font-semibold text-gray-900 hover:text-indigo-500 transition"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex sm:space-x-4">
            <PopoverBox />
            <Link
              href="/auth/sign-in"
              className="p-2 text-md text-gray-400 hover:text-gray-600 transition"
            >
              <ArrowLeftOnRectangleIcon className="w-6 h-6" />
            </Link>
          </div>
        </nav>
        <div className="h-11 flex justify-between items-center space-x-3 lg:hidden">
          <Bars3Icon
            className="w-7 h-7 text-gray-600"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>
      <Sidebar items={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
