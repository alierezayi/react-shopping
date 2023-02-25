import { Popover, Transition } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const PopoverBox = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={`flex p-2 space-x-1 ${open ? "" : ""}`}>
            <ShoppingBagIcon
              className={`h-6 w-6 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out`}
            />
            <span>{cartItems.length}</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-1/4 z-10 mt-2 w-screen max-w-sm px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7">
                  {cartItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
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
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="bg-gray-50 p-4">
                  <div className=" w-4/5 mx-auto flex flex-col space-y-2">
                    <button className="bg-indigo-500 text-white py-2 rounded-lg text-base hover:bg-indigo-600 transition duration-200 ease-in-out">
                      Checkout
                    </button>
                    <Link
                      href="/cart"
                      className="w-full text-center py-2 text-indigo-500 text-base hover:text-indigo-600 transition duration-200"
                    >
                      View Shopping Cart
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopoverBox;
