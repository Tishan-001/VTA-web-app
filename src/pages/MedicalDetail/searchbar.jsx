import React, { useState ,useEffect} from "react";
import { Button, Img, Line, List, Text } from "../../components";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import  Special from "../../assets/data/Special";
import location from "../../assets/data/location";




const SearchBar = ({ hotelListRef}) => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate,setCheakOutDate]=useState("");


  const [specialist, setSpecialist] = useState(null);
  const [specialist1,setSpecialist1]=useState(null);

  const [inputValue, setInputValue] = useState("");
  const [inputValue1,setInputValue1]=useState("");  

  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  useEffect(() => {
    // Use Special array instead of fetching from an external API
    setSpecialist(Special.map(item => ({ name: item.name })));
    setSpecialist1(location.map(item => ({ name: item.name })));

    

  }, []);

 








  const handleDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheakOutDateChange = (e) => {
    setCheakOutDate(e.target.value);
  };

  const handleSearchNow = () => {
    if (hotelListRef && hotelListRef.current) {
        hotelListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
   
};

  return (
    <div className="bg-gray-700_66_01 mt-[100px] md:ml-auto  md:right-[7%] flex md:flex-col flex-row md:gap-5 items-center justify-start  p-[13px] rounded-[20px] w-[70%]  border-2 border-solid md:w-full white_A700_black_900_00_border3"   style={{backgroundColor: "rgba(110,106,106,0.5)"}}>

      
<div className="  ml-12  w-[180px] font-medium h-8">
      <div
        onClick={() => setOpen1(!open1)}
        className={`bg-white  text-gray-200 w-full p-2 flex items-center justify-between rounded ${
          !selected1 && "text-gray-200"
        }`}
      >
        {selected1
          ? selected1?.length > 25
            ? selected1?.substring(0, 25) + "..."
            : selected1
          : "Location"}
        <BiChevronDown size={20} className={`${open1 && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open1 ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-200" />
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value.toLowerCase())}
            placeholder="Enter Location name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {location?.map((specialist1) => (
          <li
            key={specialist1?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              specialist1?.name?.toLowerCase() === selected1?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              specialist1?.name?.toLowerCase().startsWith(inputValue1)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (specialist1?.name?.toLowerCase() !== selected1.toLowerCase()) {
                setSelected1(specialist1?.name);
                setOpen1(false);
                setInputValue1("");
              }
            }}
          >
            {specialist1?.name}
          </li>
        ))}
      </ul>
    </div>

      <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] md:ml-[0] ml-[40px] rotate-[-0deg] md:w-full w-[2.5px]" />



      <input
        type="date"
        className="ml-12 text-gray-200 text-center text-xl border-none focus:outline-none bg-transparent"
        value={checkInDate}
        onChange={handleDateChange}
      />


<Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] md:ml-[0] ml-[60px] rotate-[-0deg] md:w-full w-[2.5px]" />


           <div className="  ml-12  w-[180px] font-medium h-8">
              <div
                onClick={() => setOpen(!open)}
                className={`bg-white  text-gray-200 w-full p-2 flex items-center justify-between rounded ${
                  !selected && "text-gray-200"
                }`}
              >
                {selected
                  ? selected?.length > 25
                    ? selected?.substring(0, 25) + "..."
                    : selected
                  : "Specialist"}
                <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
              </div>
              <ul
                className={`bg-white mt-2 overflow-y-auto ${
                  open ? "max-h-60" : "max-h-0"
                } `}
              >
                <div className="flex items-center px-2 sticky top-0 bg-white">
                  <AiOutlineSearch size={18} className="text-gray-200" />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                    placeholder="Enter specialist name"
                    className="placeholder:text-gray-700 p-2 outline-none"
                  />
                </div>
                {specialist?.map((specialist) => (
                  <li
                    key={specialist?.name}
                    className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                    ${
                      specialist?.name?.toLowerCase() === selected?.toLowerCase() &&
                      "bg-sky-600 text-white"
                    }
                    ${
                      specialist?.name?.toLowerCase().startsWith(inputValue)
                        ? "block"
                        : "hidden"
                    }`}
                    onClick={() => {
                      if (specialist?.name?.toLowerCase() !== selected.toLowerCase()) {
                        setSelected(specialist?.name);
                        setOpen(false);
                        setInputValue("");
                      }
                    }}
                  >
                    {specialist?.name}
                  </li>
                ))}
              </ul>
            </div>


      <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] ml-[60px] md:ml-[0] rotate-[-0deg] md:w-full w-[2.5px]" />


      <Button
        className="cursor-pointer font-bold leading-[normal] mb-[5px] min-w-[168px] md:ml-[0] ml-[80px] md:mt-0 mt-[9px] rounded-[23px] text-center text-xl"
        color="white_A700"

         onClick={handleSearchNow}
      >
        Search Now
      </Button>
    </div>
  );
};

export default SearchBar;
