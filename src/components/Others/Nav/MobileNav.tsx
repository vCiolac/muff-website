import { useState } from "react";
import { RiAlignJustify } from "react-icons/ri";
import Nav from "@/components/Others/Nav/Nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Others/UI/sheet";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <RiAlignJustify className="cursor-pointer text-3xl text-white" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between py-4 mt-44 ml-20">
          <div className="flex flex-col items-center gap-y-8">
            <Nav />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
