import { useContext } from "react";
import ItemCard from "./ItemCard";
import { ItemContext } from "../context.ts";

function ShopPage()
{
    const { items } = useContext(ItemContext);

    return (
        <div className="shop-page">
            {items.map(item =>
                <ItemCard
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />)}
        </div>
    );
}

export default ShopPage;