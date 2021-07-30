import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Image, Badge } from 'react-native-elements';
import Filter from '../components/Filter';

const Layout = ({ children, title }) => {
  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Text h1>
          {title}
        </Text>
        <Image
          style={styles.img}
          source={{ uri: 'https://static.chope.net.cn/chope/static/mainwebsite5.0/forrestaurant/img/loading.gif?date=20210706080511' }}
        />
        <Badge
          status="error"
          value={5}
          containerStyle={styles.badgeContainer}
        />
      </View>
      {title === 'Profile' ? null : <Filter />}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  badgeContainer: {
    position: 'absolute',
    top: -4,
    right: 12
  }
});
