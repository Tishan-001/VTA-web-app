import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { message } from "antd";
import "react-quill/dist/quill.snow.css";
import Upload from "../fileUpload/upload";

export default function NewHotemServiceProvider() {

    const token = localStorage.getItem('token');
    const navegate = useNavigate();

    const [hotelData, setHotelData] = useState({
        name: '',
        address: '',
        city: '',
        hotline: '',
        mobileNo: '',
        email: '',
        whatsapp: '',
        description: '',
        media: [],
        pricePerNight: '',
    });

    const handleImageUpload = async (files) => {
        const uploadedImages = [];
      
        for (let file of files) {
          const formData = new FormData();
          formData.append("file", file);
      
          try {
            const response = await fetch("http://localhost:5000/images/upload", {
              method: "POST",
              body: formData,
            });
      
            const data = await response.text();
      
            if (response.ok) {
              message.success("Image uploaded successfully");
              uploadedImages.push(data);
            } else {
              message.error(`Error: ${data}`);
            }
          } catch (error) {
            console.error("Error uploading image:", error);
            message.error("Error uploading image. Please try again.");
          }
        }
      
        setHotelData((prevData) => ({
          ...prevData,
          media: [...prevData.media, ...uploadedImages],
        }));
      };
      
    

    const handleQuillChange = (value) => {
        setHotelData(prevData => ({
            ...prevData,
            description: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...hotelData,
            pricePerNight: parseFloat(hotelData.pricePerNight),
        };

        try {
            const response = await fetch("http://localhost:5000/hotels/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(payload)
            });

            const data = await response.text();

            if (response.ok) {
                message.success("Hotel created successfully");
                navegate("/admin-hotel")
            } else {
                message.error(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Error creating hotel:", error);
            message.error("Error creating hotel");
        }
    };

    return (
        <div className="container mx-auto max-w-5xl py-8">
            {/* Creative Topic and Description */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold mb-2">Welcome to Virtual Travel Assistance</h1>
                <p className="text-gray-600 text-lg">We're excited to assist you in your virtual travel adventures. Please fill out the form below</p>
            </div>

            {/* Form */}
            <div className="mb-8 mt-20 rounded-3xl shadow-md">
                <form className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8" onSubmit={handleFormSubmit}>
                    {/* Name of the Company */}
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="companyName">Hotel Name</label>
                        <input className="w-full mt-2 py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none" 
                            id="companyName" 
                            type="text" 
                            placeholder="Name" 
                            value={hotelData.name}
                            onChange={(e) => setHotelData({ ...hotelData, name: e.target.value })}/>
                        <hr className="mt-1 border-t-2 border-gray-300"/>
                    </div>
                    {/* Address */}
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="addresss">Address</label>
                        <input className="w-full mt-2 py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none" 
                            id="addresss" 
                            type="text" 
                            placeholder="Address"
                            value={hotelData.address}
                            onChange={(e) => setHotelData({ ...hotelData, address: e.target.value })} />
                        <hr className="mt-1 border-t-2 border-gray-300"/>
                    </div>
                    {/* City */}
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">City</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
                            id="city" 
                            type="text" 
                            placeholder="City"
                            value={hotelData.city}
                            onChange={(e) => setHotelData({ ...hotelData, city: e.target.value })} />
                        <hr className="mt-1 border-t-2 border-gray-300"/>
                    </div>
                    {/* Hotline */}
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="hotline">Hotline</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
                            id="hotline" 
                            type="tel" 
                            placeholder="Hotline"
                            value={hotelData.hotline}
                            onChange={(e) => setHotelData({ ...hotelData, hotline: e.target.value })} />
                        <hr className="mt-1 border-t-2 border-gray-300"/>
                    </div>
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="mobile">Mobile</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
                            id="mobile" 
                            type="tel" 
                            placeholder="Mobile"
                            value={hotelData.mobileNo}
                            onChange={(e) => setHotelData({ ...hotelData, mobileNo: e.target.value })} />
                        <hr className="mt-1 border-t-2 border-gray-300"/>
                    </div>
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="email">Email</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
                            id="email" 
                            type="email" 
                            placeholder="Email"
                            value={hotelData.email}
                            onChange={(e) => setHotelData({ ...hotelData, email: e.target.value })} />
                        <hr className="mt-1 border-t-2 border-gray-300"/>
                    </div>
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="whatsapp">Whatsapp</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
                            id="whatsapp" 
                            type="tel" 
                            placeholder="Whatsapp"
                            value={hotelData.whatsapp}
                            onChange={(e) => setHotelData({ ...hotelData, whatsapp: e.target.value })} />
                        <hr className="mt-1 border-t-2 border-gray-300"/>
                    </div>
                    {/* Images */}
                   
                   
                   <section className="mb-10">
                   <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="mobile">Images</label>
                    <Upload onUpload={handleImageUpload}/>
                   </section>
                    




                    {/* Price */}
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="price">Price</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
                            id="price" 
                            type="text" 
                            placeholder="Price"
                            value={hotelData.pricePerNight}
                            onChange={(e) => setHotelData({ ...hotelData, pricePerNight: e.target.value })} />
                        <hr className="mt-1 border-t-2 border-gray-300"/>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="description">Description</label>
                    </div>
                    <div className="flex flex-col self-stretch">
                        <div className="mt-[17px]">
                            <div className="flex flex-col">
                                <ReactQuill value={hotelData.description} onChange={handleQuillChange} />
                            </div>
                        </div>
                    </div>
                    {/* Save Button */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button onClick={handleFormSubmit} className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
