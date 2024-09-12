import { ChildrenInterface } from '@/interfaces/ChildrenInterface';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MainContent = ({ children }: ChildrenInterface) => {

  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 3 }}
      className="md:relative flex-1 md:mt-32 mb-3">
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/mainContent-desktop.png"
          alt="Background Frame Desktop"
          fill
          style={{ objectFit: 'contain' }}
          className="z-0"
          priority={true}
        />
      </div>
      <main className="overflow-hidden mt-10">
        {/* Imagem Mobile */}
        <div className="block md:hidden absolute inset-0 mt-[4.5rem]">
          <Image
            src="/mainContent-mobile.png"
            alt="Background Frame Mobile"
            fill
            style={{ objectFit: 'contain' }}
            className="z-0"
            priority={true}
          />
        </div>

        {/* Conteúdo que rola */}
        <div className="relative z-10 flex items-center justify-center hide-scrollbar overflow-y-auto md:mt-0 mt-16">
          <div className="w-full transform scale-[0.9] px-20 md:px-14 max-h-[80vh] md:max-h-[66vh] max-w-sm md:max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            {children}
          </div>
        </div>
      </main>
    </motion.section>
  );
};

export default MainContent;
