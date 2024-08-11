/* eslint-disable prettier/prettier */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParams} from '../../navigation/params';
import {useThemeToggle} from '../../hook/UseTheme';
import AppButton from '../../component/Button/Button';
import AppText from '../../component/Text/AppText';
import AppTextInput from '../../component/TextInput/AppTextInput';
import Social from '../../component/Social/Social';
import Goback from '../../component/Button/Goback';

const SignInScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AuthParams>>();
  const {theme} = useThemeToggle();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.Surface}]}>
      <Goback />
      <AppText textStyle="Display_Medium" color={theme.colors.On_BackGround}>
        Sign Up
      </AppText>
      <AppTextInput
        placeholder="Your name"
        lable="Full name"
        style={{marginTop: 12}}
      />
      <AppTextInput
        placeholder="Your email or phone"
        lable="Email"
        style={{marginVertical: 30}}
      />
      <AppTextInput
        placeholder="Password"
        lable="Password"
        style={{marginBottom: 40}}
        secureTextEntry
      />
      <View style={{paddingHorizontal: 40, marginVertical: 10}}>
        <AppButton
          backgroundColor={theme.colors.Primary}
          borderRadius={29}
          onPress={() => navigation.navigate('OtpScreen')}
          style={{paddingVertical: 18}}>
          <AppText textStyle="Title_Medium" color={theme.colors.On_Primary}>
            Sign Up
          </AppText>
        </AppButton>
      </View>

      <View style={styles.footer}>
        <AppText textStyle="Body_Medium" color={theme.colors.On_BackGround}>
          Already have an account?{' '}
        </AppText>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <AppText
            color={theme.colors.On_BackGround}
            textStyle="Body_Medium"
            style={{opacity: 0.6}}>
            Login
          </AppText>
        </TouchableOpacity>
      </View>
      <Social />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 101,
    paddingHorizontal: 25,
  },

  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
