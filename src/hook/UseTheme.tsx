/* eslint-disable prettier/prettier */
import {useThemeContext} from '../context/ThemeContext';

export const useThemeToggle = () => {
  const {isDarkTheme, theme, toggleTheme} = useThemeContext();

  return {
    isDarkTheme,
    theme,
    toggleTheme,
  };
};
