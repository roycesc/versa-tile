
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"

export default function TileLipAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="wall-lips">
        <AccordionTrigger>
          <h3 className="text-lg font-medium">Customise Wall Lips</h3>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="text-sm font-medium">Left</span>
            <Switch id="left-switch" defaultChecked />
            <span className="text-sm font-medium">Top</span>
            <Switch id="top-switch" defaultChecked />
            <span className="text-sm font-medium">Right</span>
            <Switch id="right-switch" defaultChecked />
            <span className="text-sm font-medium">Bottom</span>
            <Switch id="bottom-switch" defaultChecked />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}