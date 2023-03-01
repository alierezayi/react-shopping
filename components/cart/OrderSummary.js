import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { checkout } from "../../redux/features/cart/cartSlice";

const OrderSummary = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { totalPrice, cartCounter } = state;

  const router = useRouter();
  const checkoutHandler = () => {
    dispatch(checkout());
    router.push("/shipping");
  };

  const shippingEstimate = 0;
  const taxEstimate = 0;
  const orderTotal = +totalPrice + shippingEstimate + taxEstimate;

  return (
    <div className="w-full lg:w-3/4 xl:mx-0 xl:w-full mx-auto xl:col-span-3">
      <div className=" p-7 bg-slate-50 sm:rounded-xl">
        <h1 className="text-lg font-semibold mb-4">Order summary</h1>
        <div className="w-full divide-y mb-4">
          <div className="flex justify-between py-3">
            <span className="text-gray-800">Total Items</span>
            <span>{cartCounter}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-800">Subtotal</span>
            <span>${totalPrice > 0 ? totalPrice : "--.--"}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-800">Shipping estimate</span>
            <span>${shippingEstimate > 0 ? shippingEstimate : "--.--"}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-800">Tax estimate</span>
            <span>${taxEstimate > 0 ? taxEstimate : "--.--"}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-lg font-medium">Order total</span>
            <span className="text-lg font-medium">
              ${orderTotal.toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={checkoutHandler}
          className="w-full bg-indigo-500 text-white py-3 rounded-lg text-base hover:bg-indigo-600 transition duration-200"
        >
          Checkout
        </button>
        <div className="w-full flex justify-center items-center mt-3 space-x-1">
          <span>or</span>
          <Link
            href={`/`}
            className="flex items-center space-x-1 text-indigo-500 hover:text-indigo-700"
          >
            <span>Continue Shopping</span>{" "}
            <ArrowSmallRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
