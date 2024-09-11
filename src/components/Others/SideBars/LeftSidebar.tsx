import { useGlobalContext } from '@/context/GlobalContext';
import { buttonOptions } from '@/data/sidebars';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LeftSidebar = () => {
  const { setSelectedContent } = useGlobalContext();

  return (
    <div className="hidden lg:flex lg:w-1/5 relative mt-28">
      <Image
        src="/left-scroll.png"
        alt="Left Scroll"
        layout="fill"
        objectFit="contain"
        className="z-10 scale-130 ml-16"
      />
      <nav className="absolute inset-0 flex items-center justify-center p-6 z-20 ml-28">
        <div className="flex flex-col space-y-4">
          {buttonOptions.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => setSelectedContent(id)}
              className={`bg-${id}-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-${id}-600 transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
