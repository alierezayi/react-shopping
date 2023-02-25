import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state.cart);

  const cartCount = state.cartItems.length;
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
          <Link
            href="/cart"
            className="flex p-2 space-x-1"
          >
            <ShoppingBagIcon className="h-6 w-6 text-gray-400 hover:text-gray-600" />
            <span>{cartCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
