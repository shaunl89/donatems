import React from "react"
import { ScrollView, StyleSheet } from "react-native"

const Content = ({ children }) => {
    return (
        <ScrollView style={styles.wrapper}>{children}</ScrollView>
    )
}

export default Content;

const styles = StyleSheet.create({
    wrapper: {
    },
  });