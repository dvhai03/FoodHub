import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useThemeToggle} from '../../hook/UseTheme';

const HomeScreen = () => {
  const {theme} = useThemeToggle();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.colors.Surface},
      ]}></View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
