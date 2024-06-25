import React, { useState, useEffect } from "react";
import { Img } from "../../components";
import { Heading } from "components/Heading1";
import { FileUpload } from "components/FileUpload";
import { useNavigate } from "react-router-dom";

export default function AddVehicle() {
    const vehicleCategories = [
        "TUKTUK",
        "CAR",
        "VAN",
        "BIKE",
        "JEEP"
      ];
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleCategory, setVehicleCategory] = useState('');
    const [features, setFeatures] = useState([]); // Initialize with one empty feature input
    const [price, setPrice] = useState('');
    const [media, setMedia] = useState('');
    const [location,setLocation]=useState('');
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const navigate = useNavigate();

    const handleUpload = async (files) => {
        try {
            const formData = new FormData();
            formData.append("file", files[0]); // Assuming only one file is selected

            const response = await fetch("http://localhost:5000/images/upload", {
                method: "POST",
                body: formData
            });

            const data = await response.text();
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
    const handleCheckboxChange = (checkbox) => {
        setSelectedCheckboxes((prevSelected) =>
            prevSelected.includes(checkbox)
                ? prevSelected.filter((item) => item !== checkbox)
                : [...prevSelected, checkbox]
        );
    };

    const token = localStorage.getItem('token');  

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5000/vehicle/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    type: vehicleType,
                    vehicleCategory: vehicleCategory,
                    photo: media,
                    price: price,
                    location: location,
                    features: [...features, ...selectedCheckboxes]
                })
            });

            const data = await response.text();
            console.log("Response:", data);
            if (response.ok) {
                alert("Data saved successfully");
                //navigate("/admintransport");
            } else {
                console.error("Error:", data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...features];
        newFeatures[index] = value;
        setFeatures(newFeatures);
    };

    const addFeature = () => {
        // Check if the last item in features is not an empty string before adding a new one
        if (features.length === 0 || features[features.length - 1] !== "") {
            setFeatures([...features, ""]);
        }
    };

    const removeFeature = (index) => {
        const newFeatures = features.filter((_, i) => i !== index);
        setFeatures(newFeatures);
    };

    return (
      <div className="container mx-auto max-w-5xl py-8">
      <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Welcome to Virtual Travel Assistance</h1>
          <p className="text-gray-600 mt-10 text-lg">Explore the world with ease – our new transportation service ensures your journey is as enjoyable as your destination</p>
      </div>

      <div className="mb-8 mt-20 rounded-3xl shadow-md">
          <form className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8">
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="email">Vehicle Type</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="email" type="text" placeholder="Vehicle Type" onChange={(e) => setVehicleType(e.target.value)} value={vehicleType} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <div className="mb-10">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="vehicleCategory">Vehicle Category</label>
            <select
              className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="vehicleCategory"
              value={vehicleCategory}
              onChange={(e) => setVehicleCategory(e.target.value)}
            >
              <option value="">Select Vehicle Category</option>
              {vehicleCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            <hr className="mt-1 border-t-2 border-gray-300" />
          </div>
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="mobile">Location</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="mobile" type="text" placeholder="Vehicle Category" onChange={(e) => setLocation(e.target.value)} value={location} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="checkbox-features">Additional Features</label>
                        <div className="grid grid-cols-2 gap-2">
                            {["Without Driver", "300km available fuel", "200km available fuel", "4 Seat Available", "Vehicle Tracking", "400L Space Available", "2 Raincort"].map((feature) => (
                                <label key={feature} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedCheckboxes.includes(feature)}
                                        onChange={() => handleCheckboxChange(feature)}
                                    />
                                    <span className="ml-2 text-gray-700">{feature}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mb-10">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="price">Price</label>
                        <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="price" type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
                        <hr className="mt-1 border-t-2 border-gray-300" />
                    </div>

                    <div className="flex md:flex-row justify-between items-start gap-4 mt-[-8px]">
                        <Heading size="lg" as="h2">
                            Vehicle Image
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

                    <div className="mt-12">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
