//side-menu.tsx

'use client'

import { Button } from "@/components/ui/button"
import TileLipAccordion from "../tile-lip-accordion"


export default function SideMenuOld() {

  return (
    <div className="flex flex-col w-full h-screen max-w-md gap-6 p-6 bg-card rounded-lg shadow-lg flex-grow">
      <div>
        <div>
          
          <TileLipAccordion />
        </div>
        <div className="grid gap-2 mt-auto flex-grow">
          <Button variant="outline" 
              // disabled={!isFormValid}
              className="w-full">
            Draw & Quote
          </Button>
          <div id="Price-order" className="mt-auto">
            <div className="text-4xl font-bold py-8">
              {/* Placeholder text */}
              <span>$1000</span>
              {/* <span>{saleprice}</span> */}
            </div>
            <Button 
                className="w-full"
                //disabled={!isFormValid}
                >Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}