import { Link } from "react-router-dom";

function HomePage()
{
    return (
        <div className="home-page">
            <h2>Welcome to the MockShop</h2>
            <p>We offer a wide variety of products to suit your needs.</p>
            <div><Link to="/shop">Look at our products</Link></div>
        </div>
    );
}

export default HomePage;