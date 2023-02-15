import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

const Product = ({ item }) => {
  const { title, image, price, slug } = item;
  return (
    <div className="mb-5 block  hover:drop-shadow-lg">
      <Link href={`products/${slug}`} className="relative">
        <img src={image} className="rounded-xl" alt="product" />
        <span className="absolute bottom-5 right-5 font-bold text-lg">
          {price} $
        </span>
      </Link>
      <div className="flex flex-col justify-center p-1">
        <Link href={`products/${slug}`}>
          <h2 className="font-bold text-stone-800 text-base mt-1">{title}</h2>
        </Link>
        <button className="rounded-lg bg-slate-200 hover:bg-slate-300 mt-6 py-2 font-semibold focus:outline focus:outline-slate-600 focus:outline-offset-4 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
