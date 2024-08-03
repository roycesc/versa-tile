'use client'
import { useState } from "react"
import SideInput from "@/components/size-input";
import CanvasDrawing from "@/components/canvas-drawing";



const Page = () => {
  const [size, setSize] = useState({
    length: 900,
    width: 900,
    outletLength: 450,
    outletWidth: 450,
  });
  return (
    <main className="grid min-h-screen justify-between">
      <div className="flex flex-row">
        <SideInput onValueChange={setSize} />
        <CanvasDrawing {...size} />
      </div>
    </main>
  );
}
export default Page;
