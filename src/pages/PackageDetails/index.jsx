import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "../../components";
import { Heading } from "components/Heading";
import { useParams } from "react-router-dom";
import Footer from "components/Footer";
import { BASE_URL } from "config";

export default function TourPackageDescriptionPageUIPage() {
  const { id } = useParams();
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/tourpackage/${id}`)
      .then((response) => response.json())
      .then((data) => setTourData(data))
      .catch((error) => console.error("Error fetching tour data:", error));
  }, [id]);

  if (!tourData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-[69px] sm:pt-5 bg-bg1-20">
        <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[1418px]">
          <div className="flex flex-col items-center justify-start w-full gap-[85px]">
            <div className="flex flex-col items-center justify-start w-full p-[31px] sm:p-5 bg-gray-600 rounded-[30px]">
              <div className="flex flex-col items-center justify-start w-full md:w-full mb-[50px] gap-[55px]">
                <Heading size="xl" as="h1" className="w-full text-center text-5xl">
                  Plan Your Journey With Our Experience
                </Heading>
                <Text size="lg" as="p" className="text-2xl">
                  Embark on Your Journey Where Dreams Meet Destinations - Book Your Adventure with
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[92%] md:w-full gap-[141px]">
              <div className="flex flex-row md:flex-col justify-start items-start w-[96%] md:w-full gap-[19px] md:gap-5">
                <div className="flex flex-col items-start justify-start w-[46%] md:w-full gap-[13px]">
                  <Heading size="lg" as="h2" className="!text-black-900_02">
                    {tourData.name} For {tourData.duration}
                  </Heading>
                  <Text size="lg" as="p" className="w-[94%] !text-black-900_02 !font-light">
                    <span className="text-black-900_02">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_02 font-bold">
                      <>
                        Description:
                        <br />
                        <br />
                        {tourData.description}
                      </>
                    </span>
                  </Text>
                </div>
                <div className="h-[441px] w-[54%] md:w-full relative">
                  <Img
                    src={tourData.image}
                    alt="main_image"
                    className="justify-center h-[441px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                  />
                  <div className="flex flex-row justify-start w-[50%] gap-2.5 bottom-[5%] right-[7%] m-auto absolute">
                    {tourData.gallery.slice(0, 3).map((imgSrc, index) => (
                      <Img
                        key={index}
                        src={imgSrc}
                        alt={`gallery_image_${index}`}
                        className="w-[32%] md:h-auto sm:w-full object-cover rounded-[5px]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[59px]">
                <Heading size="md" as="h3" className="!text-black-900_02">
                  Time Plan and Locations
                </Heading>
                <div className="overflow-x-auto w-full">
                  <table className="w-full bg-white">
                    <thead className="bg-blue-300">
                      <tr>
                        <th className="py-2 text-3xl px-4 border-b border-gray-300 text-left text-gray-600">Place</th>
                        <th className="py-2 text-3xl px-4 border-b border-gray-300 text-right text-gray-600">Date</th>
                        <th className="py-2 text-3xl px-4 border-b border-gray-300 text-right text-gray-600">Reservation</th>
                        <th className="py-2 text-3xl px-4 border-b border-gray-300 text-right text-gray-600">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tourData.timePlaneList.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-100">
                          <td className="py-2 px-4 border-b border-gray-300">{row.place}</td>
                          <td className="py-2 px-4 border-b border-gray-300 text-right">{row.date}</td>
                          <td className="py-2 px-4 border-b border-gray-300 text-right">{row.reservation}</td>
                          <td className="py-2 px-4 border-b border-gray-300 text-right">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[90%] md:w-full gap-[54px]">
              <Heading size="md" as="h1" className="!text-black-900_02">
                Gallery
              </Heading>
              <div className="w-full gap-10 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid ">
                {tourData.gallery.map((imgSrc, index) => (
                  <div key={index} className="h-[323px] w-full relative duration-300 transform hover:scale-105">
                    <Img
                      src={imgSrc}
                      alt={`gallery_image_${index}`}
                      className="justify-center h-[323px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
                    />
                    <Button
                      shape="round"
                      className="bottom-[9%] left-[4%] m-auto sm:px-5 font-bold min-w-[145px] absolute"
                    >
                      Image {index + 1}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <Button
              color="black_900"
              size="md"
              className="sm:px-5 font-medium min-w-[190px] rounded-[10px] sm:min-w-full hover:bg-blue-400 hover:text-black-900 bg-black-900 text-white-A700_01"
            >
              Pay Now
            </Button>
          </div>
        </div>
        <Footer className="bg-black-900_02 flex items-center justify-center mt-[100px] md:px-5 w-[1870px]" />
      </div>
    </>
  );
}
