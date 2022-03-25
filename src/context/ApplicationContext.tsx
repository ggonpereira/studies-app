import React, { createContext, useState } from 'react';
import { Studies } from '../types/Studies';

export interface ApplicationContext {
  currentStudy: Studies | null;
  setCurrentStudy: React.Dispatch<React.SetStateAction<Studies | null>>;
}

export const ApplicationContext = createContext<ApplicationContext>({} as ApplicationContext);

type Props = {
  children: React.ReactNode;
};

export default function ApplicationContextProvider({ children }: Props) {
  const [currentStudy, setCurrentStudy] = useState<Studies | null>(() => {
    const storedStudy = localStorage.getItem('@studiesApp:Studies');
    if (storedStudy) {
      const parsedStoredValue: Studies[] = JSON.parse(storedStudy);
      const activeStudy = parsedStoredValue.find((study) => study.isCurrentStudy);
      if (activeStudy) return activeStudy || null;
    }
    return null;
  });

  return (
    <ApplicationContext.Provider value={{ currentStudy, setCurrentStudy }}>
      {children}
    </ApplicationContext.Provider>
  );
}
