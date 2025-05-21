import { useEffect, useState } from "react"
import NavBar from "./Components/NavBar"
import { Outlet } from "react-router-dom"
import { Item, CartItem } from "./types.ts"
import * as utils from "./utils.ts"
import { ItemContext } from "./context.ts"
import { ToastContainer } from "react-toastify"


function App()
{
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() =>
  {
    const fetchItems = async () =>
    {
      const data = await utils.getData<Item[]>("https://fakestoreapi.com/products");
      setItems(data);
    }

    fetchItems().
      then(() => setLoading(false)).
      catch(err => { setError(err.message); }).
      finally(() => setLoading(false));
  }, []);

  function addItemInCartById(itemId: number, count: number): void
  {
    setCartItems(prevItems =>
    {
      const existingItem = prevItems.find(item => item.id === itemId);

      if (existingItem)
      {
        if (existingItem.count + count > 10)
        {
          utils.displayErrorToast("You can only add up to 10 same items to the cart");
          return prevItems;
        }
        else 
        {
          utils.displaySuccessToast("Item added to cart");
          return prevItems.map(item =>
            item.id === itemId
              ? { ...item, count: item.count + count }
              : item
          );
        }
      }

      utils.displaySuccessToast("Item added to cart");
      return [...prevItems, { id: itemId, count }];
    });
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

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h2>{error}</h2>;

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
