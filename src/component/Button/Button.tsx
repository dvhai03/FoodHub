/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
type CustomButtonProps = {
  backgroundColor?: string;
  width?: number;
  borderRadius?: number;
  padding?: number;
  onPress?: () => void;
  disable?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function AppButton({
  backgroundColor,
  children,
  width,
  padding,
  borderRadius = 30,
  style,
  onPress = () => {},
  disable = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={styles.container}>
      <View
        style={[
          style,
          {
            backgroundColor: backgroundColor,
            width: width ? width : '100%',
            padding: padding,
            borderRadius: borderRadius,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
