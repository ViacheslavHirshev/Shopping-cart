import { useEffect, useState } from "react"
import NavBar from "./Components/NavBar"
import { Outlet } from "react-router-dom"
import { Item, CartItem } from "./types.ts"
import { getData } from "./utils.ts"
import { ItemContext } from "./context.ts"
import { ToastContainer } from "react-toastify"


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

  function handleCountIncrement(id: number): void
  {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === id
        ? { ...item, count: item.count + 1 }
        : item
    ))
  }

  function handleCountDecrement(id: number): void
  {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === id
        ? { ...item, count: item.count - 1 }
        : item
    ))
  }

  return (
    <>
      <ItemContext.Provider value={{ items, cartItems, handleCountIncrement, handleCountDecrement, addItemInCartById }}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </ItemContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App
