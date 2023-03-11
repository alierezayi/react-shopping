import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ items, isOpen, setIsOpen }) => {
  return (
    <div
      className={`h-screen lg:hidden z-20 fixed left-0 w-72 sm:w-80 bg-gray-50 drop-shadow-lg transition-transform ${
        isOpen ? ` translate-x-0` : ` -translate-x-full`
      }`}
    >
      <ul className="flex flex-col p-7">
        <XMarkIcon className="w-6 h-6 absolute right-5 top-5 text-gray-400" onClick={()=> setIsOpen(false)} />
        {items.map((item, index) => (
          <li key={index} className="p-3">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
