import { useContext, useState } from "react";
import { ItemContext } from "../context.ts";

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

    function handleAddToCart()
    {
        addItemInCartById(id, itemCount);
    }

    function handleIncrement()
    {
        if (itemCount < 10)
        {
            setItemCount(prevCount => prevCount + 1);
        }
    }

    function handleDecrement()
    {
        if (itemCount > 1)
        {
            setItemCount(prevCount => prevCount - 1);
        }
    }

    return (
        <div className="item-card">
            <img src={image} alt="Item" />
            <h2>{title}</h2>
            <p>Price: {price} $</p>
            <p>Rating: {rating.rate}</p>
            <div>
                <button onClick={handleDecrement}>-</button>
                {itemCount}
                <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ItemCard;