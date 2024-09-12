import { useGlobalContext } from '@/context/GlobalContext';
import AboutContent from './AboutContent';
import HomeContent from './HomeContent';
import GameContent from './GameContent';
import CharactersContent from './CharactersContent';
import MonstersContent from './MonstersContent';
import DonationContent from './DonationContent';


const Home = () => {
  const { selectedNavItem } = useGlobalContext();

  const renderContent = () => {
    switch (selectedNavItem) {
      case 'home':
        return <HomeContent />;
      case 'game':
        return <GameContent />;
      case 'about':
        return <AboutContent />;
      case 'donation':
        return <DonationContent />
      case 'characters':
        return <CharactersContent />
      case 'monsters':
        return <MonstersContent />;
      default:
        return <p>Selecione um item no menu.</p>;
    }
  };

  return (
    <section>
      {renderContent()}
    </section>
  );
};

export default Home;
