import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { AddMessage } from "../presentation";
class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        { id: 1, from: "Mom", content: "How are you" },
        { id: 2, from: "Dad", content: "YOYOY" },
        { id: 3, from: "Donkey", content: "I see dead people" },
        { id: 4, from: "Black Sheep", content: "Whats your fav animal" },
        { id: 5, from: "Nicole", content: "Cucumber" }
      ]
    };
  }

  addMessage() {}

  _renderMessage(item) {
    return (
      <View style={styles.message}>
        <Text style={[{ paddingTop: 5 }, styles.messageText]}>
          From: {item.from}
        </Text>
        <Text style={[{ paddingBottom: 5 }, styles.messageText]}>
          {item.content}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <FlatList
          keyExtractor={item => item.id}
          style={styles.main}
          data={this.state.messages}
          renderItem={({ item }) => this._renderMessage(item)}
        />
        <AddMessage addMessage={() => this.addMessage()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: 100 + "%",
    height: 100 + "%"
  },

  message: {
    width: 100 + "%",
    borderBottomWidth: 1,
    borderColor: "rgb(71, 77, 89)"
  },
  messageText: {
    color: "rgb(12,0,51)",
    fontFamily: "helvetica",
    fontSize: 14
  }
});

export default Messages;
