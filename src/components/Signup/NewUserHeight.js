import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, ScrollView, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import DatePicker from 'react-native-date-picker';

function NewUserHeightComp() {

  return (
    <>
        {/* <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: "4'0\" (122 cm)", value: "4'0\" (122 cm)"},
                { label: "4'1\" (124 cm)", value: "4'1\" (124 cm)" },
                { label: "4'2\" (127 cm)", value: "4'2\" (127 cm)" },
                { label: "4'3\" (130 cm)", value: "4'3\" (130 cm)" },
                { label: "4'4\" (132 cm)", value: "4'4\" (132 cm)" },
                { label: "4'5\" (134 cm)", value: "4'5\" (134 cm)" },
                { label: "4'6\" (137 cm)", value: "4'6\" (137 cm)" },
                { label: "4'7\" (139 cm)", value: "4'7\" (139 cm)" },
                { label: "4'8\" (142 cm)", value: "4'8\" (142 cm)" },
                { label: "4'9\" (144 cm)", value: "4'9\" (144 cm)" },
                { label: "4'10\" (147 cm)",value: "4'10\" (147 cm)" },
                { label: "4'11\" (150 cm)", value: "4'11\" (150 cm)" },
                { label: "5'0\" (152 cm)", value: "5'0\" (152 cm)" },
                { label: "5'1\" (154 cm)", value: "5'1\" (154 cm)" },
                { label: "5'2\" (157 cm)", value: "5'2\" (157 cm)" },
                { label: "5'3\" (160 cm)", value: "5'3\" (160 cm)" },
                { label: "5'4\" (162 cm)", value: "5'4\" (162 cm)" },
                { label: "5'5\" (165 cm)", value: "5'5\" (165 cm)" },
                { label: "5'6\" (167 cm)", value: "5'6\" (167 cm)" },
                { label: "5'7\" (170 cm)", value: "5'7\" (170 cm)" },
                { label: "5'8\" (172 cm)", value: "5'8\" (172 cm)" },
                { label: "5'9\" (175 cm)", value: "5'9\" (175 cm)" },
                { label: "5'10\" (177 cm)", value: "5'10\" (177 cm)" },
                { label: "5'11\" (180 cm)", value: "5'11\" (180 cm)" },
                { label: "6'0\" (183 cm)", value: "6'0\" (183 cm)" },
                { label: "6'1\" (185 cm)", value: "6'1\" (185 cm)" },
                { label: "6'2\" (187 cm)", value: "6'2\" (187 cm)" },
                { label: "6'3\" (190 cm)", value: "6'3\" (190 cm)" },
                { label: "6'4\" (193 cm)", value: "6'4\" (193 cm)" },
                { label: "6'5\" (195 cm)", value: "6'5\" (195 cm)" },
                { label: "6'6\" (198 cm)", value: "6'6\" (198 cm)" },
                { label: "6'7\" (200 cm)", value: "6'7\" (200 cm)" },
                { label: "6'8\" (203 cm)", value: "6'8\" (203 cm)" },
                { label: "6'9\" (205 cm)", value: "6'9\" (205 cm)" },
                { label: "6'10\" (208 cm)", value: "6'10\" (208 cm)" },
                { label: "6'11\" (210 cm)" , value: "6'11\" (210 cm)" },
                { label: "7'0\" (213 cm)", value: "7'0\" (213 cm)" }
            ]}
        /> */}
        <View style={{height: 360, marginTop: 70, marginBottom: -64}}>
        <ScrollView
          indicatorStyle="white"
          style={{backgroundColor: 'white', height: 10}}>
        <ScrollPicker
        dataSource={[
                       '4\' 0\" (122 cm)',
                       '4\' 1\" (123 cm)',
                       '4\' 2\" (127 cm)',
                       '4\' 3\" (130 cm)',
                       '4\' 4\" (132 cm)',
                       '4\' 5\" (134 cm)',
                       '4\' 6\" (137 cm)',
                       '4\' 7\" (139 cm)',
                       '4\' 8\" (142 cm)',
                       '4\' 9\" (144 cm)',
                       '4\' 10\" (147 cm)',
                       '4\' 11\" (150 cm)',
                       '5\' 0\" (152 cm)',
                       '5\' 1\" (154 cm)',
                       '5\' 2\" (157 cm)',
                       '5\' 3\" (160 cm)',
                       '5\' 4\" (162 cm)',
                       '5\' 5\" (165 cm)',
                       '5\' 6\" (167 cm)',
                       '5\' 7\" (170 cm)',
                       '5\' 8\" (172 cm)',
                       '5\' 9\" (175 cm)',
                       '5\' 10\" (177 cm)',
                       '5\' 11\" (180 cm)',
                       '6\' 0\" (183 cm)',
                       '6\' 1\" (185 cm)',
                       '6\' 2\" (187 cm)',
                       '6\' 3\" (190 cm)',
                       '6\' 4\" (193 cm)',
                       '6\' 5\" (195 cm)',
                       '6\' 6\" (198 cm)',
                       '6\' 7\" (120 cm)',
                       '6\' 8\" (203 cm)',
                       '6\' 9\" (205 cm)',
                       '6\' 10\" (208 cm)',
                       '6\' 11\" (210 cm)',
                       '7\' 0\" (213 cm)',
                       '7\' 1\" (216 cm)',
                       '7\' 2\" (219 cm)',


                  ]}
                  selectedIndex={1}
                  renderItem={(data, index, isSelected) => {
                      //
                  }}
                  onValueChange={(data, selectedIndex) => {
                      //
                  }}
                  wrapperHeight={130}
                  wrapperWidth={220}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={40}
                  itemWidth={75}
                  highlightColor={'#65AEED'}
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


export default NewUserHeightComp;
