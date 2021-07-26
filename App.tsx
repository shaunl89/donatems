import { Text, View } from 'react-native';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaProvider>
  );
};
export default App;
