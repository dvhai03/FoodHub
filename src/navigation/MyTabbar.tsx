/* eslint-disable prettier/prettier */
import {cloneElement} from 'react';
import React, {
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// import {useTranslation} from 'react-i18next';
// import {LanguageType} from '../languages/locales/type';
import AppText from '../component/Text/AppText';
import AppIcon from '../component/Icon/AppIcon';
import {FFilled} from '../assets/icon/FFilled';
import {useThemeToggle} from '../hook/UseTheme';
type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};

export default function MyTabbar({state, descriptors, navigation}: Props) {
  const {theme} = useThemeToggle();
  // const {t} = useTranslation();
  const tabIcons = [
    {
      icon: (
        <AppIcon
          icon={FFilled.Home_icon}
          size={24}
          iconColor={theme.colors.Outline_Variant}
        />
      ),
      iconActive: (
        <AppIcon
          icon={FFilled.Home_icon}
          size={24}
          iconColor={theme.colors.Primary}
        />
      ),
      text: 'Home',
    },
    {
      icon: (
        <AppIcon
          icon={FFilled.Shopping_cart_icon}
          size={24}
          iconColor={theme.colors.Outline_Variant}
        />
      ),
      iconActive: (
        <AppIcon
          icon={FFilled.Shopping_cart_icon}
          size={24}
          iconColor={theme.colors.Primary}
        />
      ),
      text: 'Cart',
    },
    {
      icon: (
        <AppIcon
          icon={FFilled.Star_list_icon}
          size={24}
          iconColor={theme.colors.Outline_Variant}
        />
      ),
      iconActive: (
        <AppIcon
          icon={FFilled.Star_list_icon}
          size={24}
          iconColor={theme.colors.Primary}
        />
      ),
      text: 'Home',
    },
    {
      icon: (
        <AppIcon
          icon={FFilled.Setting_icon2}
          size={24}
          iconColor={theme.colors.Outline_Variant}
        />
      ),
      iconActive: (
        <AppIcon
          icon={FFilled.Setting_icon2}
          size={24}
          iconColor={theme.colors.Primary}
        />
      ),
      text: 'Setting',
    },
    {
      icon: (
        <AppIcon
          icon={FFilled.Notification_icon}
          size={24}
          iconColor={theme.colors.Outline_Variant}
        />
      ),
      iconActive: (
        <AppIcon
          icon={FFilled.Notification_icon}
          size={24}
          iconColor={theme.colors.Primary}
        />
      ),
      text: 'Notifications',
    },
  ];
  return (
    <View
      // background={theme.tabbarColor}
      style={[styles.container, {backgroundColor: theme.colors.Surface}]}
      // pb={AppConstant.IS_IOS ? bottom : 55}
      // height={bottom + 45}
      // pv={8}
    >
      {state.routes.map(
        (route: {key: string | number; name: any}, index: number) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[
                isFocused ? styles.isFocused : styles.unFocused,
                {padding: 20},
              ]}>
              {isFocused ? (
                <View
                  style={{
                    alignContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  {cloneElement(tabIcons[index].iconActive)}
                  <AppText
                    textStyle="Body_Large"
                    color={isFocused && theme.colors.Primary}
                    style={{marginLeft: 10}}>
                    {tabIcons[index].text}
                  </AppText>
                </View>
              ) : (
                cloneElement(tabIcons[index].icon)
              )}
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    zIndex: 1,
    elevation: 10,
    paddingHorizontal: 4,
  },
  isFocused: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  unFocused: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  wrapItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
