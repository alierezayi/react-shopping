import { useSelector } from "react-redux";
import CartList from "../../components/cart/CartList";
import OrderSummary from "../../components/cart/OrderSummary";
import Layout from "../../components/layout/Layout";

const CartPage = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;

  return (
    <Layout title="Cart page">
      <div className="xl:w-2/3 mx-auto">
        <h1 className="mb-4 text-3xl font-medium">Shoppoing Cart</h1>
        {!cartItems.length ? (
          <div>
            <p>Cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col mt-10 space-y-16">
            <CartList />
            <OrderSummary />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
