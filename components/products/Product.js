import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/features/cart/cartSlice";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";

const Product = ({ itemData }) => {
  const { title, image, price, slug } = itemData;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  console.log(state);
  const existingItem = state.cartItems.find(
    (item) => item.slug === itemData.slug
  );

  return (
    <div className="mb-5 block">
      <Link href={`products/${slug}`} className="relative hover:drop-shadow-lg">
        <div className="bg-gradient-to-t from-black/40 absolute bottom-0 w-full h-1/2 rounded-b-lg"></div>

        <Image
          src={image}
          className="rounded-xl"
          width={500}
          height={500}
          alt="product"
          title="Show details"
        />

        <span className="absolute bottom-3 right-4 text-lg text-white">
          ${price}
        </span>
      </Link>
      <div className="flex flex-col justify-center">
        <Link href={`products/${slug}`}>
          <h2 className="font-semibold text-base mt-2" title="Show details">
            {title}
          </h2>
        </Link>

        {!existingItem ? (
          <button
            onClick={() => dispatch(addItem(itemData))}
            className="rounded-lg bg-slate-200 hover:bg-slate-300 mt-6 py-2 transition duration-200"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeItem(itemData))}
            className="group rounded-lg bg-slate-50 border border-slate-300 border-dashed hover:bg-slate-100 mt-6 py-2 
            transition duration-200 focus:ring focus:ring-slate-400 focus:ring-offset-1"
          >
            <div className="md:flex justify-center space-x-1 hidden group-hover:md:hidden transition-opacity duration-1000">
              <CheckIcon className="text-indigo-500 w-5 h-5" />
              <span className="text-indigo-500">Added to cart</span>
            </div>
            <TrashIcon className="w-6 h-6 text-rose-500 inline md:hidden group-hover:md:inline transition-opacity duration-1000" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
