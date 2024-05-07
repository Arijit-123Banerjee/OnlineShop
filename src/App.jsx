import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { shoesContext } from "../src/Context/ShoeContext";
import { SHOES_DATA } from "../src/DATA";
import Details from "./Pages/Details";
import CartPage from "./Pages/CartPage";
import CheckOutFrom from "./Pages/CheckOutFrom";
import Payment from "./Pages/Payment";
import LoginPage from "./Pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/:id", element: <Details /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckOutFrom /> },
      { path: "/payment", element: <Payment /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

const App = () => {
  const [data, setData] = useState(SHOES_DATA);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [calculateCartSum, setCalculateSum] = useState(0);
  const [theme, setTheme] = useState(false);

  const contextValue = {
    dataitem: data,
    cartCount: cartCount,
    setCartCount: setCartCount,
    cartItems: cartItems,
    setCartItems: setCartItems,
    calculateCartSum: calculateCartSum,
    setCalculateSum: setCalculateSum,
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <shoesContext.Provider value={contextValue}>
      <div className="h-screen w-full">
        <RouterProvider router={router} />
      </div>
    </shoesContext.Provider>
  );
};

export default App;
