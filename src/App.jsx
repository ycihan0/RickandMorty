import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import RootLayout from "./pages/Root";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <Error />,
    children: [
       { path: "/", element: <Characters /> },
       { path: "/episodes", element: <Episodes /> },
    ],
  },
]);


function App() {

  return (
    <>
    <RouterProvider router={router} />
    
   
    </>
  );
}

export default App;
