import { useContext } from "react";
import ItemCard from "./ItemCard";
import { ItemContext } from "../context.ts";

function ShopPage()
{
    const { items } = useContext(ItemContext);

    function handleTitle(title: string): string
    {
        if (title.length > 45)
            return title.slice(0, 42).padEnd(45, ".");

        return title;
    }

    return (
        <>
            <h2>Our products</h2>
            <div className="shop-page">
                {
                    items.map(item =>
                        <ItemCard
                            id={item.id}
                            key={item.id}
                            title={handleTitle(item.title)}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />)
                }
            </div>
        </>
    );
}

export default ShopPage;