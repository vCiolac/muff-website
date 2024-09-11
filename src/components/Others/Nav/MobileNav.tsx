import { useState } from "react";
import { RiAlignJustify } from "react-icons/ri";
import Link from "next/link";
import Nav from "@/components/Others/Nav/Nav";
import Socials from "@/components/Others/Socials/Socials";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Others/UI/sheet";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <RiAlignJustify className="cursor-pointer text-3xl text-white" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-4">
          <div className="flex flex-col items-center gap-y-8">
            <Link
              href="orcamento"
              className="bg-tertiary text-white font-semibold py-2 px-4 mb-2 rounded-lg hover:scale-105 transition-all"
              onClick={handleLinkClick}
            >
              Solicitar Orçamento
            </Link>
            <Nav />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
