import { useGlobalContext } from '@/context/GlobalContext';
import { sideItems } from '@/data/sidebars';

import { motion } from 'framer-motion';
import Image from 'next/image';

const LeftSidebar = () => {
  const { setSelectedScrollItem } = useGlobalContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="hidden lg:flex lg:w-1/5 relative mt-[7rem]"
    >
      <Image
        src="/left-scroll.png"
        alt="Left Scroll"
        fill
        style={{ objectFit: 'contain' }}
        className="relative z-20 scale-125 ml-16"
      />
      <nav className="absolute inset-0 flex items-center justify-center p-6 z-20 ml-28">
        <div className="flex flex-col space-y-4">
          {sideItems.map(({ name, key }) => (
            <motion.button
              key={key}
              onClick={() => setSelectedScrollItem(key)}
              className={`text-white py-2 px-4 rounded-lg shadow-lg transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {name}
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default LeftSidebar;
