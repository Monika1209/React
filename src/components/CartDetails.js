import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CartDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/carts/${id}`)
            .then((response) => response.json())
            .then((data) => setCart(data));
    }, [id]);

    if (!cart) {
        return <h2>Loading...</h2>;
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Cart ID: {cart.id}</h2>
            <p><strong>Total Products:</strong> {cart.totalProducts}</p>
            <p><strong>Total Price:</strong> ${cart.total}</p>
            <h3>Products:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {cart.products?.map((product) => (
                    <li key={product.id} style={{ margin: "10px 0", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                        {product.title} - ${product.price} (Qty: {product.quantity})
                    </li>
                ))}
            </ul>

            <button
                onClick={() => navigate(-1)}
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    cursor: "pointer",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                Go Back
            </button>
        </div>
    );
};

export default CartDetails;
