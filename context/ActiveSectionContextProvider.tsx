'use client';
import { TSectionName } from '@/types/globalTypes';
import { createContext, useContext, useState } from 'react';

interface IActiveSectionContextType {
  activeSection: TSectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<TSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContext = createContext<IActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<TSectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  }
  return context;
}

export { ActiveSectionContext, ActiveSectionContextProvider, useActiveSectionContext };
