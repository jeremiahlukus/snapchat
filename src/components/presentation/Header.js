import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.topNav}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}> {this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topNav: {
    backgroundColor: "rgb(12,0,51)",
    position: "absolute",
    paddingTop: 40,
    paddingBottom: 20,
    top: 0,
    width: 100 + "%"
  },
  text: {
    color: "white"
  }
});

export default Header;
