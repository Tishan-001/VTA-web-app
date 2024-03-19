import React from "react";

import { Text,  Img } from "../../";
import { Heading } from "components/Heading1";
import Header from "components/Header";
import { ReactTable } from "../../ReactTable1";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import Sidebar1 from "components/Sidebar1";

const tableData = [
  {
    services: "Tour Packages",
    totalbooking: "228",
    compleated: "123",
    inprogress: "105",
    serviceone: "45",
    commotion: "$1078",
  },
  {
    services: "Doctors",
    totalbooking: "228",
    compleated: "123",
    inprogress: "105",
    serviceone: "45",
    commotion: "$1078",
  },
  {
    services: "Transportation",
    totalbooking: "228",
    compleated: "123",
    inprogress: "105",
    serviceone: "45",
    commotion: "$1078",
  },
  {
    services: "Tour Guider",
    totalbooking: "228",
    compleated: "123",
    inprogress: "105",
    serviceone: "45",
    commotion: "$1078",
  },
  {
    services: "Hotels",
    totalbooking: "228",
    compleated: "123",
    inprogress: "105",
    serviceone: "45",
    commotion: "$1078",
  },
];

export default function Dashbord() {
 
 
    
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("services", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="p" className="pl-5 py-[11px] ml-[-150px]">
            Services
          </Heading>
        ),
        meta: { width: "278px" },
      }),
      tableColumnHelper.accessor("totalbooking", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="p" className="py-[11px] ml-[-100px]">
            Total Booking{" "}
          </Heading>
        ),
        meta: { width: "148px" },
      }),
      tableColumnHelper.accessor("compleated", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="p" className="py-[11px ml-[-100px]">
            Compleated
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      tableColumnHelper.accessor("inprogress", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="p" className="py-[11px] ml-[-100px]">
            in-progress
          </Heading>
        ),
        meta: { width: "135px" },
      }),
      tableColumnHelper.accessor("serviceone", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="p" className="py-[11px] ml-[-100px]">
            Service Providers
          </Heading>
        ),
        meta: { width: "176px" },
      }),
      tableColumnHelper.accessor("commotion", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="p" className="py-[11px] ml-[-50px]">
            Commotion
          </Heading>
        ),
        meta: { width: "93px" },
      }),
    ];
  }, []);



  return (
    <>
     
      
       



          
          <div className="flex flex-col gap-[18px] flex-1">
            <Header className="p-5 bg-white-A700" />
            <div className="flex justify-center w-[95%] md:w-full ml-[30px] mb-[20px]">
              <div className="flex flex-col w-full p-7 sm:p-5 bg-gray-100 shadow-xs rounded-[20px]">
               
               
                <div className="gap-9 grid-cols-3 md:grid-cols-[1fr] grid">
                  <div className="flex w-full bg-blue_gray-100 rounded-[10px]">
                    <div className="w-full p-[13px] bg-blue_gray-200 rounded-[10px]">
                      
                     
                     
                      <div className="flex flex-col mt-0.5 ml-0.5 gap-[5px]">
                        <Heading size="3xl" as="h1" className="ml-1 !text-white-A700">
                          Tour Plans
                        </Heading>
                        <div className="flex justify-between items-center gap-5">
                          <Img
                            src="images/img_planning_1_1.png"
                            alt="tour_plans_one"
                            className="self-end w-[70px] object-cover"
                          />
                          <div className="flex flex-col items-center">
                            <Heading size="5xl" as="h2" className="!text-white-A700">
                              376
                            </Heading>
                            <Heading size="xs" as="h3" className="!text-white-A700">
                              Available
                            </Heading>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>



                  <div className="flex w-full p-[13px] bg-blue_gray-200 rounded-[10px]">
                    <div className="flex flex-col w-full mt-0.5 ml-0.5 gap-[5px]">
                      <Heading size="3xl" as="h4" className="ml-1 !text-white-A700">
                        Doctors
                      </Heading>
                      <div className="flex justify-between items-center gap-5">
                        <Img
                          src="images/img_planning_1_1_70x70.png"
                          alt="planning1one"
                          className="self-end w-[70px] object-cover"
                        />
                        <div className="flex flex-col items-end">
                          <Heading size="5xl" as="h5" className="!text-white-A700">
                            128
                          </Heading>
                          <Heading size="xs" as="h6" className="mr-[23px] !text-white-A700">
                            Available
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="flex justify-center w-full p-[13px] bg-blue_gray-200 rounded-[10px]">
                    <div className="flex flex-col w-full mt-[5px] gap-0.5">
                      <Heading size="3xl" as="h1" className="ml-1 !text-white-A700">
                        Transportation
                      </Heading>
                      <div className="flex justify-between items-center gap-5">
                        <Img
                          src="images/img_planning_1_1_1.png"
                          alt="planning1one"
                          className="self-end w-[70px] object-cover"
                        />
                        <div className="flex flex-col items-center">
                          <Heading size="5xl" as="h1" className="!text-white-A700">
                            2.1k
                          </Heading>
                          <Heading size="xs" as="p" className="!text-white-A700">
                            Available
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="flex w-full p-[13px] bg-blue_gray-200 rounded-[10px]">
                    <div className="flex flex-col w-full ml-0.5 gap-1.5">
                      <Heading size="3xl" as="h1" className="ml-1 !text-white-A700">
                        Tour Guiders
                      </Heading>
                      <div className="flex justify-between items-center gap-5">
                        <Img
                          src="images/img_planning_1_1_2.png"
                          alt="planning1one"
                          className="self-end w-[70px] object-cover"
                        />
                        <div className="flex flex-col items-center">
                          <Heading size="5xl" as="h1" className="!text-white-A700">
                            423
                          </Heading>
                          <Heading size="xs" as="p" className="!text-white-A700">
                            Available
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="flex w-full p-[13px] bg-blue_gray-200 rounded-[10px]">
                    <div className="flex justify-between items-center w-[88%] mt-0.5 ml-0.5 gap-5">
                      <div className="flex flex-col items-start w-full mb-[3px] gap-[17px]">
                        <Heading size="3xl" as="h1" className="ml-1 !text-white-A700">
                          Hotels
                        </Heading>
                        <Img src="images/img_planning_1_1_3.png" alt="planning1one" className="w-[70px] object-cover" />
                      </div>
                      <div className="flex flex-col self-end items-end">
                        <Heading size="5xl" as="h1" className="!text-white-A700">
                          1.1k
                        </Heading>
                        <Heading size="xs" as="p" className="mr-5 !text-white-A700">
                          Available
                        </Heading>
                      </div>
                    </div>
                  </div>




                  <div className="flex justify-center w-full p-[13px] bg-blue_gray-200 rounded-[10px]">
                    <div className="flex justify-between items-center w-full mt-0.5 gap-5">
                      <div className="flex flex-col items-start w-[43%] mb-[3px] gap-[17px]">
                        <Heading size="3xl" as="h1" className="ml-1 !text-white-A700">
                          Users
                        </Heading>
                        <Img src="images/img_planning_1_1_4.png" alt="planning1one" className="w-[70px] object-cover" />
                      </div>
                      <div className="flex flex-col self-end items-start">
                        <Heading size="5xl" as="h1" className="!text-white-A700">
                          9.4k
                        </Heading>
                        <Heading size="xs" as="p" className="ml-8 !text-white-A700">
                          Available
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>



                <Heading size="xl1" as="h5" className="mt-[41px] ml-[9px]">
                  This Month Booking Summery
                </Heading>



                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "md:flex-col " }}
                  rowDataProps={{ className: "md:flex-col " }}
                  className="w-[960px] mt-[13px] mb-[18px] md:w-[100px]"
                  columns={tableColumns}
                  data={tableData}
                />



              </div>
            </div>
          </div>





          
     
    </>
  );
}
