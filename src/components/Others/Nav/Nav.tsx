import { useGlobalContext } from '@/context/GlobalContext';
import Image from 'next/image';
import { links } from '@/data/nav';

const Nav = () => {
  const { setSelectedNavItem } = useGlobalContext();

  const handleButtonClick = (item: string) => {
    setSelectedNavItem(item);
  };

  return (
    <nav className="flex flex-col gap-y-6 justify-center items-center xl:flex-row xl:gap-x-6">
      {links.map((link, index) => (
        <button
          key={index}
          className="relative flex items-center justify-center w-40 h-16 md:h-6"
          aria-label={link.name}
          onClick={() => handleButtonClick(link.key)}
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
        </button>
      ))}
    </nav>
  );
};

export default Nav;
