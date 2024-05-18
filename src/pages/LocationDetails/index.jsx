import React from "react";

import { Button, Img, Text } from "../../components";

import { Heading } from "components/Heading";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";


export default function HotelBookingpageFourOnePage() {
  return (
    <>
     
      <div className="flex flex-col w-full gap-[84px] md:gap-[63px] sm:gap-[42px] bg-white-A700">
        <div className="w-full mt-[21px] mx-auto md:p-5 max-w-[1418px]">
          <div className="flex flex-col items-center gap-[77px] md:gap-[57px] sm:gap-[38px]">
            <div className="flex self-stretch p-[31px] sm:p-5 bg-gray-600 rounded-[30px]">
              <div className="flex w-[17%] md:w-full ml-[29px] md:ml-0">
                <Heading size="3xl" as="h1">
                  Galle Fort{" "}
                </Heading>
              </div>
            </div>
          
          
            <div className="flex flex-col w-[75%] md:w-full">
              <div className="ml-0.5 md:ml-0">
                <div className="flex md:flex-col gap-[18px]">
                  <Img
                    src="images/images/img_image_71.png"
                    alt="imageseventyone"
                    className="w-[59%] md:w-full md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col w-[41%] md:w-full gap-[18px]">
                    <div className="flex sm:flex-col justify-center gap-[4px]">
                      <Img
                        src="images/images/img_image_72.png"
                        alt="imageseventytwo"
                        className="w-[50%] sm:w-full sm:h-auto object-cover rounded-[10px]"
                      />
                      <Img
                        src="images/images/img_image_74.png"
                        alt="imageseventyfou"
                        className="w-[50%] sm:w-full sm:h-auto object-cover rounded-[10px]"
                      />
                    </div>
                    <Img
                      src="images/images/img_image_73.png"
                      alt="imageseventythr"
                      className="h-[240px] object-cover rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <Heading size="3xl" as="h2" className="mt-[81px] !text-black-900_02">
                Exploring the Rich History and Timeless Beauty of Galle Fort
              </Heading>
              <Heading size="xl" as="h3" className="mt-[18px] ml-0.5 md:ml-0 !text-black-900_02">
                Introduction
              </Heading>
              <Text size="s" as="p" className="w-[98%] md:w-full mt-6 ml-0.5 md:ml-0 !text-black-900_02 !font-normal">
                Nestled on the southwestern coast of Sri Lanka, Galle Fort stands as a testament to the island&#39;s
                rich history and architectural heritage. This UNESCO World Heritage Site is a captivating blend of
                European and South Asian influences, showcasing a unique fusion of cultures that has endured for
                centuries. In this article, we will delve into the history, architecture, and cultural significance of
                Galle Fort, inviting readers on a virtual journey through its cobbled streets and storied past.
              </Text>
              <Heading size="xl" as="h4" className="mt-11 ml-0.5 md:ml-0 !text-black-900_02">
                Historical Background
              </Heading>
              <Text
                size="s"
                as="p"
                className="w-[98%] md:w-full mt-[21px] ml-0.5 md:ml-0 !text-black-900_02 !font-normal"
              >
                Galle Fort&#39;s history dates back to the 16th century when Portuguese explorers first arrived on the
                shores of Sri Lanka. Recognizing the strategic importance of the natural harbor, they began constructing
                a fortification in 1588. However, it wasn&#39;t long before the Dutch seized control in 1640, expanding
                and fortifying the structure to its current form. The British later took control in the 18th century,
                leaving their own imprint on this coastal gem.
              </Text>
              <Heading size="xl" as="h5" className="mt-[41px] ml-0.5 md:ml-0 !text-black-900_02">
                Architectural Marvel
              </Heading>
              <Text size="s" as="p" className="w-[98%] md:w-full mt-6 ml-0.5 md:ml-0 !text-black-900_02 !font-normal">
                <>
                  The architecture of Galle Fort is a captivating blend of Dutch and Portuguese influences, with a touch
                  of British colonial aesthetics. The fortification&#39;s sturdy walls, bastions, and gateways reflect
                  the military considerations of the time. As visitors stroll through its narrow streets, they encounter
                  charming colonial-style houses, cobblestone pathways, and an array of historic buildings, each telling
                  a unique story of the past.
                  <br />
                  One of the most iconic structures within the fort is the Galle Lighthouse, a beacon that has guided
                  sailors since its construction in 1939. The Dutch Reformed Church, with its distinctive Dutch colonial
                  architecture, is another must-see landmark. As you wander through the fort&#39;s labyrinthine alleys,
                  you&#39;ll come across boutique shops, art galleries, and cafes housed in beautifully preserved
                  colonial-era buildings, creating a harmonious blend of the old and the new.
                </>
              </Text>
              <Heading size="xl" as="h6" className="mt-[41px] ml-0.5 md:ml-0 !text-black-900_02">
                Preservation Efforts
              </Heading>
              <Text size="s" as="p" className="w-[98%] md:w-full mt-6 ml-0.5 md:ml-0 !text-black-900_02 !font-normal">
                Recognizing the significance of Galle Fort, concerted efforts have been made to preserve its historical
                and architectural integrity. The Galle Heritage Foundation, alongside various local and international
                organizations, plays a crucial role in maintaining and restoring the fort&#39;s structures. This
                commitment to conservation ensures that future generations can continue to appreciate the magnificence
                of Galle Fort.
              </Text>
              <Heading size="xl" as="h2" className="mt-[41px] ml-0.5 md:ml-0 !text-black-900_02">
                Conclusion
              </Heading>
              <Text size="s" as="p" className="w-[98%] md:w-full mt-6 ml-0.5 md:ml-0 !text-black-900_02 !font-normal">
                Galle Fort stands as a living testament to the resilience of history, preserving the cultural tapestry
                woven by centuries of interactions. Its cobblestone streets, colonial architecture, and rich heritage
                beckon visitors to embark on a journey through time. As one explores the narrow alleys and historic
                landmarks, Galle Fort reveals itself as not just a physical structure but a gateway to the past,
                inviting all who enter to become a part of its enduring narrative.
              </Text>
              <div className="flex w-[30%] md:w-full mt-[118px] ml-0.5 gap-[22px] md:ml-0">
                <Button
                  color="blue_gray-100"
                  size="lg"
                  leftIcon={<Img src="images/images/img_plus_1.png" alt="plus 1" className="w-[17px] h-[17px]  " />}
                  className="w-full gap-[22px]  sm:pr-5 font-bold rounded-[10px]  bg-gray-700_b5"
                >
                  Like
                </Button>
                
                <Button
                  color="blue_gray_500"
                  size="lg"
                  leftIcon={<Img src="images/images/img_plus_1_17x17.png" alt="plus 1" className="w-[17px] h-[17px]" />}
                  className="w-full gap-4 sm:pr-5 font-bold rounded-[10px] bg-gray-700_b5"
                >
                  Share
                </Button>
                
              </div>
            </div>
          </div>
        </div>






              




        <Footer/>
      </div>
    </>
  );
}
