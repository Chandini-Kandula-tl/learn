"use client";
import { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  console.log("dashboard client component");
  return (
    <div>
      <h1>Dashboard page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Dashboard;
