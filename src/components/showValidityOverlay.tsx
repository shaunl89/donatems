import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { User } from "../types"
import { colors } from '../theme';

const showValidityOverlay = (date?: String) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.column}>
        <Text style={styles.details}>
          Valid till {date ?? "09/08/2021"}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 20,
    left: 0,
    right: 0,
    bottom: 0,
  },
  icon: {
    paddingRight: 8
  },
  details: {
    fontWeight: "bold",
    color: colors.light,
  },
  column: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default showValidityOverlay