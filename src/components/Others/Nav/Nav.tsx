import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/nav";
import { NavInterface } from "@/interfaces/NavInterface";

const Nav = ({ onLinkClick }: NavInterface) => {
  return (
    <nav className="hidden xl:flex gap-x-6 justify-center items-center">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className="relative flex items-center justify-center w-40"
            aria-label={link.name}
            onClick={onLinkClick}
          >
            <span className="relative z-10 text-white text-center">
              {link.name}
            </span>
            <Image
              src="/button.png"
              alt="Button"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
