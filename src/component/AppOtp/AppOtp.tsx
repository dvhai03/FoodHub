/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {
  Keyboard,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
  ViewStyle,
} from 'react-native';
import {useThemeToggle} from '../../hook/UseTheme';
import {CustomTheme} from '../../theme/CustomTheme';
import {appSize} from '../../config/AppConstant';

type OTPInputProps = {
  length: number;
  value: Array<string>;
  disabled: boolean;
  onChange(value: Array<string>): void;
  inputStyle?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  isFalse: boolean;
};

export const AppOTP: React.FunctionComponent<OTPInputProps> = ({
  length,
  disabled,
  value,
  onChange,
  inputStyle,
  container,
  isFalse,
}) => {
  const inputRefs = useRef<Array<TextInput>>([]);
  const {theme} = useThemeToggle();
  const [focusIndex, setFocusIndex] = useState<number | null>(null);

  const styleTextInput = createStyles(theme, focusIndex, isFalse);

  const onChangeValue = (text: string, index: number) => {
    const newValue = value.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }
      return item;
    });

    onChange(newValue);
  };

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index);

    if (index === length - 1) {
      Keyboard.dismiss();
    }
    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }

    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {nativeEvent} = event;

    if (nativeEvent.key === 'Backspace') {
      handleChange('', index);
    }
  };

  return (
    <View style={[styleTextInput.container, container]}>
      {[...new Array(length)].map((item, index) => (
        <TextInput
          secureTextEntry
          ref={ref => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          key={index}
          maxLength={1}
          contextMenuHidden
          selectTextOnFocus
          editable={!disabled}
          value={value[index]}
          style={[
            styleTextInput.input,
            focusIndex === index && styleTextInput.inputFocus, // Apply focus style
            inputStyle,
          ]}
          keyboardType="decimal-pad"
          testID={`OTPInput-${index}`}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={event => handleBackspace(event, index)}
          onFocus={() => setFocusIndex(index)}
          onBlur={() => setFocusIndex(null)}
        />
      ))}
    </View>
  );
};

const createStyles = (
  theme: CustomTheme,
  focusIndex: number | null,
  isFalse: boolean,
) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: appSize(25),
    },
    input: {
      width: appSize(60),
      height: appSize(60),
      borderRadius: 10,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 6,
      backgroundColor: theme.colors.Surface,
      borderColor: isFalse ? theme.colors.Outline_Variant : theme.colors.Error,
      borderWidth: 1,
      textAlign: 'center',
      fontSize: 30,
      color: isFalse ? theme.colors.Primary : theme.colors.Error,
    },
    inputFocus: {
      borderColor: theme.colors.Primary,
      borderWidth: 2,
    },
  });
};

export default AppOTP;
