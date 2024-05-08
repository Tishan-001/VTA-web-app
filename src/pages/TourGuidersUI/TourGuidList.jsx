// hotelList.jsx
import React from "react";
import TourCard from "./tourGuidListCard";

const TourGuidList = ({ hotelList }) => {
  return (
    <>
     {hotelList?.map((tour) => (
  <div lg="4" className="mb-4" key={tour?.id}>
    {tour && <TourCard tour={tour} />}
  </div>
))}

    </>
  );
};

export default TourGuidList;
