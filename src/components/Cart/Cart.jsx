import Offcanvas from "../UI/OffCanvas";
import "./Cart.css";
import CartItem from"./CartItem.jsx"

const Cart = () => {
    return (
        <Offcanvas>
            <div className="cart-head">
                <h2>My Favorites</h2>
                <a href="/" className="cart-close">
                    X
                </a>
            </div>
            
            <div className="total">
               <CartItem/>
            </div>
            
                <div className="actions">
                    <button className="cart-order">Sipariş Ver</button>
                    <button className="cart-clear" >
                        Temizle
                    </button>
                </div>
        
        </Offcanvas>

    )
}

export default Cart
