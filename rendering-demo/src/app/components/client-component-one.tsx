"use client";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //   const [name, setName] = useState("Batman");
  return (
    <>
      <h1>Client component one</h1>
      {children}
      {/* <ServerComponentOne /> */}
    </>
  );
};
