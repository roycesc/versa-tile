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
    <main className="flex flex-col h-screen md:flex-row">
    
        <div className="p-2 order-2 items-baseline md:max-w-96 md:flex-none md:order-1">
          <SideInput onValueChange={setSize} />
        </div>
        
        <div className="pt-4 order-1 md:flex-1 md:order-2">
          <TechDrawing {...size} />
      </div>

    </main>
  );
}
export default Page;