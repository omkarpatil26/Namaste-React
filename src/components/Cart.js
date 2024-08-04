import { useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-extrabold text-2xl">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg "
        onClick={handleEmptyCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
      {cartItems.length === 0 && <h1>Please add something in the cart!</h1>}
    </div>
  );
};

export default Cart;
