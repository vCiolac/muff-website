import { createContext, useState, ReactNode, useContext } from 'react';
import { contentData } from '@/data/sidebars';

interface GlobalContextType {
  selectedContent: keyof typeof contentData;
  setSelectedContent: (content: keyof typeof contentData) => void;
  selectedNavItem: string;
  setSelectedNavItem: (item: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedContent, setSelectedContent] = useState<keyof typeof contentData>('inventory');
  const [selectedNavItem, setSelectedNavItem] = useState<string>('home');

  return (
    <GlobalContext.Provider value={{ selectedContent, setSelectedContent, selectedNavItem, setSelectedNavItem }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
