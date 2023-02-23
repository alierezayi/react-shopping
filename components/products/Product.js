import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../redux/features/cart/cartSlice";

const Product = ({ item }) => {
  const { title, image, price, slug } = item;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  console.log(state.cartItems);

  return (
    <div className="mb-5 block hover:drop-shadow-lg">
      <Link href={`products/${slug}`} className="relative">
        <div className="bg-gradient-to-t from-black/40 absolute bottom-0 w-full h-1/2 rounded-xl"></div>
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
        <button
          onClick={() => dispatch(addItems(item))}
          className="rounded-lg bg-slate-200 hover:bg-slate-300 mt-6 py-2 
          focus:ring focus:ring-blue-400 focus:ring-offset-1 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
