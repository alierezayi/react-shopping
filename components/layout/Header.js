import Link from "next/link";
import { useSelector } from "react-redux";
import PopoverBox from "../cart/PopoverBox";

const Header = () => {
  const state = useSelector((state) => state.cart);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b bg-white/70 border-b-slate-100">
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
          <PopoverBox />
        </div>
      </nav>
    </header>
  );
};

export default Header;
