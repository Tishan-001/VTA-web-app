// hotelList.jsx
import React from "react";
import TourCard from "./hotelListCard";

const HotelList = ({ hotelList }) => {
  return (
    <>
      {hotelList?.map((tour) => (
        <div lg="4" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </div>
      ))}
    </>
  );
};

export default HotelList;
