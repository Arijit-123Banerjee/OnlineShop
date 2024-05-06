import React, { useContext } from "react";
import { shoesContext } from "../Context/ShoeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Crousel = () => {
  const { dataitem } = useContext(shoesContext);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="w-full mt-20 overflow-hidden crousel">
      <Slider {...settings}>
        {dataitem.map((items) => (
          <div className="w-full" key={items.id}>
            <div className="bg-white h-[450px] text-black mx-auto mt-10 relative">
              <Link to={`/${items.id}`} className="rounded-xl relative">
                <img
                  src={items.image}
                  className="w-80 h-80 mx-auto hover:brightness-50 cursor-pointer relative"
                  alt={items.name}
                />
              </Link>
              <div className="text-center text-black font-work-sans">
                <p>{items.brand}</p>
                <p className="font-bold">{items.name}</p>
                <p className="text-green-600 font-bold">{`$ ${items.price}`}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Crousel;
