import { ImageSlider } from "@/components/imageSlider";
import { serverSideFunction } from "@/utilis/server-utils";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function ServerRoutePage() {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction();
  return (
    <>
      <h1>Server Route</h1>
      <p>
        {result}
        {/* {clientResult} */}
      </p>
      <ImageSlider />
    </>
  );
}
