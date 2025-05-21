import { NavLink } from "react-router-dom";
import { ItemContext } from "../context.ts";
import { useContext } from "react";

function NavBar()
{
    const { cartItems } = useContext(ItemContext);
    const cartCount = cartItems.length;

    return (
        <nav className="navbar">
            <h1>MockShop</h1>
            <ul>
                <li ><NavLink to="home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="shop" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink></li>
            </ul>
            <div><NavLink to="cart" className={({ isActive }) => isActive ? "active" : ""}>🛒 - {cartCount}</NavLink></div>
        </nav>
    );
}

export default NavBar;