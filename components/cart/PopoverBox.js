import { Popover, Transition } from "@headlessui/react";
import { ShoppingBagIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import emptyCart from "../../public/images/empty_cart.webp";

const PopoverBox = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;

  const [countItems, setCountItems] = useState(0);

  useEffect(() => {
    setCountItems(cartItems.length);
  }, [cartItems]);

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={`flex p-2 space-x-1 ${open ? "" : ""}`}>
            <ShoppingBagIcon
              className={`h-6 w-6 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out`}
            />
            <span>{countItems}</span>
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
            <Popover.Panel className="absolute -right-2 sm:right-1/4 z-10 mt-2 w-screen max-w-sm px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                {!cartItems.length ? (
                  <div className="bg-white flex flex-col justify-center items-center mt-3">
                    <Image
                      src={emptyCart}
                      width={150}
                      height={150}
                      alt="empty cart"
                    />
                    <p className="w-full text-center py-8 text-lg text-gray-600">
                      Cart is empty.
                    </p>
                  </div>
                ) : (
                  <div className="relative grid gap-8 bg-white p-7 overflow-y-auto max-h-72">
                    {cartItems.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/products/${item.slug}`}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
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
                )}
                {cartItems.length ? (
                  <div className="bg-gray-50 p-4">
                    <div className="w-4/5 mx-auto flex flex-col space-y-2">
                      <button className="bg-indigo-500 text-white py-2 rounded-lg text-base hover:bg-indigo-600 transition duration-200">
                        Checkout
                      </button>
                      <Link
                        href="/cart"
                        className="flex justify-center space-x-1 w-full text-center py-1 text-indigo-600 text-base hover:text-indigo-500 transition duration-200"
                      >
                        <span>View Shopping Cart</span>
                        <ChevronRightIcon className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopoverBox;
