/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextStyle} from 'react-native';
import {styleText} from '../../theme/StyleText';
interface AppText {
  textStyle?: keyof typeof styleText;
  color?: string;
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right' | 'auto';
  style?: TextStyle;
  numberOfLines?: number;
}

const AppText: React.FC<AppText> = ({
  textStyle,
  color,
  children,
  textAlign,
  style,
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        style,
        textStyle ? styleText[textStyle] : styleText.Lable_Large,
        {color: color, textAlign: textAlign},
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
