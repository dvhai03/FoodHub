/* eslint-disable prettier/prettier */
import React from 'react';
import DrawerContentHome from './DrawerContentHome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ParamsRootNav} from './params';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/Home/HomeScreen';
import CartScreen from '../Screen/Cart/CartScreen';
import StartScreen from '../Screen/Hearthy/StartScreen';
import NotificationsScreen from '../Screen/Notifications/NotificationsScreen';
import SettingScreen from '../Screen/Setting/SettingScreen';
import MyTabbar from './MyTabbar';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerContainer from './DrawerContainer';
import {useThemeToggle} from '../hook/UseTheme';
import RestaurantDetailsScreen from '../Screen/Home/RestaurantDetailsScreen';
import DishDetailsScreen from '../Screen/Home/DishDetailsScreen';

const RenderWrapDrawer = () => (
  <DrawerContainer
    style={{
      borderRadius: 28,
      elevation: 8,
    }}>
    <MyTabs />
  </DrawerContainer>
);
const Drawer = createDrawerNavigator<ParamsRootNav>();
const DrawerNavigation = () => {
  const {theme} = useThemeToggle();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'left',
        headerStyle: {backgroundColor: 'white'},
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {width: '66%', zIndex: 1},
        sceneContainerStyle: {backgroundColor: theme.colors.Surface},
      }}
      drawerContent={DrawerContentHome}>
      <Drawer.Screen name="Home" component={RenderWrapDrawer} />
    </Drawer.Navigator>
  );
};
const Tab = createBottomTabNavigator<ParamsRootNav>();
const tabBar = (props: BottomTabBarProps) => <MyTabbar {...props} />;
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={tabBar}
      initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CarScreen" component={CartScreen} />
      <Tab.Screen name="StartScreen" component={StartScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
      <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}
const MainNavigator = () => {
  const Stack = createStackNavigator<ParamsRootNav>();
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen
        name="RestaurantDetailsScreen"
        component={RestaurantDetailsScreen}
      />
      <Stack.Screen name="DishDetailsScreen" component={DishDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
