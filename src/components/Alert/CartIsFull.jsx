import { useDispatch } from "react-redux";
import Offcanvas from "../UI/Offcanvas";
import "./CartIsFull.css";
import { cartActions } from "../../store";
const CartIsFull = () => {
    const dispatch=useDispatch();
    const hideAlertHandler=()=>{
        dispatch(cartActions.hideAlert());
    }


  return (
    <Offcanvas hideCartHandler={hideAlertHandler}>
      <div className="alert-container">
        <div className="alert-head">
          <h2>Your cart is full!</h2>
          <a
            href="/"
            className="cart-close"
            onClick={(e) => {
              e.preventDefault();
              hideAlertHandler();
            }}
          >
            x
          </a>
        </div>
        <div className="alert-main">More than 10 characters cannot be added to favorites. </div>
        <button onClick={hideAlertHandler}>Okay</button>
        <img src="images/CartIsFull.png" />
      </div>
    </Offcanvas>
  );
};

export default CartIsFull;
