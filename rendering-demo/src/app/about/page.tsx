import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore = cookies();
  const theme = (await cookieStore).get("theme");
  console.log(theme);
  console.log("About Server component");
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
