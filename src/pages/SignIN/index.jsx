import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, CheckBox, Input } from "../../components";

export default function SignINPage() {
  return (
    <>
      <Helmet>
        <title>Devinda's Application7</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[710px] w-full p-[84px] md:p-5 bg-gray-100 relative">
        <div className="flex flex-row md:flex-col justify-center items-start w-max h-max gap-[33px] left-0 bottom-0 right-0 top-0 m-auto md:gap-5 bg-white-A700 shadow-xs absolute rounded-[10px]">
          <Img
            src="images/img_signup_1.png"
            alt="signupone_one"
            className="w-[51%] md:w-full md:h-[542px] rounded-bl-[10px] rounded-tl-[10px] object-cover"
          />
          <div className="flex flex-row justify-start w-[44%] md:w-full mt-[38px] md:mt-0">
            <div className="flex flex-col items-center justify-start w-full">
              <Heading size="xl" as="h1" className="tracking-[3.00px]">
                Sign In Now
              </Heading>
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full mt-[47px] gap-[19px]">
                <Input
                  color="deep_purple_400"
                  size="sm"
                  shape="square"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full sm:w-full"
                />
                <Input
                  shape="square"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full sm:w-full"
                />
                <div className="flex flex-row justify-between items-center w-full">
                  <CheckBox
                    shape="round"
                    name="rememberme"
                    label="Remember me"
                    className="mb-px gap-[11px] text-left font-bold"
                  />
                  <Heading as="h2" className="!text-deep_purple-400">
                    Forgot Password ?
                  </Heading>
                </div>
                <div className="flex flex-row justify-center w-[28%] md:w-full">
                  <a
                    href="#"
                    className="flex justify-center items-center w-[107px] h-[39px] px-3 py-2 bg-deep_purple-400 text-shadow-ts rounded-[5px]"
                  >
                    <Heading size="md" as="h3" className="!text-white-A700 tracking-[3.60px]">
                      Sign In
                    </Heading>
                  </a>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-start items-start w-full mt-[17px] gap-[5px] sm:gap-5">
                <div className="h-px w-[48%] mt-2 sm:mt-0 bg-black-900_66" />
                <Heading as="h4" className="!text-black-900_66">
                  or
                </Heading>
                <div className="h-px w-[48%] mt-2 sm:mt-0 bg-black-900_66" />
              </div>
              <div className="flex flex-row justify-between items-center w-[47%] md:w-full">
                <Img src="images/img_th_1.png" alt="thone_one" className="h-[35px] w-[35px] md:h-auto rounded-[50%]" />
                <Img
                  src="images/img_png_transparent.png"
                  alt="pngtransparent"
                  className="h-[35px] w-[35px] md:h-auto rounded-[50%]"
                />
                <Img
                  src="images/img_social_media_ic.png"
                  alt="socialmediaic"
                  className="h-[33px] w-[33px] md:h-auto rounded-[50%]"
                />
              </div>
              <Text size="lg" as="p" className="mt-[17px] !text-black-900">
                <span className="text-black-900_66">Don’t you have an Account ?</span>
                <span className="text-black-900"></span>
                <span className="text-gray_600">Sign Up</span>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[35%] h-max left-[15%] bottom-0 top-0 p-[35px] m-auto sm:p-5 rounded-tl-[10px] rounded-bl-[10px] bg-deep_purple-400_cc absolute">
          <Text size="2xl" as="p" className="!text-white-A700">
            Virtual Travel Assistant
          </Text>
          <div className="h-[5px] w-[13%] mt-2.5 bg-white-A700" />
          <div className="flex flex-col items-start justify-start w-full mt-[41px] mb-[34px] gap-11 md:px-5 max-w-[418px]">
            <div className="flex flex-row sm:flex-col justify-start items-start gap-5 sm:gap-5">
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="mt-0.5 sm:mt-0 !text-white-A700">
                Customize Your Journey with our Travel Plan.
              </Text>
            </div>
            <div className="flex flex-row sm:flex-col justify-start items-start gap-5 sm:gap-5">
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="mt-0.5 sm:mt-0 !text-white-A700">
                Stay with best view location with our hotels
              </Text>
            </div>
            <div className="flex flex-row justify-start items-start gap-5">
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="!text-white-A700">
                Get best experience with our Guiders
              </Text>
            </div>
            <div className="flex flex-row justify-start items-start gap-5">
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="mt-[3px] !text-white-A700">
                Comfortable journey with Our Vehicles
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
