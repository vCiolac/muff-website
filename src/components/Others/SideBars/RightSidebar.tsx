import { useGlobalContext } from '@/context/GlobalContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RightSidebar = () => {
  const { selectedScrollItem } = useGlobalContext();

  const renderContent = () => {
    switch (selectedScrollItem) {
      case 'map':
        return <p>Imagem do Mapa</p>;
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
      className="hidden lg:flex lg:w-1/5 relative mt-[7rem]"
    >
      <Image
        src="/right-scroll.png"
        alt="Right Scroll"
        fill
        style={{ objectFit: 'contain' }}
        className="relative z-20 transform scale-125 ml-[-3rem]"
        priority={true}
      />
      <nav className="absolute inset-0 flex items-center justify-center z-20 ml-[-3rem] max-w-60 text-center">
        <div className="flex flex-col space-y-4">
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default RightSidebar;
