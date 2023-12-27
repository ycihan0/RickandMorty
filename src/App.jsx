import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Characters from "./pages/characters";
import Episodes from "./pages/Episodes";
import RootLayout from "./pages/Root";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [characterInfoShow, setCharacterInfoShow]=useState(false);
  const showCharacterInfo=()=>{setCharacterInfoShow(true)}
  const showCartHandler = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = (e) => {
    e.preventDefault()
    setCartIsShow(false)
    setCharacterInfoShow(false)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout showCartHandler={showCartHandler}/>,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Characters showCharacterInfo={showCharacterInfo} /> },
        { path: "/episodes", element: <Episodes /> },
  
      ],
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
     {cartIsShow && <Cart hideCartHandler={hideCartHandler}/>}
     {characterInfoShow && <CharacterInfo hideCartHandler={hideCartHandler}/>}
    </>
  );
}

export default App;
