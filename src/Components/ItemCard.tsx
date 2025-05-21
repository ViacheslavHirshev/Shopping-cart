import { useContext, useState } from "react";
import { ItemContext } from "../context.ts";
import StarRating from "./StarRating.tsx";

interface ItemCardProps
{
    id: number;
    title: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}

function ItemCard({ id, title, image, price, rating }: ItemCardProps)
{
    const { addItemInCartById } = useContext(ItemContext);
    const [itemCount, setItemCount] = useState(1);

    function handleAddToCart(): void
    {
        addItemInCartById(id, itemCount);
    }

    function handleIncrement(): void
    {
        if (itemCount < 10)
        {
            setItemCount(prevCount => prevCount + 1);
        }
    }

    function handleDecrement(): void
    {
        if (itemCount > 1)
        {
            setItemCount(prevCount => prevCount - 1);
        }
    }

    return (
        <div className="item-card">
            <img src={image} alt="Item" />
            <h3>{title}</h3>
            <p>{price}$</p>
            <div><StarRating rating={rating.rate} /></div>
            <div className="item-card-count">
                <span onClick={handleDecrement}>-</span>
                {itemCount}
                <span onClick={handleIncrement}>+</span>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ItemCard;