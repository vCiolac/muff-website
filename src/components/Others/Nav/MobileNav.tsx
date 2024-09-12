import { useGlobalContext } from '@/context/GlobalContext';
import Image from 'next/image';
import { links } from '@/data/nav';
import { motion } from 'framer-motion';

const MobileNav = () => {
  const { setSelectedNavItem } = useGlobalContext();

  const handleButtonClick = (item: string) => {
    setSelectedNavItem(item);
  };

  return (
    <nav className="flex flex-col gap-y-5 justify-center items-center">
      {links.map((link, index) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={index}
          className="flex items-center w-52 h-16 px-4 py-2 bg-gray-900 bg-opacity-20 rounded-lg text-white"
          aria-label={link.name}
          onClick={() => handleButtonClick(link.key)}
        >
          <div className="flex-shrink-0 mr-4">
            <Image
              src={link.image}
              alt={link.name}
              width={60} 
              height={60}
              style={{ objectFit: 'contain' }}
              className="object-contain"
            />
          </div>

          <span className="text-lg font-extrabold">
            {link.name}
          </span>
        </motion.button>
      ))}
    </nav>
  );
};

export default MobileNav;
