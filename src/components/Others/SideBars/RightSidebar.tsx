import { useGlobalContext } from '@/context/GlobalContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PromoteText1, PromoteText2, PromoteText3 } from '@/components/Templates/ScrollsContents/PromoteText';

const RightSidebar = () => {
  const { selectedScrollItem } = useGlobalContext();

  const renderContent = () => {
    switch (selectedScrollItem) {
      case 'map':
        return <PromoteText1 />;
      case 'lore':
        return <PromoteText2 />;
      case 'home':
        return <PromoteText3 />;
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
      <nav className="flex items-center align-middle justify-center z-20 max-w-40 mt-4">
        <div className="flex flex-col space-y-4 mr-4">
          <div className="px-20 md:px-0 max-h-[74vh] lg:max-h-[50vh] overflow-y-auto hide-scrollbar">
            {renderContent()}
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default RightSidebar;
