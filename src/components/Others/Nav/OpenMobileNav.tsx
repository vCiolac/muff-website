import { useState } from "react";
import { RiAlignJustify } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Others/UI/sheet";
import MobileNav from "./MobileNav";

export const OpenMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <RiAlignJustify className="cursor-pointer text-3xl text-white" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between py-4 mt-16 ml-20">
          <div className="flex flex-col items-center transform scale-90">
            <MobileNav />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
