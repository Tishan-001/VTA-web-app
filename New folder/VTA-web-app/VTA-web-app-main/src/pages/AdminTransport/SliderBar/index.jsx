import React, { useState } from "react";
import { Img } from "components/Img";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Heading } from "components/Heading1";

export default function Sidebar1({ onItemClick }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
    onItemClick(itemName);
  };

  return (
    <Sidebar
      width="370px !important"
      collapsedWidth="50px !important"
      className="flex flex-col h-[720px]   p-[3px] bg-white-A700 "
    >
      <div className="flex flex-col items-end w-[85%] md:w-full mb-[4px] gap-[59px]">
        <div className="flex justify-end w-[69%] md:w-full mr-[58px]">
          <div className="flex flex-col items-center">
            <Heading size="4xl" as="h1">
              VTA
            </Heading>
            <Heading size="s1" as="p" className="mt-[-5px] !text-black-900_99">
              Virtual Travel Assistance
            </Heading>
          </div>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "15px 15px 15px 22px",
              gap: "19px",
           
              alignSelf: "start",
              color: "#000000",
              fontWeight: 600,
              fontSize: "20px",
              borderRadius: "10px",
              backgroundColor: "transparent",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                backgroundColor: "#437d9e !important",
              },
            },
          }}
          rootStyles={{ ["&>ul"]: { gap: "14px" } }}
          className="flex flex-col self-center w-full"
        >
          <MenuItem className="mt-[10px]"
            icon={
              <Img
                src="images/img_artical_1.png"
                alt="dashboard1one"
                className="h-[26px] w-[26px] object-cover"
              />
            }
            onClick={() => handleMenuItemClick("Dashboard")}
            active={selectedMenuItem === "Dashboard"}
          >
            Transport Posts
          </MenuItem>
          <MenuItem className="mt-[15px]"
            icon={
              <Img
                src="images/img_artical_1.png"
                alt="articalone_one"
                className="h-[28px] w-[28px] object-cover"
              />
            }
            onClick={() => handleMenuItemClick("Article")}
            active={selectedMenuItem === "Article"}
          >
            Booking Notification
          </MenuItem>
         
         
         
        </Menu>
      </div>
    </Sidebar>
  );
}
