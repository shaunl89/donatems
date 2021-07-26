import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import React from 'react';
import { Text } from 'react-native-elements';

const Layout = ({ children, title }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapper}>
        <Text h1 style={styles.title}>
          {title}
        </Text>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  wrapper: {},
  title: {
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});