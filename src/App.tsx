import { useEffect, useState } from "react"
import NavBar from "./Components/NavBar"
import { Outlet } from "react-router-dom"
import { Item, CartItem } from "./types.ts"
import { getData } from "./utils.ts"
import { ItemContext } from "./context.ts"


function App()
{
  const [items, setItems] = useState<Item[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() =>
  {
    const fetchItems = async () =>
    {
      const data = await getData<Item[]>("https://fakestoreapi.com/products");
      setItems(data);
    }

    fetchItems();
  }, []);

  function addItemInCartById(itemId: number, count: number): void
  {
    setCartItems([...cartItems, { id: itemId, count }]);
  }

  return (
    <>
      <ItemContext.Provider value={{ items, cartItems, addItemInCartById }}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </ItemContext.Provider>
    </>
  );
}

export default App
