import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';


function NewUserInterestComp() {
  const data = [
    {
      label: "I'm interest in a man"
    },
    {
      label: "I'm interest in a woman"
    },
    {
      label: "I'm interest in a everyone"
    }
    ];

  return (
    <>
    <View style={{height: 360, marginTop: 70, marginBottom: -70}}>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          />
    </View>
    </>
  );
};


export default NewUserInterestComp;
