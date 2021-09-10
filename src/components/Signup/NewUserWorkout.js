import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';


function NewUserWorkoutComp() {
  const data = [
    {
      label: 'Active'
    },
    {
      label: 'Sometimes'
    },
    {
      label: 'Almost Never'
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


export default NewUserWorkoutComp;
