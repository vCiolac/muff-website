import Image from 'next/image';

const RightSidebar = () => {
  return (
    <div className="hidden lg:flex lg:w-1/5 relative">
      <Image
        src="/left-scroll-clean.png" // Atualize o caminho da imagem (se você tiver uma imagem separada para a direita)
        alt="Right Scroll"
        layout="fill"
        objectFit="contain"
        className="z-10 invert"
      />
      <nav className="absolute top-0 right-0 p-6 z-20">
        <ul>
          <li>Inventory</li>
          <li>Skills</li>
          <li>Settings</li>
        </ul>
      </nav>
    </div>
  );
};

export default RightSidebar;
