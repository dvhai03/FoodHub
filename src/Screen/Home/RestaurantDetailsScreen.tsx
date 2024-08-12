/* eslint-disable prettier/prettier */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useThemeToggle} from '../../hook/UseTheme';
import Goback from '../../component/Button/Goback';
import {appSize} from '../../config/AppConstant';
import AppText from '../../component/Text/AppText';
import Evaluate from './component/Evaluate';
import AppIcon from '../../component/Icon/AppIcon';
import {FFilled} from '../../assets/icon/FFilled';
import AppIconButton from '../../component/Button/IconButton';
import ItemProductRestaurant from './component/ItemProductRestaurant';
import {data3} from './dataFake/fakedata';

const RestaurantDetailsScreen = () => {
  const {theme} = useThemeToggle();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.Surface}]}>
      <Goback />
      <View
        style={[
          styles.image,
          {
            marginTop: appSize(20),
            backgroundColor: theme.colors.Surface_variant,
          },
        ]}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/3125/6740/4cf6f807afb50d86775652344a698ef7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AkZUcpI5uuqOS4Dh91q5oUM2Z73lDn5VVOyBu28yapkcPTcC36KLckF33wAPU7Be8Oh0~hgxSpt3qC~G8n2EMQBEeKmqFzHVWzJNpq0OZ4BB0tUsLjECUeqlGIzqf-fi2g8j-ti9hSS7I8druuP2akutmwuwgfweMZTRQgSfWGrEO1ZjGFS9B3urvS2l9xJQN63dG40j7KyzFqfKb1DZQXvE4JEPNTqaYpAPGSjlKG2Ax2EGzwDn-ArWltCxb88~30zSF1znaKmO-UE~nwI2f9cBBwwjv-9kXbmXZszjJEfUnEESSVHxBCO73evYprxu~uE3l8w-LT2J6pNKUE3Uyg__',
          }}
          style={styles.logo_resstau}
        />
        <View style={styles.des}>
          <View
            style={{
              padding: appSize(10),
              backgroundColor: 'white',
              borderRadius: 12,
            }}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/45e2/09f9/e727e43e2ab320783f1215031d8e7eba?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N9tOWiCB4kgYB6GMSFu-yuBzjghWLTMsZij4VmNX-45wI8-9aK6QseyBN-8kPCa-q5PBo78toxZLlhiWmqr9H7SengLlpzPIUSl0yJfnpxgdISnorW~otNSoxbIJNPmsEkvp0EUmmEh2iq8IUAsPvrXdSNWOBlcdSMpbSPxfDhFgTaxQYdrUcWUl1bjT~HjG3Ba3UpbkHrxfNOhUsYdt6wkyXEjXQ4fj8qaXu3p3XrDIx7GIJjzWNqB1jC0G5YrWi~FVi4pxVZh8nPuxAoZy1E3QHE6u3h959ttiPj~bHoWH~138~CPj4sloL~GCStUKtZDy8kDaGJXXbESCOaq6Pg__',
              }}
              height={appSize(46)}
              width={appSize(46)}
            />
          </View>
          <View style={{marginLeft: appSize(10)}}>
            <AppText textStyle="Headline_Small" color={theme.colors.Primary}>
              Restaurant Name
            </AppText>
            <View style={styles.evalue}>
              <Evaluate
                start={4.5}
                quality={25}
                background={theme.colors.Outline_Variant}
              />
              <AppIcon
                icon={FFilled.check_circle_icon}
                size={15}
                iconColor={theme.colors.Primary}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.fill}>
        <View style={{flexDirection: 'row'}}>
          <AppText
            textStyle="Body_Medium"
            color={theme.colors.On_BackGround}
            style={{marginRight: appSize(5)}}>
            Short by:
          </AppText>
          <AppText textStyle="Body_Medium" color={theme.colors.Primary}>
            Price
          </AppText>
        </View>
        <AppIconButton
          icon="Search_status_icon"
          size={24}
          icon_color={theme.colors.On_BackGround}
        />
      </View>
      <ItemProductRestaurant data={data3} />
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: appSize(25),
  },
  fill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: appSize(21),
    alignItems: 'center',
  },
  des: {
    flexDirection: 'row',
    marginLeft: appSize(14),
    marginVertical: 15,
  },
  logo_resstau: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: appSize(136),
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
  evalue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
