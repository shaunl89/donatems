import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { User } from "../types"
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../styles';

const ContactDetails = (user: User) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.column}>
        <Icon
          name="user"
          size={15}
          color={colors.light}
          style={styles.icon}
        />
        <Text style={styles.details}>
          {user.name}
        </Text>

      </View>

      <View style={styles.column}>
        <Icon
          name="phone"
          size={15}
          color={colors.light}
          style={styles.icon}
        />
        <Text style={styles.details}>
          {user.contactNumber}
        </Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
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

export default ContactDetails