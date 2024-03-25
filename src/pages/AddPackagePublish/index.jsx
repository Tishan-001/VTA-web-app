import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import Header from "../../components/Header1";
import Publishbar from "components/Publishbar/publishbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Heading } from "../../components/Heading1";

export default function AddPackagePublish() {
  const [faqInputs, setFaqInputs] = useState([]);
  const [updatefaqInputs, setUpdateFaqInputs] = useState([]);
  const [showAddFAQButton, setShowAddFAQButton] = useState(true);
  const [inputText, setInputText] = useState(""); 
  const [displayTexts, setDisplayTexts] = useState([]); 

  const handleTextClick = (text, index) => {
    const [date, place, reservation, description] = text.split(" - ");
    
    // Update the state with the extracted data
    setUpdateFaqInputs([{ updatedate: date, updateplace: place, updatereservation: reservation, updatedescription: description, index }]);
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
    setFaqInputs([{ date: "", place: "", reservation: "", describe: "" }]);
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
    const newPlace = faqInputs[0].place; 
    const newReservation = faqInputs[0].reservation; 
    const newDescription = faqInputs[0].describe; 
    const newText = `${newDate} - ${newPlace} - ${newReservation} - ${newDescription}`; 
    setDisplayTexts([...displayTexts, newText]); 
    setInputText(newText); 
    setFaqInputs([]); 
    setShowAddFAQButton(true); 
  };
  
  
 const handleUpdate = () => {
  const index = updatefaqInputs[0]?.index; 
  const updatedDate = updatefaqInputs[0]?.updatedate; 
  const updatedPlace = updatefaqInputs[0]?.updateplace; 
  const updatedReservation = updatefaqInputs[0]?.updatereservation; 
  const updatedDescription = updatefaqInputs[0]?.updatedescription; 

  if (index !== undefined && updatedDate !== undefined && updatedPlace !== undefined && updatedReservation !== undefined && updatedDescription !== undefined) {
    
    const updatedDisplayTexts = [...displayTexts];
    updatedDisplayTexts[index] = `${updatedDate} - ${updatedPlace} - ${updatedReservation} - ${updatedDescription}`;
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
  
  
  

  return (
    <>
      <Helmet>
        <title>Nadun's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full min-h-[955px] pb-[89px] md:pb-5 bg-gray-300 ">
        <Header className="flex justify-center items-center" />
        <div>
          <div className="flex flex-col gap-[60px] sm:gap-[30px]">
            <div>
              <div className="flex flex-col">
                <Publishbar className="mt-1" />
              </div>
            </div>
            <div className="flex flex-col items-center w-[45%] md:w-full justify-center md:ml-0 mx-auto bg-white-A700 p-[50px] rounded-[5px] shadow-2xl bg-white">             
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
      value={updatefaq.updateplace || ''}
      onChange={(e) => handleAddInputs(index, "updateplace", e.target.value)}
      className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
      placeholder="Enter updated place"
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
                      value={faq.place}
                      onChange={(e) => handleInputChange(index, "place", e.target.value)}
                      placeholder="Popular Place on That day"
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
              <Button shape="round" className="self-end mt-10 min-w-[138px]">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
