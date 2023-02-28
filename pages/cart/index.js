import { useSelector } from "react-redux";
import CartItem from "../../components/cart/CartItem";
import Layout from "../../components/layout/Layout";

const CartPage = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;

  return (
    <Layout title="Cart page">
      <div className=" xl:w-2/3 mx-auto">
        <h1 className="mb-4 text-3xl font-medium">Shoppoing Cart</h1>
        {!cartItems.length ? (
          <div>
            <p>Cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col  mt-10">
            <div className="overflow-x-auto xl:col-span-3 sm:px-3 divide-y sm:border rounded-lg">
              {cartItems.map((item) => (
                <CartItem key={item.slug} itemData={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
