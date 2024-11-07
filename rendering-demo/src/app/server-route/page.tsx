import { serverSideFunction } from "@/utils/server-utils";
import ImageSlider from "../components/ImageSlider";

export default function ServerRoutePage() {
  console.log("server route rendered");
  const result = serverSideFunction();
  //   const clientResult = clientSideFunction();
  return (
    <>
      <h1>Server Route Page</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
