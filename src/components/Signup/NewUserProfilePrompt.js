import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

import {
    TextInputStyle
} from '../Login/styles';

function NewUserProfilePromptComp() {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
    <View
    style={{height: 360, marginTop: 70, marginBottom: -70}}>
    <TextInputStyle>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Add your first name"
        keyboardType="email-address"
      />
    </TextInputStyle>
    </View>
    </SafeAreaView>
  );
};


export default NewUserProfilePromptComp;
