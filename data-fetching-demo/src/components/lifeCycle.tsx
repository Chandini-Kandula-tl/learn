"use client";
// react life cycle
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("executed at every time : with no dependency");
    return () => {
      console.log("useEffect with no dependency on return ");
    };
  });

  useEffect(() => {
    console.log("rendered at updating time : with depency count");
    return () => {
      console.log("useEffect with count dependency on return ");
    };
  }, [count]);

  useEffect(() => {
    console.log("rendered at mounting stage : with empty dependency");
    return () => {
      console.log("useEffect with empty dependency on return ");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("consoling uselayouteffect hook with no dependency");
    return () => {
      console.log("uselayoutEffect with no dependency on return ");
    };
  });

  useLayoutEffect(() => {
    console.log("consoling uselayouteffect hook with count state dependency");
    return () => {
      console.log("uselayoutEffect with dependency count on return ");
    };
  }, [count]);

  useLayoutEffect(() => {
    console.log("consoling uselayouteffect hook");
    return () => {
      console.log("uselayoutEffect with dependency on return ");
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        rendered UI
        {console.log("rendered UI") ?? ""}
      </div>
      <button onClick={handleClick}>Increment count</button>
      <Link href="/products">Navigate to products</Link>
    </>
  );
};

export default LifeCycle;
