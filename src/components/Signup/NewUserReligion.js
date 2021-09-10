import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, ScrollView, Scroll, View } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';


function NewUserReligionComp() {
  const [data, setData] = useState([
    {
      label: 'Agnostic', name: 'Agnostic', key: 1
    },
    {
      label: 'Atheist', name: 'Agnostic', key: 2
    },
    {
      label: 'Buddhist', name: 'Agnostic', key: 3
    },
    {
      label: 'Catholic', name: 'Agnostic', key: 4
    },
    {
      label: 'Christian', name: 'Agnostic', key: 5
    },
    {
      label: 'Hindu', name: 'Agnostic', key: 6
    },
    {
      label: 'Jain', name: 'Agnostic', key: 7
    },
    {
      label: 'Hinduism', name: 'Agnostic', key: 8
    },
    {
      label: 'Jainism', name: 'Agnostic', key: 9
    },
    {
      label: 'Islam', name: 'Agnostic', key: 10
    },
    {
      label: 'Taoism', name: 'Agnostic', key: 11
    },
    {
      label: 'Confucianism', name: 'Agnostic', key: 12
    },
    {
      label: 'Shinto', name: 'Agnostic', key: 13
    },
    {
      label: 'Polytheism', name: 'Agnostic', key: 14
    },
    {
      label: 'Rastafari', name: 'Agnostic', key: 15
    },
    {
      label: 'Traditional African Religions', name: 'Agnostic', key: 16
    },
    {
      label: 'Modern Paganism', name: 'Agnostic', key: 17
    }

    ]);

  return (
    <>
        <View style={{height: 410, marginBottom: -50}}>
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


export default NewUserReligionComp;
