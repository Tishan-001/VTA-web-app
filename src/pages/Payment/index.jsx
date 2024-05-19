import React from "react";

import { Button, Img, Line, List, Text } from "components";

import { Heading } from "components/Heading1";
import { Input } from "components/Input";
import { useState } from 'react';


export default function SignInPage() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      
      
      <div className="flex flex-row md:flex-col justify-center  bg-white-A700_01 items-center h-[700px] md:h-[1500px] w-[70%] gap-[33px] left-0 bottom-0 right-0 top-0 m-auto md:gap-5 shadow-bs1 absolute rounded-[10px]">
       
       
      <div className="flex w-full justify-center rounded-[10px] bg-white-A700 p-[26px] md:p-5">
        <div className="mt-[35px] flex w-[94%] items-center justify-between gap-5 md:w-full md:flex-col">
          <div className="flex w-[56%] flex-col items-start gap-[22px]  md:w-full md:mt-[80px]">
            <Heading size="lg" as="h1">Select Payment method</Heading>
            <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
              <div className="flex w-[31%] md:w-auto  flex-col gap-3.5 md:flex-row sm:w-full sm:flex-col">
                <Img
                  src="images/img_image_70.png"
                  alt="image"
                  className="h-[124px] md:mt-[200px] w-full flex-1 object-cover md:h-auto sm:w-full"
                />
                
              </div>
              <div className="mt-[7px] flex w-[60%] flex-col items-start sm:w-full">
                <Text size="lg" as="p" className="!text-black-900">
                  Pay using credit card
                </Text>
                <Img
                  src="images/img_b8d73f8b7196492.png"
                  alt="b8d73f8b7196492"
                  className="mt-4 h-[31px] w-[60%] object-cover"
                />
                <Text size="lg" as="p" className="mt-[21px] !text-black-900">
                  Payment details
                </Text>
                <Text size="1xl" as="p" className="mt-[23px]">
                  Credit Card{" "}
                </Text>
                <Input
                color="deep_purple_400"
                shape="square"
                type="card number"
                name="name"
                placeholder="xxxx xxxx xxxx xxxx"
                className="w-full sm:w-full mt-5 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"
              />
                <div className="h-px self-stretch bg-black-900_7f" />
                <div className="mt-[9px] flex w-[59%] flex-wrap justify-between gap-5 md:w-full">
                  <Text size="1xl" as="p">
                    Credit Card{" "}
                  </Text>
                  <Text size="1xl" as="p">
                    CVV
                  </Text>
                </div>
                <div className="mt-[11px] flex w-[91%] justify-between gap-5 md:w-full">
                  <div className="flex w-[45%] flex-col items-start">
                    <Input name="yymm" placeholder={`yy / mm`} className="h-[19px] w-[100%] sm:w-full mt-2 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300" />
                    <div className="h-px self-stretch bg-black-900_7f" />
                  </div>
                  <Input shape="square" name="cvv" placeholder={`xxx`} className="h-[19px] w-[58%] sm:w-full mt-2 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300" />
                </div>
                <Text size="lg" as="p" className="mt-5 !text-black-900">
                  Personal details
                </Text>
                <Text size="1xl" as="p" className="mt-3">
                  Name
                </Text>
                <Input
                color="deep_purple_400"
                shape="square"
                type="text"
                name="name"
                placeholder=""
                className="w-full sm:w-full mt-1 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"/>

                <div className="mt-1 h-px self-stretch bg-black-900_7f" />
                <Text size="1xl" as="p" className="mt-[17px]">
                  Email Address
                </Text>
                <Input
                color="deep_purple_400"
                shape="square"
                type="text"
                name="name"
                placeholder=""
                className="w-full sm:w-full mt-1 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"/>


                <div className="mt-[30px] h-px self-stretch bg-black-900_7f" />
                <div className="mt-[27px] flex items-center justify-between gap-5 self-stretch">
                  <cheakbox
                    name="savecard"
                    label="save card"
                    id="savecard"
                    className="mb-[5px] gap-3 ml-[-70px] self-end p-px text-left text-lg font-medium text-black-900_cc"
                  />

                   <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={isChecked}
                                onChange={handleCheck}
                                className="ml-[-100px] h-5 w-5 rounded-[2px]"
                            />
                            <label htmlFor="rememberMe" className="text-sm opacity-80 font-bold ml-4">
                                Save Card
                            </label>
                   </div>
                  <button  className="sm:px-5 bg-blue-700 w-[120px] h-[50px] text-white-A700 hover:bg-green-400 rounded-[10px]">
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[36%] flex-col items-start gap-[19px] mt-[-40px] md:w-full md:mt-[20px]">
            <Heading  size="lg" as="h2">Order Summery</Heading>



            <div className="self-stretch rounded-[20px] border ring-black-900 bg-gray-600_99 p-3.5 ">
              <div className="mb-[81px] mt-[21px] flex flex-col items-start">
                <Img
                  src="images/img_5_2.png"
                  alt="image"
                  className="h-[65px] w-[14%] self-center rounded-[5px] object-cover"
                />
                <Text size="xs" as="p" className="mt-[21px] self-center !text-black-900_99">
                  Minneriya National Park Package
                </Text>
                <Heading size="xs" as="h3" className="mt-2 self-center">
                  $ 1080.00
                </Heading>
                <div className="mt-[35px] flex w-[86%] flex-wrap justify-between gap-5 md:w-full">
                  <Text as="p" className="self-start">
                    Invoice
                  </Text>
                  <Text as="p" className="mr-[15px]">
                  pck - 234 - 01
                  </Text>
                </div>
                <div className="mt-6 flex flex-wrap   justify-between gap-5 self-stretch">
                  <Text as="p">Delivery Time</Text>
                  <Text as="p" className="!text-black-900_e5 mr-[16px]">
                    11/01/2022,10.00am
                  </Text>
                </div>
                <div className="mt-[23px] flex w-[72.5%] flex-wrap justify-between gap-5 md:w-full">
                  <Text  as="p" className="self-end">
                    Payment
                  </Text>
                  <Text as="p" size="1xl" className="self-start !text-black-900_e5">
                    1200.00
                  </Text>
                </div>
                <div className="mt-[23px] flex w-[64.5%] flex-wrap justify-between gap-5 md:w-full">
                  <Text as="p">Discount</Text>
                  <Text as="p" className="!text-black-900_e5">
                    10%
                  </Text>
                </div>
                <div className="mt-6 flex w-[70%] flex-wrap justify-between gap-5 md:w-full">
                  <Text as="p">Offfers</Text>
                  <Text as="p" className="!text-black-900_e5">
                    100.00
                  </Text>
                </div>
                <div className="mt-[25px] flex w-[73%] flex-wrap justify-between gap-5 md:w-full">
                  <Text as="p">Total</Text>
                  <Text as="p" className="!text-cyan-700">
                    1080.00
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
      
    </>
  );
}
