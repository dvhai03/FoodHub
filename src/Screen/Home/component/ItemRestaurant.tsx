/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useThemeToggle} from '../../../hook/UseTheme';
import AppText from '../../../component/Text/AppText';
import AppIcon from '../../../component/Icon/AppIcon';
import {FFilled} from '../../../assets/icon/FFilled';
import AppIconButton from '../../../component/Button/IconButton';
import {appSize} from '../../../config/AppConstant';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {ParamsRootNav} from '../../../navigation/params';
import Evaluate from './Evaluate';

type Restaurants = {
  id: string;
  favourite: boolean;
  start: number;
  title: string;
  image: string;
  product: string[];
};

type CategoryProps = {
  data: Restaurants[];
};

const ItemRestaurant: React.FC<CategoryProps> = ({data}) => {
  const navigation = useNavigation<StackNavigationProp<ParamsRootNav>>();
  const {theme} = useThemeToggle();
  const renderItem = ({item}: {item: Restaurants}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('RestaurantDetailsScreen')}
      style={[
        styles.item,
        {
          backgroundColor: theme.colors.Surface_variant,
          paddingBottom: appSize(14),
        },
      ]}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{paddingLeft: appSize(12), marginTop: appSize(10)}}>
        <View style={styles.view_des}>
          <AppText
            color={theme.colors.On_Surface_Var}
            textStyle="Title_Medium"
            style={{marginRight: appSize(5)}}>
            {item.title}
          </AppText>
          <AppIcon
            icon={FFilled.check_circle_icon}
            size={15}
            iconColor={theme.colors.Primary}
          />
        </View>
        <View style={styles.view_des}>
          <AppIcon
            icon={FFilled.Delivery_icon}
            size={15}
            iconColor={theme.colors.Primary}
          />
          <AppText
            textStyle="Body_Small"
            color={theme.colors.Sencondary}
            style={{marginRight: appSize(15)}}>
            Free delivery
          </AppText>
          <AppIcon
            icon={FFilled.Time_icon}
            size={12}
            iconColor={theme.colors.Primary}
          />
          <AppText textStyle="Body_Small" color={theme.colors.Sencondary}>
            10-15 mins
          </AppText>
        </View>

        <View style={styles.view_des}>
          {item.product.map((item, index) => (
            <AppText
              color={theme.colors.On_Primary_Container}
              key={index}
              style={[
                styles.view_cate,
                {backgroundColor: theme.colors.Primary_Container},
              ]}>
              {item}
            </AppText>
          ))}
        </View>
      </View>
      <View style={styles.view_start}>
        <Evaluate
          start={item.start}
          quality={25}
          background={theme.colors.Surface_variant}
        />
        <AppIconButton
          backgroundColor={theme.colors.Surface_variant}
          icon={item.favourite ? 'start_action_icon' : 'Star_icon'}
          size={24}
          icon_color={theme.colors.Primary}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{paddingLeft: appSize(20), marginTop: appSize(10)}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: appSize(15),
    borderRadius: appSize(15),
  },
  image: {
    width: appSize(266),
    height: appSize(136),
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  view_des: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: appSize(2),
  },
  view_cate: {
    paddingVertical: appSize(3),
    paddingHorizontal: appSize(7),
    marginRight: appSize(10),
  },
  view_start: {
    position: 'absolute',
    width: '100%',
    top: appSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: appSize(11),
  },
});

export default ItemRestaurant;
