import { Link } from "react-router-dom";

function NavBar()
{
    return (
        <nav className="navbar">
            <h1>Logo</h1>
            <div className="links">
                <div><Link to="home">Home</Link></div>
                <div><Link to="shop">Shop</Link></div>
            </div>
            <div>Cart</div>
        </nav>
    )
}

export default NavBar;