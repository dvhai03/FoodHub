/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useThemeToggle} from '../hook/UseTheme';
import AppText from '../component/Text/AppText';
import AppIcon from '../component/Icon/AppIcon';
import {FFilled} from '../assets/icon/FFilled';
import AppCustomButton from '../component/Button/CustomButton';
type menuType = {
  id: number;
  text: string;
  icon: ReactNode;
  onPress: () => void;
};
const DrawerContentHome = () => {
  const {theme} = useThemeToggle();

  const menu: menuType[] = [
    {
      id: 1,
      text: 'My Orders',
      icon: <AppIcon icon={FFilled.Bell_icon} size={24} />,
      onPress: () => {},
    },
    {
      id: 2,
      text: 'My Profile',
      icon: <AppIcon icon={FFilled.Profile_icon} size={24} />,
      onPress: () => {
        // navigation.navigate('GroupListScreen')
      },
    },
    {
      id: 3,
      text: 'Delivery Address',
      icon: <AppIcon icon={FFilled.Location_icon} size={24} />,
      onPress: () => {
        // navigation.navigate('FriendScreen')
      },
    },
    {
      id: 4,
      text: 'Payment Methods',
      icon: <AppIcon icon={FFilled.Cards_icon} size={24} />,
      onPress: () => {
        // navigation.navigate('ReelScreen')
      },
    },
    {
      id: 5,
      text: 'Contact Us',
      icon: <AppIcon icon={FFilled.Email_icon} size={24} />,
      onPress: () => {
        // navigation.navigate('ReelScreen')
      },
    },
    {
      id: 6,
      text: 'Change Language',
      icon: <AppIcon icon={FFilled.Trash_icon} size={24} />,
      onPress: () => {
        // navigation.navigate('ReelScreen')
      },
    },
    {
      id: 7,
      text: 'Settings',
      icon: <AppIcon icon={FFilled.Setting_icon} size={24} />,
      onPress: () => {
        // navigation.navigate('ReelScreen')
      },
    },
    {
      id: 8,
      text: 'Helps & FAQs',
      icon: <AppIcon icon={FFilled.Question_icon} size={24} />,
      onPress: () => {
        // navigation.navigate('ReelScreen')
      },
    },
  ];
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.Surface}]}>
      <Image
        source={require('../assets/images/avata.png')}
        height={90}
        width={90}
        borderRadius={45}
      />
      <View style={{marginTop: 17, marginBottom: 3}}>
        <AppText textStyle="Title_Large" color={theme.colors.On_BackGround}>
          Brock
        </AppText>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppText textStyle="Body_Medium" color={theme.colors.Sencondary}>
            thanhnv.dev.work@gmail.com
          </AppText>
          <AppIcon
            icon={FFilled.Warning_icon}
            size={24}
            iconColor={theme.colors.Primary}
          />
        </View>
      </View>
      {menu.map((item: menuType, index: number) => (
        <ButtonComponent key={index} item={item} index={index} />
      ))}
      <View style={styles.view_logout}>
        <AppCustomButton
          style={[
            styles.button_logout,
            {
              backgroundColor: theme.colors.Primary,
            },
          ]}
          type
          icon="Logout_icon"
          size={18}
          icon_color={theme.colors.Primary}>
          <AppText
            textStyle="Body_Large"
            color={theme.colors.On_Primary}
            style={{marginHorizontal: 7}}>
            Log Out
          </AppText>
        </AppCustomButton>
      </View>
    </View>
  );
};
export default DrawerContentHome;

const ButtonComponent = ({item, index}: {item: menuType; index: number}) => {
  const {theme} = useThemeToggle();
  return (
    <TouchableOpacity
      style={[styles.button, {marginVertical: index % 2 === 0 ? 30 : 0}]}
      onPress={item.onPress}>
      {item.icon}
      <AppText
        textStyle="Body_Large"
        color={theme.colors.On_BackGround}
        style={{marginLeft: 12}}>
        {item.text}
      </AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 26,
    paddingTop: 36,
  },
  button: {
    flexDirection: 'row',
  },
  button_logout: {
    padding: 7,
    width: 'auto',
  },
  view_logout: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
