import { useSelector } from "react-redux"

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)
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
            </li>
          ))}

        </ul>
      )}
      </ul>
       <span>Toplam Değer</span>
                <span>₺</span>
    </div>
  )
}

export default CartItem
