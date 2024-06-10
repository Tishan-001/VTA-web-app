import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Img } from "../../components";
import { Heading } from "components/Heading1";
import { FileUpload } from "components/FileUpload";
import { Text } from "components/Text";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NewTourPackage() {

    const navigate = useNavigate();
    const [faqInputs, setFaqInputs] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [updatefaqInputs, setUpdateFaqInputs] = useState([]);
    const [showAddFAQButton, setShowAddFAQButton] = useState(true);
    const [inputText, setInputText] = useState(""); 
    const [displayTexts, setDisplayTexts] = useState([]);
    const [coverImage, setCoverImage] = useState("");
    const [galleryImages, setGalleryImages] = useState([]);
    const [packageName, setPackageName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [ratting, setRatting] = useState("");
    const [description, setDescription] = useState("");
  
    const handleTextClick = (text, index) => {
      const [date, reservation, description] = text.split(" - ");
      
      // Update the state with the extracted data
      setUpdateFaqInputs([{ updatedate: date, updatereservation: reservation, updatedescription: description, index }]);
      setShowAddFAQButton(false);
      
      setInputText(text); // Set the input text to the entire clicked text
    };
    
    const handleDelete = () => {
      const index = updatefaqInputs[0]?.index;
      const updatedUpdateFaqInputs = updatefaqInputs.filter((_, i) => i !== index);
      setUpdateFaqInputs(updatedUpdateFaqInputs);
    
      setShowAddFAQButton(true);
    
      const updatedDisplayTexts = [...displayTexts];
      updatedDisplayTexts.splice(index, 1);
      setDisplayTexts(updatedDisplayTexts);
      setUpdateFaqInputs([]);
    };
    
    
  
    const handleAddFAQ = () => {
      setFaqInputs([{ date: "", reservation: "", description: "" }]);
      setShowAddFAQButton(false);
    };
  
    const handleInputChange = (index, key, value) => {
      const updatedInputs = [...faqInputs];
      updatedInputs[index][key] = value;
      setFaqInputs(updatedInputs);
    };
  
    const handleCancel = () => {
      setFaqInputs([]);
      setShowAddFAQButton(true);
    };
  
    const handleUpdateCancel = () => {
      setFaqInputs([]);
      setShowAddFAQButton(false);
    };
  
    const handleAdd = () => {
      const newDate = faqInputs[0].date; 
      const newReservation = faqInputs[0].reservation; 
      const newDescription = faqInputs[0].describe; 
      const newText = `${newDate} - ${newReservation} - ${newDescription}`; 
      setDisplayTexts([...displayTexts, newText]); 
      setInputText(newText); 
      setInputs([...inputs, faqInputs]);
      setFaqInputs([]); 
      setShowAddFAQButton(true); 
    };
    
    
   const handleUpdate = () => {
    const index = updatefaqInputs[0]?.index; 
    const updatedDate = updatefaqInputs[0]?.updatedate;  
    const updatedReservation = updatefaqInputs[0]?.updatereservation; 
    const updatedDescription = updatefaqInputs[0]?.updatedescription; 
  
    if (index !== undefined && updatedDate !== undefined && updatedReservation !== undefined && updatedDescription !== undefined) {
      
      const updatedDisplayTexts = [...displayTexts];
      updatedDisplayTexts[index] = `${updatedDate} - ${updatedReservation} - ${updatedDescription}`;
      setDisplayTexts(updatedDisplayTexts);
  
      setUpdateFaqInputs([]);
  
      setShowAddFAQButton(true);
    }
  };
  
    
    const handleAddInputs = (index, key, value) => {
      const updatedInputs = [...updatefaqInputs];
      updatedInputs[index][key] = value;
      setUpdateFaqInputs(updatedInputs);
    };

    
    const handleCoverImageUpload = async (files) => {
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
               setCoverImage(data); // Assuming the response contains the URL of the uploaded image
              console.log("Image uploaded successfully");
          } else {
              console.error("Upload Error:", data.error);
          }
      } catch (error) {
          console.error("Upload Error:", error);
      }
    };

    const handleGalleryImageUpload = async (files) => {
      try {
          const formData = new FormData();
          formData.append("file", files[0]);
          console.log("formData",formData) // Assuming only one file is selected

          const response = await fetch("http://localhost:5000/images/upload", {
              method: "POST",
              body: formData
          });

          const data =  await response.text();
          console.log("Upload Response:", data);

          if (response.ok) {
               setGalleryImages([...galleryImages, data]);
              console.log("Image uploaded successfully");
          } else {
              console.error("Upload Error:", data.error);
          }
      } catch (error) {
          console.error("Upload Error:", error);
      }
    };

    console.log("galleryImages",galleryImages)
    console.log("timeplane",inputs)

    const handleSubmit = async () => {
      try {
          const response = await fetch("http://localhost:5000/tourpackage/create", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  // Add your token here
                  "Authorization": `Bearer ${localStorage.getItem('token')}`
              },
              body: JSON.stringify({
                  name: packageName,
                  startDate: startDate,
                  endDate: endDate,
                  description: description,
                  duration: duration,
                  ratting: ratting,
                  image: coverImage,
                  price: price,
                  timePlaneList: inputs.map(input => ({
                    id: input[0]?.id, 
                    date: input[0]?.date, 
                    reservation: input[0]?.reservation, 
                    description: input[0]?.description 
                  })),
                  gallery: galleryImages
              })
          });

          const data = await response.text();
          console.log("Response:", data);

          if (response.ok) {
              alert("Tour Package created successfully");
              navigate('/admin');
          } else {
              console.error("Error:", data);
          } 
      } catch (error) {
          console.error("Error:", error);
      }
    }
    
    return (
      <div className="container mx-auto max-w-5xl py-8">
        
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Welcome to Virtual Travel Assistance</h1>
          <p className="text-gray-600 mt-10 text-lg">Feel free to customize this statement further to match your specific requirements and branding</p>
        </div>
  
        
        <div className="mb-8 mt-20 rounded-3xl shadow-md"> 
          <form className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8">
            
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="companyName">Package Name</label>
              <input className="w-full mt-2 py-2 px-3 text-gray-700 border-b-2 border-gray-300 focus:outline-none" id="companyName" type="text" placeholder="name" onChange={(e) => setPackageName(e.target.value)} value={packageName}/>
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>
            
            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">Start Date</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="strat date" onChange={(e) => setStartDate(e.target.value)} value={startDate}/>
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>

            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">End Date</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="end date" onChange={(e) => setEndDate(e.target.value)} value={endDate}/>
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>

            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">Duration</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="duration" onChange={(e) => setDuration(e.target.value)} value={duration}/>
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>

            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">Price</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} value={price}/>
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>

            <div className="mb-10">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="city">Ratting</label>
              <input className="border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="ratting" onChange={(e) => setRatting(e.target.value)} value={ratting}/>
              <hr className="mt-1 border-t-2 border-gray-300"/>
            </div>

            <Heading size="lg" as="h2" className="text-gray-700">
                Cover Image
            </Heading>
           <div className="flex md:flex-row justify-between items-start gap-4 mt-[10px] mb-[10px]">
                                  
                <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                <FileUpload
                    allowMultiple
                    preview
                    name="column"
                    Thumbnail={FileUpload.PreviewItem}
                    onUpload={handleCoverImageUpload}
                    placeholder={() => ( <Heading  size="1xl" as="p">Main Image</Heading>)}
                    className="flex flex-row items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                >
                    <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                    <Heading  size="1xl" as="p">Main Image</Heading>                                    
                </FileUpload>   
                </div>
            </div>
            
            <Heading size="lg" as="h2" className="text-gray-700">
                Gallery Images
            </Heading>
            <div className="flex md:flex-row justify-between items-start gap-4 mt-[10px] mb-[10px]">
                                  
                <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                <FileUpload
                    allowMultiple
                    preview
                    name="column"
                    Thumbnail={FileUpload.PreviewItem}
                    onUpload={handleGalleryImageUpload}
                    placeholder={() => ( <Heading  size="1xl" as="p">Gallery Image</Heading>)}
                    className="flex flex-row items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                >
                    <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                    <Heading  size="1xl" as="p">Gallery Image</Heading>                                    
                </FileUpload>   
                </div>
                <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                <FileUpload
                    allowMultiple
                    preview
                    name="column"
                    Thumbnail={FileUpload.PreviewItem}
                    onUpload={handleGalleryImageUpload}
                    placeholder={() => ( <Heading  size="1xl" as="p">Gallery Image</Heading>)}
                    className="flex flex-row items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                >
                    <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                    <Heading  size="1xl" as="p">Gallery Image</Heading>                                    
                </FileUpload>   
                </div>
                <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                <FileUpload
                    allowMultiple
                    preview
                    name="column"
                    Thumbnail={FileUpload.PreviewItem}
                    onUpload={handleGalleryImageUpload}
                    placeholder={() => ( <Heading  size="1xl" as="p">Gallery Image</Heading>)}
                    className="flex flex-row items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                >
                    <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                    <Heading  size="1xl" as="p">Gallery Image</Heading>                                    
                </FileUpload>   
                </div>
                <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                <FileUpload
                    allowMultiple
                    preview
                    name="column"
                    Thumbnail={FileUpload.PreviewItem}
                    onUpload={handleGalleryImageUpload}
                    placeholder={() => ( <Heading  size="1xl" as="p">Gallery Image</Heading>)}
                    className="flex flex-row items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                >
                    <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                    <Heading  size="1xl" as="p">Gallery Image</Heading>                                    
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

            
            <div className="flex flex-col gap-[60px] sm:gap-[30px] mt-[20px]">
                
                <div className="flex flex-col w-[100%] md:w-full md:ml-0 mx-auto bg-white-A700 p-[50px] shadow-2xl rounded-[5px] bg-white">             
                <Text as="p" className="self-start mt-[17px] font-semibold text-black-900_cc text-3xl">
                    Day Plan
                </Text>
                <div className="self-stretch h-px mt-2.5 bg-black-900_cc" />
                <div className="flex flex-col self-stretch mt-[21px]">
                    <Heading size="" as="p" className="!text-black-900_7f">
                    Briefly Describe how is going each day at the  tour Package
                    </Heading>
                    <Text type='button' size="11px" className="mt-4 !text-black-900_cc">
                    {displayTexts.map((text, index) => (
                <div
                    key={index}
                    className={`max-w-[800px] mb-4 p-3 text-black-900 cursor-pointer bg-gray-300 text-sm`}
                    style={{ wordWrap: 'break-word' }}
                    onClick={() => handleTextClick(text, index)} 
                >
                    {text}
                </div>
                ))}
                </Text>
                {updatefaqInputs.map((updatefaq, index) => (
                <div key={index} className="mt-4 flex flex-col">
                    <input
                    value={updatefaq.updatedate || ''}
                    onChange={(e) => handleAddInputs(index, "updatedate", e.target.value)}
                    className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="Enter updated date"
                    />
                    <input
                    value={updatefaq.updatereservation || ''}
                    onChange={(e) => handleAddInputs(index, "updatereservation", e.target.value)}
                    className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="Enter updated reservation"
                    />
                    <input
                    value={updatefaq.updatedescription || ''}
                    onChange={(e) => handleAddInputs(index, "updatedescription", e.target.value)}
                    className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
                    placeholder="Enter updated description"
                    />
                    <div className="flex gap-1 justify-end">
                    <button onClick={() => handleDelete(index)} className="mt-2 w-[100px] px-4 py-2 text-red-700 bg-gray-300 rounded-lg">
                        Delete
                    </button>
                    <button onClick={() => handleUpdate(index)} className="mt-2 px-4 w-[100px] py-2 bg-blue-500 text-white rounded-md text-white-A700">
                        Update
                    </button>
                    </div>
                </div>
                ))}

                {showAddFAQButton && (
                <button onClick={handleAddFAQ} className="mt-4 text-teal-400 px-4 py-2 flex ">
                    + Day Plan
                </button>
                )}
                {faqInputs.map((faq, index) => (
                <div key={index} className="mt-4 flex flex-col">
                    <textarea
                    value={faq.date}
                    onChange={(e) => handleInputChange(index, "date", e.target.value)}
                    placeholder="No of Date"
                    rows={1}
                    className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
                    />
                    <textarea
                    value={faq.reservation}
                    onChange={(e) => handleInputChange(index, "reservation", e.target.value)}
                    placeholder="Reservation"
                    rows={1}
                    className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
                    />
                    <textarea
                    value={faq.describe}
                    onChange={(e) => handleInputChange(index, "describe", e.target.value)}
                    placeholder="Short Description"
                    rows={1}
                    className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
                    />
                    <div className="flex gap-1 justify-end">
                    <button onClick={handleCancel} key={index} className="mt-2 w-[100px] px-4 py-2 bg-gray-300 text-white rounded-md text-blue-500">
                        Cancel
                    </button>
                    <button onClick={handleAdd} key={index} className="mt-2 px-4 w-[100px] py-2 bg-blue-500 text-white rounded-md text-white-A700">
                        Add
                    </button>
                    </div>
                </div>
                ))}
                <div className="h-px mt-[31px] bg-black-900_cc" />
            </div>
            
                </div>
            </div>
    

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleSubmit} className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                    Save
                </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  