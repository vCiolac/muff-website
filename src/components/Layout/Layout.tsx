import { ChildrenInterface } from '@/interfaces/ChildrenInterface';
import Header from '../Others/Header/Header';
import Transition from '../Others/Transition/Transition';
import MainContent from '../Others/MainBox/MainContent';
import LeftSidebar from '../Others/SideBars/LeftSidebar';
import RightSidebar from '../Others/SideBars/RightSidebar';
import { GlobalProvider } from '@/context/GlobalContext';

const Layout = ({ children }: ChildrenInterface) => {
  return (
    <GlobalProvider>
      <Transition>
        <div className="min-h-screen flex flex-col overflow-hidden">
          <Header />
          <div className="flex pt-14 md:pt-28 min-h-screen max-h-screen justify-center">
            <LeftSidebar />
            <MainContent>
              {children}
            </MainContent>
            <RightSidebar />
          </div>
        </div>
      </Transition>
    </GlobalProvider>
  );
};

export default Layout;
