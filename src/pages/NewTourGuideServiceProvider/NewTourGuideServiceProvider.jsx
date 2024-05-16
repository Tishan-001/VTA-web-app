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

export default function NewTourGuideServiceProvider() {
    
    return (
      <div className="container mx-auto max-w-5xl py-8">
        
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Welcome to Virtual Travel Assistance</h1>
          <p className="text-gray-600 mt-10 text-lg">Welcome to our Tour Guide Service Provider platform! Join us in offering travelers unforgettable experiences and grow your business with our support and resources.</p>
        </div>
  
        
        <div className="mb-8 mt-20 rounded-3xl shadow-md"> 
          <form className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8">
            
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="companyName">Your Name</label>
              <input className="w-full mt-2 py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none" id="companyName" type="text" placeholder="Name" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">Your Email</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="Email" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>

            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">Your Mobile Number</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="Mobile Number" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>

            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">You Expected Price</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="Price" />
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            
            <div className="flex md:flex-row justify-between items-start gap-4 mt-[-8px]">
                                  <Heading size="lg" as="h2">
                                    Your Image
                                  </Heading>
                                  <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                                    <FileUpload
                                      allowMultiple
                                      preview
                                      name="column"
                                      Thumbnail={FileUpload.PreviewItem}
                                      onUpload={(files) => console.log({ files })}
                                      placeholder={() => ( <Heading  size="1xl" as="p">Main Image</Heading>)}
                                      className="flex flex-row items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                                    >
                                      <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                                      <Heading  size="1xl" as="p">Main Image</Heading>                                    
                                    </FileUpload>   
                                  </div>
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
  