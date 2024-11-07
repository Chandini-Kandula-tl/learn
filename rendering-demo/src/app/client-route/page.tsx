"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ClientRoutePage() {
  // const theme = useTheme();
  return (
    <>
      <div className="image-slider-container">
        <Slider>
          <div>
            <img src="https://picsum.photos/400/200" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/300" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/250" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/350" alt="placeholder" />
          </div>
        </Slider>
      </div>
    </>
  );
}

// "use client";

// import { serverSideFunction } from "@/utilis/server-utils";

// export default function ClientRoutePage() {
//   console.log("client method rendered");
//   const result = serverSideFunction();

//   return (
//     <>
//       <h1>client Route</h1>
//       <p>{result}</p>
//     </>
//   );
// }
