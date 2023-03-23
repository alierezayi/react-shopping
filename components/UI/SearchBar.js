import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import productItems from "../../data/products.json";

const SearchBar = () => {
  const [resultSearch, setResultSearch] = useState("");

  const filteredProducts = productItems.filter((item) =>
    item.title.toLowerCase().includes(resultSearch.toLowerCase())
  );
  console.log(resultSearch);
  console.log(filteredProducts);

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="flex items-center justify-start space-x-2 rounded-lg bg-slate-50 p-2 shadow-sm shadow-slate-100 w-[90%] md:w-[700px]"
        onClick={openModal}
      >
        <MagnifyingGlassIcon className="w-7 h-7 text-indigo-500" />
        <input
          className=" bg-transparent outline-none placeholder:text-slate-400"
          placeholder="Quick search . . ."
        />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-400/40 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-slate-100 rounded-lg flex flex-col divide-y max-h-[89vh] w-[95%] md:w-[700px]">
                  <div className="flex space-x-3 items-center p-4">
                    <MagnifyingGlassIcon className="w-6 h-6 text-indigo-400" />
                    <input
                      type="text"
                      className=" bg-transparent placeholder:text-slate-400 outline-none"
                      placeholder="Quick Search . . ."
                      value={resultSearch}
                      onChange={(e) => setResultSearch(e.target.value)}
                    />
                  </div>
                  <div
                    className={`min-h-[200px] relative overflow-y-scroll ${
                      filteredProducts &&
                      !resultSearch &&
                      `flex items-center justify-center`
                    } `}
                  >
                    {filteredProducts && resultSearch ? (
                      <div className=" p-2 grid gap-8">
                        <h1 className="text-xl ml-4 mt-5 font-semibold text-start">
                          Products
                        </h1>
                        {filteredProducts.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/products/${item.slug}`}
                            className="-m-2 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center text-white sm:h-14 sm:w-14">
                              <Image
                                src={item.image}
                                width={100}
                                height={100}
                                alt="product"
                                className="rounded-md border border-slate-100"
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                {item.title}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.category}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-500">No recent searches</p>
                    )}
                  </div>
                  <div className="p-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchBar;
