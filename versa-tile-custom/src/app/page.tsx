import SideMenu from "@/components/side-menu";
import TileLipAccordion from "@/components/tile-lip-accordion";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
    
      <SideMenu />
    </main>
  );
}
