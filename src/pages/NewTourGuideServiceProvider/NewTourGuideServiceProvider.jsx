import React, { useState, useEffect } from "react";
import { Img } from "../../components";
import { Heading } from "components/Heading1";
import Upload from "../fileUpload/upload";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { message } from "antd";
import { BASE_URL } from "config";

export default function NewTourGuideServiceProvider() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [media, setMedia] = useState('');
    const [starRating, setStarRating] = useState('');
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const handleUpload = async (files) => {
        try {
            const formData = new FormData();
            formData.append("file", files[0]); // Assuming only one file is selected

            const response = await fetch(`${BASE_URL}/images/upload`, {
                method: "POST",
                body: formData
            });

            const data =  await response.text();
            console.log("Upload Response:", data);

            if (response.ok) {
                setMedia(data); // Assuming the response contains the URL of the uploaded image
                console.log("Image uploaded successfully");
            } else {
                console.error("Upload Error:", data.error);
            }
        } catch (error) {
            console.error("Upload Error:", error);
        }
    };
    
    const handleSubmit = async () => {
        try {
            const response = await fetch(`${BASE_URL}/tourguides/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Add your token here
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    mobile: mobile,
                    address: address,
                    media: media,
                    price: price,
                    starRating: starRating,
                    description: description
                })
            });

            const data = await response.text();
            console.log("Response:", data);

            if (response.ok) {
                message.success("Tour Guide registered successfully");
                navigate("/admin-guider")
            } else {
                // Handle error response, e.g., display error message to the user
                console.error("Error:", data.error);
                message.error(data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle network error or other unexpected errors
        }
    };

    return (
      <div className="container mx-auto max-w-5xl py-8">
      <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Welcome to Virtual Travel Assistance</h1>
          <p className="text-gray-600 mt-10 text-lg">Welcome to our Tour Guide Service Provider platform! Join us in offering travelers unforgettable experiences and grow your business with our support and resources.</p>
      </div>

      <div className="mb-8 mt-20 rounded-3xl shadow-md">
          <form className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8">

                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="name">Name</label>
                        <input className="w-full mt-2 py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none" id="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="email">Email</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="mobile">Mobile Number</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="mobile" type="text" placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} value={mobile} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="mobile">Address</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="mobile" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="price">Price</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="price" type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="price">Ratting</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="price" type="text" placeholder="Start Ratting" onChange={(e) => setStarRating(e.target.value)} value={starRating} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <section>
                    <Upload onUpload={handleUpload}/>
                   </section>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="description">Description</label>
                    </div>
                    <div className="flex flex-col self-stretch">
                        <div className="mt-[17px]">
                            <div className="flex flex-col">
                                <ReactQuill 
                                    value={description}
                                    onChange={setDescription}
                                    className="h-64"
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                                            [{size: []}],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{'list': 'ordered'}, {'list': 'bullet'}, 
                                            {'indent': '-1'}, {'indent': '+1'}],
                                            ['link', 'image', 'video'],
                                            ['clean']
                                        ],
                                    }}
                                    formats={[
                                        'header', 'font', 'size',
                                        'bold', 'italic', 'underline', 'strike', 'blockquote',
                                        'list', 'bullet', 'indent',
                                        'link', 'image', 'video'
                                    ]}
                                    placeholder="Write something..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
