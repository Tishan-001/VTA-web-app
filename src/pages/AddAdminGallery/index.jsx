import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import Header from "../../components/Header1";
import Publishbar from "components/Publishbar/publishbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Heading } from "../../components/Heading1";
import { FileUpload } from "components/FileUpload";
import { Link } from 'react-router-dom';

export default function AddAdminGallery() {
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
            <div className="flex flex-col items-center w-[45%] md:w-full justify-center md:ml-0 mx-auto p-[50px] rounded-[5px]">
              <div className="flex flex-col self-stretch">
                <Text size="xl" as="p" className="!text-black-900_cc">
                  Showcase Your Services In A Tour Package Gallery
                </Text>
                <p className="text-sm mt-4 opacity-50">Encourage buyers to choose your Tour Package by featuring a variety of your work.</p>
                <div className="h-px mt-2.5 bg-black-900_cc" />
                <Heading size="xs" as="p" className="mt-[21px] !text-black-900_7f">
                  Images (up to 3)
                </Heading>
                <p className="text-sm mt-4 opacity-50">Get noticed by the right buyers with visual examples of your services.</p>
                <div className="flex md:flex-col justify-between items-start gap-4 mt-[-2 0px]">
                  <div className="flex md:flex-col w-[100%] md:w-full mt-[7px] gap-[5px] md:p-5">
                    <FileUpload
                      allowMultiple
                      preview
                      name="column"
                      Thumbnail={FileUpload.PreviewItem}
                      onUpload={(files) => console.log({ files })}
                      placeholder={() => ( <Heading  size="1xl" as="p">Main Image</Heading>)}
                      className="flex flex-col items-center w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
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
                      className="flex flex-col items-center w-[200px] h-[120px]  gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
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
                      className="flex flex-col items-start w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
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
                      className="flex flex-col items-start w-[200px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                    >
                    
                      <Text as="p" className="self-center">
                        Secondary Image
                      </Text>
                    </FileUpload>
                  </div>
                </div>
                <div className="self-stretch h-px mt-2.5 bg-black-900_cc" />
              <Heading size="xs" as="p" className="mt-[21px] !text-black-900_7f">
                  Video (one only)
                </Heading>
                <p className="text-sm mt-4 opacity-50">Capture buyers' attention with a video that showcases your service.</p>
                <p className="text-sm mt-4 opacity-50">Please choose a video shorter than 75 seconds and smaller than 50MB</p>
                <FileUpload
                      allowMultiple
                      preview
                      name="column"
                      Thumbnail={FileUpload.PreviewItem}
                      onUpload={(files) => console.log({ files })}
                      placeholder={() => ( <Heading  size="1xl" as="p">Main Image</Heading>)}
                      className="flex flex-col items-center mt-5 w-[180px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                    >

                      <Img src="images/img_plus_3_1.png" alt="main_image_one" className="w-[25px] mt-[22px] object-cover" />
                      <Heading  size="1xl" as="p">Main Image</Heading>
                      
                    
                </FileUpload>
              </div>
              <div className="self-stretch h-px mt-2.5 bg-black-900_cc" />
              <Link to="/addadminpublish" className="self-end">
                <Button shape="round" className="self-end mt-10 min-w-[138px]">
                  Save & Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
