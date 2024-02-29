import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import RootLayout from "./pages/Root";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartIsFull from "./components/Alert/CartIsFull";
import { useSelector } from "react-redux";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [filters, setFilters] = useState({
    gender: "",
    status: "",
    species: "",
  });

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
    // setCharacterInfoShow(false)
  };
  const isCartFull = useSelector((state) => state.cart.isCartFull);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout
          showCartHandler={showCartHandler}
          setSearch={setSearch}
          setPageNumber={setPageNumber}
          filters={filters}
          setFilters={setFilters}
        />
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <Characters
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              search={search}
              filters={filters}
            />
          ),
        },
        { path: "/episodes", element: <Episodes search={search} filters={filters}/> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {cartIsShow && <Cart hideCartHandler={hideCartHandler} />}
      {isCartFull && <CartIsFull />}
    </>
  );
}

export default App;
