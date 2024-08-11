/* eslint-disable prettier/prettier */
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import AppIcon from '../Icon/AppIcon';
import {FFilled} from '../../assets/icon/FFilled';
import {useThemeToggle} from '../../hook/UseTheme';

type CustomButtonProps = {
  icon: keyof typeof FFilled;
  onPress?: () => void;
  disable?: boolean;
  size?: number;
  icon_color?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  type?: boolean;
};

export default function AppCustomButton({
  onPress = () => {},
  icon,
  size = 24,
  disable = false,
  icon_color,
  children,
  type,
  style,
}: CustomButtonProps) {
  const {theme} = useThemeToggle();
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[styles.container, style]}>
      <View
        style={
          type && [styles.viewIcon, {backgroundColor: theme.colors.On_Primary}]
        }>
        <AppIcon icon={FFilled[icon]} size={size} iconColor={icon_color} />
      </View>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 28,
  },
  viewIcon: {
    padding: 6,
    borderRadius: 20,
  },
});
