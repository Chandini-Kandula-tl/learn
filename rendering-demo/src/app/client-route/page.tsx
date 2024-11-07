"use client";

import { serverSideFunction } from "@/utilis/server-utils";

export default function ClientRoutePage() {
  console.log("client method rendered");
  const result = serverSideFunction();

  return (
    <>
      <h1>client Route</h1>
      <p>{result}</p>
    </>
  );
}
