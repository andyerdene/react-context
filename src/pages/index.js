import { Header, Left, Right } from "@/components";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
}
