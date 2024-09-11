import { useGlobalContext } from '@/context/GlobalContext';
import AboutContent from './AboutContent';
import ContactContent from './ContactContent';
import HomeContent from './HomeContent';


const Home = () => {
  const { selectedNavItem } = useGlobalContext();

  const renderContent = () => {
    switch (selectedNavItem) {
      case 'home':
        return <HomeContent />;
      case 'about':
        return <AboutContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <p>Selecione um item no menu.</p>;
    }
  };

  return (
    <section className='p-12'>
      {renderContent()}
    </section>
  );
};

export default Home;
