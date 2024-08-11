/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthParams} from './params';
import AppIcon from '../component/Icon/AppIcon';
import {FFilled} from '../assets/icon/FFilled';
import LoginScreen from '../Screen/Auth/LoginScreen';
import WellcomeScreen from '../Screen/Auth/WellcomeScreen';
import SignInScreen from '../Screen/Auth/SignInScreen';
import OtpScreen from '../Screen/Auth/OtpScreen';
import ForgotPassScreen from '../Screen/Auth/ForgotPassScreen';

const {Navigator, Screen} = createStackNavigator<AuthParams>();
export function BackIcon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <AppIcon icon={FFilled.Arrow_left_icon} size={16} />
    </TouchableOpacity>
  );
}

const HeaderLeft = () => <BackIcon />;
export default function AuthNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        headerLeft: HeaderLeft,
        headerTransparent: true,
        headerTitleAlign: 'center',
      }}
      initialRouteName={'WellComeScreen'}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="WellComeScreen" component={WellcomeScreen} />
      <Screen name="SignInScreen" component={SignInScreen} />
      <Screen name="OtpScreen" component={OtpScreen} />
      <Screen name="ForgotPassScreen" component={ForgotPassScreen} />
    </Navigator>
  );
}
