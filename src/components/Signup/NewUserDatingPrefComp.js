import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';


function NewUserDatingPrefComp() {
  const data = [
    {
      label: 'Casual Dating'
    },
    {
      label: 'Long Term Relationship'
    }
    ];

  return (
    <>
      <View
      style={{height: 360, marginTop: 70, marginBottom: -95}}>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          />
      </View>

    </>
  );
};


export default NewUserDatingPrefComp;
