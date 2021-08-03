import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Status } from '../types';

export const showButtons = (status) => {
    switch (status) {
        case (Status.PENDING):
            return (
                <View style={styles.buttonGroup}>
                    <View style={styles.buttonSpace}>
                        <Button
                            title="I DONT WANT"
                            buttonStyle={{ backgroundColor: "red", width: "100%" }}
                        />
                    </View>
                </View>
            )
        case (Status.WANTED):
            return (
                <View style={styles.buttonGroup}>
                    <View style={styles.buttonSpace}>
                        <Button
                            title="STILL WANT"
                            buttonStyle={{ backgroundColor: "red", marginRight: 10 }}
                        />
                    </View>
                    <View style={styles.buttonSpace}>
                        <Button
                            title="GIVE YOU"
                            buttonStyle={{ backgroundColor: "#5cff77", marginLeft: 10 }}
                            titleStyle={{ color: "black" }}
                        />
                    </View>
                </View>
            )
        default:
            break;
    }
}

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 20,
    },
    buttonSpace: {
        flex: 1,
    }
});