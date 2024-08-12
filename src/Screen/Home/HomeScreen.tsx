/* eslint-disable prettier/prettier */
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useThemeToggle} from '../../hook/UseTheme';
import AppButton from '../../component/Button/Button';
import AppIcon from '../../component/Icon/AppIcon';
import {FFilled} from '../../assets/icon/FFilled';
import AppText from '../../component/Text/AppText';
import ItemCategory from './component/ItemCategory';
import {data, data2} from './dataFake/fakedata';
import ItemRestaurant from './component/ItemRestaurant';
import {appSize} from '../../config/AppConstant';

const HomeScreen = () => {
  const {theme} = useThemeToggle();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.Surface}]}>
      <View style={styles.header}>
        <AppButton
          backgroundColor={theme.colors.Surface}
          padding={appSize(8)}
          style={[styles.box_shadow, {shadowColor: theme.colors.Shadow}]}
          borderRadius={12}>
          <AppIcon
            icon={FFilled.Menu_list_icon}
            size={24}
            iconColor={theme.colors.Error}
          />
        </AppButton>
        <View style={{alignItems: 'center'}}>
          <AppText color={theme.colors.Sencondary} textStyle="Body_Medium">
            Deliver to
          </AppText>
          <AppText color={theme.colors.Primary} textStyle="Body_Large">
            4102 Pretty View Lane{' '}
          </AppText>
        </View>
        <View>
          <Image
            source={require('../../assets/images/avata.png')}
            style={[
              styles.box_shadow,
              {width: appSize(40), height: appSize(40)},
            ]}
            borderRadius={10}
          />
        </View>
      </View>

      <AppText
        textStyle="Headline_Large"
        color={theme.colors.On_BackGround}
        style={{paddingHorizontal: appSize(25)}}>
        What would you like{'\n'}to order
      </AppText>

      <View style={styles.view_search}>
        <View
          style={[
            styles.search,
            {
              backgroundColor: theme.colors.Surface_variant,
              borderColor: theme.colors.Outline_Variant,
            },
          ]}>
          <AppIcon
            icon={FFilled.Search_status_icon}
            size={24}
            iconColor={theme.colors.On_BackGround}
          />
          <AppText
            textStyle="Body_Medium"
            color={theme.colors.On_Surface_Var}
            style={{marginLeft: appSize(15)}}>
            Find for food or restaurant...
          </AppText>
        </View>

        <AppButton
          backgroundColor={theme.colors.Surface_variant}
          padding={appSize(14)}
          style={[styles.box_shadow, {shadowColor: theme.colors.Shadow}]}
          borderRadius={12}>
          <AppIcon
            icon={FFilled.Filter_search_icon}
            size={24}
            iconColor={theme.colors.On_Surface_Var}
          />
        </AppButton>
      </View>

      <ItemCategory data={data} />
      <View style={styles.view_box}>
        <AppText color={theme.colors.On_BackGround} textStyle="Title_Medium">
          Featured Restaurants
        </AppText>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppText textStyle="Title_Small" color={theme.colors.Primary}>
            View All
          </AppText>
          <AppIcon
            icon={FFilled.Arrow_right_icon}
            size={14}
            iconColor={theme.colors.Primary}
          />
        </TouchableOpacity>
      </View>
      <ItemRestaurant data={data2} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: appSize(35),
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: appSize(25),
    paddingHorizontal: appSize(25),
  },
  box_shadow: {
    width: 'auto',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  view_search: {
    marginTop: appSize(10),
    marginBottom: appSize(15),
    flexDirection: 'row',
    paddingHorizontal: appSize(20),
  },
  search: {
    padding: appSize(15),
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    marginRight: appSize(15),
  },
  view_box: {
    flexDirection: 'row',
    paddingHorizontal: appSize(20),
    marginTop: appSize(28),
    justifyContent: 'space-between',
  },
});
