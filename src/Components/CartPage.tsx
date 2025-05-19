import { useContext } from "react";
import { ItemContext } from "../context.ts";

function CartPage()
{
    const { items, cartItems } = useContext(ItemContext);

    function handleTitle(title: string): string
    {
        return title.slice(0, 15).padEnd(18, ".");
    }

    function handlePrice(price: number, count: number): string
    {
        return (price * count).toFixed(2);
    }

    return (
        <div className="cart-page">
            <h2>Your order</h2>
            <div className="cart-items">
                {cartItems.map(cartItem =>
                {
                    const item = items.find(item => item.id === cartItem.id);
                    if (!item) return null;

                    return (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt="Item" />
                            <h3>{handleTitle(item.title)}</h3>
                            <p className="cart-item-price">Price: <span>{handlePrice(item.price, cartItem.count)}$</span></p>
                            <p className="cart-item-count">Count: <span>{cartItem.count}</span></p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CartPage;