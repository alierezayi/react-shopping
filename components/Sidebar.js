import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import BackDrop from "./BackDrop";
import SearchBar from "./SearchBar";

const Sidebar = ({ items, isOpen, setIsOpen }) => {
  return <>
    <div
      className={`h-screen z-30 fixed left-0 w-72 sm:w-80 bg-white transition-transform duration-200 ease-out ${
        isOpen ? `translate-x-0 overscroll-none` : `-translate-x-full`
      }`}
    >
      <XMarkIcon
        className="w-6 h-6 absolute right-5 top-5 text-gray-400"
        onClick={() => setIsOpen(false)}
      />
      <div className="flex flex-col mx-7 mt-16">
        <SearchBar component="sidebar" setSidebarOpen={setIsOpen} />
        <ul className="flex flex-col space-y-3 mt-6">
          {items.map((item, index) => (
            <li key={index} className="p-2">
              <Link href={item.href} legacyBehavior>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <BackDrop show={isOpen} setShow={setIsOpen} />
  </>;
};

export default Sidebar;
