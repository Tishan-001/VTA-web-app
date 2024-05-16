import React, { useState } from "react";
import Sidebar1 from "components/Sidebar1";
import Dashbord from "components/Admin/Dashbord";
import Artical from "components/Admin/Artical";
import TourPackage from "components/Admin/TourPackage";
import ServiceProvider from "components/Admin/ServiceProvider";

export default function SignUpOnePage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
  };

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case "Dashboard":
        return <Dashbord />;
      case "Article":
        return <Artical />;
      case "Service Providers":
        return <ServiceProvider />;
      case "Tour Packages":
        return <TourPackage />;
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