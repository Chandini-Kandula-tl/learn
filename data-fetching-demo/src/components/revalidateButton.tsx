"use client";
import { revalidatePath } from "next/cache";

const RevalidateButton = () => {
  const handleClick = () => {
    revalidatePath("/products");
  };
  return <button onClick={handleClick}>Revalidate</button>;
};

export default RevalidateButton;
