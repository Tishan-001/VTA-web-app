import React, { useState } from "react";
import { Img } from "../../components";
import { FileUpload } from "components/FileUpload";
import { Heading } from "components/Heading1";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function AddNewRoom() {
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [bedCount, setBedCount] = useState("");
  const [facilities, setFacilities] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleFacilityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFacilities([...facilities, value]);
    } else {
      setFacilities(facilities.filter((facility) => facility !== value));
    }
  };

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
            setPhoto(data); // Assuming the response contains the URL of the uploaded image
            message.success("Image uploaded successfully");
        } else {
            message.error("Upload Error:", data.error);
        }
    } catch (error) {
        console.error("Upload Error:", error);
    }
};

  const handleSubmit = async () => {
    const token = localStorage.getItem("token"); // Replace with the actual token

    const requestData = {
      name: name,
      type: roomType,
      bedCount: parseInt(bedCount, 10),
      facilities: facilities,
      price: price,
      photo: photo,
    };

    try {
      const response = await fetch("http://localhost:5000/hotels/add/room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.text();

      if (response.ok) {
        message.success("Room added successfully");
        navigate("/admin-hotel");
        // Handle success (e.g., show a success message, reset form, etc.)
      } else {
        console.error("Failed to add room:", data.errorMessage);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error (e.g., show an error message)
    }
  };

  return (
    <div className="container mx-auto max-w-5xl py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2">Welcome to Virtual Travel Assistance</h1>
        <p className="text-gray-600 mt-10 text-lg">Feel free to customize this statement further to match your specific requirements and branding</p>
      </div>

      <div className="mb-8 mt-20 rounded-3xl shadow-md">
        <form
          className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-10">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="price">
              Room Name
            </label>
            <input
              className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="name"
              type="text"
              placeholder="Room name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <hr className="mt-1 border-t-2 border-gray-300" />
          </div>
          <div className="mb-10">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="roomType">
              Room Type
            </label>
            <select
              className="w-full mt-2 py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none"
              id="roomType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Room Type
              </option>
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="suite">Suite</option>
              <option value="deluxe">Deluxe Room</option>
            </select>
          </div>
          <div className="mb-10">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="bedCount">
              Number of Beds
            </label>
            <input
              className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="bedCount"
              type="number"
              placeholder="Beds"
              value={bedCount}
              onChange={(e) => setBedCount(e.target.value)}
              required
            />
            <hr className="mt-1 border-t-2 border-gray-300" />
          </div>

          <div className="mb-10">
            <label className="block text-gray-700 text-2xl font-bold mb-2">Amenities</label>
            <div className="flex flex-wrap items-center">
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  value="Wifi"
                  onChange={handleFacilityChange}
                />
                <span className="ml-2 text-gray-700">Wifi</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  value="Air Condition"
                  onChange={handleFacilityChange}
                />
                <span className="ml-2 text-gray-700">Air Condition</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  value="Hot Water"
                  onChange={handleFacilityChange}
                />
                <span className="ml-2 text-gray-700">Hot Water</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  value="Beautiful View"
                  onChange={handleFacilityChange}
                />
                <span className="ml-2 text-gray-700">Beautiful View</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  value="Television"
                  onChange={handleFacilityChange}
                />
                <span className="ml-2 text-gray-700">Television</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  value="Room Service"
                  onChange={handleFacilityChange}
                />
                <span className="ml-2 text-gray-700">Room Service</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  value="Smart Home Features"
                  onChange={handleFacilityChange}
                />
                <span className="ml-2 text-gray-700">Smart Home Features</span>
              </label>
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="price"
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <hr className="mt-1 border-t-2 border-gray-300" />
          </div>

          <Heading size="lg" as="h2" className="text-gray-700">
            Image
          </Heading>
          <div className="flex md:flex-row justify-between items-start gap-4 mt-[10px] mb-[10px]">
            <FileUpload
              allowMultiple
              preview
              name="column"
              Thumbnail={FileUpload.PreviewItem}
              onUpload={handleUpload}// Assuming only one file is uploaded
              placeholder={() => <Heading size="1xl" as="p">Main Image</Heading>}
              className="flex flex-row items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
            >
              <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
              <Heading size="1xl" as="p">Main Image</Heading>
            </FileUpload>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-2xl font-bold mb-2 mt-[50px]" htmlFor="description">
              Description
            </label>
          </div>
          <div className="flex flex-col self-stretch">
            <div className="mt-[17px]">
              <div className="flex flex-col">
                <ReactQuill value={description} onChange={setDescription} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
