import { useGlobalContext } from '@/context/GlobalContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RightSidebar = () => {
  const { selectedScrollItem } = useGlobalContext();

  const renderContent = () => {
    switch (selectedScrollItem) {
      case 'map':
        return <div>
          <Image
            src="/foto_mapa.jpg"
            alt="Map"
            width={160}
            height={160}
            className="rounded-xl px-1 opacity-90"
            priority={true} />
        </div>;
      case 'lore':
        return <p>Texto sobre Lore</p>;
      case 'home':
        return <p>Sobre a Casa</p>;
      default:
        return <p>Selecione um item no menu.</p>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="hidden lg:flex lg:w-1/4 items-center align-middle justify-center relative mr-8"
    >
      <Image
        src="/right-scroll.png"
        alt="Right Scroll"
        fill
        style={{ objectFit: 'contain' }}
        className="relative z-20"
        priority={true}
      />
      <nav className="flex items-center align-middle justify-center z-20">
        <div className="flex flex-col space-y-4 mr-4">
          <div className="font-toxType py-2">
            {renderContent()}
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default RightSidebar;
