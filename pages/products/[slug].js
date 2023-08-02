import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import productItems from "../../data/products.json";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const ProductPage = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = productItems.find((item) => item.slug === slug);

  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isInCart = state.cartItems.find((item) => item.slug === product.slug);

  const cartOperation = (type) => {
    switch (type) {
      case "add":
        dispatch(addItem(product));
        break;

      case "remove":
        dispatch(removeItem(product));
        break;

      case "increase":
        if (product.count > isInCart.quantity) {
          dispatch(increase(product));
        }
        break;

      case "decrease":
        if (isInCart.quantity > 1) {
          dispatch(decrease(product));
        }
        break;

      default:
        throw new Error();
        break;
    }
  };

  return (
    <Layout title={product && product.title}>
      <div className="container m-auto px-1">
        {!product ? (
          <div className=" w-full h-full flex justify-center items-center">
            <h1 className="m-auto text-3xl font-semibold">Product not found</h1>
          </div>
        ) : (
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-3 rounded-xl mx-2 md:p-10">
            <div className="flex justify-center items-start mb-16">
              <Image
                className="rounded-xl"
                src={product.image}
                width={300}
                height={300}
                alt="details"
              />
            </div>
            <div className="xl:col-span-2 px-5">
              <div>
                <h2 className="text-3xl mb-2">{product.title}</h2>
                <p className="text-gray-400">{product.category}</p>
                <div className="mt-8 lg:mt-16 py-3 px-8 rounded-xl border border-dashed">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
            <div className="p-5 h-full flex flex-col justify-between mt-6">
              <div className="space-y-3">
                <div className="mb-2 spac flex justify-between">
                  <span className="font-medium">Price</span>
                  <span>$ {product.price}</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">Status</span>
                  <span
                    className={`${
                      product.count > 0 ? "text-blue-500" : "text-red-500"
                    }`}
                  >
                    {product.count > 0 ? "Available" : "Unavailable"}
                  </span>
                </div>
                {product.count ? (
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium">Count</span>
                    <span>{product.count}</span>
                  </div>
                ) : null}
              </div>
              {!isInCart ? (
                <button
                  onClick={() => cartOperation("add")}
                  disabled={!product.count}
                  className="rounded-lg bg-slate-200 hover:bg-slate-300 py-2 w-full 
              focus:ring focus:ring-blue-400 focus:ring-offset-1 transition duration-500 disabled:cursor-not-allowed
              disabled:bg-slate-200 mt-10 md:mt-6"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="w-full flex justify-between mt-10 md:mt-6">
                  <button
                    onClick={() => cartOperation("decrease")}
                    className="border border-slate-300 py-2 px-6 rounded-lg flex justify-center items-center hover:bg-slate-50 transition-colors duration-200 active:bg-slate-100"
                  >
                    <MinusIcon className="w-6 h-6 text-slate-400 font-semibold" />
                  </button>
                  <span className="py-1 px-4 rounded-xl text-xl font-semibold">
                    {isInCart.quantity}
                  </span>
                  <button
                    onClick={() => cartOperation("increase")}
                    disabled={product.count <= isInCart.quantity}
                    className="bg-indigo-500 py-2 px-6 rounded-lg flex justify-center items-center hover:bg-indigo-600 transition-colors duration-200 active:bg-indigo-700
                     disabled:bg-indigo-200 disabled:cursor-not-allowed"
                  >
                    <PlusIcon className="w-6 h-6 text-white font-semibold " />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;
