import { useContext } from "react";
import { ItemContext } from "../context.ts";

function CartPage()
{
    const { items, cartItems, handleCountIncrement, handleCountDecrement } = useContext(ItemContext);

    function increaseCartItemCount(id: number): void
    {
        const cartItem = cartItems.find(item => item.id === id);

        if (!cartItem || cartItem.count >= 10)
            return;

        handleCountIncrement(id);
    }

    function decreaseCartItemCount(id: number): void
    {
        const cartItem = cartItems.find(item => item.id === id);

        if (!cartItem || cartItem.count <= 1)
            return;

        handleCountDecrement(id);
    }

    function handleTitle(title: string): string
    {
        if (title.length > 28)
            return title.slice(0, 25).padEnd(28, ".");

        return title;
    }

    function handlePrice(price: number, count: number): string
    {
        return (price * count).toFixed(2);
    }

    function calculateTotalPrice(): string
    {
        let totalPrice = 0;

        if (cartItems.length === 0)
            return "0.00$";

        for (const cartItem of cartItems)
        {
            const item = items.find(item => item.id === cartItem.id);

            if (item)
            {
                totalPrice += item.price * cartItem.count;
            }
        }

        return totalPrice.toFixed(2) + "$";
    }

    return (
        <div className="cart-page">
            <h2>Your order</h2>
            <div className="cart-items">
                {
                    cartItems.map(cartItem =>
                    {
                        const item = items.find(item => item.id === cartItem.id);
                        if (!item) return null;

                        return (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt="Item" />
                                <h3>{handleTitle(item.title)}</h3>
                                <span className="cart-item-price">
                                    Price: <span>{handlePrice(item.price, cartItem.count)}$</span>
                                </span>
                                <span className="cart-item-count">
                                    Count:
                                    <span onClick={() => decreaseCartItemCount(item.id)}>
                                        -
                                    </span>

                                    {cartItem.count}

                                    <span onClick={() => increaseCartItemCount(item.id)}>
                                        +
                                    </span>
                                </span>
                                <span className="remove-icon">
                                    🗑️
                                </span>
                            </div>
                        );
                    })
                }
            </div>
            <div className="cart-total">
                <h2>Total: {calculateTotalPrice()}</h2>
            </div>
        </div>
    );
}

export default CartPage;