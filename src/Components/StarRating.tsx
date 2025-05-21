interface StarRatingProps
{
    rating: number;
    maxStars?: number;
}

function StarRating({ rating, maxStars = 5 }: StarRatingProps)
{
    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating % 1) >= 0.5;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div style={{ color: "#f5c518", fontSize: "1.5rem", userSelect: "none" }}>
            {
                Array(fullStars).fill("★").map((star, index) => (
                    <span key={"full" + index}>
                        {star}
                    </span>
                ))
            }
            {
                hasHalfStar && (
                    <span key="half">☆</span>
                )
            }
            {
                Array(emptyStars).fill("☆").map((star, index) => (
                    <span key={"empty" + index}>
                        {star}
                    </span>
                ))
            }
        </div>
    );
}

export default StarRating;