import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, SelectBox, Input, Img, Switch } from "../../components";
import Header from "../../components/Header1";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import Publishbar from "components/Publishbar/publishbar";
import { Heading } from "../../components/Heading1";
import { Link } from 'react-router-dom';


const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    basic: "Describe The Details of your offering",
    standard: "Describe The Details of your offering",
    premium: "Describe The Details of your offering",
  },
  { basic: "Free wifi", premium: "$" },
];

export default function AddPackagePricing() {
  return (
    <>
      <Helmet>
        <title>Nadun's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[43px] md:pb-5 bg-gray-300 ">
        <Header className="flex justify-center items-center bg" />
        <div className=""> 
          <div className="flex flex-col gap-9">
            <div className="">
              <div className="flex flex-col ">
                <Publishbar className="mt-1" />
              </div>
            </div>
            <div className="flex flex-col items-center w-[45%] md:w-full md:ml-0 mx-auto">
              <div className="flex justify-between items-start w-[830px] md:p-5">
                <Text size="xl" as="p" className="!text-black-900_cc">
                  Scope & Pricing
                </Text>
                <div className="flex justify-center gap-[13px] ">
                  
                </div>
              </div>
              <div className="self-stretch h-px mt-[9px] bg-black-900_cc w-[900px] mx-auto" />
              <Heading as="p" className="self-start mt-[21px] !text-black-900_7f text-xl ml-3">
                Packages
              </Heading>

              <table className="w-[900px] h-[700px] mx-auto mt-10">
                <thead>
                  <tr>
                    <th class="border h-[80px] border-slate-600 ...">FEATURES</th>
                    <th class="border bg-[#D9D9D9] border-slate-600 ...">BASICS</th>
                    <th class="border bg-[#D9D9D9] border-slate-600 ...">STANDARD</th>
                    <th class="border bg-[#D9D9D9] border-slate-600 ...">PREMIUM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pl-[10px] align-bottom pb-[10px] border border-slate-700 ...">Include Guider</td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer pr-10 px-4 py-2 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Local Guides</option>
                        <option>Specialized Guides</option>
                        <option>VIP Concierge Guides</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-10 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Local Guides</option>
                        <option>Specialized Guides</option>
                        <option>VIP Concierge Guides</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-10 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Local Guides</option>
                        <option>Specialized Guides</option>
                        <option>VIP Concierge Guides</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-[10px] align-bottom pb-[10px] border border-slate-700 ...">Foods Pacakge</td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-10 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Local Cuisine Sampler</option>
                        <option>Culinary Exploration</option>
                        <option>Luxury Dining</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-10 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Local Cuisine Sampler</option>
                        <option>Culinary Exploration</option>
                        <option>Luxury Dining</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-10 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Local Cuisine Sampler</option>
                        <option>Culinary Exploration</option>
                        <option>Luxury Dining</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-[10px] align-bottom pb-[10px] border border-slate-700 ...">Accommodations</td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-20 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Budget Stay</option>
                        <option>Mid-range Stay</option>
                        <option>Luxury Stay</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-20 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Budget Stay</option>
                        <option>Mid-range Stay</option>
                        <option>Luxury Stay</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-20 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Budget Stay</option>
                        <option>Mid-range Stay</option>
                        <option>Luxury Stay</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-[10px] align-bottom pb-[10px] border border-slate-700 ...">Include Transportation</td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-10 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Essential Transit</option>
                        <option>Comfortable Transport</option>
                        <option>Luxury Transport</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-10 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Essential Transit</option>
                        <option>Comfortable Transport</option>
                        <option>Luxury Transport</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-10 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Essential Transit</option>
                        <option>Comfortable Transport</option>
                        <option>Luxury Transport</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-[10px] align-bottom pb-[10px] border border-slate-700 ...">Maximum Persons</td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-24 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>2 person</option>
                        <option>Less than 5</option>
                        <option>Less than 10</option>
                        <option>Less than 20</option>
                        <option>Less than 30</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-24 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>2 person</option>
                        <option>Less than 5</option>
                        <option>Less than 10</option>
                        <option>Less than 20</option>
                        <option>Less than 30</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-24 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>2 person</option>
                        <option>Less than 5</option>
                        <option>Less than 10</option>
                        <option>Less than 20</option>
                        <option>Less than 30</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-[10px] align-bottom pb-[10px] border border-slate-700 ...">Tour Insurance</td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-5 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Essential Coverage</option>
                        <option>Comprehensive Coverage</option>
                        <option>Deluxe Assurance</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-32 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="text-center border border-slate-700 ...">
                    <div class="inline-block relative">
                      <select class="block  w-full bg-white cursor-pointer px-4 py-2 pr-32 focus:outline-none opacity-80">
                      <option value="" disabled selected>SELECT</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <hr/>
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 15l-5-5h10l-5 5z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-[10px] align-bottom pb-[10px] border border-slate-700 ...">Price</td>
                    <td class="border border-slate-700 ...">
                      <input type="number" className="ml-10 mb-3" placeholder="$" />
                      <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="border border-slate-700 ...">
                      <input type="number" className="ml-10 mb-3" placeholder="$" />
                      <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                    <td class="border border-slate-700 ...">
                      <input type="number" className="ml-10 mb-3" placeholder="$" />
                      <div className="self-stretch h-px opacity-30 bg-black-900_cc w-[180px] mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <Link to="/addfaq">
                <Button shape="round" className="ml-[800px] mt-[39px] w-[150px]">
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
