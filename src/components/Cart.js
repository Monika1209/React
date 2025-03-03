import { useCart } from "./CartContext";

const Cart = () => {
  const { cartState, dispatch } = useCart();
  const totalPrice = cartState.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartState.items.length === 0 ? <p>Your cart is empty</p> : null}

      {cartState.items.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid gray", padding: "10px" }}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: item.id })} style={{ marginRight: "10px", padding:"2px 10px" }}>
            +
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: item.id })} style={{ marginRight: "10px", padding:"2px 10px" }}>
            -
          </button> 
          <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
