import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync(
    "C:/Users/Sai Tejaswini/OneDrive/Desktop/learn/rendering-demo/src/app/components/server-component-two.tsx",
    "utf-8"
  );
  return <h1>Server Component two</h1>;
};
