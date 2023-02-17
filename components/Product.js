import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

const Product = ({ item }) => {
  const { title, image, price, slug } = item;
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
          className="rounded-lg bg-slate-200 hover:bg-slate-300 mt-6 py-2 font-semibold 
          focus:ring focus:ring-blue-700 focus:ring-offset-2 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
