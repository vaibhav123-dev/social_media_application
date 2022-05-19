import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="container flex px-5 justify-between bg-purple-600 h-14 pt-4 z-10 fixed top-0 text-white min-w-full shadow-xl">
        <div className="font-bold font-serif ml-5">Memories</div>
        <div className="flex mr-5">
          <div className=" mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="font-bold font-serif mr-5">Vaibhav</div>
          <button className="bg-white w-20 cursor-pointer rounded-sm mb-3 pb-1 text-black text-center font-semibold hover:bg-black hover:text-white">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};
