import { ChildrenInterface } from '@/interfaces/ChildrenInterface';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MainContent = ({ children }: ChildrenInterface) => {

  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 3 }}
      className="relative lg:flex lg:w-2/4 items-center align-middle justify-center my-4 lg:mr-3">
      <div className="hidden md:block lg:hidden ">
        <Image
          src="/mainContent-desktop.png"
          alt="Background Frame Desktop"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0 "
          priority={true}
        />
      </div>
      <div className="hidden lg:block ">
        <Image
          src="/mainContent-desktop.png"
          alt="Background Frame Desktop"
          fill
          style={{ objectFit: 'contain' }}
          className="z-0 "
          priority={true}
        />
      </div>
      <main className="overflow-hidden">
        {/* Imagem Mobile */}
        <div className="block md:hidden inset-0 mt-[-1.5rem]">
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
        <div className="relative z-10 flex items-center justify-center hide-scrollbar overflow-y-auto lg:mt-0 mt-12">
          <div className="transform scale-[0.95] px-20 md:px-0 max-h-[74vh] lg:max-h-[62vh] max-w-sm md:max-w-lg">
            {children}
          </div>
        </div>
      </main>
    </motion.section>
  );
};

export default MainContent;
