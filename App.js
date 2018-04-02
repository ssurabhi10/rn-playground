import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableHighlight
} from "react-native";

const containerHeight = 400;
const containerWidth = 300;

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onPress = () => {
    const { username, password } = this.state;
    console.log(username, password);
  };

  onChangeText = (text, type) => {
    if (type === "username") this.setState({ username: text });
    this.setState({ password: text });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ height: containerHeight, width: containerWidth }}>
          <View style={{ height: containerHeight / 10 }}>
            <Text style={{ color: "blue", fontSize: 25, fontWeight: "bold" }}>
              Login to your account
            </Text>
          </View>
          <View style={{ height: containerHeight / 10 }} />
          <View
            style={{
              height: containerHeight / 5,
              justifyContent: "center",
              padding: 25,
              borderRadius: 2,
              borderWidth: 1.0,
              borderColor: "black"
            }}
          >
            <TextInput
              style={{ fontSize: 20 }}
              editable={true}
              placeholder="Username"
              placeholderTextColor="gray"
              onChangeText={text => this.onChangeText(text, "username")}
            />
          </View>
          <View style={{ height: containerHeight / 10 }} />
          <View
            style={{
              height: containerHeight / 5,
              justifyContent: "center",
              padding: 25,
              borderColor: "black",
              borderWidth: 1.0,
              borderRadius: 2
            }}
          >
            <TextInput
              style={{ fontSize: 20 }}
              editable={true}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
              onChangeText={text => this.onChangeText(text, "password")}
            />
          </View>
          <View style={{ height: containerHeight / 10 }} />
          <TouchableHighlight
            style={{
              height: containerHeight / 5,
              backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => this.onPress()}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Login
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
