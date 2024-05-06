import React, { useContext, useState } from "react";
import { shoesContext } from "../Context/ShoeContext";
import { Link } from "react-router-dom";
import AddToCartToaster from "../Components/AddTocartToster";

const Shop = () => {
  const { dataitem, cartItems, setCartItems, setCartCount } =
    useContext(shoesContext);
  const [isAdded, setIsAdded] = useState(false);

  const isItemAdded = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  const handleAddToCart = (item) => {
    if (!isItemAdded(item.id)) {
      setCartItems((prevItems) => [...prevItems, item]);
      setCartCount((prevCount) => prevCount + 1);
      setIsAdded(true);
    }
  };

  return (
    <div className="h-screen">
      {isAdded && (
        <AddToCartToaster isAdded={isAdded} setIsAdded={setIsAdded} />
      )}
      <div className="flex justify-between pl-20 pr-20">
        <button>filter</button>
        <button>sort</button>
      </div>
      <div>
        <ul className="flex m-20 justify-center items-center max-sm:flex-col max-md:flex-col ">
          {dataitem.map((item) => {
            const added = isItemAdded(item.id);
            return (
              <li
                className="flex flex-col justify-center items-center bg-gray-100 m-3 rounded-xl"
                key={item.id}
              >
                <Link to={`/${item.id}`} className="rounded-xl relative">
                  <img
                    src={item.image}
                    className="hover:scale-110 cursor-pointer duration-500"
                  />
                </Link>
                <div className="font-work-sans">
                  <h1 className="font-bold ">{item.name}</h1>
                  <h2 className="text-center font-bold text-green-500">
                    {item.price}
                  </h2>
                </div>
                <button
                  disabled={added}
                  className={`border-2 border-gray-200 rounded-b-xl w-full p-2 hover:bg-gray-300 duration-200 ${
                    added ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={() => handleAddToCart(item)}
                >
                  {added ? "Added" : "Add to Cart"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
