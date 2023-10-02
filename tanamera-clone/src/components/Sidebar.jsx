import React, { useEffect, useRef } from "react";
import closeIcon from "../assets/svg/close.svg";

export default function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isOpen
      )
        onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, isOpen]);

  const transformClass = isOpen ? "translate-x-0" : "-translate-x-full";
  const transitionClass = "transition-transform ease-in-out duration-300";

  return (
    <div
      className={`
          sidebar fixed text-[48px] tracking-widest bg-red-600 top-0 left-0 h-full w-[30%]
          transform ${transformClass} ${transitionClass} z-10
      `}
      style={{ fontFamily: "Abolition Test" }}
      ref={sidebarRef}
    >
      <div className='flex justify-between border-b-[4px] border-gray-700 px-4 pb-2'>
        <div className='text-gray-600'>Menu</div>
        <button
          onClick={() => {
            onClose();
          }}
          className='cursor-pointer'
        >
          <img
            src={closeIcon}
            alt='Close'
            className='w-6 h-6 filter brightness-0 invert'
          />
        </button>
      </div>
      <ul className='pt-4'>
        <li>
          <a href='#' className='text-white hover:bg-red-700 pb-2 block'>
            <span className='ml-5'>Shop</span>
          </a>
        </li>
        <li>
          <a href='#' className='text-white hover:bg-red-700 pb-2 block'>
            <span className='ml-5'>Find Us</span>
          </a>
        </li>
        <li>
          <a href='#' className='text-white hover:bg-red-700 pb-2 block'>
            <span className='ml-5'>About Us</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
