import React from 'react';
import { View, Text, Button } from 'react-native';

const ModalScreen = ({ navigation, route }) => {
  const { text, component } = route.params;
  return (
    <>
      {component}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>{text}</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </>
  );
}

export default ModalScreen