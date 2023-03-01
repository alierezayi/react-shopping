import { useSelector } from "react-redux";
import CartList from "../../components/cart/CartList";
import OrderSummary from "../../components/cart/OrderSummary";
import Layout from "../../components/layout/Layout";

const CartPage = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;

  return (
    <Layout title="Cart page">
      <div className=" mx-auto">
        <h1 className="mb-10 text-3xl font-medium">Shoppoing Cart</h1>
        {!cartItems.length ? (
          <div>
            <p>Cart is empty.</p>
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

export default CartPage;
