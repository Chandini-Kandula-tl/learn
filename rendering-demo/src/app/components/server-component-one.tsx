import fs from "fs";

export const ServerComponentOne = () => {
  //   const filePath = path.resolve(__dirname, "server-component-one.tsx");
  //   console.log(filePath, "filePath");
  fs.readFileSync(
    "C:/Users/Sai Tejaswini/OneDrive/Desktop/learn/rendering-demo/src/app/components/server-component-one.tsx",
    "utf-8"
  );
  return (
    <>
      <h1>Server Component one</h1>
    </>
  );
};
