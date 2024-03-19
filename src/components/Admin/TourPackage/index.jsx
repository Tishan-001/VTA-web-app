import React, { useState } from "react";

import { CloseSVG } from "../../../assets/images";
import {  Img} from "../..";
import {Button} from "components/Button_Second";
import { Heading } from "components/Heading1";
import Header from "../../Header";
import { Input } from "components/Input";

import Sidebar1 from "../../Sidebar1";
import { articleData } from "../../../assets/data/articleData";

export default function ArticalPage(...props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;


  const filteredArticles = articleData.filter((article) => {
    // Filter based on search bar value
    const isTitleMatch =
      article.title.toLowerCase().includes(searchBarValue.toLowerCase()) ||
      searchBarValue === "";

    // Filter based on selected service
   
    return isTitleMatch ;
  });

  // Logic to get current articles based on currentPage
  const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(
      indexOfFirstArticle,
      indexOfLastArticle
    );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      
      <div className="w-full bg-gray-300">
        <div className="flex md:flex-col justify-center items-start">

          <div className="flex flex-col gap-[18px] flex-1">
            
              <header {...props}>
                  <div className="flex sm:flex-col self-end h-[100px] justify-between items-center w-full  gap-10 mx-auto md:p-5 max-w-full bg-white-A700 ">
                    <Heading size="2xl" as="h4" className="ml-[100px]">
                      Tour Package
                    </Heading>
                    <div className="flex justify-between items-center w-[25%] sm:w-full gap-5 ">
                      <Heading size="xl1" as="h5" className=" mr-[20]">
                        Nuwani Thushari
                      </Heading>
                      <Img src="images/img_image_75.png" alt="imageseventyfiv" className="h-[55px] w-[56px] rounded-[50%] mr-[30px]" />
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
                            <CloseSVG onClick={() => setSearchBarValue("")} height={20} width={20}/>
                          ) : null
                        }
                        className="flex items-center justify-center w-[38%] h-[53px] px-[35px] sm:px-5 text-black-900_7f text-xl font-bold bg-blue_gray-100 rounded-[26px]"
                      />
                    <Button
                      leftIcon={<Img src="images/img_plus_1.png" alt="plus 1" className="w-[17px] h-[17px]" />}
                      className="flex items-center justify-center h-[53px] pl-[17px] pr-[22px] gap-4 sm:pr-5 text-white-A700 text-center text-xl font-bold bg-blue_gray-200 min-w-[138px] rounded-[10px]"
                    >
                      Create{" "}
                    </Button>
                  </div>
                  
                 
                 
                  <div>
                    <div className="w-full h-px bg-blue_gray-200" />
                    <table className="flex sm:flex-col justify-between items-start gap-5 p-[7px]">
                      <thead>
                       <tr>
                         <div className="flex md:flex-col justify-center items-center mb-[5px] mr-[150px]">
                            <div className="flex self-start justify-center items-center ml-[94px] gap-[11px]">
                              
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
                              
                              <th >Action</th>
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

                    <div className="flex sm:flex-col justify-center items-start w-[47%] md:w-full ml-[250px] mt-[30px]">
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
                          className={`flex justify-center items-center h-[20px] w-[20px] ml-[45px] bg-teal-400 text-center rounded-[14px] ${
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
      </div>
    </>
  );
}
