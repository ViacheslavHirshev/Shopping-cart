import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

function App()
{

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
