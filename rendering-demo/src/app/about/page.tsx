import { cookies } from "next/headers";
// import { serverSideFunction } from "@/utils/server-utils";

export default async function AboutPage() {
  const cookieStore = cookies();
  const theme = (await cookieStore).get("theme");
  console.log(theme);
  // const result = serverSideFunction();
  return (
    <>
      <h1>About page {new Date().toLocaleTimeString()}</h1>
      {/* <p>{result}</p> */}
    </>
  );
}
