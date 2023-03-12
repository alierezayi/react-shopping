import Link from "next/link";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ items, isOpen, setIsOpen }) => {
  return (
    <div
      className={`h-screen lg:hidden z-20 fixed left-0 w-72 sm:w-80 bg-gray-50 drop-shadow-lg transition-transform ${
        isOpen ? ` translate-x-0` : ` -translate-x-full`
      }`}
    >
      <XMarkIcon
        className="w-6 h-6 absolute right-5 top-5 text-gray-400"
        onClick={() => setIsOpen(false)}
      />
      <ul className="flex flex-col p-7 mt-9 space-y-3">
        <li className="flex items-center space-x-2 rounded-xl bg-slate-100 p-2 shadow-sm shadow-slate-100">
          <MagnifyingGlassIcon className="w-5 h-5 text-indigo-500" />
          <span className="text-indigo-500">Quick search ...</span>
        </li>
        {items.map((item, index) => (
          <li key={index} className="p-2">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
