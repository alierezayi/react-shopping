import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import productItems from "../../data/products.json";

const SearchBar = () => {
  const [resultSearch, setResultSearch] = useState("");

  const filteredProducts = productItems.filter((item) =>
    item.title.toLowerCase().includes(resultSearch.toLowerCase())
  );
  console.log(resultSearch);
  console.log(filteredProducts);

  return (
    <div className="bg-slate-100 rounded-lg flex flex-col divide-y max-h-[89vh]">
      <div className="flex space-x-3 items-center p-4">
        <MagnifyingGlassIcon className="w-6 h-6 text-indigo-400" />
        <input
          type="text"
          className=" bg-transparent placeholder:text-indigo-400 outline-none"
          placeholder="Search Products"
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
            <h1 className="text-xl ml-4 mt-5 font-semibold">Products</h1>
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
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-slate-500">No recent searches</p>
        )}
      </div>
      <div className="p-4"></div>
    </div>
  );
};

export default SearchBar;
