/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import AppCustomButton from '../Button/CustomButton';
import AppText from '../Text/AppText';
import {useThemeToggle} from '../../hook/UseTheme';
import auth from '@react-native-firebase/auth';
import {appSize} from '../../config/AppConstant';
GoogleSignin.configure({
  webClientId:
    '933082320376-i5uri8hlfm7flahp9956l7qhkjse5ev7.apps.googleusercontent.com',
});
type CustomSocial = {
  wellCome?: boolean;
};
const Social = ({wellCome}: CustomSocial) => {
  const {theme} = useThemeToggle();
  const styleButton = createStyles(theme.colors.Primary_Container);
  const signIn = async () => {
    try {
      // await GoogleSignin.hasPlayServices()
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true}); // <-- Add this
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);

      //   const currentUser = await GoogleSignin.getCurrentUser()
      // console.log('userInfo: ', userInfo)
      //   if (unique_id) {
      //     const paramGG = {
      //       ...userInfo,
      //       token_device: tokenDevice,
      //       unique_id,
      //       device_name,
      //       type: enumTypeLogin.GOOGLE,
      //     }
      //     param.current = paramGG
      //     mutate(paramGG, {
      //       onSuccess(succ) {
      //         if (DataUtils.successfully(succ)) {
      //           DataLocal.saveToken(succ.data.access_token, succ.data.refresh_token)
      //           //todo: chú ý ở đây, cái này để giữ đăng nhập trên 1 thiết bị

      //           // if (succ?.data?.data_user?.unique_id === DataLocal.auth.params.unique_id) {
      //           // console.log(1)

      //           // if (true) {
      //           DataLocal.saveAuth(paramGG, enumTypeLogin.GOOGLE)

      //           showFlashMessageSuccess(succ)
      //           dispatch(
      //             setDataUser({
      //               ...succ.data?.data_user,
      //               showModalVerify: succ.data?.data_user?.is_authenticated === enumIs_authenticated.UNVALIDATE,
      //             }),
      //           )
      //           dispatch(StatusLogin(true))
      //           // DataLocal.saveBiometrics(false)
      //           // } else {
      //           //   setResponse(succ)
      //           //   setShowModalOTP(true)
      //           // }
      //         } else {
      //           showFlashMessageError(succ)
      //         }
      //       },
      //       onError(err) {
      //         showFlashMessageError(err)
      //       },
      //     })
      //   }
    } catch (error) {
      console.log('aaaaaa');
      console.log(error);
    } finally {
      null;
    }
  };

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  return (
    <View>
      <View style={styles.box_signIn}>
        <View
          style={[
            styles.line,
            {
              backgroundColor: wellCome
                ? theme.colors.Surface
                : theme.colors.On_BackGround,
            },
          ]}
        />
        <AppText
          textStyle="Body_Large"
          color={wellCome ? theme.colors.Surface : theme.colors.On_BackGround}
          style={{marginHorizontal: appSize(15), alignItems: 'center'}}>
          sign in with
        </AppText>
        <View
          style={[
            styles.line,
            {
              backgroundColor: wellCome
                ? theme.colors.Surface
                : theme.colors.On_BackGround,
            },
          ]}
        />
      </View>
      <View style={styles.view_login_with}>
        <AppCustomButton
          onPress={onFacebookButtonPress}
          icon="facebook_icon"
          style={[styleButton.Button_icon, {marginRight: appSize(20)}]}
          icon_color={theme.colors.Primary}>
          <AppText textStyle="Body_Medium" style={styles.textButton}>
            FACEBOOK
          </AppText>
        </AppCustomButton>

        <AppCustomButton
          onPress={signIn}
          icon="google_icon"
          style={[styleButton.Button_icon, {marginLeft: appSize(20)}]}
          icon_color={theme.colors.Primary}>
          <AppText
            textStyle="Body_Medium"
            style={[styles.textButton, {paddingRight: 13}]}>
            GOOGLE
          </AppText>
        </AppCustomButton>
      </View>
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({
  view_login_with: {
    flexDirection: 'row',
    marginTop: appSize(14),
    marginBottom: appSize(20),
  },
  textButton: {
    marginLeft: appSize(10),
  },
  box_signIn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: appSize(20),
    marginTop: appSize(20),
  },
  line: {
    flex: 1,
    height: 1,
  },
});
const createStyles = (backgroundColor: string) => {
  return StyleSheet.create({
    Button_icon: {
      backgroundColor: backgroundColor,
      padding: appSize(13),
    },
  });
};
