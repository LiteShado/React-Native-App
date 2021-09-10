import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View, ScrollView } from "react-native";
import ScrollPicker from 'react-native-wheel-scroll-picker';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {
    TextInputStyle
} from '../Login/styles';

function NewUserBirthdayComp() {

  return (
    <>
    <View style={{height: 360, marginTop: 70, marginBottom: -90}}>
    <ScrollView
      indicatorStyle="white"
      style={{backgroundColor: 'white', height: 10}}>
    <ScrollPicker
    dataSource={[
                   '01',
                   '02',
                   '03',
                   '04',
                   '05',
                   '06',
                   '07',
                   '08',
                   '09',
                   '10',
                   '11',
                   '12',


              ]}
              selectedIndex={1}
              renderItem={(data, index, isSelected) => {
                  //
              }}
              onValueChange={(data, selectedIndex) => {
                  //
              }}
              wrapperHeight={130}
              wrapperWidth={50}
              wrapperBackground={'#FFFFFF'}
              itemHeight={40}
              itemWidth={75}
              highlightColor={'#FFFFFF'}
              highlightBackgroundColor={'#65AEED'}
              highlightBorderWidth={20}
              activeItemColor={'red'}
              itemColor={'#B4B4B4'}
  />
    <ScrollPicker
    dataSource={[
                   '1',
                   '2',
                   '3',
                   '4',
                   '5',
                   '6',
                   '7',
                   '8',
                   '9',
                   '10',
                   '11',
                   '12',
                   '13',
                   '14',
                   '15',
                   '16',
                   '17',
                   '18',
                   '19',
                   '20',
                   '21',
                   '22',
                   '23',
                   '24',
                   '25',
                   '26',
                   '27',
                   '28',
                   '29',
                   '30',
                   '31',




              ]}
              selectedIndex={1}
              renderItem={(data, index, isSelected) => {
                  //
              }}
              onValueChange={(data, selectedIndex) => {
                  //
              }}
              wrapperHeight={130}
              wrapperWidth={50}
              wrapperBackground={'#FFFFFF'}
              itemHeight={40}
              itemWidth={75}
              highlightColor={'#FFFFFF'}
              highlightBackgroundColor={'#65AEED'}
              highlightBorderWidth={20}
              activeItemColor={'red'}
              itemColor={'#B4B4B4'}
  />
  </ScrollView>
    </View>

</>
);
};


export default NewUserBirthdayComp;
