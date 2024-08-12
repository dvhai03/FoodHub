/* eslint-disable prettier/prettier */
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
type DrawerContainerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  style?: StyleProp<ViewStyle>;
};
const DrawerContainer = ({children, style}: DrawerContainerProps) => {
  const drawerProgress = useDrawerProgress();

  const viewStyle = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 0.98], [0, 200]); // Adjust 200 to desired max translation
    const scale = interpolate(drawerProgress.value, [0, 0.8], [1, 0.8]); // Adjust scale as needed

    return {
      transform: [{translateX}, {scale}],
    };
  });
  return (
    <Animated.View style={[styles.drawerContainer, style, viewStyle]}>
      {children}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
});

export default DrawerContainer;
