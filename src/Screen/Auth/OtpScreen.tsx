/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useThemeToggle} from '../../hook/UseTheme';
import Goback from '../../component/Button/Goback';
import AppText from '../../component/Text/AppText';
import {AppOTP} from '../../component/AppOtp/AppOtp';
import {appSize} from '../../config/AppConstant';

const OtpScreen = () => {
  const {theme} = useThemeToggle();
  const [isOtp, setIsOtp] = useState<string[]>(Array(4).fill(''));
  const [is, setis] = useState(true);

  useEffect(() => {
    const SendOtp = () => {
      if (isOtp.every(char => char !== '')) {
        console.log('Complete OTP Value:', isOtp.join(''));
        setis(false);
      }
    };
    SendOtp();
  }, [isOtp]);

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.Surface}]}>
      <Goback />
      <AppText textStyle="Display_Small" color={theme.colors.On_BackGround}>
        {is ? 'Let’s create your new PIN' : '\nRe-enter PIN'}
      </AppText>
      <AppText
        textStyle="Body_Medium"
        color={'rgba(108, 111, 115, 1)'}
        style={{marginVertical: appSize(12)}}>
        Please enter your PIN (4 Digits)
      </AppText>
      <AppOTP
        length={4}
        value={isOtp}
        onChange={setIsOtp}
        disabled={false}
        isFalse={is}
      />
      {!is && (
        <AppText textStyle="Body_Medium" color={theme.colors.Error}>
          Incorrect pin code!
        </AppText>
      )}
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: appSize(138),
    paddingHorizontal: appSize(25),
  },
});
