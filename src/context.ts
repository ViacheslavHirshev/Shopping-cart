import { createContext } from "react";
import { ItemContextType } from "./types";

export const ItemContext = createContext<ItemContextType>(
    {
        items: [],
        cartItems: [],
        addItemInCartById: () => { },
    }
);