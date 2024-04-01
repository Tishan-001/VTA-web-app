import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import Header from "../../components/Header1";
import Publishbar from "components/Publishbar/publishbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Heading } from "../../components/Heading1";

export default function AddFAQ() {
  const [faqInputs, setFaqInputs] = useState([]);
  const [updatefaqInputs, setUpdateFaqInputs] = useState([]);
  const [showAddFAQButton, setShowAddFAQButton] = useState(true);
  const [inputText, setInputText] = useState(""); 
  const [displayTexts, setDisplayTexts] = useState([]); 

  const handleTextClick = (text, index) => {
    const [question, answer] = text.split(" - ");
  
    setUpdateFaqInputs([{ updatequestion: question, updateanswer: answer, index }]);
    setShowAddFAQButton(false);
  
    setInputText(answer);
  
    const updatedDisplayTexts = [...displayTexts];
    updatedDisplayTexts[index] = `${question} - ${answer}`;
    setDisplayTexts(updatedDisplayTexts);
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
    setFaqInputs([{ question: "", answer: "" }]);
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
    const newQuestion = faqInputs[0].question; 
    const newAnswer = faqInputs[0].answer; 
    const newText = `${newAnswer} - ${newQuestion}`; 
    setDisplayTexts([...displayTexts, newText]); 
    setInputText(newText); 
    setFaqInputs([]); 
    setShowAddFAQButton(true); 
  };
  
  
 const handleUpdate = () => {
  const index = updatefaqInputs[0]?.index; 
  const updatedQuestion = updatefaqInputs[0]?.updatequestion; 
  const updatedAnswer = updatefaqInputs[0]?.updateanswer; 

  if (index !== undefined && updatedQuestion !== undefined && updatedAnswer !== undefined) {
    
    const updatedDisplayTexts = [...displayTexts];
    updatedDisplayTexts[index] = `${updatedQuestion} - ${updatedAnswer}`;
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
              <div className="flex flex-col self-stretch">
                <Text size="xl" as="p" className="!text-black-900_cc">
                  Description
                </Text>
                <div className="h-px mt-2.5 bg-black-900_cc" />
                <Heading size="xs" as="p" className="mt-[21px] !text-black-900_7f">
                  Briefly Describe Your Package
                </Heading>
                <div className="mt-[17px]">
                  <div className="flex flex-col">
                    <ReactQuill />
                  </div>
                </div>
              </div>
              <Text size="s" as="p" className="self-end mt-[9px] !text-black-900_b2">
                0 / 1200 max
              </Text>
              <Text size="xl" as="p" className="self-start mt-[17px] !text-black-900_cc">
                Frequently Asked Questions
              </Text>
              <div className="self-stretch h-px mt-2.5 bg-black-900_cc" />
              <div className="flex flex-col self-stretch mt-[21px]">
                <Heading size="xs" as="p" className="!text-black-900_7f">
                  Briefly Describe Your Package
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
    <textarea
      value={updatefaq.updatequestion || ''}
      onChange={(e) => handleAddInputs(index, "updatequestion", e.target.value)}
      rows={1}
      className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
    />
    <textarea
      value={updatefaq.updateanswer || ''}
      onChange={(e) => handleAddInputs(index, "updateanswer", e.target.value)}
      rows={1}
      className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
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
                    + Add FAQ
                  </button>
                )}
                {faqInputs.map((faq, index) => (
                  <div key={index} className="mt-4 flex flex-col">
                    <textarea
                      value={faq.answer}
                      onChange={(e) => handleInputChange(index, "answer", e.target.value)}
                      placeholder="Add a Question"
                      rows={1}
                      className="mt-2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-teal-400"
                    />
                    <textarea
                      value={faq.question}
                      onChange={(e) => handleInputChange(index, "question", e.target.value)}
                      placeholder="Add an Answer"
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
                Save & Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
