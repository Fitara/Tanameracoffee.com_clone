import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      <div className='navbar bg-white fixed top-0 left-0 right-0 w-full mx-auto p-0.5 z-10'>
        <div className="container w-[87.5%] mx-auto flex items-center">
          <div className='navbar-start flex'>
            <div className='dropdown'>
              <div
                onClick={toggleSidebar}
                className='btn btn-xs btn-ghost btn-circle hover:bg-transparent'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='icons-stroke'
                >
                  <path
                    stroke='#000'
                    strokeLinecap='round'
                    strokeWidth='2'
                    d='M4 18h16M4 12h16M4 6h16'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className='navbar-center flex p-2'>
            <Link to={"/"}>
              <div className='bg-transparent border-none text-xl' href='#'>
                <img
                  className='max-w-[225px]'
                  src='https://tanameracoffee.com/wp-content/uploads/2020/11/logo.png'
                  alt=''
                />
              </div>
            </Link>
          </div>
          <div className='navbar-end flex'>
            <button className='btn btn-sm btn-ghost btn-circle hover:bg-transparent'>
              <div className='indicator w-[20px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  className='icons-stroke'
                >
                  <path
                    d=' M21 3C11.621 3 4 10.621 4 20s7.621 17 17 17c3.71 0 7.14-1.195 9.938-3.219
                        l13.156 13.125 2.812-2.812-13-13.032A16.923 16.923 0 0038 20c0-9.379-7.621-17-17-17z
                        M21 5c8.297 0 15 6.703 15 15s-6.703 15-15 15-15-6.703-15-15 6.703-15 15-15z'
                    stroke='#000'
                    strokeLinecap='round'
                    strokeWidth='2'
                  />
                </svg>
              </div>
            </button>
            <button className='btn btn-sm btn-ghost btn-circle hover:bg-transparent'>
              <div className='indicator w-[20px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='3 -0.5 18 24'
                  className='icons-stroke'
                >
                  <g
                    stroke='#000'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                  >
                    <path d='M5.5 16.14A3.792 3.792 0 009.22 20h6.56a3.792 3.792 0 003.72-3.86l-.436-4.687A4.086 4.086 0 0016 7.75a3.97 3.97 0 00-1.1-.158h-4.8A3.97 3.97 0 009 7.75a4.086 4.086 0 00-3.062 3.7L5.5 16.14z'></path>
                    <path d='M16 9.389V7.368A3.436 3.436 0 0012.5 4 3.436 3.436 0 009 7.368v2.02'></path>
                  </g>
                </svg>
              </div>
            </button>
            <button className='btn btn-sm btn-ghost btn-circle hover:bg-transparent'>
              <div className='indicator w-[20px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#000'
                  stroke='none'
                  viewBox='0 0 205.229 205.229'
                  className='icons-fill'
                >
                  <g>
                    <path d='M102.618 205.229C46.033 205.229.002 159.198.002 102.613.002 46.031 46.033 0 102.618 0 159.2 0 205.227 46.031 205.227 102.613c0 56.585-46.027 102.616-102.609 102.616zm0-196.611c-51.829 0-94.002 42.166-94.002 93.995s42.17 93.995 94.002 93.995c51.825 0 93.988-42.162 93.988-93.995 0-51.829-42.162-93.995-93.988-93.995z'></path>
                    <path d='M5.746 98.304H199.48000000000002V106.922H5.746z'></path>
                    <path d='M104.941 62.111c-48.644 0-84.94-10.704-87.199-11.388l2.494-8.253c.816.247 82.657 24.336 164.38-.004l2.452 8.26c-28.663 8.54-57.047 11.385-82.127 11.385zM20.416 160.572l-2.459-8.26c84.271-25.081 165.898-1.027 169.333 0l-2.494 8.256c-.82-.25-82.654-24.328-164.38.004z'></path>
                    <path d='M69.399 196.168C26.933 96.747 63.584 8.604 63.959 7.727l7.927 3.378c-.365.845-35.534 85.756 5.44 181.677l-7.927 3.386zM135.168 196.168l-7.927-3.382c40.971-95.92 5.801-180.832 5.436-181.677l7.927-3.378c.369.873 37.023 89.016-5.436 188.437z'></path>
                    <path d='M98.306 5.744H106.92V203.046H98.306z'></path>
                  </g>
                </svg>
              </div>
            </button>
            <button className='btn btn-sm btn-ghost btn-circle hover:bg-transparent'>
              <div className='indicator w-[24px]'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -0.5 28 24"
                  className="icons-fill"
                >
                  <path d="M12 11a5 5 0 10-5-5 5.006 5.006 0 005 5zm0-8a3 3 0 11-3 3 3 3 0 013-3zM4 23h16a1 1 0 001-1v-4a5.006 5.006 0 00-5-5H8a5.006 5.006 0 00-5 5v4a1 1 0 001 1zm1-5a3 3 0 013-3h8a3 3 0 013 3v3H5z"></path>
                </svg>
              </div>
            </button>
          </div>  
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
