import Image from "next/legacy/image";
import Link from "next/link";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  increase,
  decrease,
  removeItem,
} from "../../redux/features/cart/cartSlice";

const CartItem = ({ itemData }) => {
  const { image, title, category, price, quantity, slug, count } = itemData;

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 items-center justify-between p-5">
      <div className="flex space-x-7">
        <Link href={`/products/${slug}`}>
          <Image
            src={image}
            width={200}
            height={200}
            alt="cart item"
            className="rounded-lg w-40 h-40"
          />
        </Link>
        <div className="flex flex-col justify-around">
          <div>
            <p className="md:text-lg font-medium">{title}</p>
            <p className="text-gray-500 text-sm md:text-base">{category}</p>
          </div>
          <span className="text-sm md:text-lg">${price}</span>
        </div>
      </div>
      <div className="flex px-4 items-center rounded-md space-x-4">
        <button
          className="hover:bg-slate-50 md:p-1 rounded-md"
          onClick={() => quantity > 1 && dispatch(decrease(itemData))}
        >
          <MinusIcon className="text-slate-500 h-7 w-7" />
        </button>
        <span className="text-sm md:text-base">Qty {quantity}</span>
        <button
          className="hover:bg-slate-50 md:p-1 rounded-md"
          onClick={() => quantity < count && dispatch(increase(itemData))}
        >
          <PlusIcon className="text-indigo-500 h-7 w-7" />
        </button>
      </div>
      <button
        className="text-sm md:text-base text-rose-500 hover:text-rose-300"
        onClick={() => dispatch(removeItem(itemData))}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
