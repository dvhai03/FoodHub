/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import {I18nextProvider} from 'react-i18next';
import {store} from '../redux/store';
import {useThemeToggle} from '../hook/UseTheme';
import i18n from '../languages/i18n';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {ParamsRootNav} from '../navigation/params';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
type Props = {
  children: ReactNode;
  onReady?: () => void;
};
export const navigationRef =
  React.createRef<NavigationContainerRef<ParamsRootNav>>();
export default function AppProvider(props: Props) {
  const {theme} = useThemeToggle();
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider style={{backgroundColor: theme.colors.Surface}}>
          <View style={{flex: 1}}>
            <NavigationContainer ref={navigationRef}>
              <GestureHandlerRootView style={{flex: 1}}>
                <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
              </GestureHandlerRootView>
            </NavigationContainer>
          </View>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}
