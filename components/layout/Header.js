import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import PopoverBox from "../cart/PopoverBox";
import shopImage from "../../public/images/shop-image.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b bg-white/70 border-b-slate-100">
      <nav className="flex h-16 lg:h-20 px-4 sm:px-8 lg:px-16 justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          <Image src={shopImage} width={45} height={45} alt="main icon" />
        </Link>
        <div className="flex sm:space-x-4">
          <PopoverBox />
          <Link
            href="/sign-in"
            className="p-2 text-md text-gray-400 hover:text-gray-600 transition"
          >
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
