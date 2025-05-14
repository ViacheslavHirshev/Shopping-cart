import { useContext } from "react";
import ItemCard from "./ItemCard";
import { ProductContext } from "../App";

function ShopPage()
{
    const { products } = useContext(ProductContext);

    return (
        <div className="shop-page">
            {products.map(product =>
                <ItemCard
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                />)}
        </div>
    );
}

export default ShopPage;