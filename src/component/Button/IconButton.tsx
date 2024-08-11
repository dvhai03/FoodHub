/* eslint-disable prettier/prettier */
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {useThemeToggle} from '../../hook/UseTheme';

type CustomButtonProps = {
  backgroundColor?: string;

  onPress?: () => void;
  disable?: boolean;
  children: React.ReactNode;
};

export default function AppIconButton({
  backgroundColor,
  children,
  onPress = () => {},
  disable = false,
}: CustomButtonProps) {
  const {theme} = useThemeToggle();
  backgroundColor = theme.colors.Surface;
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  button: {
    height: 48,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
