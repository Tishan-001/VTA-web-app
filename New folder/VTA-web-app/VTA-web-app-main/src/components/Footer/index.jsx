import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center  justify-center my-[98px] w-[100%] pl-[200px] pr-[200px]" >
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col  gap-[31px] items-start justify-start md:mt-0 mt-0.5 w-[100%] md:w-full">
              <div className="flex sm:flex-col  flex-row sm:gap-10 items-center justify-between w-[100%]">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtInterBold25"
                >
                  Company
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtInterBold25WhiteA700"
                >
                  Contact Us
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] w-[200px] text-[25px] text-white-A700"
                  size="txtInterBold25"
                >
                  Quick Link
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] w-[200px] text-[25px] text-white-A700"
                  size="txtInterBold25"
                >
                  Social Share
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start  w-[100%] md:w-full">
                <Text
                  className="text-[13px] text-red-50"
                  size="txtInterRegular13"
                >
                  <>
                    <a href="">Blog</a>
                    <br />
                    <br />
                    <a href="" className="">Privacy Policy</a>
                    <br />
                    <br />
                    <a href="">FAQ’s</a>
                    <br />
                    <br />
                    <a href="">Contact</a>
                  </>
                </Text>
                <Text
                  className="md:ml-[0] text-[13px] text-white-A700 ml-[300px]"
                  size="txtInterRegular13WhiteA700" 
                >
                  <>
                    NO: 1, Main Street, Galle,
                    <br />
                    Sri Lanka
                    <br />
                    <br />
                    +9411-111-111
                    <br />
                    <br />
                    vta@gmail.com
                  </>
                </Text>
                <Text
                  className="md:ml-[0] ml-[260px] text-[13px] text-white-A700"
                  size="txtInterRegular13WhiteA700"
                >
                  <>
                    Packages
                    <br />
                    <br />
                    Services
                    <br />
                    <br />
                    Gallery
                  </>
                </Text>

                <div className="md:h-[101px] h-[119px]  relative w-[18%] md:w-full ml-[315px]">
                  <div className="md:h-[101px] h-[119px] m-auto w-full">
                    <Img
                      className="absolute bottom-[21%] h-[50px] object-cover right-[0] w-[50px]"
                      src="images/img_twitter.png"
                      alt="twitter"
                    />
                    <Img
                      className="absolute bottom-[3%] h-[90px] left-[25%] object-cover w-[90px]"
                      src="images/img_facebook.png"
                      alt="facebook"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[23%] h-[45px] object-cover right-[25%] w-[45px]"
                    src="images/img_instagram.png"
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
