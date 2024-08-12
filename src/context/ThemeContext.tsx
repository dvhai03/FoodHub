/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useState, ReactNode} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from '../theme/CustomTheme'; // Adjust the path as needed

interface ThemeContextType {
  isDarkTheme: boolean;
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkTheme(prevState => !prevState);
  };
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDarkTheme, theme, toggleTheme}}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
