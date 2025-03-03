import { useCart } from "./CartContext";

const ProductItem = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
