"use client";

import { clientSideFunction } from "@/utils/client-utils";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useTheme } from "../components/theme-provider";

// export default function ClientRoutePage() {
//   const theme = useTheme();
//   //   const settings = {
//   //     dots: true,
//   //   };
//   return <h1 style={{ color: theme.colors.primary }}>Client Route</h1>;
// }
export default function ClientRoutePage() {
  // const theme = useTheme();
  const result = clientSideFunction();
  return <h1>Client route {result}</h1>;
}
