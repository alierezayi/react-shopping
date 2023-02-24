import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/features/cart/cartSlice";
import { CheckBadgeIcon, TrashIcon } from "@heroicons/react/24/outline";

const Product = ({ itemData }) => {
  const { title, image, price, slug } = itemData;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  console.log(state);
  const existingItem = state.cartItems.find(
    (item) => item.slug === itemData.slug
  );

  return (
    <div className="mb-5 block hover:drop-shadow-lg">
      <Link href={`products/${slug}`} className="relative">
        <div className="bg-gradient-to-t from-black/40 absolute bottom-0 w-full h-1/2 rounded-b-xl"></div>
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
            className="rounded-lg bg-slate-200 hover:bg-slate-300 mt-6 py-2 
          focus:ring focus:ring-blue-400 focus:ring-offset-1 transition duration-500"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex justify-between items-center mt-6">
            <div className={`flex justify-start items-center space-x-1`}>
              <CheckBadgeIcon className="text-blue-500 w-6 h-6" />
              <span className="text-gray-600">added to shop cart</span>
            </div>
            <button
              onClick={() => dispatch(removeItem(itemData))}
              className="rounded-lg border border-rose-400 hover:bg-rose-50 active:bg-rose-100 text-rose-400 py-2 px-4 transition duration-200"
            >
              <TrashIcon className="w-6 h-6 text-rose-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
