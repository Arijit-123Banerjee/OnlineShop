import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { shoesContext } from "../Context/ShoeContext";
import AddTocartToster from "../Components/AddTocartToster";

const Details = () => {
  const { dataitem } = useContext(shoesContext);
  const { setCartCount } = useContext(shoesContext);
  const { cartCount } = useContext(shoesContext);
  const { setCartItems } = useContext(shoesContext);
  const { id } = useParams();
  const selectedShoe = dataitem.find((shoe) => shoe.id === parseInt(id));

  if (!selectedShoe) {
    return <div>Shoe not found</div>;
  }

  const { image, name, description, price } = selectedShoe;
  const [isAdded, setIsAdded] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setCartCount(cartCount + 1);
    setAlreadyAdded(true);
    setCartItems((prev) => [...prev, dataitem[id]]);
  };

  return (
    <div className=" bg-gray-200 flex justify-center">
      {isAdded && <AddTocartToster isAdded={isAdded} setIsAdded={setIsAdded} />}
      <div className="w-[80%] min-h-[80vh] max-md:w-full bg-white mt-10 rounded-lg flex items-center max-lg:flex-col pb-5 mb-10 ">
        <div className="overflow-hidden">
          <img src={image} alt="Shoe" />
        </div>
        <div className="font-work-sans space-y-2 z-10 max-md:pl-4  ">
          <p className="text-blue-500">Running Shoes</p>
          <h1 className="text-5xl font-bold max-md:text-4xl">{name}</h1>
          <p className="w-80 max-md:text-sm max-md:w-72 ">{description}</p>
          <p className="text-xl text-green-500 font-bold">
            {`$ ${price}`}
            <span className="text-gray-500 font-normal text-lg">
              + Free Shipping
            </span>
          </p>

          <button
            className="p-2 border-2 w-full max-md:w-[70%] hover:bg-gray-300 duration-150"
            onClick={handleAddToCart}
            disabled={alreadyAdded}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
