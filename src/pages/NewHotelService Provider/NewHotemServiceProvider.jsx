import React, { useState } from "react";
import { CloseSVG } from "../../assets/images";
import { Img } from "../../components";
import { Button } from "components/Button_Second";
import { Heading } from "components/Heading1";
import { Input } from "components/Input";
import { FileUpload } from "components/FileUpload";
import { Text } from "components/Text";
import { TextArea } from "components/TextArea";
import { articleData } from "../../assets/data/articleData";
import { Helmet } from "react-helmet";
import Header from "../../components/Header1";
import Publishbar from "components/Publishbar/publishbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from 'react-router-dom';

export default function NewHotemServiceProvider() {
    
    return (
      <div className="container mx-auto max-w-5xl py-8">
        {/* Creative Topic and Description */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Welcome to VTA (Virtual Travel Assistance)</h1>
          <p className="text-gray-600 text-lg">We're excited to assist you in your virtual travel adventures. Please fill out the form below:</p>
        </div>
  
        {/* Form */}
        <div className="mb-8 mt-20 rounded-3xl shadow-md"> {/* Add shadow here */}
          <form className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8">
            {/* Name of the Company */}
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="companyName">Hotel Name</label>
              <input className="w-full mt-2 py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none" id="companyName" type="text" placeholder="Name" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            {/* City */}
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">City</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="City" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            {/* Images */}
            <div className="flex md:flex-col justify-between items-start gap-4 mt-[-8px]">
                                  <Heading size="lg" as="h2">
                                    Images
                                  </Heading>
                                  <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                                    <FileUpload
                                      allowMultiple
                                      preview
                                      name="column"
                                      Thumbnail={FileUpload.PreviewItem}
                                      onUpload={(files) => console.log({ files })}
                                      placeholder={() => ( <Heading  size="1xl" as="p">Main Image</Heading>)}
                                      className="flex flex-col items-center w-[700px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                                    >

                                      <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                                      <Heading  size="1xl" as="p">Main Image</Heading>
                                      
                                    
                                    </FileUpload>
                                    <FileUpload
                                      allowMultiple
                                      preview
                                      name="columnplus3two"
                                      Thumbnail={FileUpload.PreviewItem}
                                      onUpload={(files) => console.log({ files })}
                                      placeholder={() => <>[object Object] [object Object]</>}
                                      className="flex flex-col items-center w-[700px] h-[120px]  gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                                    >
                                    
                                      <Text as="p">Secondary Image</Text>
                                    </FileUpload>
                                    <FileUpload
                                      allowMultiple
                                      preview
                                      name="columnplus3thre"
                                      Thumbnail={FileUpload.PreviewItem}
                                      onUpload={(files) => console.log({ files })}
                                      placeholder={() => <>[object Object] [object Object]</>}
                                      className="flex flex-col items-start w-[700px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                                    >
                                      
                                      <Text as="p" className="self-center">
                                        Secondary Image
                                      </Text>
                                    </FileUpload>
                                    
                                    <FileUpload
                                      allowMultiple
                                      preview
                                      name="columnplus3four"
                                      Thumbnail={FileUpload.PreviewItem}
                                      onUpload={(files) => console.log({ files })}
                                      placeholder={() => <>[object Object] [object Object]</>}
                                      className="flex flex-col items-start w-[700px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                                    >
                                    
                                      <Text as="p" className="self-center">
                                        Secondary Image
                                      </Text>
                                    </FileUpload>
                                  </div>
                                </div>
            {/* Price */}
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="price">Price</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="price" type="text" placeholder="Price" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            {/* Hotline */}
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="hotline">Hotline</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="hotline" type="tel" placeholder="Hotline" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="hotline">Whatsapp</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="hotline" type="tel" placeholder="Whatsapp" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="hotline">Email</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="email" type="tel" placeholder="Hotline" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="hotline">Description</label>
            </div>
            <div className="flex flex-col self-stretch">
                <div className="mt-[17px]">
                  <div className="flex flex-col">
                    <ReactQuill />
                  </div>
                </div>
              </div>
            {/* Save Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                    Save
                </button>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
  