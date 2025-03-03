import { useCart } from "./CartContext";

const Checkout = () => {
  const { cartState, dispatch } = useCart();
  const totalPrice = cartState.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Checkout successful!");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleCheckout} disabled={cartState.items.length === 0}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;
