import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import BackDrop from "./BackDrop";
import Modal from "./Modal";
import SearchBar from "../UI/SearchBar";
import { useState } from "react";

const Sidebar = ({ items, isOpen, setIsOpen }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <div
        className={`h-screen lg:hidden z-30 fixed left-0 w-72 sm:w-80 bg-gray-50 drop-shadow-lg transition-transform duration-300 ease-out flex flex-col p-7 ${
          isOpen ? `translate-x-0 overscroll-none` : `-translate-x-full`
        }`}
      >
        <XMarkIcon
          className="w-6 h-6 absolute right-5 top-5 text-gray-400"
          onClick={() => setIsOpen(false)}
        />
        <ul className="flex flex-col space-y-3">
          {items.map((item, index) => (
            <li key={index} className="p-2">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <BackDrop show={isOpen} setShow={setIsOpen} />
      <Modal isOpen={showSearchBar} setIsOpen={setShowSearchBar}>
        <SearchBar />
      </Modal>
    </>
  );
};

export default Sidebar;