import img01 from "../images/img_rectangle173.png";
import img02 from "../images/img_rectangle174.png";
import img03 from "../images/img_rectangle176.png";
import img04 from "../images/img_rectangle178.png";
import image1 from "../images/img_22_1.png";
import image2 from "../images/img_23_1.png";
import image3 from "../images/img_23_2.png";
import image4 from "../images/img_23_3.png";
import image5 from "../images/img_23_4.png";
import image6 from "../images/img_23_5.png";
import image7 from "../images/image (1).png";
import RP1 from "../images/img_53.png";
import RP2 from "../images/img_54.png";
import RP3 from "../images/img_52_6.png";
import RP4 from "../images/img_52_2.png";

const HotelData = [
  {
    id: 1,
    Name: "Hotel Hilton",
    City: "Galle",
    addres: "Galle, colombo",
    photo: img01,
    p1: image1,
    p2: image2,
    p3: image3,
    p4: image4,
    p5: image5,
    p6: image6,
    price: "150",
    rooms: [
      {
        id: "S1",
        type: "Single Room",
        price: "150",
        photo:RP1,
        bedCount: "1",
      },
      {
        id: "D1",
        type: "Double Room",
        photo:RP2,
        price: "200",

        bedCount: "2",
      },
      {
        id: "F1",
        type: "Family Room",
        photo:RP3,
        price: "250",
        bedCount: 3,
      },
      
    ],
    Rate: 4.9,
  },
  {
    id: 2,
    Name: "Kandy Hills",
    City: "Kandy",
    photo: img02,
    p1: image7,
    p2: image2,
    p3: image3,
    p4: image4,
    p5: image5,
    p6: image6,
    price: "200",
    rooms: [
      {
        id: "S2",
        type: "Single Room",
        price: "100",
        photo:RP4,
        bedCount: 1,
      },
      {
        id: "D2",
        type: "Double Room",
        photo:RP2,
        price: "200",
        bedCount: 2,
      },
      {
        id: "F2",
        type: "Family Room",
        price: "220",
        photo:img01,
        bedCount: 3,
      },
    ],
    Rate: 5.1,
    addres: "Kandy",
  
  },
  {
    id: 3,
    Name: "Goldon Crown Hotel",
    City: "Mathara",
    photo: img03,
    p1: image4,
    p2: image2,
    p3: image3,
    p4: image4,
    p5: image5,
    p6: image6,
    price: "350",
    rooms: [
      {
        id: "S3",
        type: "Single Room",
        price: "180",
        photo:RP2,
        bedCount: 1,
      },
      {
        id: "D3",
        type: "Double Room",
        price: "200",
        photo:RP4,
        bedCount: 2,
      },
      {
        id: "F3",
        type: "Family Room",
        price: "250",
        photo:RP3,
        bedCount: 3,
      },
    ],
    Rate: 6.5,
    addres: "Hapugala, Galle",
   
  },
  {
    id: 4,
    Name: "Beach Villa ",
    City: "Galle",
    photo: img04,
    p1: image5,
    p2: image2,
    p3: image3,
    p4: image4,
    p5: image5,
    p6: image6,
    price: "350",
    rooms: [
      {
        id: "S4",
        type: "Single Room",
        price: "150",
        photo:RP1,
        bedCount: 1,
      },
      {
        id: "D4",
        type: "Double Room",
        price: "200",
        photo:RP2,
        bedCount: 2,
      },
      {
        id: "F4",
        type: "Family Room",
        price: "250",
        photo:RP3,
        bedCount: 3,
      },
    ],
    Rate: 6.5,
    addres: "Nugegoda, Colombo",
  
  },
  {
    id: 5,
    Name: "Beach Villa ",
    City: "Colombo",
    photo: img01,
    p1: image5,
    p2: image2,
    p3: image3,
    p4: image4,
    p5: image5,
    p6: image6,
    price: "350",
    rooms: [
      {
        id: "S5",
        type: "Single Room",
        price: "150",
        bedCount: 1,
      },
      {
        id: "D5",
        type: "Double Room",
        price: "200",
        bedCount: 2,
      },
      {
        id: "F5",
        type: "Family Room",
        price: "250",
        bedCount: 3,
      },
    ],
    Rate: 6.5,
    addres: "Nugegoda, Colombo",
    RP1: RP1,
    RP2: RP2,
    RP3: RP3,
  },
];

export default HotelData;
