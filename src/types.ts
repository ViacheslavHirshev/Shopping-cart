export interface Item
{
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

export interface CartItem
{
    id: number;
    count: number;
}

export interface ItemContextType
{
    items: Item[];
    cartItems: CartItem[];
    addItemInCartById: (itemId: number, count: number) => void;
}