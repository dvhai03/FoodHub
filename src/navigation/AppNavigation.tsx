/* eslint-disable prettier/prettier */
import React from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '../redux/store';

import AuthNavigator from './AuthNavigator';
import {View} from 'react-native';
import MainNavigator from './MainNavigator';

export default function AppNavigation() {
  const isLogin = useSelector((state: RootState) => state.loginSlice.state);
  return (
    <View style={{flex: 1}}>
      {isLogin ? <MainNavigator /> : <AuthNavigator />}
    </View>
  );
}
