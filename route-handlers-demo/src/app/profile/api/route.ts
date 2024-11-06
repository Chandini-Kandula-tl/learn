import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headersList = headers();
  const requestHeaders = new Headers(request.headers);
  const theme = request.cookies.get("theme");
  console.log((await headersList).get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  console.log(theme);
  console.log((await cookies()).get("resultsPerPage"));
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      // "Set-Cookie": `theme=dark`,
      "Set-Cookie": `theme=dark; Path=/, resultsPerPage=20; Path=/`,
    },
  });
}
