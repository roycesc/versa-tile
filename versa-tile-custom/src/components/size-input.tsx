//side-menu.tsx

'use client'

import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useDebouncedCallback } from 'use-debounce';
import TileLipAccordion from "./tile-lip-accordion"

interface SideInputProps {
 
    onValueChange: (value: {
        length: number, 
        width: number, 
        outletLength: number, 
        outletWidth: number}) 
        => void;
}

function SideInput({ onValueChange }: SideInputProps) {

    const [length, setLength] = useState(900);
    const [width, setWidth] = useState(900);   
    const [outletLength, setOutletLength] = useState(450);
    const [outletWidth, setOutletWidth] = useState(450); 
    const sequareMeterCost = 450;
    const [price, setPrice] = useState(0);
    
    useEffect(() => {
        onValueChange({ length, width, outletLength, outletWidth });
        setPrice((length * width)*(sequareMeterCost/1000000 ));
    }, [length, width, outletLength, outletWidth]);

    const outletLimit = 50;
    const isLengthValid = length >= 449 && length <= 1501;
    const isWidthValid = width >= 449 && width <= 1701;
    const isOutletLengthValid = (length - outletLimit) >= outletLength && outletLength >= outletLimit;
    const isOutletWidthValid = (width-outletLimit) >= outletWidth && outletWidth >= outletLimit;
    const isFormValid = isLengthValid && isWidthValid && isOutletLengthValid && isOutletWidthValid;
    const cost = price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

	const saleprice = isFormValid ? cost: "";

  return (
	<div className="grid gap-4 flex-grow w-full p-4 border-r border-grey-100">
      <div className="text-sm text-muted-foreground">Only values between 400mm to 2100mm
      </div>
        <div className="grid grid-cols-2 items-center gap-4">
        <Label htmlFor="length">Length</Label>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Input
            id="length"
            type="number"
            min={450}
            max={1700}
            placeholder="900"
            onChange={useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => 
                { setLength(Number(e.target.value)); }
                , 400)}
            className="w-full"
            />
            <span className="text-muted-foreground">mm</span>
          </div>
              {(!isLengthValid) && (
                <span className="text-red-500 text-xs">
                Length must be between 450mm and 1700mm.
                </span>
              )}
        </div>
	</div>
      <div className="grid grid-cols-2 items-center gap-4">
        <Label htmlFor="width">Width</Label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Input id="width" 
                type="number" 
                min={450} 
                max={1500} 
                placeholder="900"
                onChange={useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => 
                    { setWidth(Number(e.target.value)); }
                    , 400)}
                className="w-full" />
                <span className="text-muted-foreground">mm</span>
            </div>
              {(!isWidthValid) && (
                  <span className="text-red-500 text-xs">
                      Width must be between 450mm and 1500mm.
                  </span>
              )}
          </div>
      </div>
		<div className="grid grid-cols-2 items-center gap-4">
		  <Label htmlFor="outlet-length">Outlet Position Length</Label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Input id="outlet-length" 
                type="number" 
                min={50} 
                max={length-50} 
                placeholder="450"
                onChange={useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => 
                    { setOutletLength(Number(e.target.value)); }
                    , 400)}
                className="w-full" />
                <span className="text-muted-foreground">mm</span>
            </div>
          {(!isOutletLengthValid) && (
                <span className="text-red-500 text-xs">
                    Minimum {outletLimit}mm from any edge.
                </span>
                )}
          </div>
		</div>
		<div className="grid grid-cols-2 items-center gap-4">
		  <Label htmlFor="outlet-width">Outlet Position Width</Label>
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Input id="outlet-width" 
                type="number" 
                min={50} 
                max={width-50} 
                placeholder="450"
                onChange={useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => 
                    { setOutletWidth(Number(e.target.value)); }
                    , 400)}
                className="w-full" />
                <span className="text-muted-foreground">mm</span>
            </div>
              {(!isOutletWidthValid) && (
                  <span className="text-red-500 text-xs">
                      Minimum {outletLimit}mm from any edge.
                  </span>
              )}
		</div>
    </div>
    <div>
    <TileLipAccordion />
    </div>
    <div className="grid gap-2 mt-auto flex-grow">
        <div id="Price-order" className="mt-auto">
        <div className="text-4xl font-bold py-8">
            {(isFormValid) && (
            <span>{cost}</span>
            )}
        </div>
        <Button className="w-full"
        disabled={!isFormValid}
        >Order</Button>
        </div>
    </div>
	</div>
  
  )
}
export default SideInput