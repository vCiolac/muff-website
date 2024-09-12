import { useGlobalContext } from '@/context/GlobalContext';
import Image from 'next/image';
import { links } from '@/data/nav';
import { motion } from 'framer-motion';

const Nav = () => {
  const { setSelectedNavItem } = useGlobalContext();

  const handleButtonClick = (item: string) => {
    setSelectedNavItem(item);
  };

  return (
    <nav className="flex flex-row gap-y-6 justify-center items-center xl:gap-x-6">
      {links.map((link, index) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={index}
          className="relative flex items-center justify-center w-40 h-16 md:h-6"
          aria-label={link.name}
          onClick={() => handleButtonClick(link.key)}
        >
          {/* Nome do link */}
          <span className="relative z-20 mt-5 text-white text-center font-extrabold text-stroke">
            {link.name}
          </span>

          {/* Ícone do link (acima do botão) */}
          <div className="absolute bottom-[-0.1rem] flex justify-center items-center z-10">
            <Image
              src={link.image}
              alt={link.name}
              width={120}  // Ajuste o tamanho do ícone aqui
              height={120}
              style={{ objectFit: 'contain' }}
              className="object-contain"
            />
          </div>

          {/* Imagem de fundo (botão) */}
          <Image
            src="/button1.png"
            alt="Button"
            width={110}
            height={110}
            style={{ objectFit: 'contain' }}
            className="absolute bottom-[-0.7rem]"
          />
        </motion.button>
      ))}
    </nav>
  );
};

export default Nav;
