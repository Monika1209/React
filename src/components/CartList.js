import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartList = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/carts")
            .then((response) => response.json())
            .then((data) => setCarts(data.carts));
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Shopping Carts</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {carts.map((cart) => (
                    <div
                        key={cart.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "15px",
                            borderRadius: "8px",
                            backgroundColor: "#f9f9f9",
                            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                            transition: "0.3s",
                        }}
                    >
                        <h3>Cart ID: {cart.id}</h3>
                        <p>Total Products: {cart.totalProducts}</p>
                        <p>Total Price: ${cart.total}</p>
                        <Link to={`/cart/${cart.id}`} style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
                            View Details
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartList;
