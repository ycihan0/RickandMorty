import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
import "./CartItem.css";


const CartItem = ({setIsClearButton}) => {
  const cartItems = useSelector((state) => state.cart.items);
  
  const dispatch = useDispatch();
  const handleRemoveFromCart = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };

  // const openCharacterInfo=(item)=>{return(<CharacterInfo character={item}/>)}
  return (
    <div className="cart-item-container">
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          {setIsClearButton(false)}
          <p>Your cart is empty.</p>
          <img src="./images/morty.png" />
        </div>
      ) : (
        <ul className="cart-items">
          {setIsClearButton(true)}
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="character-item">
                <img src={item.image} className="cart-item-img" />
                <p>{item.name}</p>
              </div>
              <div className="cart-buttons">
                <button
                  className="button-del"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Del
                </button>
                {/* <button className="button-info" onClick={() => showCharacterInfoHandler(character)}>
                  info
                </button> */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItem;
