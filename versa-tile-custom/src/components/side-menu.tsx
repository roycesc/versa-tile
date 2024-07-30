'use client'
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import TileLipAccordion from "./tile-lip-accordion"

export default function SideMenu() {

    const [length, setLength] = useState(900);
    const [width, setWidth] = useState(900);



	const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLength(Number(e.target.value));
    };

	const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(Number(e.target.value));
    };

    const isLengthValid = length >= 450 || length <= 1500;
    const isWidthValid = width <= 400 || width >= 1700;
    const isFormValid = isLengthValid && isWidthValid;

  return (
	<div className="flex flex-col w-full h-screen max-w-md gap-6 p-6 bg-card rounded-lg shadow-lg flex-grow">
	  <div className="grid gap-4 flex-grow">
		<div className="grid grid-cols-2 items-center gap-4">
		  <Label htmlFor="length">Length</Label>
		  <div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
			  <Input
				id="length"
				type="number"
				min={400}
				max={2100}
				value={length}
				onChange={handleLengthChange}
				className="w-full"
			  />
			  <span className="text-muted-foreground">mm</span>
			</div>
			{(length <= 450 || length >= 1700) && (
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
                max={2100} 
                defaultValue={width} 
                onChange={handleWidthChange}
                className="w-full" />
                <span className="text-muted-foreground">mm</span>
            </div>
            {(width <= 450 || width >= 1500) && (
                <span className="text-red-500 text-xs">
                    Width must be between 450mm and 1500mm.
                </span>
                )}
            </div>
        </div>
		<div className="grid grid-cols-2 items-center gap-4">
		  <Label htmlFor="outlet-length">Outlet Position Length</Label>
		  <div className="flex items-center gap-2">
			<Input id="outlet-length" type="number" min={400} max={2100} defaultValue={900} className="w-full" />
			<span className="text-muted-foreground">mm</span>
		  </div>
		</div>
		<div className="grid grid-cols-2 items-center gap-4">
		  <Label htmlFor="outlet-width">Outlet Position Width</Label>
		  <div className="flex items-center gap-2">
			<Input id="outlet-width" type="number" min={400} max={2100} defaultValue={900} className="w-full" />
			<span className="text-muted-foreground">mm</span>
		  </div>
		</div>
		<div className="text-sm text-muted-foreground">Only values between 400mm to 2100mm</div>
	  </div>
	  <div>
		<TileLipAccordion />
	  </div>
	  <div className="grid gap-2 mt-auto flex-grow">
		<Button variant="outline" 
        disabled={isFormValid}
        className="w-full">
		  Draw & Quote
		</Button>
		<div id="Price-order" className="mt-auto">
		  <div className="text-4xl font-bold py-8">
			<span className="text-primary">$</span>
			<span>1,499</span>
		  </div>
		  <Button className="w-full"
          disabled={isFormValid}
          >Order</Button>
		</div>
	  </div>
	</div>
  )
}