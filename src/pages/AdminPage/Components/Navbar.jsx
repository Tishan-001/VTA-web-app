import React from "react";


export default function Navbar() {
  return (
    <>
     <div className="flex text-white">
      <div className="bg-white w-1/5 flex flex-col items-center justify-center">
        <div className="text-5xl font-bold mb-2 mt-10">VTA</div>
        <div className="text-1xl font-semibold mb-10">Virtual Travel Assistance  </div>
        <a href="#" className="py-2 px-4 text-white hover:bg-gray-700 bg-slate-500 text-2xl font-bold w-[250px] text-center r">Dashboard</a>
        <a href="#" className="py-2 px-4 text-white hover:bg-gray-700">Artical</a>
        <a href="#" className="py-2 px-4 text-white hover:bg-gray-700">Service Provider</a>
        <a href="#" className="py-2 px-4 text-white hover:bg-gray-700">Tour</a>
      </div>
    </div>
    </>
  );
}
