import React, { useState } from "react";
import { CloseSVG } from "../../../assets/images";
import { Img } from "../..";
import { Button } from "components/Button_Second";
import { Heading } from "components/Heading1";
import { Input } from "components/Input";
import { FileUpload } from "components/FileUpload";
import { Text } from "components/Text";
import { TextArea } from "components/TextArea";
import { articleData } from "../../../assets/data/articleData";
import Pop from "../pop"

export default function ArticalPage(...props) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the pop-up window
  const articlesPerPage = 7;

  const filteredArticles = articleData.filter((article) => {
    const isTitleMatch =
      article.title.toLowerCase().includes(searchBarValue.toLowerCase()) ||
      searchBarValue === "";
    return isTitleMatch;
  });

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to toggle the visibility of the pop-up window
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="w-full bg-gray-300">
        <div className="flex md:flex-col justify-center items-start">
          <div className="flex flex-col gap-[18px] flex-1">
            <header {...props}>
             
                <div className="flex sm:flex-col self-end h-[100px] justify-between items-center w-full  gap-10 mx-auto md:p-5 max-w-full bg-white-A700 ">
                
                  <Heading size="2xl" as="h4" className="ml-[100px]">
                    Article
                  </Heading>
                  <div className="flex justify-between items-center w-[25%] sm:w-full gap-5 ">
                    <Heading size="xl1" as="h5" className=" mr-[20]">
                      Nuwani Thushari
                    </Heading>
                    <Img
                      src="images/img_image_75.png"
                      alt="imageseventyfiv"
                      className="h-[55px] w-[56px] rounded-[50%] mr-[30px]"
                    />
                  </div>
                </div>


            </header>

            
            <div className="flex justify-center w-[98%] md:w-full ml-[9px]">
              <div className="flex flex-col items-center justify-center w-[1140px] gap-[18px] p-[11px] bg-gray-100 rounded-[20px] ">
                <div className="flex flex-col w-[96%] md:w-full mt-[5px] gap-[23px]">
                  <div className="flex sm:flex-col justify-between gap-5">
                    <Input
                      name="search"
                      placeholder="Search..."
                      value={searchBarValue}
                      onChange={(e) => setSearchBarValue(e)}
                      suffix={
                        searchBarValue?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue("")}
                            height={20}
                            width={20}
                          />
                        ) : null
                      }
                      className="flex items-center justify-center w-[38%] h-[53px] px-[35px] sm:px-5 text-black-900_7f text-xl font-bold bg-blue_gray-100 rounded-[26px]"
                    />

                    <Button
                      leftIcon={
                        <Img
                          src="images/img_plus_1.png"
                          alt="plus 1"
                          className="w-[17px] h-[17px]"
                        />
                      }
                      onClick={togglePopup} // Call togglePopup function on button click
                      className="flex items-center justify-center h-[53px] pl-[17px] pr-[22px] gap-4 sm:pr-5 text-white-A700 text-center text-xl font-bold bg-blue_gray-200 min-w-[138px] rounded-[10px]"
                    >
                      Create{" "}
                    </Button>
                  </div>

                  {showPopup && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-8 rounded-lg">
                      <div className="w-[1000px] h-[600px] p-[37px] sm:p-5 bg-white-A700_01 rounded-[30px] shadow-bs2">
                              <div className="flex flex-col mb-[82px] ml-[7px] gap-[33px] md:ml-0">
                             
                              <svg
                                    class="h-8 w-8 text-green-500 ml-auto cursor-pointer"
                                    onClick={togglePopup}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                             </svg>
                                <div>
                                  <div className="flex flex-col items-end">
                                   
                                   
                                    <div className="flex md:flex-col self-stretch justify-between items-start gap-5">
                                      
                                      <Heading size="2xl" as="h1" className="mt-[9px]">
                                        Article Title{" "}
                                      </Heading>
                                      
                                      <TextArea
                                            shape="round"
                                            name="groupthree"
                                            placeholder={`Enter The Package Name`}
                                            className="self-stretch w-[80%] h-[50px] sm:pb-5 sm:pr-5 text-black-900_7f font-bold mt-[0px] opacity-60 p-2  rounded-md "
                                          />
                                    </div>


                                    <Text as="p" className="mt-[13px]">
                                      0 / 80 max
                                    </Text>
                                    <div className="flex md:flex-col self-stretch justify-between items-start mt-[22px] gap-5">
                                      <Heading size="2xl" as="h2" className="mt-2">
                                        Article{" "}
                                      </Heading>
                                      
                                          <TextArea
                                            shape="round"
                                            name="groupthree"
                                            placeholder={`Enter The Package Name`}
                                            className="self-stretch w-[80%] h-[200px] sm:pb-5 sm:pr-5 text-black-900_7f font-bold mt-[0px] opacity-60 p-2  rounded-md"
                                          />
                                    </div>
                                    <div className="flex justify-end mt-[11px]">
                                      <Text as="p">0 / 2000 max</Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex md:flex-col justify-between items-start gap-4 mt-[-8px]">
                                  <Heading size="lg" as="h2">
                                    Images
                                  </Heading>
                                  <div className="flex md:flex-col w-[80%] md:w-full mt-[1px] gap-[5px] md:p-5">
                                    <FileUpload
                                      allowMultiple
                                      preview
                                      name="column"
                                      Thumbnail={FileUpload.PreviewItem}
                                      onUpload={(files) => console.log({ files })}
                                      placeholder={() => ( <Heading  size="1xl" as="p">Main Image</Heading>)}
                                      className="flex flex-col items-center w-[700px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
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
                                      className="flex flex-col items-center w-[700px] h-[120px]  gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
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
                                      className="flex flex-col items-start w-[700px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
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
                                      className="flex flex-col items-start w-[700px] h-[120px] gap-[15px] p-[18px] bg-blue_gray-100 rounded-[5px]"
                                    >
                                    
                                      <Text as="p" className="self-center">
                                        Secondary Image
                                      </Text>
                                    </FileUpload>
                                  </div>
                                </div>

                                
                      
                   
                              </div>
                            </div>
                           
                      </div>
                    </div>
                  )}
                </div>

                <div>
                    <div className="w-full h-px bg-blue_gray-200" />
                    <table className="flex sm:flex-col justify-between items-start gap-5 p-[7px]">
                      <thead>
                       <tr>
                         <div className="flex md:flex-col justify-center items-center mb-[5px] mr-[150px]">
                            <div className="flex self-start justify-center items-center ml-[130px] gap-[11px]">
                              
                              <th >Title</th>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[110px] gap-[20px]">
                              
                              <th >Image</th>
                            </div>
                            

                            <div className="flex self-start justify-center items-center  ml-[94px] gap-[11px]">
                              <Img src="images/img_eye_1.png" alt="eyeone_one" className="w-[21px] object-cover" />
                              <Heading as="h5" className="ml-[13px]">
                              <th >Views</th>
                              </Heading>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[94px] gap-[11px]">
                            <Img
                                src="images/img_like_1_1.png"
                                alt="like1one_one"
                                className="self-start w-[15px] object-cover"
                              />
                              <Heading as="h5" className="ml-[13px]">
                              <th >Likes</th>
                              </Heading>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[94px] gap-[11px]">
                            <Img
                                src="images/img_share_1_1.png"
                                alt="share1one_one"
                                className="self-start w-[15px] object-cover"
                              />
                              <Heading as="h5" className="ml-[13px]">
                              <th >Shares</th>
                              </Heading>
                              
                            </div>

                            <div className="flex self-start justify-center items-center ml-[94px] gap-[11px]">
                              
                              <th > </th>
                            </div>

                          </div>
                        </tr>
                      </thead>
                    </table>

                    <div className="w-full h-px bg-blue_gray-200" />



                    <table>
                      <tbody>





                       {currentArticles.map((article, index) => (
                          <tr key={index}>

                          <div className="flex flex-col gap-[15px] p-2.5">
                              <div className="flex md:flex-col justify-center items-end  mr-[6px] flex-1">
                              
                              <td style={{ width: "180px" }}>{article.title}</td>
                        <td style={{ width: "170px" }}>
                          <img src={article.imageSrc} alt="article" className="w-[37px] object-cover rounded-[5px]" />
                        </td>
                        <td style={{ width: "160px"  }}>{article.views}</td>
                        <td style={{ width: "160px" }}>{article.likes}</td>
                        <td style={{ width: "50px" }}>{article.shares}</td>
                        


                                
                                <div className="flex justify-center  gap-2">
                                  <td>
                                    <div className="flex justify-center ml-[90px] gap-3">
                                      <Button className="flex items-center justify-center h-[28px] w-[28px] bg-green-500 rounded-[5px]">
                                        <Img src="images/img_group_34.png " className="w-[20px] h-[20px]" />
                                      </Button>
                                      <Button className="flex items-center justify-center h-[28px] w-[28px] bg-red-100 rounded-[5px]">
                                        <Img src="images/img_group_33.png" className="w-[20px] h-[20px]" />
                                      </Button>
                                    </div>
                                  </td>
                                </div>
                              </div>
                            </div> 
                          
                          </tr>

                        ))}

                      </tbody>
                    </table>


                    <div className="w-full h-px bg-blue_gray-200" />

                    <div className="flex sm:flex-col justify-center items-start w-[47%] md:w-full ml-[250px] mt-[20px]">
                      <Button
                        size="lg"
                        as="h6"
                        className="px-[19px] py-1 !text-teal-400 border-teal-400 border border-solid rounded-[14px]"
                        onClick={() => paginate(currentPage - 1)}
                      >
                        Prev
                      </Button>
                      {Array.from({ length: Math.ceil(articleData.length / articlesPerPage) }, (_, i) => i + 1).map((number) => (
                        <Heading
                          key={number}
                          size="1xl"
                          as="h6"
                          className={`flex justify-center items-center h-[29px] w-[29px] ml-[20px] bg-teal-400 text-center rounded-[14px] ${
                            number === currentPage ? "bg-teal-600" : ""
                          }`}
                          onClick={() => paginate(number)}
                        >
                          {number}
                        </Heading>
                      ))}

                      <Button
                        size="lg"
                        as="h6"
                        className="ml-7 px-[18px] py-1 !text-teal-400 border-teal-400 border border-solid rounded-[14px]"
                        onClick={() => paginate(currentPage + 1)}
                      >
                        Next
                      </Button>
                      
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
