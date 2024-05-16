import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text, RatingBar, Input } from "../../components";

export default function GuideDetailPage() {
  return (
    <>
      <Helmet>
        <title>Devinda's Application5</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-4 gap-[664px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[254px] md:px-5 max-w-[1418px]">
          <div className="flex flex-col items-start justify-start w-full pl-[79px] pr-14 py-[79px] md:p-5 bg-teal-400 rounded-[30px]">
            <div className="flex flex-col items-start justify-start mt-[11px] mb-[61px] gap-[45px]">
              <Heading size="xl" as="h1">
                Book Your Guide
              </Heading>
              <Text size="lg" as="p">
                Embark on Your Journey Where Dreams Meet Destinations - Book Your Adventure with Seamless Ease
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[84%] md:w-full">
            <div className="flex flex-row md:flex-col justify-between items-start w-[98%] md:w-full md:gap-10">
              <Img
                src="images/img_image_69.png"
                alt="imagesixtynine"
                className="w-[49%] md:w-full md:h-[566px] mt-[15px] md:mt-0 object-cover rounded-[20px]"
              />
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[52px]">
                  <div className="flex flex-col items-center justify-start w-[98%] md:w-full gap-[52px]">
                    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                      <Img
                        src="images/img_image_56.png"
                        alt="imagefiftysix"
                        className="w-[59px] md:h-auto object-cover"
                      />
                      <Input shape="round" name="jame_paris" placeholder="Jame Paris" className="w-[82%] sm:w-full" />
                    </div>
                    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                      <Img
                        src="images/img_12_129860_map_l.png"
                        alt="12129860mapl"
                        className="w-[10%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-row justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-500_33 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            No.2, Wackwella Road,
                            <br />
                            Galle, Sri Lanka
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-[22px] sm:gap-5">
                      <Img
                        src="images/img_depositphotos_8.png"
                        alt="depositphotosei"
                        className="w-[15%] md:h-auto sm:w-full object-cover"
                      />
                      <Input shape="round" name="price" placeholder="150$" className="w-[82%] sm:w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-4 sm:gap-5">
                    <Button size="2xl" shape="square" className="w-[19%]">
                      <Img src="images/img_download_removebg_preview.png" />
                    </Button>
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder="user@gmail.com"
                      className="w-[79%] sm:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text size="s" as="p" className="mt-[25px] ml-[396px] md:ml-5 !text-gray-900 z-[1]">
              4.9
            </Text>
            <RatingBar
              value={4}
              isEditable={true}
              color="#d9d9d9"
              activeColor="#ffd600"
              size={31}
              className="flex justify-between w-[235px] ml-[149px] md:ml-5"
            />
            <Heading size="md" as="h2" className="mt-16 !text-black-900_02">
              Available Features
            </Heading>
            <div className="w-full mt-[70px] gap-[62px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
              <div className="flex flex-row justify-start items-center w-full gap-9 p-[23px] sm:gap-9 sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_th_removebg_preview.png"
                  alt="without_driver"
                  className="w-[17%] md:h-auto sm:w-full ml-2.5 object-cover"
                />
                <Heading size="s" as="h3" className="!text-black-900_02">
                  Without Driver
                </Heading>
              </div>
              <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-[33px] p-[23px] sm:gap-[33px] sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_285_2857331_gas.png"
                  alt="2852857331gas"
                  className="w-[18%] md:h-auto sm:w-full ml-[3px] sm:ml-0 object-cover"
                />
                <Heading size="s" as="h4" className="!text-black-900_02">
                  300km available fuel
                </Heading>
              </div>
              <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-[27px] p-2.5 sm:gap-[27px] bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_th_removebg_preview_119x103.png"
                  alt="thremovebg_one"
                  className="w-[19%] md:h-auto sm:w-full ml-3.5 sm:ml-0 object-cover"
                />
                <Heading size="s" as="h5" className="!text-black-900_02">
                  4 Seat Available
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-full p-[47px] md:p-5 bg-blue_gray-100 rounded-[20px]">
                <Heading size="s" as="h6" className="mt-[5px] ml-[100px] md:ml-5 !text-black-900_02">
                  Vehicle Tracking{" "}
                </Heading>
              </div>
              <Img
                src="images/img_6881962_removebg_preview.png"
                alt="image"
                className="w-full md:h-auto object-cover"
              />
              <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-5 p-3 sm:gap-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_th_removebg_preview_111x114.png"
                  alt="thremovebg_one"
                  className="w-[22%] md:h-auto sm:w-full mb-1 ml-2 sm:ml-0 object-cover"
                />
                <Heading size="s" as="h2" className="mt-10 sm:mt-0 !text-black-900_02">
                  400L Space Available
                </Heading>
              </div>
              <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-[33px] p-[23px] sm:gap-[33px] sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_285_2857331_gas.png"
                  alt="2852857331gas"
                  className="w-[18%] md:h-auto sm:w-full ml-[3px] sm:ml-0 object-cover"
                />
                <Heading size="s" as="h2" className="!text-black-900_02">
                  300km available fuel
                </Heading>
              </div>
            </div>
            <div className="flex flex-row justify-start mt-[116px] ml-[93px] p-[23px] md:ml-5 sm:p-5 bg-gray-500_33 rounded-[20px]">
              <Text size="lg" as="p" className="w-[98%] mb-[30px] !text-black-900_02 !font-light">
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
            <Button
              size="xl"
              className="mt-[52px] ml-[520px] md:ml-5 sm:px-5 !text-black-900_02 font-light shadow-xs min-w-[188px] rounded-[37px] sm:min-w-full"
            >
              Book Now
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
