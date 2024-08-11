/* eslint-disable prettier/prettier */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useThemeToggle} from '../../hook/UseTheme';
import AppIcon from '../../component/Icon/AppIcon';
import {FFilled} from '../../assets/icon/FFilled';
import AppText from '../../component/Text/AppText';

const SplashScreen = () => {
  const {theme} = useThemeToggle();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.Surface}]}>
      <View
        style={[
          styles.box_logo,
          {backgroundColor: theme.colors.Primary_Container},
        ]}>
        <AppIcon
          icon={FFilled.icon}
          size={60}
          iconColor={theme.colors.Primary}
        />
      </View>
      <View style={styles.view_name_app}>
        <AppText textStyle="Splash_font" color={theme.colors.Primary}>
          FOOD{' '}
        </AppText>
        <AppText textStyle="Splash_font2" color={theme.colors.Primary}>
          HUB
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_logo: {
    borderRadius: 24,
    padding: 16,
  },
  view_name_app: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SplashScreen;
