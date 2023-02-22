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

  const addToCartHandler = () => {
    const existingItem = state.cartItems.find((item) => item.slug === slug);

    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    dispatch(addItems({ ...item, quantity }));
  };

  return (
    <div className="mb-5 block hover:drop-shadow-lg">
      <Link href={`products/${slug}`} className="relative">
        <div className="bg-gradient-to-t from-black/30 absolute bottom-0 w-full h-1/2 rounded-xl"></div>
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
          <h2 className="font-bold text-base mt-2" title="Show details">
            {title}
          </h2>
        </Link>
        <button
          onClick={addToCartHandler}
          className="rounded-lg bg-slate-200 hover:bg-slate-300 mt-6 py-2 font-semibold 
          focus:ring focus:ring-slate-300 focus:ring-offset-1 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
