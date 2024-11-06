import { StaticImageData } from "next/image";

import pic1 from "./photos/great-wall-of-china.jpg";
import pic2 from "./photos/chichen-itza.jpg";
import pic3 from "./photos/christ-the-redeemer.jpg";
import pic4 from "./photos/colosseum.jpg";
import pic5 from "./photos/machu-pichu.jpg";
import pic6 from "./photos/petra.jpg";
import pic7 from "./photos/taj-mahal.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: pic1,
    photographer: "Photo by Max",
    location: "China",
  },
  {
    id: "2",
    name: "Chichen Itza",
    src: pic2,
    photographer: "Photo by John",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: pic3,
    photographer: "Photo by Jesus Christ",
    location: "Jersualem",
  },
  {
    id: "4",
    name: "Colosseum",
    src: pic4,
    photographer: "Photo by Allah",
    location: "Afganistan",
  },
  {
    id: "5",
    name: "Machu Picchu",
    src: pic5,
    photographer: "Photo by Tyson",
    location: "Brazil",
  },
  {
    id: "6",
    name: "Petra",
    src: pic6,
    photographer: "Photo by Reiseuhu",
    location: "Jordan",
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: pic7,
    photographer: "Photo by Shah jahan",
    location: "Agra",
  },
];

export default wondersImages;
