import React, { Component } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import config from "../../config";

class AddMessage extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.circle} onPress={this.props.addMessage}>
        <Image
          style={{ width: 70 + "%", height: 70 + "%" }}
          source={config.images.plus}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgb(98,195, 112)",
    position: "absolute",
    bottom: 15,
    right: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AddMessage;
