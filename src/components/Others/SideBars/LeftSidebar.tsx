import Image from 'next/image';

const LeftSidebar = () => {
  return (
    <div className="hidden lg:flex lg:w-1/5 relative">
      <Image
        src="/left-scroll-clean.png" // Atualize o caminho da imagem
        alt="Left Scroll"
        layout="fill"
        objectFit="contain"
        className="z-10"
      />
      <nav className="absolute top-0 left-0 p-6 z-20">
        <ul>
          <li>Champions</li>
          <li>Monsters</li>
          <li>World Map</li>
          <li>Tyrragone</li>
          <li>Vanguard</li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSidebar;
