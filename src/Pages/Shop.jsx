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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
        {dataitem.map((item) => {
          const added = isItemAdded(item.id);
          return (
            <div className="bg-gray-100 rounded-xl" key={item.id}>
              <Link to={`/${item.id}`} className="rounded-xl block">
                <img
                  src={item.image}
                  className="hover:scale-110 cursor-pointer duration-500 w-full"
                  alt={item.name}
                />
              </Link>
              <div className="p-4">
                <h1 className="font-bold mb-2">{item.name}</h1>
                <h2 className="text-green-500 font-bold">{item.price}</h2>
                <button
                  disabled={added}
                  className={`border-2 border-gray-200 rounded-b-xl w-full p-2 mt-2 hover:bg-gray-300 duration-200 ${
                    added ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={() => handleAddToCart(item)}
                >
                  {added ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
