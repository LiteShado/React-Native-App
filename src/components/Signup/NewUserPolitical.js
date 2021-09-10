import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';


function NewUserPoliticalComp() {
  const data = [
    {
      label: 'Apolitical'
    },
    {
      label: "Moderate"
    },
    {
      label: 'Liberal'
    },
    {
      label: "Conservative"
    }
    ];

  return (
    <>
        <View
        style={{height: 360, marginTop: 70, marginBottom: -70}}>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          />
        </View>

    </>
  );
};


export default NewUserPoliticalComp;
