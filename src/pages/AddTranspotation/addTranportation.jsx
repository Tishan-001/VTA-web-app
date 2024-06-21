import React, { useState, useEffect } from "react";
import { Img } from "../../components";
import { Heading } from "components/Heading1";
import { FileUpload } from "components/FileUpload";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function AddTranspotation() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [media, setMedia] = useState('');
    const navigate = useNavigate();

    const handleUpload = async (files) => {
        try {
            const formData = new FormData();
            formData.append("file", files[0]); // Assuming only one file is selected

            const response = await fetch("http://localhost:5000/images/upload", {
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
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:5000/transports/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    mobile: mobile,
                    address: address,
                    media: media,
                    description: description
                })
            });

            const data = await response.text();
            console.log("Response:", data);
			if (response.ok) {
				alert("Data save successfully");
                navigate("/admintransport");
			} else {
				// Handle error response, e.g., display error message to the user
                console.error("Error:", data.error);
			}
		} catch (error) {
			console.error("Error:", error);
            // Handle network error or other unexpected errors
		}
    }

    const handleCancle = ()=>{
        navigate("/admintransport");
    }

    return (
      <div className="container mx-auto max-w-5xl py-8">
      <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Welcome to Virtual Travel Assistance</h1>
          <p className="text-gray-600 mt-10 text-lg">Explore the world with ease – our new transportation service ensures your journey is as enjoyable as your destination</p>
      </div>

      <div className="mb-8 mt-20 rounded-3xl shadow-md">
          <form className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8">
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="price">Name</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
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

                    <div className="flex md:flex-row justify-between items-start gap-4 mt-[-8px]">
                        <Heading size="lg" as="h2">
                            Profile Image
                        </Heading>
                        <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                            <FileUpload
                                allowMultiple
                                preview
                                name="column"
                                Thumbnail={FileUpload.PreviewItem}
                                onUpload={handleUpload}
                                placeholder={() => (<Heading size="1xl" as="p">Main Image</Heading>)}
                                className="flex flex-row items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                            >
                                <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                                <Heading size="1xl" as="p">Main Image</Heading>
                            </FileUpload>
                        </div>
                    </div>

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

                    <div className="mt-12 flex justify-between" >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                         type="button" onClick={handleSubmit}>
                            Save
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                         type="button" onClick={handleCancle}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
