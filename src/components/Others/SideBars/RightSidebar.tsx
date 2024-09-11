import { useGlobalContext } from '@/context/GlobalContext';
import { contentData } from '@/data/sidebars';
import Image from 'next/image';

const RightSidebar = () => {
  const { selectedContent } = useGlobalContext();

  return (
    <div className="hidden lg:flex lg:w-1/5 relative mt-28">
      <Image
        src="/right-scroll.png"
        alt="Right Scroll"
        layout="fill"
        objectFit="contain"
        className="z-10 transform scale-130 ml-[-3rem]"
      />
      <nav className="absolute inset-0 flex items-center justify-center z-20 ml-[-3rem] max-w-60 text-center">
        <div className="flex flex-col space-y-4">
          <div className="p-6">
            {contentData[selectedContent] || <div>Selecione um conteúdo</div>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default RightSidebar;
