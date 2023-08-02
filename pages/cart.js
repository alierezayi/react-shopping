import { useSelector } from "react-redux";
import CartList from "../components/cart/CartList";
import OrderSummary from "../components/cart/OrderSummary";
import Layout from "../components/layout/Layout";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import emptyCart from "../public/images/empty-cart-2969398.png";

const CartPage = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;

  return (
    <Layout title="Cart page">
      <div className="container m-auto px-1">
        <h1 className="mb-10 text-3xl font-medium">Shoppoing Cart</h1>
        {!cartItems.length ? (
          <div className=" flex items-center justify-center flex-col">
            <Image
              src={emptyCart}
              width={400}
              height={300}
              alt="empty cart"
              className=""
            />
            <h1 className="text-lg text-gray-700">Cart is empty.</h1>
          </div>
        ) : (
          // <div className="flex flex-col mt-10 space-y-16">
          <div className="w-full grid xl:grid-cols-10 xl:gap-5">
            <CartList />
            <OrderSummary />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
