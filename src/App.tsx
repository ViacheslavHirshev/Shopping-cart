import { useEffect, useState } from "react"
import NavBar from "./Components/NavBar"
import { Outlet } from "react-router-dom"
import { createContext } from "react";
import { Product } from "./types.ts"
import { getData } from "./utils.ts"

export const ProductContext = createContext({
  products: [] as Product[],
});

function App()
{
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() =>
  {
    const fetchProducts = async () =>
    {
      const data = await getData<Product[]>("https://fakestoreapi.com/products");
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <ProductContext.Provider value={{ products }}>
          <Outlet />
        </ProductContext.Provider>
      </main>
    </>
  )
}

export default App
