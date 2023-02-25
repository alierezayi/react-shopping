import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";

const CartPage = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;
  return (
    <Layout title="Cart page">
      <h1 className="mb-4 text-xl">Shoppoing Cart</h1>
      {
        !cartItems.length ? <div>
            <p>Cart is empty.</p>
        </div> : <div></div>
      }
    </Layout>
  );
};

export default CartPage;
