import React from "react";

const Nav = () => {
  return (
    <div className="shadow-lg">
      <nav className="w-full flex justify-around items-center h-16 text-white font-bold bg-red-500 transition duration-300 ease-in-out">
        <button className="hover:bg-white hover:text-red-500 px-4 py-2 rounded transition duration-300 ease-in-out">
          Home
        </button>
        <button className="hover:bg-white hover:text-red-500 px-4 py-2 rounded transition duration-300 ease-in-out">
          Product
        </button>
        <button className="hover:bg-white hover:text-red-500 px-4 py-2 rounded transition duration-300 ease-in-out">
          About Us
        </button>
      </nav>
    </div>
  );
};

export default Nav;
