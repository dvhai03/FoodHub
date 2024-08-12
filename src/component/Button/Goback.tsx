/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppButton from './Button';
import AppIcon from '../Icon/AppIcon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParams} from '../../navigation/params';
import {useThemeToggle} from '../../hook/UseTheme';
import {FFilled} from '../../assets/icon/FFilled';
import {appSize} from '../../config/AppConstant';

const Goback = () => {
  const navigation = useNavigation<StackNavigationProp<AuthParams>>();

  const {theme} = useThemeToggle();
  return (
    <View style={[styles.view_skip]}>
      <AppButton
        onPress={() => navigation.goBack()}
        backgroundColor={theme.colors.Surface}
        padding={8}
        style={[styles.box_shadow, {shadowColor: theme.colors.Shadow}]}
        borderRadius={12}>
        <AppIcon
          icon={FFilled.Arrow_left_icon}
          size={24}
          iconColor={theme.colors.On_BackGround}
        />
      </AppButton>
    </View>
  );
};

export default Goback;

const styles = StyleSheet.create({
  view_skip: {
    position: 'absolute',
    top: appSize(37),
    left: appSize(30),
    zIndex: 2,
  },
  box_shadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
