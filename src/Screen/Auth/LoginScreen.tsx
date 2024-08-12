/* eslint-disable prettier/prettier */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useThemeToggle} from '../../hook/UseTheme';
import AppText from '../../component/Text/AppText';
import AppButton from '../../component/Button/Button';
import AppTextInput from '../../component/TextInput/AppTextInput';
import Social from '../../component/Social/Social';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParams} from '../../navigation/params';
import Goback from '../../component/Button/Goback';
import {useDispatch} from 'react-redux';
import {StatusLogin} from '../../redux/loginSlice';
import {appSize} from '../../config/AppConstant';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const onLogin = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(StatusLogin(true));
    } catch (error) {
      console.error(error);
    }
  };
  const navigation = useNavigation<StackNavigationProp<AuthParams>>();
  const {theme} = useThemeToggle();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.Surface}]}>
      <Goback />
      <AppText textStyle="Display_Medium" color={theme.colors.On_BackGround}>
        Login
      </AppText>

      <AppTextInput
        placeholder="Your email or phone"
        lable="Email"
        style={{marginVertical: appSize(19)}}
      />
      <AppTextInput
        placeholder="Password"
        lable="Password"
        style={{marginTop: appSize(11), marginBottom: appSize(40)}}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassScreen')}>
        <AppText
          color={theme.colors.Primary}
          textAlign="center"
          textStyle="Body_Medium">
          Forgot password?
        </AppText>
      </TouchableOpacity>

      <View
        style={{paddingHorizontal: appSize(40), marginVertical: appSize(20)}}>
        <AppButton
          onPress={onLogin}
          backgroundColor={theme.colors.Primary}
          borderRadius={29}
          style={{paddingVertical: appSize(18)}}>
          <AppText textStyle="Title_Medium" color={theme.colors.On_Primary}>
            Login
          </AppText>
        </AppButton>
      </View>

      <View style={styles.footer}>
        <AppText textStyle="Body_Medium" color={theme.colors.On_BackGround}>
          Don’t have an account?{' '}
        </AppText>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <AppText
            color={theme.colors.On_BackGround}
            textStyle="Body_Medium"
            style={{opacity: 0.6}}>
            Sign In
          </AppText>
        </TouchableOpacity>
      </View>
      <Social />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: appSize(150),
    paddingHorizontal: appSize(25),
  },

  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
