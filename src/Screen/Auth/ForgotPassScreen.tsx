/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useThemeToggle} from '../../hook/UseTheme';
import Goback from '../../component/Button/Goback';
import AppText from '../../component/Text/AppText';
import AppTextInput from '../../component/TextInput/AppTextInput';
import AppButton from '../../component/Button/Button';

const ForgotPassScreen = () => {
  const {theme} = useThemeToggle();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.Surface}]}>
      <Goback />
      <AppText textStyle="Display_Small" color={theme.colors.On_BackGround}>
        Resset Password
      </AppText>
      <AppText color={theme.colors.Sencondary} style={{marginTop: 14}}>
        Please enter your email address to {'\n'}request a password reset
      </AppText>
      <AppTextInput placeholder="Email" style={{marginVertical: 38}} />
      <View style={{paddingHorizontal: 37}}>
        <AppButton
          backgroundColor={theme.colors.Primary}
          borderRadius={28.5}
          style={{paddingVertical: 18}}>
          <AppText textStyle="Title_Medium" color={theme.colors.On_Primary}>
            SEND NEW PASSWORD
          </AppText>
        </AppButton>
      </View>
    </View>
  );
};

export default ForgotPassScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 180,
    paddingHorizontal: 26,
  },
});
