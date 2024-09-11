import { ChildrenInterface } from '@/interfaces/ChildrenInterface';
import Image from 'next/image';

const MainContent = ({ children }: ChildrenInterface) => {
  return (
    <main className="relative flex-1 overflow-hidden ">
      <div className="absolute inset-0">
        <Image
          src="/mainContent.png"
          alt="Background Frame"
          layout="fill"
          objectFit="contain"
          className="z-0"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full ">
        <div className="w-full max-w-sm p-12 md:max-w-xl lg:max-w-2xl lg:p-4 2xl:max-w-3xl 3xl:max-w-4xl ">
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
