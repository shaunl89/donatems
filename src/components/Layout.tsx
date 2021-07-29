import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import React from 'react';
import { Text } from 'react-native-elements';
import Filter from '../components/Filter';

const Layout = ({ children, title }) => {
  return (
    <SafeAreaView>
      <Text h1 style={styles.title}>
        {title}
      </Text>
      <Filter />
      <ScrollView style={styles.wrapper}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 120
  },
  title: {
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
