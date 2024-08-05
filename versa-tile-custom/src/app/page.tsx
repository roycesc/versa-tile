'use client'
import { useState } from "react"
import SideInput from "@/components/size-input";
import TechDrawing from "@/components/tech-drawing";

const Page = () => {
  const [size, setSize] = useState<{
    length: number;
    width: number;
    outletLength: number;
    outletWidth: number;
    isFormValid: boolean;
    }>({

    length: 900,
    width: 900,
    outletLength: 450,
    outletWidth: 450,
    isFormValid: true

  });
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      <div className="g:w-1/3 p-2 h-full">
        <div className="lg:col-span-1 p-2 h-auto">
        <SideInput onValueChange={setSize} />
        </div>
        <div className="lg:w-2/3 p-2 h-full">
        <TechDrawing {...size} />
        </div>
      </div>
    </main>
  );
}
export default Page;
