import React from "react";

import { Img, Text } from "components";

const Footer = () => {
  return (
    <>
        <footer class=" dark:bg-gray-900 bg-black-900 w-full  mt-[100px] ">
              <div class="mx-auto w-full max-w-screen-xl gap-20">
                <div class="grid grid-cols-4 gap-4 px-[250px] md:px-4 m py-6 lg:py-8 md:grid-cols-2 mt-5">
                  <div >
                      <h2 class="mb-10 text-sm font-semibold text-[27px] text-white-A700 uppercase dark:text-white">Company</h2>
                      <ul class="text-gray-500  dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="#" class=" hover:underline hover:text-cyan-50">Blog</a>
                          </li>
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">Privacy Policy</a>
                          </li>
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">FAQ'S</a>
                          </li>
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">Contact</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-10 text-sm font-semibold text-white-A700 text-[27px] uppercase dark:text-white">Contact Us</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">NO: 1, Main Street, Galle, Sri Lanka</a>
                          </li>
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">+9411-111-111</a>
                          </li>
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">vta@gmail.com</a>
                          </li>
                          
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-10 text-sm font-semibold text-white-A700 text-[27px] uppercase dark:text-white">Quick Link</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">Packages</a>
                          </li>
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">Services</a>
                          </li>
                          <li class="mb-4">
                              <a href="#" class="hover:underline hover:text-cyan-50">Gallery</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-10 text-sm font-semibold text-white-A700 text-[27px] uppercase dark:text-white leading-none">Social Share</h2>
                      
                      <div class="flex mt-4 sm:justify-center md:mt-0 space-x-3 rtl:space-x-reverse">
                        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img  
                           className="h-[50px] w-[50px] bottom-[43%]"
                            src="images/img_twitter.png"/>
                          
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img
                                className=" h-[90px]  w-[90px] mt-[-20px]"
                                src="images/img_facebook.png"
                                
                              />
                            
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <Img
                              className=" bottom-[23%] h-[45px] object-cover right-[25%] w-[45px]"
                              src="images/img_instagram.png"
                              alt="instagram"
                            />
                        </a>
                        
                  </div>
                  </div>

                  
                
                </div>
                  <h2 class="text-sm ml-[700px] md:ml-[10px] mb-[10px] text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a  href="#">VIERTUAL TRAVEL ASSISTANCE™</a>| All Rights Reserved.
                  </h2>
              
                
              </div>
        </footer>
    </>
  );
};



export default Footer;