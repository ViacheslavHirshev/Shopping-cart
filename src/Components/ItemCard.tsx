interface ItemCardProps
{
    title: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}

function ItemCard({ title, image, price, rating }: ItemCardProps)
{
    return (
        <div className="item-card">
            <img src={image} alt="Item" />
            <h2>{title}</h2>
            <p>Price: {price} $</p>
            <p>Rating: {rating.rate}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default ItemCard;