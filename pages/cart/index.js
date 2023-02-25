import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
const CartPage = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;
  return (
    <Layout title="Cart page">
      <h1 className="mb-4 text-xl">Shoppoing Cart</h1>
      {!cartItems.length ? (
        <div>
          <p>Cart is empty.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className=" overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    {item.title}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CartPage