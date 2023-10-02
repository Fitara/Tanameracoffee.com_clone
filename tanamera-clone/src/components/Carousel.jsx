import React, { useState, useEffect } from "react";

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((next) => (next === slides.length - 1 ? 0 : next + 1));
  };

  const handleDot = (index) => {
    setActiveSlide(index);
  };

  const slideStyle = {
    transition: "transform 0.3s ease-out",
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isHovered) nextSlide();
    }, 2000);

    return () => clearInterval(autoSlide);
  }, [activeSlide, isHovered]);

  const slides = [
    "https://tanameracoffee.com/wp-content/uploads/2023/02/Banner-Website-Manakala-scaled.jpg",
    "https://tanameracoffee.com/wp-content/uploads/2021/12/TC_BANNER_WEBSITE_CONCENTRATE-SACHETS-scaled.jpg",
    "https://tanameracoffee.com/wp-content/uploads/2023/02/Banner-Website-Biodegradable-scaled.jpg",
    "https://tanameracoffee.com/wp-content/uploads/2021/03/TC_Fellow-IDWeb-04.png",
  ];

  return (
    <div
      id="carousel"
      className="relative w-[87.5%] mx-auto mt-24 mb-24"
      data-carousel="slide"
    >
      <div
        className={`relative h-auto overflow-hidden ${
          isHovered ? "cursor-pointer" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex"
          style={{
            ...slideStyle,
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full"
              style={{
                flex: "0 0 100%",
              }}
              data-carousel-item
            >
              <img
                src={slide}
                className="block w-full"
                alt="slide"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute flex space-x-3 -translate-x-1/2 -bottom-10 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2.5 h-2.5 rounded-full border-solid border-2 ${
              index === activeSlide
                ? "bg-gray-900 border-gray-800 w-4"
                : "border-gray-300"
            }`}
            aria-current={index === activeSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleDot(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-72 left-0 px-2 cursor-pointer"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-12 h-12">
          <svg
            className="h-6 w-auto dark:text-gray-950"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-72 right-0 px-2 cursor-pointer"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-12 h-12">
          <svg
            className="h-6 w-auto dark:text-gray-950"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
