/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appSize} from '../../../config/AppConstant';
import {useThemeToggle} from '../../../hook/UseTheme';
import AppText from '../../../component/Text/AppText';
import AppIcon from '../../../component/Icon/AppIcon';
import {FFilled} from '../../../assets/icon/FFilled';
import {styleText} from '../../../theme/StyleText';

type EvaluateProps = {
  start: number;
  quality: number;
  background: string;
};

export default function Evaluate({start, quality, background}: EvaluateProps) {
  const {theme} = useThemeToggle();
  return (
    <View
      style={[styles.view_des, styles.start, {backgroundColor: background}]}>
      <AppText textStyle="Lable_Medium" color={theme.colors.On_Surface_Var}>
        {start}
      </AppText>
      <View style={{marginHorizontal: appSize(5)}}>
        <AppIcon
          icon={FFilled.start_action_icon}
          size={12}
          iconColor={theme.colors.Primary}
        />
      </View>
      <Text style={[styleText.Body_Small, {color: theme.colors.Outline}]}>
        ({quality}+)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  start: {
    paddingVertical: appSize(6),
    paddingLeft: appSize(6),
    paddingRight: appSize(2),
    borderRadius: 100,
  },
  view_des: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: appSize(2),
  },
});
