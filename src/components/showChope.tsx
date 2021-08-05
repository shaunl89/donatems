import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-elements';

const CHOPE_IMG = require('../images/Chope.png');

export const showChope = (unchope) => {
  return (
    <TouchableOpacity style={styles.placeOverlay} onPress={() => unchope()}>
      <View style={styles.imgWrapper}>
        <Image
          resizeMode="contain"
          source={CHOPE_IMG}
          style={styles.chopeImg}
        />
      </View>
    </TouchableOpacity>
  );
};

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  placeOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imgWrapper: {
    transform: [{ rotate: '40deg' }],
  },
  chopeImg: {
    width: win.width / 2.5,
    height: win.width / 2.5,
  },
});
