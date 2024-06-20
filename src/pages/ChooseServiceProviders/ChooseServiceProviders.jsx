import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseServiceProviders() {
  const navigate = useNavigate();

  const handleServiceClick = (role) => {
    navigate("/signup", { state: { role } });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-bs2 p-8 w-96 h-100 space-y-6 ">
        <label className="text-3xl font-bold mb-6 flex justify-center" for="">
          Choose Your Service
        </label>
        <button
          className="block w-full rounded-md bg-blue-300 text-white py-4 px-6 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => handleServiceClick("TRANSPORT")}
        >
          Transport Service
        </button>
        <button
          className="block w-full rounded-md bg-blue-300 text-white py-4 px-6 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => handleServiceClick("HOTEL")}
        >
          Accommodation Service
        </button>
        <button
          className="block w-full rounded-md bg-blue-300 text-white py-4 px-6 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => handleServiceClick("TOURGUIDE")}
        >
          Tour Guide Service
        </button>
        <button
          className="block w-full rounded-md bg-blue-300 text-white py-4 px-6 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => handleServiceClick("MEDICAL")}
        >
          Medical Service
        </button>
      </div>
    </div>
  );
}
