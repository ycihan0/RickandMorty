import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };
  return (
    <div>
      <ul>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
               
                {item.name}
                <button onClick={() => handleRemoveFromCart(item)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </ul>
     
    </div>
  );
};

export default CartItem;
