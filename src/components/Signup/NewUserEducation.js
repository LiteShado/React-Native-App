import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, ScrollView, Scroll, View } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';


function NewUserEducationComp() {
  const [data, setData] = useState([
    {
      label: 'High School', name: 'High School', key: 1
    },
    {
      label: 'Trade/tech school', name: 'Trade/tech school', key: 2
    },
    {
      label: 'In college', name: 'In college', key: 3
    },
    {
      label: 'Undergraduate degree', name: 'Undergraduate degree', key: 4
    },
    {
      label: 'In grad school', name: 'In grad school', key: 5
    },
    {
      label: 'Graduate degree', name: 'Graduate degree', key: 6
    }
    ]);

  return (
    <>
        <View style={{height: 360}}>
        <ScrollView
          indicatorStyle="white"
          style={{backgroundColor: 'white', height: 10}}>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          />
        </ScrollView>
        </View>

    </>
  );
};


export default NewUserEducationComp;
