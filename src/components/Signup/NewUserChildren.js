import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';


function NewUserChildrenComp() {
  const data = [
    {
      label: 'Want Someday'
    },
    {
      label: "Don't want"
    },
    {
      label: 'Have & want more'
    },
    {
      label: "Have & don't want more"
    },
    {
      label: 'Not sure yet'
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


export default NewUserChildrenComp;
