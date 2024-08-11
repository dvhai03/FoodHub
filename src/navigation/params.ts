/* eslint-disable prettier/prettier */
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type ParamsRootNav = {
  Home: undefined;
  MyTabs: undefined;
  DrawerNavigation: undefined;
  HomeScreen: undefined;
  SettingScreen: undefined;
  CarScreen: undefined;
  StartScreen: undefined;
  NotificationsScreen: undefined;
};
export type AuthParams = {
  LoginScreen: undefined;
  WellComeScreen: undefined;
  SignInScreen: undefined;
  OtpScreen: undefined;
  ForgotPassScreen: undefined;
};
export type AppScreenProps<
  RouteName extends keyof ParamsRootNav = keyof ParamsRootNav,
> = StackScreenProps<ParamsRootNav, RouteName>;

export type AppNavigationProps<
  RouteName extends keyof ParamsRootNav = keyof ParamsRootNav,
> = StackNavigationProp<ParamsRootNav, RouteName>;
