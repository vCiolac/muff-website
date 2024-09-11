import { ChildrenInterface } from '@/interfaces/ChildrenInterface';
import Image from 'next/image';

const MainContent = ({ children }: ChildrenInterface) => {
  return (
    <section className="relative flex-1 mt-32">
      <main className="overflow-hidden">
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
          <div className="w-full max-w-sm p-12 md:max-w-xl lg:max-w-2xl lg:px-4 lg:py-8 2xl:max-w-3xl 3xl:max-w-4xl ">
            {children}
          </div>
        </div>
      </main>
    </section>
  );
};

export default MainContent;
