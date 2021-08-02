import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const Layout = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        ...StyleSheet.absoluteFillObject,
        paddingBottom: -insets.bottom
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
});
