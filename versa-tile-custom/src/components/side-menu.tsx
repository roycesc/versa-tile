/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Us16icyc2az
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import TileLipAccordion from "./tile-lip-accordion"

export default function SideMenu() {
  return (
    <div className="flex flex-col w-full max-w-md gap-6 p-6 bg-card rounded-lg shadow-lg">
      <div className="grid gap-4">
        <div className="grid grid-cols-2 items-center gap-4">
          <Label htmlFor="length">Length</Label>
          <div className="flex items-center gap-2">
            <Input id="length" type="number" min={400} max={2100} defaultValue={900} className="w-full" />
            <span className="text-muted-foreground">mm</span>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <div className="flex items-center gap-2">
            <Input id="width" type="number" min={400} max={2100} defaultValue={900} className="w-full" />
            <span className="text-muted-foreground">mm</span>
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
      <div className="grid gap-2">
        <Button variant="outline" className="w-full">
          Draw & Quote
        </Button>
        <div className="text-2xl font-bold">
          <span className="text-primary">$</span>
          <span>1,499</span>
        </div>
        <Button className="w-full">Order</Button>
      </div>
    </div>
  )
}