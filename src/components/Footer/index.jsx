import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center ml-[290px] mr-[102px] my-[98px] w-[73%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start md:mt-0 mt-0.5 w-[70%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
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
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtInterBold25"
                >
                  Quick Link
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                <Text
                  className="text-[13px] text-red-50"
                  size="txtInterRegular13"
                >
                  <>
                    Blog
                    <br />
                    <br />
                    Privacy Policy
                    <br />
                    <br />
                    FAQ’s
                    <br />
                    <br />
                    Contact
                  </>
                </Text>
                <Text
                  className="md:ml-[0] ml-[213px] text-[13px] text-white-A700"
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
                  className="md:ml-[0] ml-[147px] text-[13px] text-white-A700"
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
              </div>
            </div>
            <div className="md:h-[101px] h-[119px] relative w-[18%] md:w-full">
              <div className="md:h-[101px] h-[119px] m-auto w-full">
                <Text
                  className="absolute right-[2%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 top-[0]"
                  size="txtInterBold25"
                >
                  Social Share
                </Text>
                <Img
                  className="absolute bottom-[19%] h-[59px] object-cover right-[0] w-[58px]"
                  src="images/img_twitter.png"
                  alt="twitter"
                />
                <Img
                  className="absolute bottom-[0] h-[101px] left-[0] object-cover w-[101px]"
                  src="images/img_facebook.png"
                  alt="facebook"
                />
              </div>
              <Img
                className="absolute bottom-[22%] h-[51px] object-cover right-[31%] w-[27%]"
                src="images/img_instagram.png"
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
