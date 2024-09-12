import { createContext, useState, ReactNode, useContext } from 'react';

interface GlobalContextType {
  selectedScrollItem: string;
  setSelectedScrollItem: (content: string) => void;
  selectedNavItem: string;
  setSelectedNavItem: (item: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedScrollItem, setSelectedScrollItem] = useState<string>('map');
  const [selectedNavItem, setSelectedNavItem] = useState<string>('home');

  return (
    <GlobalContext.Provider value={{ selectedScrollItem, setSelectedScrollItem, selectedNavItem, setSelectedNavItem }}>
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
