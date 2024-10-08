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
      className="hidden lg:flex lg:w-1/4 items-center align-middle justify-center relative ml-8"
    >
      <Image
        src="/left-scroll.png"
        alt="Left Scroll"
        fill
        style={{ objectFit: 'contain' }}
        className="relative z-20"
        priority={true}
      />
      <nav className="flex items-center align-middle justify-center z-20">
        <div className="flex flex-col space-y-8 mr-4">
          {sideItems.map(({ name, key, image }) => (
            <motion.button
              key={key}
              onClick={() => setSelectedScrollItem(key)}
              className={`flex items-center text-black text-lg py-2 space-x-2`}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image}
                alt={name}
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
                className="relative z-20 scale-150 mr-1"
                priority={true}
              />
              <span className='shadow-md py-2 px-4 rounded-2xl animate-background font-toxType font-semibold text-gray-800 text-xl'>{name}</span>
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default LeftSidebar;
