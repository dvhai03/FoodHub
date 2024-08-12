/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useThemeToggle} from '../../hook/UseTheme';
import AppText from '../../component/Text/AppText';
import AppButton from '../../component/Button/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParams} from '../../navigation/params';
import Social from '../../component/Social/Social';
import {appSize} from '../../config/AppConstant';

const WellcomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AuthParams>>();
  const {top} = useSafeAreaInsets();
  const {theme} = useThemeToggle();

  const goLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/images/back_ground_image.png')}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../../assets/images/back_ground.png')}>
          <View style={styles.view_content}>
            <AppText textStyle="MPlus1">
              Welcome to{' '}
              <AppText textStyle="MPlus1" color={theme.colors.Primary}>
                FoodHub
              </AppText>
            </AppText>

            <View style={{marginLeft: 2}}>
              <AppText textStyle="Body_Large" color={theme.colors.Surface}>
                Your favourite foods delivered{'\n'}fast at your door.
              </AppText>
            </View>

            <View style={{marginTop: 200}}>
              <Social wellCome />

              <AppButton
                backgroundColor={theme.colors.Primary}
                onPress={goLogin}>
                <AppText
                  textStyle="Body_Large"
                  color={theme.colors.On_Primary}
                  style={{marginVertical: 15}}>
                  Start with email or phone
                </AppText>
              </AppButton>
            </View>
          </View>

          <View style={styles.footer}>
            <AppText textStyle="Body_Large" color={theme.colors.On_Sencondary}>
              Already have an account?{' '}
            </AppText>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}>
              <AppText color={theme.colors.Primary_Container}>Sign In</AppText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageBackground>
      <View style={[styles.view_skip, {paddingTop: top}]}>
        <AppButton backgroundColor={theme.colors.Secondary_Container}>
          <AppText
            color={theme.colors.On_Secondary_Container}
            style={{paddingHorizontal: 13, paddingVertical: 11}}>
            Skip
          </AppText>
        </AppButton>
      </View>
    </View>
  );
};

export default WellcomeScreen;

const styles = StyleSheet.create({
  view_content: {
    marginHorizontal: appSize(30),
    paddingTop: appSize(140),
  },
  box_signIn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: appSize(10),
  },
  line: {
    flex: 1,
    height: 1,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  view_skip: {
    position: 'absolute',
    top: 0,
    right: appSize(30),
  },
});
