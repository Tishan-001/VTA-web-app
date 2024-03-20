import React from "react";

import { Button, Text, Img } from "../../components";
import { Heading } from "../../components/Heading1";
import Header from "../../components/Header1";
import { TextArea } from "components/TextArea";
import { SelectBox } from "components/SelectBox";
import Publishbar from "components/Publishbar/publishbar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AddAdminData() {
  return (
    <>
      
      <div className="w-full pb-[90px] md:pb-5 bg-gray-300">
        <Header className="flex justify-center items-center" />
        <div>
          <div className="flex flex-col gap-[35px]">
            <div>
              <div className="flex flex-col">
                <Publishbar className="mt-1"/>
              </div>
            </div>
            <div className="flex w-[55%] md:w-full p-[11px] md:ml-0 bg-white-A700 shadow-xs rounded-[5px] mx-auto">
              <div className="flex flex-col w-full mt-3 mb-[19px] mx-auto max-w-[90%] ">
                <div className="flex sm:flex-col items-center gap-[9px]">
                  <div className="flex flex-col w-[31%] sm:w-full gap-7 sm:p-5">
                    <div className="flex flex-col gap-[18px]">
                      <Heading as="h6" className="text-[20px] mt-[50px]">Hotel Package Title</Heading>
                      <Text size="s" as="p" className=" w-[220px]">
                        As your Package storefront, your title is the most important place to include keywords that
                        users would likely use to search for a service like yours.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[18px]">
                      <Heading as="h6" className="text-[20px] mt-[30px]">Room Type</Heading>
                      <div>
                        <div>
                          <Text size="s" as="p" className=" w-[220px]">
                            Choose the category and sub-category most suitable for your Gig.
                          </Text>
          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:p-5 flex-1">
                    <TextArea
                      shape="round"
                      name="groupthree"
                      placeholder={`Enter The Package Name`}
                      className="self-stretch sm:pb-5 sm:pr-5 text-black-900_7f font-bold mt-[0px] opacity-60 p-2 h-10 rounded-md"
                    />
                    <Text size="s" as="p" className="self-end mt-[19px] !text-black-900_b2">
                      0 / 80 max
                    </Text>
                    <SelectBox
                      size="xl"
                      variant="outline"
                      shape="round"
                      name="selectaroom"
                      placeholder={`SELECT A Room Type`}
                      options={dropDownOptions}
                      className="w-[53%] h-[40px] mt-[90px] ml-[-290px] pl-2"
                    />
                  </div>
                </div>
                <div className="flex items-center w-[55%] md:w-full mt-[74px]">
                  <Heading as="h6" className="text-[20px]">Search tags</Heading>
                  <Text size="lg" as="p" className="self-start ml-[175px]">
                    Positive keywords
                  </Text>
                </div>
                <div className="flex sm:flex-col items-start mt-[7px] gap-[9px]">
                  <Text size="s" as="p" className="sm:w-full mt-[11px] w-[220px] ">
                    Tag your Package with buzz words that are relevant to the services you offer. Use all 5 tags to get
                    found.
                  </Text>
                  <div className="flex flex-col items-start sm:p-5 flex-1">
                    <div className="flex w-[74%] ml-[63px] md:w-full">
                      <div className="w-full">
                        <Text size="s" as="p" className="!text-black-900_66">
                          Enter search terms you feel your buyers will use when looking for your service.
                        </Text>
                      </div>
                    </div>
                    <TextArea
                      size="md"
                      shape="round"
                      name="textarea_one"
                      className="self-stretch mt-[13px] sm:pb-5 sm:pr-5 ml-[60px] rounded-md p-2 h-10"
                    />
                    <Text size="s" as="p" className="mt-3 !text-black-900_66 ml-[60px]">
                      5 tags maximum. Use letters and numbers only.
                    </Text>
                    <Button shape="round" className=" mt-6 ml-[538px] md:ml-0">
                      Save & Continue
                    </Button>
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
