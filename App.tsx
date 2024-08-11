import React from 'react';
import {StatusBar} from 'react-native';
import AppProvider from './src/context/AppProvider';
import AppNavigation from './src/navigation/AppNavigation';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'} // Đặt màu nền của thanh trạng thái
        translucent={true}
      />
      <AppNavigation />
    </AppProvider>
  );
}

export default App;
