'use client'
import { useState } from "react"
import SideInput from "@/components/size-input";
import TechDrawing from "@/components/tech-drawing";

const Page = () => {
  const [size, setSize] = useState({
    length: 900,
    width: 900,
    outletLength: 450,
    outletWidth: 450,
  });
  return (
    <main className="grid min-h-screen h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        <div className="lg:col-span-1 p-2 h-full">
        <SideInput onValueChange={setSize} />
        </div>
        <div className="lg:col-span-2 p-2 h-full">
        <TechDrawing {...size} />
        </div>
      </div>
    </main>
  );
}
export default Page;
