// hotelList.jsx
import React from "react";
import TourCard from "./hotelListCard";

const HotelList = ({ hotelList }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
      {hotelList?.map((tour) => (
        <div key={tour.id}>
          <TourCard tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default HotelList;
