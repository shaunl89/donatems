import 'react-native-gesture-handler';

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Hello, world!</Text>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
