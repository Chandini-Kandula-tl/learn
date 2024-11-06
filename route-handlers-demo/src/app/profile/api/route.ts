import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headersList = headers();
  const requestHeaders = new Headers(request.headers);
  console.log((await headersList).get("Authorization"));
  console.log(requestHeaders.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
