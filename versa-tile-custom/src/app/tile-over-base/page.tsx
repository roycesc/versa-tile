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
    <main className="grid min-h-screen h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        <div className="lg:col-span-1 p-2">
        <SideInput onValueChange={setSize} />
        </div>
        <div className="lg:col-span-2 pt-4">
        <TechDrawing {...size} />
        </div>
      </div>
    </main>
  );
}
export default Page;
