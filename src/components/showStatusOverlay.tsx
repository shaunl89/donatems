import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Status } from '../types';
import { Text } from 'react-native-elements';

export const showStatusOverlay = (status, options = {takerName: "takerName", giverName: "giverName", contactNumber: "+65 XXXX XXXX", endDate: "xx/xx/xx"}) => {
  const {takerName , giverName , contactNumber, endDate} = options;
  switch(status) {
    case(Status.CHOPED):
      return (
        <View style={[styles.placeOverlay, {backgroundColor: "rgba(206, 214, 251, 0.4)"}]}>
          <Text h1>CHOPED</Text>
        </View>
      )
    case(Status.WASTED):
      return (
        <View style={[styles.placeOverlay, {backgroundColor: "rgba(255, 120, 120, 0.4)"}]}>
          <Text h1>WASTED</Text>
        </View>
      )
    case(Status.PENDING):
      return (
        <View style={[styles.placeOverlay, {backgroundColor: "rgba(224, 255, 120, 0.4)"}]}>
          <Text h1 style={{textAlign: "center"}}>PENDING CONFIRMATION</Text>
        </View>
      )
    case(Status.WANTED):
      return (
        <View style={[styles.placeOverlay, {backgroundColor: "rgba(120, 255, 244, 0.4)"}]}>
          <Text h1 style={{textAlign: "center"}}>WANTED BY</Text>
          <Text h1 style={{textAlign: "center"}}>{takerName}</Text>
        </View>
      )
    case(Status.CONTACT):
      return (
        <View style={[styles.placeOverlay, {backgroundColor: "rgba(120, 255, 138, 0.4)"}]}>
          <Text h1 style={{textAlign: "center"}}>contact {giverName}</Text>
          <Text h1>{contactNumber}</Text>
          <Text h4 style={{textAlign: "center"}}>valid till {endDate}</Text>
        </View>
      )
    default: // Status.AVAILABLE
      break;
  }
}

const styles = StyleSheet.create({
  placeOverlay: {
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});