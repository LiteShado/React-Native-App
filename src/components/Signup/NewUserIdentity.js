import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, ScrollView, View } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownStyle from '../Login/styles';
import ScrollPicker from 'react-native-wheel-scroll-picker';


function NewUserIdentityComp() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([

        {label: 'Prefer not to say', value: 'pfns', key: 4},
        {label: 'she', value: 'she', key: 5},
        {label: 'her', value: 'her', key: 6},
        {label: 'hers', value: 'hers', key: 7},
        {label: 'he', value: 'he', key: 8},
        {label: 'him', value: 'him', key: 9},
        {label: 'his', value: 'his', key: 10},
        {label: 'they', value: 'they', key: 11},
        {label: 'them', value: 'them', key: 12},
        {label: 'theirs', value: 'theirs', key: 13},
        {label: 've', value: 've', key: 14},
        {label: 'ver', value: 'ver', key: 15},
        {label: 'not listed', value: 'not listed', key: 16}
      ]);

    const data = [
    {
      label: 'Woman', value: 'woman', key: 1
    },
    {
      label: 'Man', value: 'man', key: 2
    },
    {
      label: 'Non-binary', value: 'nonbinary', key: 3
    }
    ];


  return (
    <>
      <View style={{height: 360, marginTop: 70, marginBottom: -70}}>
        <ScrollView
          indicatorStyle="white"
          style={{backgroundColor: 'white', height: 10}}>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          />
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="More gender options"
            style={{marginTop:10}}
            itemSeparator={true}

    />
    </ScrollView>
    </View>
    </>
  );
};


export default NewUserIdentityComp;
