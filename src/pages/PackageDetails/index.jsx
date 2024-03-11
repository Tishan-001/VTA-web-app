import React from "react";

import { Button, Img,  Text } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Heading } from "components/Heading";

const tableData = [
  {
    place: "images/img_22_2.png",
    date: "Temple of Tooth",
    reservation: "Hilton Hotel in Nuwara",
    description: "There are very relaable weather and \ncold and so on.",
  },
  {
    place: "images/img_22_2.png",
    date: "Temple of Tooth",
    reservation: "Hilton Hotel in Nuwara",
    description: "There are very relaable weather and \ncold and so on.",
  },
  {
    place: "images/img_22_2.png",
    date: "Temple of Tooth",
    reservation: "Hilton Hotel in Nuwara",
    description: "There are very relaable weather and \ncold and so on.",
  },
  {
    place: "images/img_22_2.png",
    date: "Temple of Tooth",
    reservation: "Hilton Hotel in Nuwara",
    description: "There are very relaable weather and \ncold and so on.",
  },
  {
    place: "images/img_22_2.png",
    date: "Temple of Tooth",
    reservation: "Hilton Hotel in Nuwara",
    description: "There are very relaable weather and \ncold and so on.",
  },
  {
    place: "images/img_22_2.png",
    date: "Temple of Tooth",
    reservation: "Hilton Hotel in Nuwara",
    description: "There are very relaable weather and \ncold and so on.",
  },
];

export default function HotelBookingDescriptionPageUIPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("place", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <Img
              src={info?.getValue?.()}
              alt="image_four"
              className="w-[69%] md:h-auto sm:w-full mb-0.5 object-cover rounded-[50%]"
            />
          </div>
        ),
        header: (info) => (
          <Heading size="s" as="h4" className="p-px !text-black-900_02">
            Place
          </Heading>
        ),
        meta: { width: "88px" },
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => (
          <div className="flex flex-row justify-between">
            <Text size="md" as="p" className="mt-1 !text-black-900_02">
              {info?.getValue?.()}
            </Text>
            <Text size="md" as="p" className="mr-[25px] sm:mr-5 !text-black-900_02">
              Day 01
            </Text>
          </div>
        ),
        header: (info) => (
          <Heading size="s" as="h5" className="px-[35px] py-px sm:px-5 !text-black-900_02">
            Date
          </Heading>
        ),
        meta: { width: "414px" },
      }),
      tableColumnHelper.accessor("reservation", {
        cell: (info) => (
          <Text size="md" as="p" className="!text-black-900_02">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading size="s" as="h6" className="py-px !text-black-900_02">
            Reservation
          </Heading>
        ),
        meta: { width: "360px" },
      }),
      tableColumnHelper.accessor("description", {
        cell: (info) => (
          <Text size="md" as="p" className="!text-black-900_02">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading size="s" as="h2" className="py-px !text-black-900_02">
            Description
          </Heading>
        ),
        meta: { width: "429px" },
      }),
    ];
  }, []);

  return (
    <>
     
      <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-[69px] sm:pt-5 bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[1418px]">
          <div className="flex flex-col items-center justify-start w-full gap-[85px]">
            <div className="flex flex-col items-center justify-start w-full p-[31px] sm:p-5 bg-gray-600 rounded-[30px]">
              <div className="flex flex-col items-center justify-start w-[92%] md:w-full mb-[50px] gap-[55px]">
                <Heading size="xl" as="h1" className="w-[98%] text-center">
                  Plan Your Journey With Our Experience
                </Heading>
                <Text size="lg" as="p">
                  Embark on Your Journey Where Dreams Meet Destinations - Book Your Adventure with
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[92%] md:w-full gap-[141px]">
              <div className="flex flex-row md:flex-col justify-start items-start w-[96%] md:w-full gap-[19px] md:gap-5">
                <div className="flex flex-col items-start justify-start w-[46%] md:w-full gap-[13px]">
                  <Heading size="lg" as="h2" className="!text-black-900_02">
                    Nuwara Eliya For 7 days
                  </Heading>
                  <Text size="s" as="p" className="ml-1 md:ml-0 !text-black-900_b2">
                    No 2, Galle Road, Colombo
                  </Text>
                  <Text size="lg" as="p" className="w-[94%] !text-black-900_02 !font-light">
                    <span className="text-black-900_02">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_02 font-bold">
                      <>
                        Description:
                        <br />
                        <br />
                        Experience unmatched luxury at [Hotel Name], where refined elegance meets exceptional service.
                        Immerse yourself in a world of comfort and sophistication in the heart of [City or Location].
                      </>
                    </span>
                  </Text>
                </div>
                <div className="h-[441px] w-[54%] md:w-full relative">
                  <Img
                    src="images/img_22_1.png"
                    alt="image"
                    className="justify-center h-[441px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                  />
                  <div className="flex flex-row justify-start w-[50%] gap-2.5 bottom-[5%] right-[7%] m-auto absolute">
                    <Img
                      src="images/img_23_1.png"
                      alt="image_one"
                      className="w-[32%] md:h-auto sm:w-full object-cover rounded-[5px]"
                    />
                    <Img
                      src="images/img_23_4.png"
                      alt="image_two"
                      className="w-[32%] md:h-auto sm:w-full object-cover rounded-[5px]"
                    />
                    <Img
                      src="images/img_23_5.png"
                      alt="image_three"
                      className="w-[32%] md:h-auto sm:w-full object-cover rounded-[5px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[59px]">
                <Heading size="md" as="h3" className="!text-black-900_02">
                  Time Plan and Locations
                </Heading>
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "md:flex-col" }}
                  headerProps={{ className: "md:flex-col md:gap-5" }}
                  rowDataProps={{ className: "md:flex-col md:gap-5" }}
                  className="w-[1291px]"
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[90%] md:w-full gap-[54px]">
              <Heading size="md" as="h1" className="!text-black-900_02">
                Galery
              </Heading>
              <div className="w-full gap-10 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                <div className="h-[323px] w-full relative">
                  <Img
                    src="images/img_7_1.png"
                    alt="image"
                    className="justify-center h-[323px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                  />
                  <Button
                    shape="round"
                    className="bottom-[9%] left-[4%] m-auto sm:px-5 font-bold min-w-[145px] absolute"
                  >
                    Galle Fort{" "}
                  </Button>
                </div>
                <div className="h-[323px] w-full relative">
                  <Img
                    src="images/img_7_2.png"
                    alt="image"
                    className="justify-center h-[323px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                  />
                  <Button
                    shape="round"
                    className="bottom-[7%] left-[5%] m-auto sm:px-5 font-bold min-w-[191px] absolute"
                  >
                    Ambuluwawa
                  </Button>
                </div>
                <div className="h-[323px] w-full relative">
                  <Img
                    src="images/img_7_3.png"
                    alt="image"
                    className="justify-center h-[323px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                  />
                  <Button shape="round" className="bottom-[7%] left-[4%] m-auto font-bold min-w-[124px] absolute">
                    Ella Rock
                  </Button>
                </div>
                <div className="h-[323px] w-full relative">
                  <Img
                    src="images/img_7_1_323x444.png"
                    alt="image"
                    className="justify-center h-[323px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                  />
                  <Button
                    shape="round"
                    className="bottom-[6%] left-[4%] m-auto sm:pl-5 font-bold min-w-[145px] absolute"
                  >
                    Trinkomali
                  </Button>
                </div>
                <div className="h-[323px] w-full relative">
                  <Img
                    src="images/img_7_3_323x444.png"
                    alt="image"
                    className="justify-center h-[323px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                  />
                  <Button
                    shape="round"
                    className="bottom-[6%] left-[5%] m-auto sm:px-5 font-bold min-w-[108px] absolute"
                  >
                    Yaala
                  </Button>
                </div>
                <div className="h-[323px] w-full relative">
                  <Img
                    src="images/img_7_2_323x300.png"
                    alt="image"
                    className="justify-center h-[323px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                  />
                  <Button
                    shape="round"
                    className="bottom-[6%] left-[5%] m-auto sm:px-5 font-bold min-w-[145px] absolute"
                  >
                    Lion Rock
                  </Button>
                </div>
              </div>
            </div>
            <Button
              color="black_900"
              size="md"
              className="sm:px-5 font-medium min-w-[190px] rounded-[10px] sm:min-w-full"
            >
              Pay Now
            </Button>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full pl-14 pr-[97px] py-[97px] md:p-5 bg-black-900_01">
          <div className="flex flex-row justify-center w-full mx-auto max-w-[1048px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <div className="flex flex-col items-start justify-start mt-0.5 gap-[31px] md:mt-0">
                <a href="#">
                  <Heading as="h4">Company</Heading>
                </a>
                <ul className="flex flex-col items-start justify-start gap-[27px]">
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-red-50">
                        Blog
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-red-50" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-red-50">
                        Privacy Policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-red-50" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-red-50">
                        FAQ’s
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-red-50" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-red-50">
                        Contact
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row sm:flex-col justify-between items-start w-[72%] md:w-full sm:gap-10">
                <div className="flex flex-col items-start justify-start mt-[3px] gap-[30px] sm:mt-0">
                  <a href="#">
                    <Heading as="h4">Contact Us</Heading>
                  </a>
                  <ul className="flex flex-col items-start justify-start ml-[3px] gap-7 md:ml-0">
                    <li>
                      <a href="#">
                        <Text as="p">NO: 1, Main Street, Galle,</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Sri Lanka</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">+9411-111-111</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">vta@gmail.com</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-start mt-[3px] gap-[30px] sm:mt-0">
                  <a href="#">
                    <Heading as="h4">Quick Link</Heading>
                  </a>
                  <ul className="flex flex-col items-start justify-start gap-[29px]">
                    <li>
                      <a href="#">
                        <Text as="p">Packages</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Services</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Gallery</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row justify-center w-[25%] sm:w-full">
                  <div className="flex flex-col items-end justify-start w-full">
                    <a href="#" className="mr-1 z-[1]">
                      <Heading as="h4">Social Share</Heading>
                    </a>
                    <div className="flex flex-row justify-end items-start w-full mt-[-12px]">
                      <div className="flex flex-row justify-end items-center w-[70%]">
                        <Img
                          src="images/img_facebook.png"
                          alt="facebook_one"
                          className="w-[101px] md:h-auto object-cover"
                        />
                        <Button size="sm" shape="square" className="w-[39%] ml-[-23px]">
                          <Img src="images/img_instagram.png" />
                        </Button>
                      </div>
                      <Button size="lg" shape="square" className="w-[58px] mt-[19px] ml-[-2px]">
                        <Img src="images/img_twitter.png" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
