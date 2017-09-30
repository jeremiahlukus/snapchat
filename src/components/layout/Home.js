import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "../presentation";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text={"All messages"} />
        <Text style={styles.welcome}>This is shared</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default Home;
