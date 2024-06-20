import React, { useState } from "react";
import Sidebar1 from "../SliderBar/index";
import HotelRoom from "../Transport";
import BookingNotification from "../BookingNotificaton";


export default function SignUpOnePage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
  };

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case "Dashboard":
        return <HotelRoom />;
      case "Article":
        return <BookingNotification />;
      
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-full bg-gray-300">
        <div className="flex md:flex-col justify-center items-start">
          <Sidebar1 onItemClick={handleMenuItemClick} />
          {renderComponent()}
        </div>
      </div>
    </>
  );
}