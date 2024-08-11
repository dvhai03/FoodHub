/* eslint-disable prettier/prettier */
import React from 'react';
import {SvgXml} from 'react-native-svg';

interface AppIconProps {
  icon: string;
  iconColor?: string;
  size?: number;
}

const AppIcon: React.FC<AppIconProps> = ({icon, iconColor, size}) => {
  const modifiedColor = icon
    .replaceAll('fill="black"', 'fill="' + iconColor + '"')
    .replaceAll('stroke="black"', 'stroke="' + iconColor + '"');
  return <SvgXml xml={modifiedColor} width={size} height={size} />;
};

export default AppIcon;
