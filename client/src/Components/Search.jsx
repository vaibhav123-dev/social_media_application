import React from "react";

export const Search = () => {
  return (
    <div>
      <div className="mt-14 shadow-md rounded px-4 pt-6 pb-8 mb-4 min-w-min md:content-center ">
        <h3 className="text-center mb-2">Search a Memory</h3>
        <form className="bg-white text-sm ">
          <div>
            <input
              placeholder="Search title..."
              className="m-2 p-2 border px-12"
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Search tag..."
              className=" border m-2 p-2 px-12"
              type="text"
            />
          </div>
          <div>
            <button className="bg-red-500 m-1 p-1.5 min-w-full">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};
