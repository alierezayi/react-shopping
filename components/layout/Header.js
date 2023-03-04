import Link from "next/link";
import PopoverBox from "../cart/PopoverBox";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b bg-white/70 border-b-slate-100">
      <nav className="flex h-16 px-4 sm:px-8 lg:px-16 justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Shop
        </Link>
        <div className="flex sm:space-x-4">
          <Link
            href="/sign-in"
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
