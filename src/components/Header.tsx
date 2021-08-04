import React from "react";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Image, Badge } from 'react-native-elements';
import { useSelector } from "react-redux";
import { selectChopeCount } from "./chopeSlice";

const CHOPE_IMG = require("../images/Chope.png");

const Header = ({ title, showChopes = false }) => {
  const chopeCount = useSelector(selectChopeCount);
    return (
      <View style={styles.title}>
        <Text h1>
          {title}
        </Text>
        {showChopes &&
          <>
            <Image
              style={styles.img}
              source={CHOPE_IMG}
            />
            <Badge
              status="error"
              value={chopeCount}
              containerStyle={styles.badgeContainer}
            />
          </>
        }

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
