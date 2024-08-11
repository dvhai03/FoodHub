/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {darkTheme, lightTheme} from '../theme/CustomTheme';

interface UseThemeToggleResult {
  isDarkTheme: boolean;
  theme: typeof lightTheme;
  toggleTheme: () => void;
}
export const useThemeToggle = (): UseThemeToggleResult => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkTheme(prevState => !prevState);
  };
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return {
    isDarkTheme,
    theme,
    toggleTheme,
  };
};
