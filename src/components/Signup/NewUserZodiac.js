import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, ScrollView, Scroll, View} from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';


function NewUserZodiacComp() {
  const [signs, setSigns] = useState([
    {
      label: 'Aquarius', name: 'Aquarius', key: '1'
    },
    {
      label: 'Pisces', name: 'Pisces', key: '2'
    },
    {
      label: 'Aries', name: 'Aries', key: '3'
    },
    {
      label: 'Taurus', name: 'Taurus', key: '4'
    },
    {
      label: 'Gemini', name: 'Gemini', key: '5'
    },
    {
      label: 'Cancer', name: 'Cancer', key: '6'
    },
    {
      label: 'Leo', name: 'Leo', key: '7'
    },
    {
      label: 'Virgo', name: 'Virgo', key: '8'
    },
    {
      label: 'Libra', name: 'Libra', key: '9'
    },
    {
      label: 'Scorpio', name: 'Scorpio', key: '10'
    },
    {
      label: 'Sagittarius', name: 'Sagittarius', key: '11'
    },
    {
      label: 'Capricorn', name: 'Capricorn', key: '12'
    }
    ]);

  return (
    <>
    <View style={{height: 360}} >
    <ScrollView
    indicatorStyle="white"
    style={{backgroundColor: 'white'}}>
        <RadioButtonRN
          data={signs}
          selectedBtn={(e) => console.log(e)}
          />
    </ScrollView>
    </View>
    </>
  );
};


export default NewUserZodiacComp;
