/* eslint-disable prettier/prettier */
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {FFilled} from '../../assets/icon/FFilled';
import AppIcon from '../Icon/AppIcon';

type CustomButtonProps = {
  backgroundColor?: string;
  icon: keyof typeof FFilled;
  onPress?: () => void;
  size?: number;
  icon_color?: string;
  disable?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function AppIconButton({
  backgroundColor,
  icon,
  icon_color,
  size = 24,
  onPress = () => {},
  disable = false,
  style,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[styles.container, {backgroundColor: backgroundColor}, style]}>
      <AppIcon icon={FFilled[icon]} size={size} iconColor={icon_color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
