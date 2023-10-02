import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/detail/${product.id}`}>
      <div>
        <div
          className='card shadow relative overflow-hidden w-[375px] rounded-none'
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`relative overflow-hidden max-w-full max-h-full ${
              isHovered ? "hovered" : ""
            }`}
          >
            <img
              src={
                isHovered ? product.Images[1].imgUrl : product.Images[0].imgUrl
              }
              alt={`Product Image ${isHovered ? 2 : 1}`}
              className={`
                w-full h-full transition-transform transform duration-500 ease-in-out ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
          <div className='bg-neutral-400'>
            <p className='text-xl text-gray-950 font-semibold tracking-wide p-2'>
              {product.name}
            </p>
            <p className='font-sans uppercase text-md text-black font-bold tracking-widest pb-4'>
              From IDR {product.price} K
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
