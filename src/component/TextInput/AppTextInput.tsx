/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import {useThemeToggle} from '../../hook/UseTheme';
import AppText from '../Text/AppText';
import {CustomTheme} from '../../theme/CustomTheme';
import AppIcon from '../Icon/AppIcon';
import {FFilled} from '../../assets/icon/FFilled';
import {appSize} from '../../config/AppConstant';

interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
  lable?: string;
  style?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  secureTextEntry?: boolean; // Optional prop for icon name
}

const AppTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  lable,
  style,
  textInputStyle,
  secureTextEntry,
  ...props
}) => {
  const {theme} = useThemeToggle();
  const [isFocus, setIsFocus] = useState(false);
  const styleTextInput = createStyles(theme, isFocus);
  const [secure, setSecure] = useState(secureTextEntry);
  return (
    <View style={style}>
      {lable && (
        <AppText
          textStyle="Body_Large"
          color={theme.colors.On_BackGround}
          style={{marginLeft: appSize(2), marginBottom: appSize(4)}}>
          {lable}
        </AppText>
      )}
      <View>
        <TextInput
          style={[styleTextInput.input, textInputStyle]}
          placeholder={placeholder}
          secureTextEntry={secure}
          placeholderTextColor={theme.colors.Outline_Variant}
          onFocus={() => setIsFocus(!isFocus)}
          onBlur={() => setIsFocus(false)}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styleTextInput.icon}
            onPress={() => setSecure(!secure)}>
            <AppIcon
              icon={secure ? FFilled.Eye_icon : FFilled.Eye_slash_icon}
              size={24}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const createStyles = (theme: CustomTheme, isFocus: boolean) => {
  return StyleSheet.create({
    icon: {
      position: 'absolute',
      right: 15,
      top: '30%',
    },
    input: {
      paddingVertical: appSize(10),
      paddingHorizontal: appSize(15),
      borderRadius: 10,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 6,
      backgroundColor: theme.colors.Surface,
      borderColor: isFocus
        ? theme.colors.Primary
        : theme.colors.Outline_Variant,
      borderWidth: isFocus ? 2 : 1,
    },
  });
};

export default AppTextInput;
