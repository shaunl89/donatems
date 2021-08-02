import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Image, Badge } from 'react-native-elements';
import Filter from "./Filter";

const Header = ({ title }) => {
    return (
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
    )
}

export default Header;

const styles = StyleSheet.create({
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
