import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import productItems from "../../data/products.json";
import { addItem, decrease, increase, removeItem } from "../../redux/features/cart/cartSlice";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";

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
        dispatch(decrease(product));
        break;

      default:
        break;
    }
  };
  console.log(state);

  return (
    <div>
      <Layout title={product && product.title}>
        {!product ? (
          <div className=" w-full h-full flex justify-center items-center">
            <h1 className="m-auto text-3xl font-semibold">Product not found</h1>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 rounded-xl border border-double border-slate-200 mx-2 p-10">
            <div className="flex justify-center items-start">
              <Image
                className="rounded-xl"
                src={product.image}
                width={340}
                height={340}
                alt="details"
              />
            </div>
            <div className="lg:col-span-2 px-5">
              <div>
                <h2 className="text-2xl">{product.title}</h2>
                <p className="text-gray-400">{product.category}</p>
                <div className="my-8 py-3 px-8 rounded-xl border border-dashed">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
            <div className="p-5 h-full flex flex-col justify-between max-h-[400px] md:mt-6">
              <div>
                <div className="mb-2 flex justify-between">
                  <span>Price:</span>
                  <span>$ {product.price}</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span>Status:</span>
                  <span
                    className={`${
                      product.count > 0 ? "text-blue-500" : "text-red-500"
                    }`}
                  >
                    {product.count > 0 ? `Available` : "Unavailable"}
                  </span>
                </div>
                {product.count ? (
                  <div className="mb-2 flex justify-between">
                    <span>Count:</span>
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
              disabled:bg-slate-200 mt-4"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="w-full flex justify-between mt-4">
                  {isInCart.quantity === 1 ? (
                    <button
                      onClick={() => cartOperation("remove")}
                      className="border border-rose-400 py-2 px-6 rounded-lg flex justify-center items-center hover:bg-rose-50 transition-colors duration-200 active:bg-rose-100"
                    >
                      <TrashIcon className="w-6 h-6 text-rose-400" />
                    </button>
                  ) : (
                    <button
                      onClick={() => cartOperation("decrease")}
                      className="border border-rose-400 py-2 px-6 rounded-lg flex justify-center items-center hover:bg-rose-50 transition-colors duration-200 active:bg-rose-100"
                    >
                      <MinusIcon className="w-6 h-6 text-rose-400" />
                    </button>
                  )}
                  <span className="border py-1 px-4 rounded-xl text-lg font-semibold">
                    {isInCart.quantity}
                  </span>
                  <button
                    onClick={() => cartOperation("increase")}
                    disabled={product.count <= isInCart.quantity}
                    className="bg-blue-500 py-2 px-6 rounded-lg flex justify-center items-center hover:bg-blue-600 transition-colors duration-200 active:bg-blue-700
                     disabled:bg-blue-200 disabled:cursor-not-allowed"
                  >
                    <PlusIcon className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default ProductPage;
