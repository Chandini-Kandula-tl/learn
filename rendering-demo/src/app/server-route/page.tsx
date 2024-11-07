import { serverSideFunction } from "@/utilis/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route</h1>
      <p>{result}</p>
    </>
  );
}
