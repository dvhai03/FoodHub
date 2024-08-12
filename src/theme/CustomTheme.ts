/* eslint-disable prettier/prettier */
import {MD3Theme, MD3LightTheme} from 'react-native-paper';
import {customColors} from './CustomColor';

export type CustomTheme = Omit<MD3Theme, 'colors'> & {
  colors: typeof customColors;
};

export const lightTheme: CustomTheme = {
  ...MD3LightTheme,
  colors: customColors,
};

export const darkTheme: CustomTheme = {
  ...MD3LightTheme,
  colors: {
    ...customColors,
    Primary: 'rgba(169, 199, 255, 1)',
    On_Primary: 'rgba(9, 48, 95, 1)',
    Sencondary: 'rgba(190, 199, 220, 1)',
    On_Sencondary: 'rgba(40, 49, 65, 1)',
    Tertiary: 'rgba(220, 188, 225, 1)',
    Error: 'rgba(105, 0, 5, 1)',
    On_Error: 'rgba(255, 255, 255, 1)',
    Error_Container: 'rgba(147, 0, 10, 1)',
    On_Error_Container: 'rgba(255, 218, 214, 1)',
    Primary_Container: 'rgba(39, 71, 119, 1)',
    Secondary_Container: 'rgba(62, 71, 89, 1)',
    Tertiary_Container: 'rgba(86, 62, 92, 1)',
    On_Primary_Container: 'rgba(214, 227, 255, 1)',
    On_Secondary_Container: 'rgba(218, 226, 249, 1)',
    On_Tertiary_Container: 'rgba(249, 216, 253, 1)',
    Surface_Dim: 'rgba(17, 19, 24, 1)',
    Surface: 'rgba(17, 19, 24, 1)',
    Surface_variant: 'rgba(68, 71, 78, 1)',
    Surface_Bright: 'rgba(55, 57, 62, 1)',
    Inverse_Surface: 'rgba(226, 226, 233, 1)',
    Inverse_On_Surface: 'rgba(46, 48, 54, 1)',
    Inverse_Primary: 'rgba(64, 95, 144, 1)',
    Surf_Container_Lowest: 'rgba(12, 14, 19, 1)',
    Surf_Container_Low: 'rgba(25, 28, 32, 1)',
    Surf_Container: 'rgba(29, 32, 36, 1)',
    Surf_Container_High: 'rgba(40, 42, 47, 1)',
    Surf_Container_Highest: 'rgba(51, 53, 58, 1)',
    On_Surface: 'rgba(226, 226, 233, 1)',
    On_Surface_Var: 'rgba(196, 198, 207, 1)',
    Outline: 'rgba(142, 144, 153, 1)',
    Outline_Variant: 'rgba(68, 71, 78, 1)',
    Scrim: 'rgba(0, 0, 0, 1)',
    Shadow: 'rgba(255, 255, 255, 0.15)',
    On_BackGround: 'rgba(226, 226, 233, 1)',
  },
};
