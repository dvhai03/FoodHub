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
import {appSize} from '../../../config/AppConstant';

export type Category = {
  id: string;
  title: string;
  image: string;
};

type CategoryProps = {
  data: Category[];
};

const ItemCategory: React.FC<CategoryProps> = ({data}) => {
  const {theme} = useThemeToggle();
  const renderItem = ({item}: {item: Category}) => (
    <TouchableOpacity
      style={[styles.item, {backgroundColor: theme.colors.Surface_variant}]}>
      <Image
        source={{uri: item.image}}
        style={{width: appSize(50), height: appSize(50)}}
        borderRadius={50}
      />
      <AppText
        color={theme.colors.On_Surface_Var}
        textStyle="Lable_Small"
        style={{marginBottom: appSize(14)}}>
        {item.title}
      </AppText>
    </TouchableOpacity>
  );

  return (
    <View style={{paddingLeft: appSize(20)}}>
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
    padding: appSize(4),
    borderRadius: 100,
    alignItems: 'center',
  },
});

export default ItemCategory;
