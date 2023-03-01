import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartList = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;

  return (
    <div className="overflow-auto xl:max-h-screen xl:col-span-7 sm:px-3 divide-y rounded-lg border sm:border-none">
      {cartItems.map((item) => (
        <CartItem key={item.slug} itemData={item} />
      ))}
    </div>
  );
};

export default CartList;
