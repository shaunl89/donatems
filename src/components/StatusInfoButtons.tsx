import React from "react";
import { Status, User } from "../types";
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useRoute } from "@react-navigation/native";
import { colors } from '../theme';

const StatusInfoButtons = (status: Status, giver: User, receiver: User) => {
  const route = useRoute();

  switch (status) {
    case (Status.CHOPED):
      return (
        <>
          {route.name === "MySelections" &&
            <View style={styles.container}>
              <View>
                <Text style={styles.statusText}>
                  Waiting for giver to accept
                </Text>
              </View>
              <View style={styles.buttonGroup}>
                <View style={styles.buttonSpace}>
                  <Button
                    title="Un-chope"
                    buttonStyle={{ borderRadius: 30, backgroundColor: colors.secondary }}
                    titleStyle={{ fontWeight: 'bold', color: colors.light }}
                  />
                </View>
              </View>
            </View>
          }
          {route.name === "MyDonations" &&
            <View style={styles.container}>
              <View>
                <Text style={styles.statusText}>
                  {receiver.name} has choped this item.
                </Text>
              </View>

              <View style={styles.buttonGroup}>
                <View style={styles.buttonSpace}>
                  <Button
                    type="outline"
                    title="Cancel"
                    buttonStyle={{ borderRadius: 30, marginRight: 10, borderColor: colors.primary }}
                    titleStyle={{ fontWeight: 'bold', color: colors.primary }}
                  />
                </View>
                <View style={styles.buttonSpace}>
                  <Button
                    title="Donate"
                    buttonStyle={{ borderRadius: 30, marginLeft: 10, backgroundColor: colors.primary }}
                    titleStyle={{ fontWeight: 'bold', color: colors.light }}
                  />
                </View>
              </View>
            </View>
          }
        </>
      )
    case (Status.CONTACT):
      return (
        <>
          <View style={styles.container}>
            <View>
              <Text style={styles.statusText}>
                Contact your {giver ? `giver ${giver.name}` : `receiver ${receiver.name}`} at:
              </Text>
            </View>
            <View style={styles.buttonGroup}>
              <View style={styles.buttonSpace}>
                <Button
                  title={giver ? giver.contactNumber : receiver.contactNumber}
                  titleStyle={{ fontWeight: 'bold' }}
                  buttonStyle={{ borderRadius: 30, backgroundColor: colors.primary }}
                  icon={
                    <Icon
                      name="phone"
                      size={20}
                      color={colors.light}
                      style={{ paddingRight: 8 }}
                    />
                  }
                />
              </View>
            </View>
          </View>
        </>
      )
    case (Status.COMPLETE):
      return (
        <View>

        </View>
      )
    case (Status.AVAILABLE):
    default:
      return (
        <View></View>
      )
  }

}

export default StatusInfoButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  buttonSpace: {
    flex: 1,
  },
  statusText: {
    fontWeight: 'bold',
    color: '#888888',
  }
});