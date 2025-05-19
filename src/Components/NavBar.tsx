import { Link } from "react-router-dom";
import { ItemContext } from "../context.ts";
import { useContext } from "react";

function NavBar()
{
    const { cartItems } = useContext(ItemContext);
    const cartCount = cartItems.length;

    return (
        <nav className="navbar">
            <h1>MockShop</h1>
            <div className="links">
                <div><Link to="home">Home</Link></div>
                <div><Link to="shop">Shop</Link></div>
            </div>
            <div><Link to="cart">Cart {cartCount}</Link></div>
        </nav>
    );
}

export default NavBar;