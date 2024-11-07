"use client";

import { clientSideFunction } from "@/utilis/client-utils";

export default function ClientRoutePage() {
  const result = clientSideFunction();
  return (
    <>
      <h1>client Route {result}</h1>
    </>
  );
}
