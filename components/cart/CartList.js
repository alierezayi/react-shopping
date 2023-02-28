import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartList = () => {
  const state = useSelector((state) => state.cart);
  const { cartItems } = state;

  return (
    <div className="overflow-x-auto xl:col-span-3 sm:px-3 divide-y rounded-lg">
      {cartItems.map((item) => (
        <CartItem key={item.slug} itemData={item} />
      ))}
    </div>
  );
};

export default CartList;
