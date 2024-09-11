import { useState } from "react";
import { RiAlignJustify } from "react-icons/ri";
import Nav from "@/components/Others/Nav/Nav";
import Socials from "@/components/Others/Socials/Socials";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Others/UI/sheet";
import Image from "next/image";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <RiAlignJustify className="cursor-pointer text-3xl text-white" />
      </SheetTrigger>
      <SheetContent>
        <Image
          src="/right-scroll.png"
          alt="Right Scroll"
          layout="fill"
          objectFit="contain"
          className="transform scale-130"
        />
        <div className="flex flex-col items-center justify-between h-full py-4">
          <div className="flex flex-col items-center gap-y-8">
            <Nav />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
