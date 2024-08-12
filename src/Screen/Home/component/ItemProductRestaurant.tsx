/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useThemeToggle} from '../../../hook/UseTheme';
import AppText from '../../../component/Text/AppText';
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
  price: string;
};

type ItemProductProps = {
  data: Restaurants[];
};

const ItemProductRestaurant: React.FC<ItemProductProps> = ({data}) => {
  const navigation = useNavigation<StackNavigationProp<ParamsRootNav>>();
  const {theme} = useThemeToggle();
  const renderItem = ({item}: {item: Restaurants}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DishDetailsScreen')}
      style={[
        styles.item,
        {
          backgroundColor: theme.colors.Surface_variant,
          paddingBottom: appSize(14),
        },
      ]}>
      <ImageBackground
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="cover"
        borderRadius={appSize(15)}>
        <View style={{marginLeft: appSize(5), marginBottom: appSize(4)}}>
          <Evaluate
            start={item.start}
            quality={25}
            background={theme.colors.Surface_variant}
          />
        </View>
      </ImageBackground>
      <View style={{paddingHorizontal: appSize(10), marginTop: appSize(23)}}>
        <View style={styles.view_des}>
          <AppText
            color={theme.colors.On_Surface_Var}
            textStyle="Headline_Small">
            {item.title}
          </AppText>
          <View
            style={[
              styles.price,
              {backgroundColor: theme.colors.Primary_Container},
            ]}>
            <AppText textStyle="Body_Large">${item.price}</AppText>
          </View>
        </View>
      </View>
      <View style={styles.view_start}>
        <AppIconButton
          backgroundColor={theme.colors.Surface_variant}
          icon={item.favourite ? 'start_action_icon' : 'Star_icon'}
          size={16}
          icon_color={theme.colors.Primary}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        style={{marginBottom: appSize(320)}}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: appSize(15),
    marginBottom: appSize(20),
  },
  image: {
    width: '100%',
    height: appSize(150),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  view_des: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: appSize(2),
    justifyContent: 'space-between',
  },
  view_cate: {
    paddingVertical: appSize(3),
    paddingHorizontal: appSize(7),
    marginRight: appSize(10),
  },
  view_start: {
    position: 'absolute',
    right: 0,
    top: appSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: appSize(11),
  },
  price: {
    paddingVertical: appSize(4),
    paddingHorizontal: appSize(10),
    borderRadius: 40,
  },
});

export default ItemProductRestaurant;
